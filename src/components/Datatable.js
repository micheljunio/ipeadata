import React, { Component } from "react";
/*import $ from 'jquery';*/
// import yadcf from 'yadcf-npm';
/*import { Grid } from "syncfusion-javascript";*/
/*import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';      */

var $       = require( 'jquery' );
var dt      = require( 'datatables.net-bs' );
var buttons = require( 'datatables.net-buttons-bs' );
var yadcf   = require( 'yadcf' );

require( 'datatables.net-buttons/js/buttons.colVis.js' ); // Column visibility
require( 'datatables.net-buttons/js/buttons.html5.js' );  // HTML 5 file export
require( 'datatables.net-buttons/js/buttons.flash.js' );  // Flash file export
require( 'datatables.net-buttons/js/buttons.print.js' );  // Print view button


class Datatable extends Component {
/*  
  componentDidMount() {
    
            var oTable = $('#tabeladados').DataTable({
                colReorder: true,
                language : {
                    "url": "http://cdn.datatables.net/plug-ins/1.10.12/i18n/Spanish.json"
                },              
            });
  }

  render() {

    /*
        function Get(yourUrl) {
            var Httpreq = new XMLHttpRequest(); // a new request
            Httpreq.open("GET", yourUrl, false);
            Httpreq.send(null);
            return Httpreq.responseText;
        }*/
    /*var shipDetails = [
      { Name: "Hanari Carnes", City: "Brazil" },
      { Name: "Split Rail Beer & Ale", City: "USA" },
      { Name: "Ricardo Adocicados", City: "Brazil" }
    ];
    return (
      
        <table id="tabeladados" cellpadding="0" cellspacing="0" border="0" class="table table-striped">
                    <thead>
                        <tr>
                            <th>RFCs</th>
                            <th>Project</th>
                            <th>RFC status</th>
                            <th>Description</th>
                            <th>Bussiness aplication</th>
                            <th>Test manager</th>
                            <th>Remedy</th>
                            <th>Client</th>
                            <th>Test status</th>
                            <th>VºBº status</th>
                            <th>Init date</th>
                            <th>End date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>RFC0000001</td>
                            <td>PR00000001</td>
                            <td>Rejected</td>
                            <td>Description001</td>
                            <td>BA0001</td>
                            <td>TM0001</td>
                            <td>PR0001</td>
                            <td>Client0001</td>
                            <td>N/A Testing</td>
                            <td>Pending Request</td>
                            <td>23/11/2016</td>
                            <td>28/11/2016</td>
                        </tr>
                        <tr>
                            <td>RFC0000002</td>
                            <td>PR00000002</td>
                            <td>Acepted</td>
                            <td>Description0002</td>
                            <td>BA0002</td>
                            <td>TM0002</td>
                            <td>PR0002</td>
                            <td>Client0002</td>
                            <td>N/A Testing</td>
                            <td>Pending Request</td>
                            <td>24/11/2016</td>
                            <td>29/11/2016</td>
                        </tr>
                        <tr>
                            <td>RFC0000003</td>
                            <td>PR00000003</td>
                            <td>Acepted</td>
                            <td>Description0003</td>
                            <td>BA0003</td>
                            <td>TM0003</td>
                            <td>PR0003</td>
                            <td>Client0003</td>
                            <td>N/A Testing</td>
                            <td>Pending Request</td>
                            <td>25/11/2016</td>
                            <td>30/11/2016</td>
                        </tr>
                        <tr>
                            <td>RFC0000004</td>
                            <td>PR00000004</td>
                            <td>Acepted</td>
                            <td>Description0004</td>
                            <td>BA0004</td>
                            <td>TM0004</td>
                            <td>PR0004</td>
                            <td>Client0004</td>
                            <td>N/A Testing</td>
                            <td>Pending Request</td>
                            <td>26/11/2016</td>
                            <td>01/12/2016</td>
                        </tr>
                        <tr>
                            <td>RFC0000005</td>
                            <td>PR00000005</td>
                            <td>Acepted</td>
                            <td>Description0005</td>
                            <td>BA0005</td>
                            <td>TM0005</td>
                            <td>PR0005</td>
                            <td>Client0005</td>
                            <td>N/A Testing</td>
                            <td>Pending Request</td>
                            <td>27/11/2016</td>
                            <td>02/12/2016</td>
                        </tr>                                                

                    </tbody>
                </table>
      
      /*  var json_obj = JSON.parse(Get("http://www.ipeadata.gov.br/api/odata4/Paises"));
      <BootstrapTable data={ json_obj.value }>
        <TableHeaderColumn dataField='PAICODIGO' isKey>Código</TableHeaderColumn>
        <TableHeaderColumn dataField='PAINOME'>Nome</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}*/

  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      data: [{index: 1, name: 'Joe'}, {index: 2, name: 'Benny'}]
    };
  }


  componentDidMount() {
    console.log('componentDidMount');
    var self = this;

    var table = $('#dt');
    console.log('table', table);

    /*var yadcf = $('#dt');
    console.log('table', table);*/



    table.DataTable();
            /*yadcf.init(table, [
            {
                column_number: 0,
                    filter_type: "multi_select",
                    select_type: 'select2',
                }, {
                    column_number: 1,
                    filter_type: "multi_select",
                    select_type: 'select2',
                    column_data_type: "html",
                    html_data_type: "text",
                }]);*/

    /*table.DataTable({
      dom: '<"html5buttons"B>lTfgitp',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ],
      "pagingType": "numbers",
      "bAutoWidth": false,
      "bDestroy": true,
      "fnDrawCallback": function () {
        self.forceUpdate();
      }
    });*/
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  /** UPDATING TABLE DATA

   // When state data populating DataTable must change,
   // use the table.destroy() function prior to setting the state
   // (or in react lifecycle method such as componentWillReceiveProps should work)
   // then recreated the datatable after that returns.

   // In my case the data doesn't change that often and there is no polling from the browser.
   // ref: https://gist.github.com/checkraiser/8555856, https://gist.github.com/checkraiser/8555856#gistcomment-1748210

   //i.e.:

   loadItemsFromServer: function() {
    $.ajax({
        url: this.props.l_url + this.state.session_id,
        dataType: "json",
        type: "POST",
        cache: false,
        success: function(data) {
            $("#dataTables-example").DataTable().destroy();
            this.setState({ data: data });
            $("#dataTables-example").dataTable();
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
};

   **/

  render() {
    console.log('render');

    var x = this.state.data.map(function (d, index) {
      return <tr>
        <td>{index + 1}</td>
        <td>{d.name}</td>
      </tr>
    });

    return (
      <div className="table-responsive">
        <h4>DataTable</h4>
        <table className="table table-bordered" id="dt">
          <thead>
          <tr className="success">
            <td>Index</td>
            <td>Name</td>
          </tr>
          </thead>
          <tbody>
          { x }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Datatable;