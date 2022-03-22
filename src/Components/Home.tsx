import { useEffect, useState } from "react";
import { IApiResponse } from "../Models/IApiRespone";
import { fetchFromApi } from "../Services/fetchFromApi"
import { Link } from "react-router-dom";

export function Home() {
    const [animals, setAnimals] = useState<IApiResponse[]>([]);
    

    useEffect(()=> {
        fetchFromApi();        
    }, [])

    useEffect(() => {
        const fetchedAnimals = localStorage.getItem("animals"); 
        if (fetchedAnimals != null) setAnimals(JSON.parse(fetchedAnimals));
    }, [])



    return (
    <>
        <div> 
            <h1 className="headertext">Alla våra djur!</h1>
            <p className="headertext">Klicka för mer information</p>

            {animals.map((animal => 
            <div className="animal-container" key={animal.id}> 
                <Link to={`details/${animal.id}`}>
                    <h3>{animal.name}</h3>
                    <img src={animal.imageUrl} alt="Bild på djur"></img>
                </Link>
            </div>
                
            
            ))}

        </div>
    </>
    )
}