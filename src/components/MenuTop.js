import React, { Component } from "react";
import { ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";

//css
import "../css/menutop.css";

class MenuTop extends Component {
    constructor() {
        super();
        this.renderDropdownButton = this.renderDropdownButton.bind(this);
        this.menuUl = this.menuUl.bind(this);
    }
    menuUl(itens, numul) {
        numul++;
        
        return (
            <ul className={`submenu-${numul}`}>
                {itens.map(function(subi, j) {
                    return (
                        <li key={j}>
                            <Link to={`/${subi.fantasia}`}> {subi.name} </Link>
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

                <ul
                    className="menu"
                    title={title}
                    key={i}
                    id={`dropdown-basic-${i}`}
                >
                    <li>
                        {title}
                        <ul className="submenu-1">

                            {x.map(function(itens, j) {
                                const numul = 1;
                                return (
                                    <li key={j}>
                                        {" "}
                                        <Link to={`/${itens.fantasia}`}>
                                            {" "}{itens.name}{" "}
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

        return (
            <ButtonToolbar className="menutop">
                {itensNames.map((a, i) =>
                    this.renderDropdownButton(a, i, itensSub[i])
                )}
            </ButtonToolbar>
        );
    }
}

export default MenuTop;