import React, { Component } from "react";
import {moduleGrid} from "../../script/modulesSync.js"


class GridSerie extends Component {

    render() {
        return(
                <div id="Grid">
                    {moduleGrid() }      
                  </div>
                );
    }
}

export default GridSerie;