import {React, useState} from "react";
import "./SearchContainer.css"
import { useNavigate } from "react-router-dom";

export default function SearchContainer(){
    const [dataInput, setDataInput] = useState([]);
    
    let navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        console.log("sf");
        return navigate("/search/" + e.target[0].value)
    }

    return(
            <header className="search-container">
                <form onSubmit={handleSubmit} id="search-form" method="get">
                    <span className="material-symbols-rounded search-icon">
						search
					</span> 
                    <input type="text" placeholder="Pesquisar" className="search-input"></input>
                </form>
                <div className="user-container">
                    <section className="userImage"></section>
                </div>
            </header>
        )
    }

function Redirect(props){
    let navigate = useNavigate()
    console.log("sf");
    return navigate("/search")

}