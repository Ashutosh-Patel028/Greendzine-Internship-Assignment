import React,{useState,useEffect} from "react";
import Card from "./Card.js";
import "./ListView.css"


function searchData(searchText,data){
    if(searchText==='') return data;
    return data.filter((val)=>{
        return val?.first_name.toLowerCase()?.includes(searchText.toLowerCase());
    })
}

function ListView(){
    const apiURL=process.env.REACT_APP_API_URL;
    const [data,setData] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [filteredData,setFilteredData] = useState([]);
    
    async function make_API_Call(apiURL){
        const response=await fetch(apiURL);
        const jsonDATA=await response.json();
        setData(jsonDATA.data);
        setFilteredData(jsonDATA.data);
    }
    useEffect(()=>{
        make_API_Call(apiURL)
    },[apiURL]);

    return (
        <div className="container">
            <div className="search-container">
                <input type="text" placeholder="type to search" onChange={e=>setSearchText(e.target.value)}/>
                <button onClick={()=>{
                    const result=searchData(searchText,data);
                    setFilteredData(result);
                }}>Search</button>
            </div>
            {
                (filteredData.length===0 || filteredData===undefined)
                ?
                <h2 style={{textAlign:"center"}}>No data found !!</h2>
                :
                <div className="list-container">
                    {filteredData.map((val,ind)=>{
                        return <Card key={ind} id={val?.id} firstName={val?.first_name} avatar={val?.avatar}/>
                    })}
                </div>
            }
        </div>
    )
}

export default ListView;