import React, { Fragment } from "react"
import {NavLink} from "react-router-dom"
import logo from "../wikiflix_logo.svg"
import "./Navbar.css"

export default class Navbar extends React.Component {
	render() {
		return (
			<header className="header-container">
				<img src={logo} className="logo"/>
				<ContainerLinks />
			</header>
		)
	}
}

class ContainerLinks extends React.Component{
	render(){
		return(
			<nav>
				<small className="menu-title">MENU</small>
				<ul>
					<li className="nav-link-button">
						<LinkProps url="/" iconName="whatshot" linkName="Bombando" />
					</li>
					<li className="nav-link-button">
						<LinkProps url="/filmes" iconName="theaters" linkName="Filmes" />
					</li>
					<li className="nav-link-button">
						<LinkProps url="/series" iconName="ondemand_video" linkName="Séries" />
					</li>
					<li className="nav-link-button">
						<LinkProps url="/watchlist" iconName="bookmarks" linkName="Watchlist" />
					</li>
				</ul>
			</nav>
		)
	}
}

class LinkProps extends React.Component{
	render(){
		return (
			<Fragment>
				<NavLink to={this.props.url}>
					<span className="material-symbols-rounded">
						{this.props.iconName}
					</span> 
					<span className="titleLink">
						{this.props.linkName}
					</span>
				</NavLink>
				<section className="indicator-nav"></section>
			</Fragment>
		)
	}
}