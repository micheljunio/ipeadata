import React, { Component } from "react";
import { moduleGrid, getRowSelected, moduleGridJson,moduleDownloadExcel,moduleDownloadZip,moduleDownloadCSV1,moduleDownloadCSV2 } from "../../script/modulesSync.js";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { Button } from "react-bootstrap";
import { territorio } from "../data/CodigosTerritorios";

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

		//var serie = this.props.serie;		
		//var serie = moduleGridJson(this.props.serie);
		/*return (
			moduleGrid(serie, this.props.div);*/

		if(this.props.tipoGrid){
			var serie = this.props.serie;
		}
		else{
			
			var serie = moduleGridJson(this.props.serie,territorio);
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
		var columns = this.props.columns;
		if(this.state.tipoGrid){
			serie = moduleGridJson(this.props.serie,territorio);
		}

		if (this.state.redirect) {
			this.setState({ redirect: false });
			return <Redirect push to={`/${this.state.valueRedirect}`} />;
		}

		if (this.state.propsSerie) {
			serie = this.state.nextProps;
			columns = this.nextProps.columns;
			metaConfigs = this.state.metaConfigs;

			this.setState({ propsSerie: false });
		}


		
		return (
			
			<div>

				<Button bsStyle="info testeIpea"> <a id="a" download="ipea.xls" type="text/csv"onClick={()=>moduleDownloadExcel(this.props.div)}> Download Excel </a></Button>
				<Button bsStyle="info"> <a id="a1" download="ipea.zip" type="text/zip"onClick={()=>moduleDownloadZip(this.props.div)}> Download Zip </a></Button>
				<Button bsStyle="info"> <a id="a2" download="ipea.csv" type="text/csv"onClick={()=>moduleDownloadCSV1(this.props.div)}> Download CSV(,) </a></Button>
			   <Button bsStyle="info"> <a id="a3" download="ipea.csv" type="text/csv"onClick={()=>moduleDownloadCSV2(this.props.div)}> Download CSV(;) </a></Button>
            
			<div id="Grid" onClick={this.handleClick}>
				{moduleGrid(serie, this.props.div, columns, metaConfigs)}

			</div>
			</div>
		);
	}
}

export default GridSerie;