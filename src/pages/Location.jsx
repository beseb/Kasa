import LocationsItem from "../components/LocationsItem";
import {  useParams } from "react-router-dom";

function LocationPage(){
    const {id} = useParams();
    return (<div>
        <LocationsItem id={id}/>
        
    </div>
    )
}

export default LocationPage

