import React, { Fragment } from "react"
import {NavLink} from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
	const logo = "/img/wikiflix_logo.svg"
	return (
		<header className="header-container">
			<NavLink to={'/'} style={{color: "var(--color8)", textDecoration: "none", fontSize : "0.8rem", fontWeight: "600"}}>
				<img src={logo}/>
				<small>BETA</small>
			</NavLink>
			<ContainerLinks />
		</header>
	)
}


function ContainerLinks(){
	return(
		<nav>
			<small className="menu-title">Menu</small>
			<ul>
				<li className="nav-link-button">
					<LinkProps url="/" iconName="home" linkName="Bombando" />
				</li>
				<li className="nav-link-button">
					<LinkProps url="/filmes" iconName="theaters" linkName="Filmes" />
				</li>
				<li className="nav-link-button">
					<LinkProps url="/series" iconName="tv" linkName="Séries" />
				</li>
				{/* <li className="nav-link-button">
					<LinkProps url="/watchlist" iconName="bookmark" linkName="Watchlist" />
				</li> */}
			</ul>
		</nav>
	)
}


function LinkProps(props){
	return (
		<Fragment>
			<section className="indicator-nav"></section>
			<NavLink to={props.url}>
				<span className="material-symbols-rounded">
					{props.iconName}
				</span> 
				<span className="titleLink">
					{props.linkName}
				</span>
			</NavLink>
		</Fragment>
	)
}

