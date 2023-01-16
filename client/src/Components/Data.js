import React, { useState, useEffect } from "react";

const Data = () =>{

    const [data, setData] = useState(null);
    const url = "http://localhost:5000/"
    const url1 = "https://jsonplaceholder.typicode.com/todos"
    useEffect(()=>{
        fetch(url1)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setData(data);
        })        
    }, []);
    return (
        <div>
            {data && data.map((item)=>{
                return <p key={item.id}>{item.title}</p>
            })}
        </div>
    )
}

export default Data;