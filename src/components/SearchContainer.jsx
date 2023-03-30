import {React} from "react";
import "./SearchContainer.css"
import { useNavigate } from "react-router-dom";

export default function SearchContainer(){
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        return navigate("/search/" + e.target[0].value)
        
    }

    function backPage(){
        navigate(-1)
    }
    function nextPage(){
        navigate(+1)
    }


    return(
            <header className="search-container">
                <div className="navigation-search-container">
                    <div className="navigation-arrow-container">
                        <button onClick={backPage} className="arrow-left">
                            <span class="material-symbols-rounded">arrow_back_ios_new</span>
                        </button>
                        <button onclick={nextPage} className="arrow-right">
                            <span class="material-symbols-rounded">arrow_forward_ios</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} id="search-form" method="get">
                        <span className="material-symbols-rounded search-icon">
                            search
                        </span> 
                        <input type="text" placeholder="Pesquisar" className="search-input"></input>
                    </form>
                </div>
                
                <div className="user-container">
                    {/* <section className="userImage"></section> */}
                </div>
            </header>
        )
    }