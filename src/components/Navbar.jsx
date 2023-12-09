import React, { Fragment } from "react"
import {NavLink} from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
	const logo = "/img/wikiflix_logo.svg"
	return (
		<header className="header-container">
			<NavLink to={'/'} className="logo">
				<img src={logo}/>
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
					<LinkProps url="/" iconName="whatshot" linkName="Bombando" />
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
			<span className="indicator-nav">a</span>
			<NavLink to={props.url} className={"nav-link-props"}>
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

