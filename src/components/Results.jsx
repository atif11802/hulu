import "../Styles/Results.css";
import VideoCard from "./VideoCard";
import {useEffect, useState} from 'react';
import axios from "./axios";
import requests from "./requests";
import FlipMove from "react-flip-move";

function Results({selectedOption}) {

    const [movies, setMovies]= useState([])  

    useEffect(
        ()=>{
            async function fetchData(){
                    const request = await axios.get(selectedOption);
                    
                    setMovies(request.data.results );
                    console.log(request.data.results );
                    

                    return request;
            }
            fetchData()
        },[selectedOption]
    )

    return (
        <div className="results">
            <FlipMove>
            {
                movies.map((movie,key)=>(
                    <VideoCard 
                    key={key}
                    movie={movie}

                    />
                ))
            }

            </FlipMove>
            
            
            
        </div>
    )
}

export default Results
