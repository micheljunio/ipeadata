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

        var serieJson = [];

        for (var i in obj) {
            var item = obj[i].TERCODIGO;
            if(item == ""){
                item = obj[i].SERCODIGO;
            };
            let nameSerie = jsonQ(serieJson),
                name = nameSerie.find('name');
            var index = name.index(function () {
                            return this == item;
                        });
            if(index == -1){      
                serieJson.push({
                    "name": item,
                    "points": []
                    
                });
            }    
        }
        for (var i in obj){
            var item = obj[i].TERCODIGO;
            if(item == ""){
                item = obj[i].SERCODIGO;
            };
            let nameSerie = jsonQ(serieJson),
                name = nameSerie.find('name');
            var index = name.index(function () {
                            return this == item;
                        });
            serieJson[index].points.push({
                "x": parseInt(obj[i].VALDATA[0]+obj[i].VALDATA[1]+obj[i].VALDATA[2]+obj[i].VALDATA[3]) ,
                "y": obj[i].VALVALOR
            });

        }
    
        $("#" + div).ejChart(
            {	
		    primaryXAxis:
            {
                title: { text: 'Year' },
				valueType:'category'
            },		
            primaryYAxis:
            {
                title: { text: nameSerie}
            },	
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
                series: serieJson,
                isResponsive: true,
                load: "loadTheme",
                title: { text: nameSerie },
                size: { height: "600" },
                legend: { visible: true }
            });
    }
}