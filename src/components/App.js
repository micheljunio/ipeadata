//react
import React, { Component } from "react";

//css
import "../css/App.css";

//bootstrap
import { Grid, Col, Row } from "react-bootstrap";

//components
import Navbar from "./Navbar";
import MenuLeft from "./MenuLeft";
import MenuTop from "./MenuTop";
import Content from "./Content";
/*import Content2 from "./Content2";*/
import Footer from "./Footer";
import BarraGoverno from "./BarraGoverno";

/*import GridSerie from "./GridSerie";*/
/*import Datatable from "./Datatable";*/

//dados
import { itensDropMenu } from "../data/dropdown";
import { itensTabs } from "../data/itensComponenteTab";
import { serie1 } from "../data/serie1";
import { serie2 } from "../data/serie2";
import { serie3 } from "../data/serie3";
import { seriemacro } from "../data/seriemacro";
import { seriesocial } from "../data/seriesocial";
import { serieregional } from "../data/serieregional";

//import a11y from "react-a11y"

class App extends Component {
  render() {
    //console.log(this.props.match.params)
    var menu = this.props.match.params.id;
    if (this.props.match.params.id !== "macroeconomico")
      if (this.props.match.params.id !== "regional")
        if (this.props.match.params.id !== "social") {
          menu = "macroeconomico";
        }

        
      //a11y(React);

    return (
      <Grid fluid="true">
        {/*navbar*/}
{/*        <Row>
          <Col className="nopadding barranew" xs={12} md={12}>
            <BarraGoverno/>
          </Col>
        </Row>*/}
        <Row>
          <Col className="nopadding navbarnew" xs={12} md={12}>
            <Navbar itens={itensDropMenu} navname={"Ipeadata"} />
          </Col>
        </Row>

        <Row>
          {/*downarea*/}
          <Col className="nopadding" xs={12} md={12}>

            {/*menuleft*/}
            <Col className="menu-left" xs={2} md={2}>
              <MenuLeft
                itens={itensTabs}
                menuname={menu}
                menucolor={menu + "-nav-sidebar"}
                sidecolor={menu + "-sidebar"}
              />
            </Col>

            {/*rightarea*/}
            <Col className="nopadding" xs={10} md={10}>

              {/*menutop*/}
              <Col className="nopadding menu-top" xs={12} md={12}>
                <MenuTop
                  itens={itensTabs}
                  tabcolor={this.props.match.params.id + "-dropdown"}
                  togle={this.props.match.params.id + "-dropdown-toggle"}
                />
              </Col>

              {/*content*/}
              <Col className="nopadding content" xs={12} md={12}>
                <Content
                  url={this.props.match.params}
                  serie1={serie1}
                  serie2={serie2}
                  serie3={serie3}
                  seriemacro={seriemacro}
                  serieregional={serieregional}
                  seriesocial={seriesocial}
                />
              </Col>

            </Col>

          </Col>
        </Row>
        {/*footer*/}
        {/*<Row >
          <Col xs={12} md={12} />
          <Footer/>
        </Row>*/}
      </Grid>
    );
  }
}

export default App;