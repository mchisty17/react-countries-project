import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
const Countries = () => {
const[countries,setCountry]=useState([]);

useEffect(()=>{

fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
.then(data=>setCountry(data));

},[])
    return (
        <div>
            <h3>All Country Data</h3>
             {
               countries.map(country=><Country key={country.cca3} country={country}></Country>)

             }
            
        </div>
    );
};

export default Countries;