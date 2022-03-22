import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IApiResponse } from "../Models/IApiRespone";
import { fetchFromApi } from "../Services/fetchFromApi";


export function AnimalDetails() {
    const [animalId, setAnimalId] = useState(0);
    const [animalToShow, setAnimalToShow] = useState<IApiResponse>();
    const [animals, setAnimals] = useState<IApiResponse[]>([]);
    const [disableButton, setDisableButton] = useState(false)
    const [hungerStatus, setHungerStatus] = useState("ja")
    let {id} = useParams();
   

    useEffect(() => {
        if (id) {
        setAnimalId(+id)
        }
    },[id])

    useEffect(()=> {
        fetchFromApi();        
    }, [])

    useEffect(() => {
        const fetchedAnimals = localStorage.getItem("animals"); 
        if (fetchedAnimals != null) setAnimals(JSON.parse(fetchedAnimals));
    }, [])

    useEffect(() => {
        for (let i=0; i<animals.length; i++) {
            if (animals[i].id === animalId) {
                setAnimalToShow(animals[i]);
                console.log(animalToShow)
            }
        }  
    }) 

    function handleClick() {
        console.log("Klickade")
        animals[animalId - 1].isFed = true
        console.log(animals[animalId - 1])
        setDisableButton(true);
        setHungerStatus("nej");
        localStorage.setItem("animals", JSON.stringify(animals))
        
    }

    return (
    <>
        <section>
            <div>
                <img src={animalToShow?.imageUrl} alt="Bild"></img>
            </div>
            <header>
                <h4> {animalToShow?.name}</h4>
                <ul>
                    <li>Latinskt namn: {animalToShow?.latinName}</li>
                    <li>Födelseår: {animalToShow?.yearOfBirth}</li>
                    <li>Hungrig: {hungerStatus} </li>
                </ul>
            </header>
            <article>
                {animalToShow?.longDescription}
            </article>
            <button disabled={disableButton} onClick={handleClick}>Vill du donera 50:- för att mata {animalToShow?.name}?</button>
        </section>
    
    </>)
}


function handleClick(): import("react").MouseEventHandler<HTMLButtonElement> | undefined {
    throw new Error("Function not implemented.");
}

