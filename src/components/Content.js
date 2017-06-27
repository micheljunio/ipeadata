import React, { Component } from "react";
import { Breadcrumb, Panel, Jumbotron, Tabs, Tab } from "react-bootstrap";
import GridSerie from "./GridSerie";
import GraphSerie from "./GraphSerie";
import MapaSerie from "./MapaSerie";
import { metadadosSeries } from "../data/metadadosSeries";
import {metadados} from "../data/metados";
import {metadadoGeral} from "../data/metadadoGeral";
import {metadadoSerieGeral} from "../data/metadadoSerieGeral";

//css
import "../css/content.css";

import img from "../imgs/Screenshot_2.png";

var serie;
var text = "";
var json_obj2 = "";
var serieName = "";

class Content extends Component {
    constructor() {
        super();
        this.renderTable = this.renderTable.bind(this);
        this.renderGraph = this.renderGraph.bind(this);
        this.renderMap = this.renderMap.bind(this);
        this.renderDescricao = this.renderDescricao.bind(this);
        this.handleSelect = this.handleSelect.bind(this);  
        this.getValues = this.getValues.bind(this);
        this.renderComponents = this.renderComponents.bind(this);     
        this.state = {
            key: 1
        };
    }

    handleSelect(key) {
        /*alert("selected " + key);*/
        this.setState({ key });
    }

    getValues(){
        function Get(yourUrl) {
            var Httpreq = new XMLHttpRequest(); // a new request
            Httpreq.open("GET", yourUrl, false);
            Httpreq.send(null);
            return Httpreq.responseText;
        }
        var string = "http://www.ipeadata.gov.br/api/odata4/Metadados('" + this.props.url.id + "')/Valores";        
        json_obj2 = JSON.parse(Get(string));
        console.log(json_obj2.value);
        if(json_obj2.value.length == 0){
            json_obj2 = metadados;
        }    
        return json_obj2;   
    }
    
    renderTable(jsonView) {  

        if (this.props.url.id == undefined) {
            return (
                <Jumbotron>
                    {" "}
                    <img alt="imagem" className="imageminicial" src={img} />
                </Jumbotron>
            );
        }
        for (var key in metadadosSeries) {
            if (metadadosSeries.hasOwnProperty(key)) {
                if (metadadosSeries[key].var == this.props.url.id) {
                    serie = this.props[metadadosSeries[key].serie];
                }
            }
        }
        var columns = metadadoSerieGeral;
        if(jsonView == metadados){
            columns = metadadoGeral;
        }
        return <GridSerie serie={jsonView.value} div={"Grid"} columns={columns} url={this.props.url.id} />;
    }

    renderGraph(jsonView) {
        return <GraphSerie div={"container"} serie={jsonView.value} serieName = {serieName} />;
    }

    renderDescricao(jsonView){
        var descr = "";
        console.log(jsonView.value);
        for (var key in metadados.value) {
            if (metadados.value[key].SERCODIGO == this.props.url.id) {
                descr = metadados.value[key].SERCOMENTARIO;
                serieName = metadados.value[key].SERNOME;
            }
        }
        return (descr);
    }

    renderMap() {
        return <MapaSerie />;
    }

    renderComponents(){

    }
    render() {
        var jsonView = this.getValues();
        if(json_obj2 == metadados){
            return  (
                <div>
                    {this.renderTable(json_obj2)}
                </div>
                );
        }
        else{
            
        if (this.props.url.id !== undefined) {
            text = this.props.url.id;
            if (this.props.url.submenu !== undefined) {
                text = this.props.url.submenu;
                if (this.props.url.submenu2 !== undefined) {
                    text = this.props.url.submenu2;
                }
            }
        }

        var menu = this.props.url.id;
        if (this.props.url.id !== "macroeconomico")
            if (this.props.url.id !== "regional")
                if (this.props.url.id !== "social") {
                    menu = "macroeconomico";
                }

        var descriçãocolor = "";
        if (this.props.url.id == "macroeconomico") 
            descriçãocolor = "primary"
        else
            if (this.props.url.id == "regional") 
                descriçãocolor = "success"
            else
                if (this.props.url.id == "social") 
                    descriçãocolor = "danger"
                else
                    descriçãocolor = "primary"

        return (
            <div>
                <div className="breadcrumb">
                    <Breadcrumb className={"breadcrumb-" + menu}>
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

                <div className="descrição">
                    <Panel bsStyle={descriçãocolor} header={text}>
                        <h3>Descrição</h3>
                        <p>{this.renderDescricao(jsonView)}</p>
                    </Panel>
                </div>

                <div className="tabs">
                    <Tabs
                        activeKey={this.state.key}
                        onSelect={this.handleSelect}
                        animation={false}
                        id="controlled-tab-example"
                    >
                        <Tab eventKey={1} title="Tabela">
                            {this.renderTable(json_obj2)}
                        </Tab>
                        <Tab eventKey={2} title="Grafico">
                            {this.renderGraph(json_obj2)}
                        </Tab>
                        <Tab eventKey={3} title="Mapa">
                            {this.renderMap()}
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
        }
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