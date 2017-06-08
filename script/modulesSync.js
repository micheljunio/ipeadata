module.exports = {
    
    moduleGrid: function (data) {
        $("#Grid").ejGrid({
            dataSource: ej.DataManager(data),
            allowPaging: true,
            allowSorting: true,
            allowGrouping: false,
            allowFiltering: true,
            allowReordering: true,
            allowMultiSorting: true,
            filterSettings: {filterType: "excel"},
            toolbarSettings: {showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.ExcelExport, ej.Grid.ToolBarItems.WordExport, ej.Grid.ToolBarItems.PdfExport]},
            columns: [
                {type: "checkbox", width: 10},
                {field: "nome",  headerText: "Nome", width: 100, textAlign: ej.TextAlign.Left},
                {field: "unidade", headerText: "Unidade", width: 30 , textAlign: ej.TextAlign.Left},
                {field: "freq", headerText: "Frequencia", width: 50, textAlign: ej.TextAlign.Left},
                {field: "periodo",  headerText: "Período", width: 50, textAlign: ej.TextAlign.Left}
                
            ],
            /*toolbarClick: function (e) {
                this.exportGrid = this["export"];
                if (e.itemName == "Excel Export") {
                    this.exportGrid(window.baseurl + 'api/grid/ExcelExport');
                    e.cancel = true;
                    alert("dfa");
                } else if (e.itemName == "Word Export") {
                    this.exportGrid(window.baseurl + 'api/grid/WordExport');
                    e.cancel = true;
                } else if (e.itemName == "PDF Export") {
                    this.exportGrid(window.baseurl + 'api/grid/PdfExport');
                    e.cancel = true;
                }
            },*/
        });
    },
    
  moduleGraph: function () {
    
        $(function ()
        {
            $("#container").ejChart(
                    {
                        //Initializing Primary X Axis	
                        primaryXAxis:
                                {
                                    range: {min: 2005, max: 2011, interval: 1},
                                    title: {text: 'Year'},
                                    valueType: 'category'
                                },

                        //Initializing Primary Y Axis	
                        primaryYAxis:
                                {
                                    labelFormat: "{value}%",
                                    title: {text: 'Efficiency'},
                                    range: {min: 25, max: 50, interval: 5}
                                },

                        //Initializing Common Properties for all the series
                        commonSeriesOptions:
                                {
                                    type: 'line', enableAnimation: true,
                                    tooltip: {visible: true, template: 'Tooltip'},
                                    marker:
                                            {
                                                shape: 'circle',
                                                size:
                                                        {
                                                            height: 10, width: 10
                                                        },
                                                visible: true
                                            },
                                    border: {width: 2}
                                },

                        //Initializing Series				
                        series:
                                [
                                    {
                                        points: [{x: 2005, y: 28}, {x: 2006, y: 25}, {x: 2007, y: 26}, {x: 2008, y: 27},
                                            {x: 2009, y: 32}, {x: 2010, y: 35}, {x: 2011, y: 30}],
                                        name: 'India'
                                    },
                                    {
                                        points: [{x: 2005, y: 31}, {x: 2006, y: 28}, {x: 2007, y: 30}, {x: 2008, y: 36},
                                            {x: 2009, y: 36}, {x: 2010, y: 39}, {x: 2011, y: 37}],
                                        name: 'Germany'
                                    },
                                    {
                                        points: [{x: 2005, y: 36}, {x: 2006, y: 32}, {x: 2007, y: 34}, {x: 2008, y: 41},
                                            {x: 2009, y: 42}, {x: 2010, y: 42}, {x: 2011, y: 43}],
                                        name: 'England'
                                    },
                                    {
                                        points: [{x: 2005, y: 39}, {x: 2006, y: 36}, {x: 2007, y: 40}, {x: 2008, y: 44},
                                            {x: 2009, y: 45}, {x: 2010, y: 48}, {x: 2011, y: 46}],
                                        name: 'France'
                                    }
                                ],
                        isResponsive: true,
                        load: "loadTheme",
                        title: {text: 'Efficiency of oil-fired power production'},
                        size: {height: "600"},
                        legend: {visible: true}
                    });
        });
   }
}