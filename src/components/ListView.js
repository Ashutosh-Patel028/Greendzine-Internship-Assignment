import React,{useState,useEffect} from "react";


async function API_CALL(apiURL){
    const response=await fetch(apiURL);
    const jsonDATA=await response.json();
    console.log(jsonDATA);
}


function ListView(){
    const apiURL=process.env.REACT_APP_API_URL;
    useEffect(()=>{
        API_CALL(apiURL)
    },[]);
    return (
        <div>
            this is listview
        </div>
    )
}

export default ListView;