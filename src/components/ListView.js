import React,{useState,useEffect} from "react";
import Card from "./Card.js";
import "./ListView.css"

function ListView(){
    const apiURL=process.env.REACT_APP_API_URL;
    const [data,setData]=useState([]);
    
    async function make_API_Call(apiURL){
        const response=await fetch(apiURL);
        const jsonDATA=await response.json();
        // console.log(jsonDATA);
        setData(jsonDATA.data);
    }
    useEffect(()=>{
        make_API_Call(apiURL)
    },[]);

    // console.log(data[0]);
    return (
        <div className="list-container">
            {data.map((val,ind)=>{
                return <Card key={ind} id={val?.id} firstName={val?.first_name} avatar={val?.avatar}/>
            })}
        </div>
    )
}

export default ListView;