import React, { Fragment } from "react"
import {NavLink} from "react-router-dom"
import "./Navbar.css"

export default class Navbar extends React.Component {
	render() {
		const logo = process.env.PUBLIC_URL + "img/wikiflix_logo.svg"
		return (
			<header className="header-container">
				<NavLink to={'/'} style={{color: "var(--color8)", textDecoration: "none", fontSize : "0.8rem", fontWeight: "600"}}>
					<WikiflixLogo/>
					<small>BETA</small>
				</NavLink>
				<ContainerLinks />
			</header>
		)
	}
}

class ContainerLinks extends React.Component{
	render(){
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
					<li className="nav-link-button">
						<LinkProps url="/watchlist" iconName="bookmark" linkName="Watchlist" />
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

function WikiflixLogo() {
	return (
		<Fragment>
			<svg width="117" height="29" viewBox="0 0 117 29" fill="none" className="logo" xmlns="http://www.w3.org/2000/svg">
				<path d="M22.3372 0L18.1736 28.7355H13.4473L11.1967 9.80655L8.94613 28.7355H4.16361L0 0H4.3324L6.69553 19.442L9.05866 0H13.4473L15.8104 19.442L18.1173 0H22.3372Z" fill="#AE1717"/>
				<path d="M25.7131 0H29.9892V28.7355H25.7131V0Z" fill="#AE1717"/>
				<path d="M40.6233 16.9334L38.9916 20.0692V28.7355H34.7155V0H38.9916V11.631L44.6744 0H49.2881L43.2677 12.2012L49.7382 28.7355H45.1245L40.6233 16.9334Z" fill="#AE1717"/>
				<path d="M52.9453 0H57.2214V28.7355H52.9453V0Z" fill="#AE1717"/>
				<path d="M61.9477 0H73.9321V4.10507H66.2238V12.5433H72.3005V16.6483H66.2238V28.7355H61.9477V0Z" fill="#AE1717"/>
				<path d="M77.2518 0H81.5279V24.6304H89.1799V28.7355H77.2518V0Z" fill="#AE1717"/>
				<path d="M92.4996 0H96.7757V28.7355H92.4996V0Z" fill="#AE1717"/>
				<path d="M111.63 28.7355L107.972 18.7009L104.54 28.7355H100.095L105.722 13.8546L100.433 0H105.047L108.423 9.17938L111.573 0H116.018L110.673 14.0827L116.243 28.7355H111.63Z" fill="#AE1717"/>
			</svg>
		</Fragment>
	)
}