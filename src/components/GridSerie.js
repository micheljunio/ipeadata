import React, { Component } from "react";
import { moduleGrid, getRowSelected, moduleGridJson } from "../../script/modulesSync.js";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";


class GridSerie extends Component {
	constructor() {
		super();
		this.state = {
			redirect: false,
			valueRedirect: -1,
			propsSerie: false,
			nextProps: "", 
			tipoGrid: ""
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = () => {
        var clickRow = getRowSelected();
        //console.log(this.props.url);
		if (clickRow != -1 && this.props.url != clickRow ) {
			this.setState({
				redirect: true,
				valueRedirect: clickRow
			});
		}
	};

	componentDidMount() {
		//console.log("didMount");
		if(this.props.tipoGrid){
			console.log("teste true");
			var serie = this.props.serie;
			this.setState({tipoGrid: true})
		}
		else{
			var serie = moduleGridJson(this.props.serie);
			this.setState({tipoGrid: false})
		}
			
		return (
			moduleGrid(serie, this.props.div, this.props.columns)
			);

	}

	componentWillReceiveProps(nextProps) {
		//console.log("receivedProps");
		if (this.props.url !== nextProps.url) {
			this.setState({ propsSerie: true, nextProps: nextProps.serie });
		}
	}

	render() {
		//console.log("render");
		//console.log(this.state.redirect);
		var serie = "";
		if(this.props.tipoGrid){
			serie = this.props.serie;
		}
		else{
			console.log("render module json");
			serie = moduleGridJson(this.props.serie);
		}

		if (this.state.redirect) {
			this.setState({ redirect: false });
			return <Redirect push to={`/${this.state.valueRedirect}`} />;
		}

		if (this.state.propsSerie) {
			serie = this.state.nextProps;
			this.setState({ propsSerie: false });
		}

		return (
			<div id="Grid" onClick={this.handleClick}>
				{moduleGrid(serie, this.props.div, this.props.columns)}
			</div>
		);
	}
}

export default GridSerie;