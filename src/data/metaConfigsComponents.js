export 
var metaConfigs = 
	{
		serie: "xxx",
		grid: {
			exportToExcelAction: "http://js.syncfusion.com/ExportingServices/api/JSGridExport/ExcelExport",
			//toolbarSettings: { showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.ExcelExport] },
			allowPaging: true,
			allowSorting: true,
			allowGrouping: false,
			allowFiltering: true,
			allowReordering: true,
			allowMultiSorting: true,
			allowResizeToFit: true,
            dataSource: "dataManager",
		    enableResponsiveRow: false,
			filterSettings: { filterType: "excel" },
			rowSelected: "window.rowSelected"
		},

		graph: {			
            theme: "gradientlight",            
            commonSeriesOptions: {
                type: 'line',
                enableAnimation: true,
                border: { width: 2 }
            },
            isResponsive: true,
            load: "loadTheme",            
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
		},

		map: {}
	}

