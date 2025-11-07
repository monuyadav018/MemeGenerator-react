import React ,{useEffect, useState} from "react";
import MemeCard from "../components/Card";
import { getAllMemes } from "../api/memes";



const HomePage =()=>{
    const [data, setData] =useState([]);
    
    useEffect(()=>{
           getAllMemes().then((meme)=>setData(meme.data.memes));
        //    getAllMemes().then(meme=>console.log(meme));
    },[]);
    return (
        <div className="row">
            {data.map((el)=>(<MemeCard image={el.url} title={el.name}/>))}
        </div>
    )
};

export default HomePage;
