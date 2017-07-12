module.exports = {
    moduleGrid: function (data, div, columns) {
        console.log(columns);
        console.log("Serie na grid:");
        console.log(data);
        window.baseurl = "http://js.syncfusion.com/ExportingServices/api/";
        if ($("#" + div).data("ejGrid"))
            $("#" + div).ejGrid("destroy");
        $("#" + div).ejGrid({
            dataSource: data,
            exportToExcelAction: "http://js.syncfusion.com/ExportingServices/api/JSGridExport/ExcelExport",
            toolbarSettings: { showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.ExcelExport] },
            allowPaging: true,
            allowSorting: true,
            allowGrouping: false,
            allowFiltering: true,
            allowReordering: true,
            allowMultiSorting: true,
            allowResizeToFit: true,
            filterSettings: { filterType: "excel" },
            rowSelected: "window.rowSelected",
            columns: columns
        });
        console.log("montando grid");
        rowSelected = function (args) {
            //console.log(args.data.id)
        }
    },
 //Função responsável para idendificar o linha da Grid que foi selecionada
    getRowSelected: function () {
        var grid = $("#Grid").data("ejGrid");

        if (grid.getSelectedRecords().length)
            return grid.getSelectedRecords()[0].SERCODIGO;
        else
            return -1;

    },

    moduleGraph: function (div, serie, nameSerie) {
        $("#" + div).ejChart({
            theme: "gradientlight",
            primaryXAxis: {
                title: { text: 'Ano' }
            },
            primaryYAxis: {
                title: { text: nameSerie }
            },
            commonSeriesOptions: {
                type: 'line',
                enableAnimation: true,
                border: { width: 2 }
            },
            series: serie,
            isResponsive: true,
            load: "loadTheme",
            title: { text: nameSerie },
            legend: { visible: true },
            zooming: {
                enable: true,
                type: 'xy',
                enableMouseWheel: true,
                enableScrollbar: true,
                enableDeferredZoom: true
            },
            crosshair: {
                visible: true,
                type: 'trackball',
                trackballTooltipSettings: {
                    mode: 'grouping',
                    border: {
                        width: 1,
                        color: 'grey'
                    },
                    rx: 3,
                    ry: 3,
                    fill: 'whitesmoke'
                }
            }
        });
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
            let nameSerie = jsonQ(serieJson),
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
            let nameSerie = jsonQ(serieJson),
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

    moduleGridJson: function (serie) {
        var jsonQ = require("jsonq");
        var obj = jsonQ.order(serie);

        var serieJson = [];
        console.log('teste');
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
            var ano = (obj[i].VALDATA[0] + obj[i].VALDATA[1] + obj[i].VALDATA[2] + obj[i].VALDATA[3]+ obj[i].VALDATA[4] + obj[i].VALDATA[5] + obj[i].VALDATA[6]);
            serieJson[index][ano] = obj[i].VALVALOR;
        }
        return serieJson;
    },

    moduleColumnJson: function (serie) {
        var jsonQ = require("jsonq");
        var obj = jsonQ.order(serie);

        var serieJson = [];
        serieJson.push({
                field: "SERCODIGO", 
                headerText: "Série"
                });
        serieJson.push({
                field: "NIVNOME", 
                headerText: "Nível Geográfico"
                });
        serieJson.push({
                field: "TERCODIGO", 
                headerText: "Código Territorial"
                });

        for (var i in obj) {
            var data = (obj[i].VALDATA[0] + obj[i].VALDATA[1] + obj[i].VALDATA[2] + obj[i].VALDATA[3] + obj[i].VALDATA[4] + obj[i].VALDATA[5] + obj[i].VALDATA[6]); 
            var item = data;
            var nameSerie = jsonQ(serieJson),
                name = nameSerie.find('field');
            var index = name.index(function () {
                return this == ""+item+"";
            });
            if (index == -1) {
                serieJson.push({
                    field: ""+data+"",
                    headerText: ""+data+"",
                    format: "{0:n2}",
                    width: 100
                });
            }
        }
        console.log(serieJson);
        return serieJson;
    }
}