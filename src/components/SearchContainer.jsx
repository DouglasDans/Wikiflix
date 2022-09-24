import React from "react";
import "./SearchContainer.css"

export default class SearchContainer extends React.Component{
    render(){
        return(
            <header className="search-container">
                <div>
                    <span className="material-symbols-rounded search-icon">
						search
					</span> 
                    <input type="text" placeholder="Pesquisar" className="search-input"></input>
                    
                </div>
                <div className="user-container">
                    <section className="userImage"></section>
                </div>
            </header>
        )
    }
}