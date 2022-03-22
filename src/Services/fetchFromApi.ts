import axios from "axios";
import { IApiResponse } from "../Models/IApiRespone";

export function fetchFromApi () {

    const url: string =  "https://animals.azurewebsites.net/api/animals";

    
    axios.get<IApiResponse[]>(url)
    .then((res) => {
        let dataFromApi = res.data;
        localStorage.setItem("animals", JSON.stringify(dataFromApi))
        
    })

}