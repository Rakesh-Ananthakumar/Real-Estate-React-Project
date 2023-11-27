import React , {useState,useEffect} from 'react';
import axios from 'axios';

function DataFetch()
{
    const [insertName,setInsertName] = useState("");
    const postData={
        id:3,
        name:'Aravindhan'
    }
    useEffect(()=>{
        const apiURL = "http://localhost:3001/validUsers";
        axios.post(apiURL,postData)
            .then(response =>{
                setInsertName(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    },[]);
    return (
        <div>
            <p>Inserted Name: {insertName.name}</p>
            {/* You can add more components or JSX elements here */}
        </div>
    );
}
export default DataFetch;






