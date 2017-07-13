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
        metaConfigs["primaryXAxis"] =  {title: { text: 'Ano' }},
        metaConfigs["primaryYAxis"] = {title: { text: nameSerie }};
        $("#" + div).ejChart(metaConfigs);
    },

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
            if(obj[i].VALDATA != undefined){
                var ano = (obj[i].VALDATA[0] + obj[i].VALDATA[1] + obj[i].VALDATA[2] + obj[i].VALDATA[3]+ obj[i].VALDATA[4] + obj[i].VALDATA[5] + obj[i].VALDATA[6]);
                serieJson[index][ano] = obj[i].VALVALOR;
            }
            else{
                serieJson = serie;
            }
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