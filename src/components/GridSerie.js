import React, { Component } from "react";
import {moduleGrid} from "../../script/modulesSync.js"

/*import { serie1 } from "../data/serie1";*/


class GridSerie extends Component {

    render() {
    	var serie = this.props.serie;
        return(
                <div id="Grid">
                    {moduleGrid(serie) }      
                  </div>
                );
    }
}

export default GridSerie;