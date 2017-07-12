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
			nextConfigs:"",
			nextColumns:"",
			tipoGrid: 1
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
			var serie = this.props.serie;
		}
		else{
			var serie = moduleGridJson(this.props.serie);
		}
			
		return (
			moduleGrid(serie, this.props.div, this.props.columns, this.props.metaConfigs)
			);

	}

	componentWillReceiveProps(nextProps) {
		//console.log("receivedProps");
		if (this.props.url !== nextProps.url) {
			this.setState({ propsSerie: true, nextProps: nextProps.serie, tipoGrid: nextProps.tipoGrid, metaConfigs: nextProps.tipoGrid });
		}
	}

	render() {
		//console.log("render");
		//console.log(this.state.redirect);
		console.log(this.state.tipoGrid);
		if(!this.state.tipoGrid)
			console.log('true');
		else
			console.log('false');
		var serie = this.props.serie;
		var metaConfigs = this.props.metaConfigs;
		if(this.state.tipoGrid){
			serie = moduleGridJson(this.props.serie);
		}

		if (this.state.redirect) {
			this.setState({ redirect: false });
			return <Redirect push to={`/${this.state.valueRedirect}`} />;
		}

		if (this.state.propsSerie) {
			serie = this.state.nextProps;
			metaConfigs = this.state.metaConfigs;
			this.setState({ propsSerie: false });
		}

		return (
			<div id="Grid" onClick={this.handleClick}>
				{moduleGrid(serie, this.props.div, this.props.columns, metaConfigs)}
			</div>
		);
	}
}

export default GridSerie;