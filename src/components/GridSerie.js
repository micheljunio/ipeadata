import React, { Component } from "react";
import {moduleGrid, getRowSelected} from "../../script/modulesSync.js"
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';

/*import { serie1 } from "../data/serie1";*/


class GridSerie extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false,
            valueRedirect: -1
        };
        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick = () => {        
        if(getRowSelected() != -1){
            this.setState({
                redirect: true,
                valueRedirect: getRowSelected()
            });
        }
        console.log(this.state.valueRedirect);
    }


    componentDidMount(){
        console.log("didMount");
        var serie = this.props.serie;
        return(        
            moduleGrid(serie, this.props.div, false)     
        );
    }

  
   
    render() {     
        console.log("render");
        console.log(this.state.redirect);
        var serie = this.props.serie;

        if (this.state.redirect) { 
            this.setState({redirect:false});  
            console.log("if" + this.state.redirect);        
            return <Redirect push to={`/${this.state.valueRedirect}`} />;
        }
        return(       
            <div id="Grid" onClick={this.handleClick} >
                { moduleGrid(serie, this.props.div, true) }
            </div>
        )      
    }
}

export default GridSerie;