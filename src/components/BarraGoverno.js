import React, { Component } from "react";

class BarraGoverno extends Component {
    render() {
        return (
            <div
                id="barra-brasil"
                className="barra1"
                
            >
                <ul id="menu-barra-temp" className="barra2">
                    <li className="barra3">
                        <a
                            href="http://brasil.gov.br"
                            className="barra4"
                            
                        >
                            Portal do Governo Brasileiro
                        </a>
                    </li>
                    <li>
                        <a
                            className="barra5"                            
                            href="http://epwg.governoeletronico.gov.br/barra/atualize.html"
                        >
                            Atualize sua Barra de Governo
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
export default BarraGoverno;