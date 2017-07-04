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

    getRowSelected: function () {
        var grid = $("#Grid").data("ejGrid");

        if (grid.getSelectedRecords().length)
            return grid.getSelectedRecords()[0].SERCODIGO;
        else
            return -1;

    },


    moduleGraph: function (div, serie, nameSerie) {

        var jsonQ=require("jsonq");
        var obj = jsonQ.order(serie);
        console.log(obj);

        /*function sortByKey(array, key) {
            return array.sort(function (a, b) {
                var x = a[key]; var y = b[key];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        };
        serie = sortByKey(serie, 'TERCODIGO');

        var pontos = {
            points: [],
            name: ""
        };
        var serieJson = [];
        var flag = "";
        var y = -1;
        for (var i in serie) {
            var item = serie[i].TERCODIGO;
            if(flag != item){                
                pontos.name = item;
                serieJson.push({
                    "points": [],
                    "name": item
                });
                y++;
            }
            serieJson[y].points.push({
                "x":serie[i].VALDATA,
                "y":serie[i].VALVALOR
            })
            flag = item;            
        }

        serieJson = sortByKey(serieJson, 'points.x');*/

        $("#" + div).ejChart(
            {
                //Initializing Primary X Axis	
                primaryXAxis:
                {
                    range: { min: 1980, max: 2011, interval: 1 },
                    title: { text: 'Year' },
                    valueType: 'category'
                },

                //Initializing Primary Y Axis	
                primaryYAxis:
                {
                    labelFormat: "{value}%",
                    title: { text: 'Efficiency' },
                    range: { min: 0, max: 60, interval: 6 }
                },

                //Initializing Common Properties for all the series
                commonSeriesOptions:
                {
                    type: 'line', enableAnimation: true,
                    tooltip: { visible: true, template: 'Tooltip' },
                    /*marker:
                    {
                        shape: 'circle',
                        size:
                        {
                            height: 10, width: 10
                        },
                        visible: true
                    },*/
                    border: { width: 2 }
                },

                //Initializing Series				
                series:
                [
                    {
                        points: [{ x: 2005, y: 28 }, { x: 2006, y: 25 }, { x: 2007, y: 26 }, { x: 2008, y: 27 },
                        { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }],
                        name: 'India'
                    },
                    {
                        points: [{ x: 2005, y: 31 }, { x: 2006, y: 28 }, { x: 2007, y: 30 }, { x: 2008, y: 36 },
                        { x: 2009, y: 36 }, { x: 2010, y: 39 }, { x: 2011, y: 37 }],
                        name: 'Germany'
                    },
                    {
                        points: [{ x: 2005, y: 36 }, { x: 2006, y: 32 }, { x: 2007, y: 34 }, { x: 2008, y: 41 },
                        { x: 2009, y: 42 }, { x: 2010, y: 42 }, { x: 2011, y: 43 }],
                        name: 'England'
                    },
                    {
                        points: [{ x: 2005, y: 39 }, { x: 2006, y: 36 }, { x: 2007, y: 40 }, { x: 2008, y: 44 },
                        { x: 2009, y: 45 }, { x: 2010, y: 48 }, { x: 2011, y: 46 }],
                        name: 'France'
                    }
                ],
                isResponsive: true,
                load: "loadTheme",
                title: { text: nameSerie },
                size: { height: "600" },
                legend: { visible: true }
            });
    }
}