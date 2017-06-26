//react
import React, { Component } from "react";
import { Link } from "react-router-dom";

//css
import "../css/menuleft.css";


class MenuLeft extends Component {
	constructor() {
		super();
		this.renderMenu = this.renderMenu.bind(this);
		this.renderDropdownButton = this.renderDropdownButton.bind(this);
		this.menuUl = this.menuUl.bind(this);
	}
	renderMenu(title, i, menuname) {
		const titleReal = title.name;
		const titleFanstasia = title.fantasia;
		const teste = title.subItens;
		return (
			<Link to={`/${menuname}/${titleFanstasia}`}>
				<ul
					className={"dropdown-menu " + `dropdown-menu0${i}`}
					title={titleReal}
				>
					<li className="dropdown-submenu">
						<a className="text">{titleReal}</a>
						<ul className="dropdown-menu">
							{teste.map(function(itens, j) {
								const numul = 1;
								return (
									<li key={j} className="dropdown-submenu">
										{" "}
										<Link
											to={`/${menuname}/${title.fantasia}/${itens.fantasia}`}
										>
											{" "}
											<a className="text">{itens.name}</a>
											{" "}
										</Link>
										{itens.hasOwnProperty("subItens") &&
											this.menuUl(itens.subItens, numul)}
									</li>
								);
							}, this)}
						</ul>
					</li>
				</ul>
			</Link>
		);
	}
	menuUl(itens, numul) {
		numul++;

		return (
			<ul className="dropdown-menu">
				{itens.map(function(subi, j) {
					return (
						<li key={j} className="dropdown-submenu">

							<Link to={`/${subi.fantasia}`}>
								{" "}<a className="text">{subi.name}</a>{" "}
							</Link>
							{subi.hasOwnProperty("subItens") &&
								this.menuUl(subi.subItens, numul)}

						</li>
					);
				}, this)}
			</ul>
		);
	}
	renderDropdownButton(title, i, x) {
		return (
			<Link key={i} to={`/${title}`}>
				<ul className="dropdown-menu" title={title} key={i}>
					<li className="dropdown-submenu">
						<a className="text">
							{title}
						</a>
						<ul className="dropdown-menu">

							{x.map(function(itens, j) {
								const numul = 1;
								return (
									<li eventKey={j}>

										{" "}
										<Link to={`/${itens.fantasia}`}>
											{" "}
											<a className="text">
												{itens.name}
												{" "}
											</a>
											{" "}
										</Link>
										{itens.hasOwnProperty("subItens") &&
											this.menuUl(itens.subItens, numul)}
									</li>
								);
							}, this)}
						</ul>
					</li>
				</ul>
			</Link>
		);
	}

	render() {
		const itens = this.props.itens;
		const itensNames = Object.keys(itens).map(keys => itens[keys].name);
		const itensSub = Object.keys(itens).map(keys => itens[keys].itens);

		switch (this.props.menuname) {
			case "macroeconomico":
				var itenName = itensSub[Object.keys(itensSub)[0]];
				var menuname = itensNames[Object.keys(itensSub)[0]];
				var i = 0;
				break;

			case "regional":
				itenName = itensSub[Object.keys(itensSub)[1]];
				menuname = itensNames[Object.keys(itensSub)[1]];
				i = 1;
				break;

			case "social":
				itenName = itensSub[Object.keys(itensSub)[2]];
				menuname = itensNames[Object.keys(itensSub)[2]];
				i = 2;
				break;

			default:
				itenName = itensSub[Object.keys(itensSub)[0]];
				menuname = itensNames[Object.keys(itensSub)[0]];
				i = 0;
				break;
		}

		return (
			<div>
				<ul className={"nav " + this.props.menucolor}>
					<li className="active">
						<Link to={`/${menuname}`}>
							{menuname}
						</Link>
					</li>
				</ul>

				<ul
					className="dropdown-menu dropdown-menu66"
					aria-labelledby="dropdownMenu"
				>
					{itenName.map(a => this.renderMenu(a, i, menuname))}

				</ul>
				<div className={this.props.sidecolor}> </div>
			</div>
		);
	}
}

export default MenuLeft;