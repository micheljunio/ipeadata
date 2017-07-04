import React, { Component } from "react";

import "../css/footer.css";

export class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="container">
					<span>-</span>
					<a>pagina inicial</a>
					<span>-</span>
					<a>fale conosco</a>
					<span>-</span>
					<a>mapa do site</a>
					<span>-</span>
					<a>english</a>
					<span>-</span>
					<a>0.0.1</a>
					<span>-</span>
				</div>
			</footer>
		);
	}
}
export default Footer;