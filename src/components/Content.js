import React, { Component } from "react";
import { Breadcrumb, Panel, Jumbotron, Tabs, Tab, DropdownButton, MenuItem, ButtonGroup, SplitButton } from "react-bootstrap";
import GridSerie from "./GridSerie";
import GraphSerie from "./GraphSerie";
import MapaSerie from "./MapaSerie";
import { metadadosSeries } from "../data/metadadosSeries";
import { metadados } from "../data/metados";
import { metadadoGeral } from "../data/metadadoGeral";
import { metadadoSerieGeral } from "../data/metadadoSerieGeral";
import { metadadoSerieAnoColuna } from "../data/metadadoSerieAnoColuna";

//css
import "../css/content.css";

import img from "../imgs/Screenshot_2.png";

var serie;
var text = "";
var json_obj2 = "";
var serieName = "";
var serieOld = "";
var serieData = "";

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
        this.eventobotao = this.eventobotao.bind(this);
        this.state = {
            key: 1,
            loading: true
        };
    }

    componentDidMount() {
        this.setState({loading: false});
    }

    eventobotao(){
        console.log("botão clicado");
    }

    handleSelect(key) {
        /*alert("selected " + key);*/
        this.setState({ key });
    }

    getValues() {
        function Get(yourUrl) {
            var Httpreq = new XMLHttpRequest(); // a new request
            Httpreq.open("GET", yourUrl, false);
            Httpreq.send(null);
            return Httpreq.responseText;
        }
        serieOld = this.props.url.id;
        var string =
            "http://www.ipeadata.gov.br/api/odata4/Metadados('" + this.props.url.id + "')/Valores";
        json_obj2 = JSON.parse(Get(string));
        //json_obj2 = metadadoAnoColuna;
        if (json_obj2.value.length == 0) {
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
        columns = metadadoSerieAnoColuna;
        if (jsonView == metadados) {
            columns = metadadoGeral;
        }
        return (
            <GridSerie
                serie={jsonView.value}
                div={"Grid"}
                columns={columns}
                url={this.props.url.id}
            />
        );
    }

    renderGraph(jsonView) {
        return (
            <GraphSerie
                div={"container"}
                serie={jsonView.value}
                serieName={serieName}
                url={this.props.url.id}
            />
        );
    }

    renderDescricao(jsonView) {
        var descr = "";
        for (var key in metadados.value) {
            if (metadados.value[key].SERCODIGO == this.props.url.id) {
                descr = metadados.value[key].SERCOMENTARIO;
                serieName = metadados.value[key].SERNOME;
            }
        }
        return descr;
    }

    renderMap() {
        return <MapaSerie />;
    }

    renderComponents() {}
    render() {
        const {loading} = this.state;
        var jsonView = "";
        if(serieOld != this.props.url.id){
            jsonView = this.getValues();
            serieData = jsonView;
        }
        else{
            jsonView = serieData;
        }

        if(loading){
            return (
                <h1>Carregando!!!</h1>
                );
        }

        if (this.props.url.id == "fontes") {
            return (
                <div>
                    <h1>Fontes</h1>
                </div>
            );
        }

        if (this.props.url.id == "catalogo") {
            return (
                <div>
                    <h1>catalogo</h1>
                </div>
            );
        }

        if (this.props.url.id == "estatística") {
            return (
                <div>
                    <h1>estatística</h1>
                </div>
            );
        }
        if (this.props.url.id == "O_que_e") {
            return (
                <div>
                    <h1>O_que_e</h1>
                </div>
            );
        }
        if (this.props.url.id == "Equipe") {
            return (
                <div>
                    <Jumbotron>
                        <p>Equipe Responsável</p>
                        <p>Coordenação </p>

                        <p>Gerência operacional </p>
                        <p> Análise, padronização e atualização de dados </p>
                        <p> Suporte e manutenção do sistema </p>
                    </Jumbotron>
                </div>
            );
        }
        if (this.props.url.id == "direitos") {
            return (
                <div>
                    <Jumbotron>
                        <p>
                            <br />
                            <br />
                            Leia atentamente os termos e condições de uso deste
                            site. Caso não concorde, por favor,
                            {" "}
                            não utilize o Ipeadata.
                            Este site é administrado pelo Instituto de Pesquisa
                            Econômica Aplicada (Ipea), que,
                            {" "}
                            empenhado em prover informação de alta qualidade,
                            recorreu a fontes de dados de confiança reconhecida.
                            {" "}
                            Apesar disso, o Ipea não garante a exatidão das
                            informações reunidas no
                            {" "}
                            Ipeadata para qualquer finalidade particular.
                        </p>
                    </Jumbotron>
                </div>
            );
        }

        if (json_obj2 == metadados) {
            return (
                <div>
                    {this.renderTable(json_obj2)}
                </div>
            );
        } else {
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
                descriçãocolor = "primary";
            else if (this.props.url.id == "regional")
                descriçãocolor = "success";
            else if (this.props.url.id == "social") descriçãocolor = "danger";
            else descriçãocolor = "primary";

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
                            
                            <SplitButton bsStyle="primary" key="1" id="split-button-basic-1" title="Nivel Geografico">
                                <MenuItem onClick={this.eventobotao}> Brasil </MenuItem>
                                <MenuItem onClick={this.eventobotao}> Regiões </MenuItem>
                                <MenuItem onClick={this.eventobotao}> Estados </MenuItem>
                            </SplitButton>    

                            <SplitButton bsStyle="primary" key="2" id="split-button-basic-1" title="Abrangencia">
                                <MenuItem onClick={this.eventobotao}> Regial Centro-Oeste </MenuItem>
                                <MenuItem onClick={this.eventobotao}> Regial Nordeste </MenuItem>
                                <MenuItem onClick={this.eventobotao}> Regial Norte </MenuItem>
                                <MenuItem onClick={this.eventobotao}> Regial Sudeste </MenuItem>
                                <MenuItem onClick={this.eventobotao}> Regial Sul </MenuItem>
                            </SplitButton>    

                            <SplitButton bsStyle="primary" key="3" id="split-button-basic-1" title="inicio">
                                <MenuItem onClick={this.eventobotao}> 1985 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 1986 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 1987 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 1988 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 1989 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 1990 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 1991 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 1992 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 1993 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 1994 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 1995 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 1996 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 1997 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 1998 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 1999 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 2000 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 2001 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 2003 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 2004 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 2005 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 2006 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 2007 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 2008 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 2009 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 2010 </MenuItem>
                                <MenuItem onClick={this.eventobotao}> 2011 </MenuItem>                               
                                
                            </SplitButton>    
                            
                            <SplitButton bsStyle="primary" key="4" id="split-button-basic-1" title="Fim">
                                <MenuItem onClick={this.eventobotao}> Item 1 </MenuItem>
                            </SplitButton>    

                            
                        </Panel>
                    </div>

                    {/* <div className="descrição">
                        <Panel bsStyle={descriçãocolor}>
                            <h3>Configurações</h3>
                            
                        </Panel>
                    </div>*/}


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