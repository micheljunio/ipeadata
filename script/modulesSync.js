module.exports = {

    moduleGrid: function (data, div, columns, metaConfigs) {
        metaConfigs["dataSource"] = data;
        metaConfigs["columns"] = columns;
        console.log(columns);
        console.log("Serie na grid:");
        console.log(data);
        if ($("#" + div).data("ejGrid"))
            $("#" + div).ejGrid("destroy");
        $("#" + div).ejGrid(metaConfigs);
    },

    filteredGrid: function (serie, ter, abrang, inicio, fim) {
        var datainicio = inicio, datafim = fim;
        var jsonQ = require("jsonq");
        var obj = jsonQ.order(serie.value);
        var auxAbrang = "";
        console.log(obj);
        var json = [];
        for (var key in obj) {
            for (keyy in obj[key]) {
                auxAbrang = obj[key].TERCODIGO;
                if (abrang == -1)
                    auxAbrang = abrang;
                if (obj[key][keyy] == ter && auxAbrang == abrang) {
                    var iData = "";
                    if (datafim > 0) {
                        var iData = datafim - datainicio;
                        for (var i = 0; iData >= i; i++) {
                            var data = obj[key].VALDATA[0] + obj[key].VALDATA[1] + obj[key].VALDATA[2] + obj[key].VALDATA[3];
                            if (data == (datainicio + i)) {
                                json.push(obj[key]);
                            }
                        }
                    }
                    else {
                        json.push(obj[key]);
                    }
                }
            }
        }
        return json;
    },
    //Função responsável para idendificar o linha da Grid que foi selecionada
    getRowSelected: function () {
        var grid = $("#Grid").data("ejGrid");

        if (grid.getSelectedRecords().length)
            return grid.getSelectedRecords()[0].SERCODIGO;
        else
            return -1;
    },

    moduleGraph: function (div, serie, nameSerie, metaConfigs) {
        metaConfigs["series"] = serie;
        metaConfigs["title"] = { text: nameSerie },
            metaConfigs["primaryXAxis"] = { title: { text: 'Ano' } },
            metaConfigs["primaryYAxis"] = { title: { text: nameSerie } };
        $("#" + div).ejChart(metaConfigs);
    },

    //Funcao responsavel para criar  a legendas da coluna de forma dinamica

    moduleGraphJson: function (serie) {
        var jsonQ = require("jsonq");
        var obj = jsonQ.order(serie);

        var serieJson = [];

        for (var i in obj) {
            var item = obj[i].TERCODIGO;
            if (item == "") {
                item = obj[i].SERCODIGO;
            };
            var nameSerie = jsonQ(serieJson),
                name = nameSerie.find('name');
            var index = name.index(function () {
                return this == item;
            });
            if (index == -1) {
                serieJson.push({
                    "name": item,
                    "points": [],
                    tooltip: {
                        visible: true,
                        format: "#point.x# : #point.y#"
                    }
                });
            }
        }
        for (var i in obj) {
            var item = obj[i].TERCODIGO;
            if (item == "") {
                item = obj[i].SERCODIGO;
            };
            var nameSerie = jsonQ(serieJson),
                name = nameSerie.find('name');
            var index = name.index(function () {
                return this == item;
            });
            serieJson[index].points.push({
                "x": parseInt(obj[i].VALDATA[0] + obj[i].VALDATA[1] + obj[i].VALDATA[2] + obj[i].VALDATA[3]),
                "y": obj[i].VALVALOR
            });
        }
        return serieJson;
    },

    moduleGridJson: function (serie, territorio) {
        var jsonQ = require("jsonq");
        var obj = jsonQ.order(serie);
        ter = territorio;

        for (var i in obj) {
            for (var j in ter) {
                if ((obj[i].TERCODIGO) == (ter[j].ID)) {
                    obj[i].TERCODIGO = ter[j].Nome;
                }
            }
        }

        var serieJson = [];
        for (var i in obj) {
            var item = obj[i].TERCODIGO;
            if (item == "") {
                item = obj[i].SERCODIGO;
            };
            let nameSerie = jsonQ(serieJson),
                name = nameSerie.find('TERCODIGO');
            var index = name.index(function () {
                return this == item;
            });
            if (index == -1) {
                serieJson.push({
                    "SERCODIGO": obj[i].SERCODIGO,
                    "NIVNOME": obj[i].NIVNOME,
                    "TERCODIGO": item
                });
            }

        }
        for (var i in obj) {
            var item = obj[i].TERCODIGO;
            if (item == "") {
                item = obj[i].SERCODIGO;
            };
            let nameSerie = jsonQ(serieJson),
                name = nameSerie.find('TERCODIGO');
            var index = name.index(function () {
                return this == item;
            });
            if (obj[i].VALDATA != undefined) {
                var ano = (obj[i].VALDATA[0] + obj[i].VALDATA[1] + obj[i].VALDATA[2] + obj[i].VALDATA[3] + obj[i].VALDATA[4] + obj[i].VALDATA[5] + obj[i].VALDATA[6]);
                serieJson[index][ano] = obj[i].VALVALOR;
            }
            else {
                serieJson = serie;
            }
        }
        return serieJson;
    },

    moduleColumnJson: function (serie, anoInicio, anoFim, codigosTemporais, periodo) {
        var jsonQ = require("jsonq");
        var obj = jsonQ.order(serie);
        var serieJson = [];         
        console.log(codigosTemporais["Semestral"]);
        if(serie[0].TERCODIGO !== ""){
            serieJson.push({
            field: "TERCODIGO",
            headerText: "Nível Territorial",
            width: 140
            });
        }
        for (var i in obj) {
            var data = (obj[i].VALDATA[0] + obj[i].VALDATA[1] + obj[i].VALDATA[2] + obj[i].VALDATA[3] + obj[i].VALDATA[4] + obj[i].VALDATA[5] + obj[i].VALDATA[6]);
            var dataAux = parseInt(obj[i].VALDATA[0] + obj[i].VALDATA[1] + obj[i].VALDATA[2] + obj[i].VALDATA[3]);
            if (dataAux >= anoInicio && dataAux <= anoFim) {
                var item = data;
                var nameSerie = jsonQ(serieJson),
                    name = nameSerie.find('field');
                var index = name.index(function () {
                    return this == "" + item + "";
                });
                if (index == -1) {
                    var dataTipo = (obj[i].VALDATA[5] + obj[i].VALDATA[6]);
                    var dataAno = (obj[i].VALDATA[0] + obj[i].VALDATA[1] + obj[i].VALDATA[2] + obj[i].VALDATA[3] );
                    if(periodo === "Mensal"){
                       var periodicidade = (obj[i].VALDATA[5] + obj[i].VALDATA[6]);
                    }
                    else{
                       var periodicidade = codigosTemporais[periodo].tipo[dataTipo];
                    }
                    serieJson.push({
                        field: "" + data + "",
                        headerText: "" + dataAno + " " + periodicidade + "",
                        format: "{0:n2}",
                        width: 100
                    });
                }
            }
        }
        console.log(serieJson);
        return serieJson;
    },

    moduleDownloadCSV1: function (div) {
        var gridObj = $("#"+div).data("ejGrid");
        var serie = gridObj.getCurrentViewData(); 
        var csv = Papa.unparse(serie);
        var data = new Blob([csv]);
        var a2 = document.getElementById('a2');
        a2.href = URL.createObjectURL(data);
    },

    moduleDownloadExcel: function (div) {
        var gridObj = $("#"+div).data("ejGrid");
        var serie = gridObj.getCurrentViewData();
        var xls = Papa.unparse(serie);
        while (xls.includes(',')) {
            xls = xls.replace(',', '; ');
        }
        var data = new Blob([xls]);
        var a = document.getElementById('a');
        a.href = URL.createObjectURL(data);

    },
    moduleDownloadZip: function (div) {
        var gridObj = $("#"+div).data("ejGrid");
        var serie = gridObj.getCurrentViewData();
        var JSZip = require("jszip");
        var FileSaver = require('file-saver');
        var csv = Papa.unparse(serie);
        while (csv.includes(',')) {
            csv = csv.replace(',', '; ');
        }
        var zip = new JSZip();
        zip.file("ipea.csv", csv);
        var blob = new Blob([csv], { type: "text/plain;charset=utf-8" });
        zip.generateAsync({ type: "blob" })
            .then(function (content) {
                FileSaver.saveAs(content, "ipea.zip");
            });
    },

    moduleDownloadCSV2: function (div) {
        var gridObj = $("#"+div).data("ejGrid");
        var serie = gridObj.getCurrentViewData();
        var csv = Papa.unparse(serie);
        while (csv.includes(',')) {
            csv = csv.replace(',', '; ');
        }
        var data = new Blob([csv]);
        var a3 = document.getElementById('a3');
        a3.href = URL.createObjectURL(data);
    },
}