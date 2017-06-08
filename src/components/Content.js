import React, { Component } from "react";
import Metadados from "./Metadados";
import Equipe from "./Equipe";
import Fontes from "./Fontes";
import Series from "./Series";
import DireitosUso from "./DireitosUso";

import { Breadcrumb } from "react-bootstrap";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import GridSerie from "./GridSerie";


import jsonQuery from 'json-query';

let order = 'desc';

  const selectRowProp = {
    mode: 'checkbox'

  };
class Content extends Component {

    handleBtnClick = () => {
    if (order === 'desc') {
      this.refs.table.handleSort('asc', 'name');
      order = 'asc';
    } else {
      this.refs.table.handleSort('desc', 'name');
      order = 'desc';
    }
  }
    render() {
        var serie = "erro"
        var text = "erro";

        if (this.props.url.id !== undefined) {
            text = this.props.url.id;
            serie = this.props.serie4;
            if (this.props.url.submenu !== undefined) {
                text = this.props.url.submenu;
                serie = this.props.serie4;
                if (this.props.url.submenu2 !== undefined) {
                    text = this.props.url.submenu2;
                    serie = this.props.serie4;
                }
            }
        }

    if (this.props.url.id !== undefined) {
        if (this.props.url.id == "macroeconomico") {            
            serie = this.props.seriemacro;
            if (this.props.url.submenu == "temas") {                
                if (this.props.url.submenu2 == "balanco-de-pagamentos") {
                    serie = this.props.serie1;            
                }
                if (this.props.url.submenu2 == "cambio") {
                    serie = this.props.serie2;            
                }
                if (this.props.url.submenu2 == "comercio-exterior") {
                    serie = this.props.serie3;
            
                }
            }
        }

        if (this.props.url.id == "regional") {            
            serie = this.props.serieregional;
            if (this.props.url.submenu == "temas") {                
                if (this.props.url.submenu2 == "balanco-de-pagamentos") {
                    serie = this.props.serie4;            
                }
                if (this.props.url.submenu2 == "cambio") {
                    serie = this.props.serie4;            
                }
                if (this.props.url.submenu2 == "comercio-exterior") {
                    serie = this.props.serie4;
            
                }
            }
        }

        if (this.props.url.id == "social") {            
            serie = this.props.seriesocial;
            if (this.props.url.submenu == "temas") {                
                if (this.props.url.submenu2 == "balanco-de-pagamentos") {
                    serie = this.props.serie4;            
                }
                if (this.props.url.submenu2 == "cambio") {
                    serie = this.props.serie4;            
                }
                if (this.props.url.submenu2 == "comercio-exterior") {
                    serie = this.props.serie4;
            
                }
            }
        }
    }
        return (
            <div>
                {/*      <GridSerie/>*/}
                <Breadcrumb>
                    <Breadcrumb.Item href="#">
                        {this.props.url.id}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        {this.props.url.submenu}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        {this.props.url.submenu2}
                    </Breadcrumb.Item>
                </Breadcrumb>

                <div className="tabelaseries" >
                    <BootstrapTable striped ref='table' data={ serie } selectRow={selectRowProp} exportCSV={true} search={true} multiColumnSearch={true} pagination>
                        <TableHeaderColumn dataField='nome' isKey={ true } dataSort={ true } >Nome</TableHeaderColumn>
                        <TableHeaderColumn dataField='unidade' dataSort={ true }>Unidade</TableHeaderColumn>
                        <TableHeaderColumn dataField='freq' dataSort={ true }>Frequencia</TableHeaderColumn>
                        <TableHeaderColumn dataField='periodo' dataSort={ true }>Perídodo</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        );
    }
}

export default Content;
/*
setState() {
        if (this.props.url.id !== undefined) {
            text = this.props.url.id;
            
            if (this.props.url.submenu !== undefined) {
                text = this.props.url.submenu;
            
                if (this.props.url.submenu2 !== undefined) {
                    text = this.props.url.submenu2;
            
                }
            }
        }

        if (this.props.url.id !== undefined) {
            if (this.props.url.id == "macroeconomico") {
                serie = this.props.seriemacro;
                return (this.serie);
                if (this.props.url.submenu == "temas") {
                    if (this.props.url.submenu2 == "balanco-de-pagamentos") {
                        serie = this.props.serie1;
                        return (this.serie);
                    }
                    if (this.props.url.submenu2 == "cambio") {
                        serie = this.props.serie2;
                        return (this.serie);
                    }
                    if (this.props.url.submenu2 == "comercio-exterior") {
                        serie = this.props.serie3;
                        return (this.serie);
                    }
                }
            }

            if (this.props.url.id == "regional") {
                serie = this.props.serieregional;
                if (this.props.url.submenu == "temas") {
                    if (this.props.url.submenu2 == "balanco-de-pagamentos") {
                        serie = this.props.serie4;
                        return (this.serie);
                    }
                    if (this.props.url.submenu2 == "cambio") {
                        serie = this.props.serie4;
                        return (this.serie);
                    }
                    if (this.props.url.submenu2 == "comercio-exterior") {
                        serie = this.props.serie4;
                        return (this.serie);
                    }
                }
            }

            if (this.props.url.id == "social") {
                serie = this.props.seriesocial;
                return (this.serie);
                if (this.props.url.submenu == "temas") {
                    if (this.props.url.submenu2 == "balanco-de-pagamentos") {
                        serie = this.props.serie4;
                        return (this.serie);
                    }
                    if (this.props.url.submenu2 == "cambio") {
                        serie = this.props.serie4;
                        return (this.serie);
                    }
                    if (this.props.url.submenu2 == "comercio-exterior") {
                        serie = this.props.serie4;
                        return (this.serie);
                    }
                }
            }
        }
    }*/


        //console.log(this.props.url)
        /*{this.props.url === "Equipe" && <Equipe />}
                {this.props.url === "Metadados" && <Metadados />}
                {this.props.url === "fontes" && <Fontes />}
                {this.props.url === "direitos" && <DireitosUso />}
                {this.props.url === "macroeconomico" && <Series />}*/
/*
                function Get(yourUrl) {
                    var Httpreq = new XMLHttpRequest(); // a new request
                    Httpreq.open("GET", yourUrl, false);
                    Httpreq.send(null);
                    return Httpreq.responseText;
                }
                var json_obj = JSON.parse(Get("http://www.ipeadata.gov.br/api/odata4/Paises"));
                var result = jsonQuery('value[*PAICODIGO=ZAF].PAINOME',{
                    data: json_obj
                });
                console.log(result)*/