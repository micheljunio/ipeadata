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
import { Link } from "react-router-dom";

import {moduleGrid, moduleGraph} from "../../script/modulesSync.js"
        var serie;
        var text = "erro";
class Content extends Component {

    constructor() {
        super();
        this.renderTable = this.renderTable.bind(this);
        this.renderGraph = this.renderGraph.bind(this);
     
    }

    renderTable(){
        

        /*if (this.props.url.id == "macroeconomico") {                
            serie = this.props.seriemacro;            
            {moduleGrid(serie)}
        }
        if (this.props.url.id == "regional" ) {                
            serie = this.props.serieregional;            
            {moduleGrid(serie)}
        }
        if (this.props.url.id == "social" ) {                
            serie = this.props.seriesocial;            
            {moduleGrid(serie)}
        }   */
        if (this.props.url.id == "macroeconomico"){
            serie = this.props.serie1;

          
            
        }
        else{
            serie = this.props.serie2;
        }
        console.log(serie);
        return( <GridSerie serie = {serie} div={"Grid"}></GridSerie> );
        
     
    }

    renderGraph(){
        
    }

    componentWillMount() {
        
        /*
            serie = this.props.seriemacro;
        if (this.props.url.id == "macroeconomico") {            
        }*/
    
    }
    
    render() {

        if (this.props.url.id !== undefined) {
            text = this.props.url.id;
            if (this.props.url.submenu !== undefined) {
                text = this.props.url.submenu;
                if (this.props.url.submenu2 !== undefined) {
                    text = this.props.url.submenu2;
                }
            }
        }
    
    


        /*if (this.props.url.id == "regional") {            
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
        }*/
    /*}*/
        return (
            <div>
                <div>
                <Breadcrumb >
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
                </div>
                <h1>{text}</h1>
                 {this.renderTable()}
                
                
                <div className="row">
                    <div className="cols-sample-area" >
                        <div id="container"></div>
                       
                    </div>
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