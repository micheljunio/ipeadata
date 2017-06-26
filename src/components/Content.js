import React, { Component } from "react";
import { Breadcrumb, Panel, Jumbotron, Tabs, Tab } from "react-bootstrap";
import GridSerie from "./GridSerie";
import GraphSerie from "./GraphSerie";
import MapaSerie from "./MapaSerie";
import { metadadosSeries } from "../data/metadadosSeries";

//css
import "../css/content.css";

import img from "../imgs/Screenshot_2.png";

var serie;
var text = "";

class Content extends Component {
    constructor() {
        super();
        this.renderTable = this.renderTable.bind(this);
        this.renderGraph = this.renderGraph.bind(this);
        this.renderMap = this.renderMap.bind(this);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            key: 1
        };
    }

    handleSelect(key) {
        /*alert("selected " + key);*/
        this.setState({ key });
    }



    renderTable() {

        function Get(yourUrl) {
            var Httpreq = new XMLHttpRequest(); // a new request
            Httpreq.open("GET", yourUrl, false);
            Httpreq.send(null);
            return Httpreq.responseText;
        }

        var json_obj1 = JSON.parse(Get("http://www.ipeadata.gov.br/api/odata4/Paises"));
        var json_obj2 = JSON.parse(Get("http://www.ipeadata.gov.br/api/odata4/Metadados('WDI_PIBPPCCAPRISR')/Valores"));


        console.log(json_obj);

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
        return <GridSerie serie={json_obj.value} div={"Grid"} url={this.props.url.id} />;
    }

    renderGraph() {
        return <GraphSerie div={"container"} />;
    }

    renderMap() {
        return <MapaSerie />;
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

        var menu = this.props.url.id;
        if (this.props.url.id !== "macroeconomico")
            if (this.props.url.id !== "regional")
                if (this.props.url.id !== "social") {
                    menu = "macroeconomico";
                }

        var descriçãocolor = "";
        if (this.props.url.id == "macroeconomico") descriçãocolor = "primary";
        if (this.props.url.id == "regional") descriçãocolor = "success";
        if (this.props.url.id == "social") descriçãocolor = "danger";

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
                        <p>Descrição</p>
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
                            {this.renderTable()}
                        </Tab>
                        <Tab eventKey={2} title="Grafico">
                            {this.renderGraph()}
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