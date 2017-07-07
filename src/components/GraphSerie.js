import React, { Component } from "react";
import { moduleGraph, moduleGraphJson } from "../../script/modulesSync.js";

/*import { serie1 } from "../data/serie1";*/

class GridSerie extends Component {
    constructor() {
        super();
        this.state = {
            propsSerie: false,
            nextProps: ''
        };
    }

    componentDidMount() {
        console.log("didMountGraph");
        var serie = moduleGraphJson(this.props.serie);
        return(        
            moduleGraph(this.props.div, serie, this.props.serieName)    
        );
    }

    componentWillReceiveProps(nextProps) {
        console.log('receivedPropsGraph');
        console.log(this.props.url + " - " + nextProps.url);
        if(this.props.url !== nextProps.url){
             this.setState({propsSerie:true, nextProps: nextProps.serie});
        }
    }

    render() {
        console.log("renderGraph");
        if(this.state.propsSerie){
            var serie = this.state.nextProps;
            this.setState({propsSerie:false});
            var serieData =  moduleGraphJson(this.props.serie);
        }       
        return (
            <div id="container">
                {
                    moduleGraph(this.props.div, serieData, this.props.serieName)
                }
            </div>
        );
    }
}

export default GridSerie;