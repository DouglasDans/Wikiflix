import React, { Fragment } from "react"
import {Link} from "react-router-dom"
import "./Footer.css"

export default function Footer(){
    return(
        <Fragment>
            <footer>
                <div className="wiki-logo">
                    <WikiflixLogo/>
                    <small className="description">Projeto desenvolvido em ReactJS com a TMDB API por Douglas Nascimento</small>
                </div>
                <div className="right-side">
                    <div className="links">
                        <a href="https://github.com/DouglasDans/Wikiflix"><GithubLogo/></a>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
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

function GithubLogo(){
    return(
        <Fragment>
            <svg width="1024" height="1024" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"/>
            </svg>
        </Fragment>
    )
}