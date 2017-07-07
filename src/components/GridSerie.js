import React, { Component } from "react";
import { moduleGrid, getRowSelected } from "../../script/modulesSync.js";
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
			loading: true
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
		var serie = this.props.serie;		
		return (
			moduleGrid(serie, this.props.div, this.props.columns),
			this.setState({loading: false}),
			console.log("mudou pra falso")
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
		var serie = this.props.serie;
		const {loading} = this.state;

		if (loading){
			console.log("nao entrou");
			return null;
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