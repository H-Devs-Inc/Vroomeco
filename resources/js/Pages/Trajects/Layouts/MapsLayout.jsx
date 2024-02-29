import { DistanceMatrixService, GoogleMap } from "@react-google-maps/api";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MapsLayout() {
    const url = new URLSearchParams(document.location.search);
    const uuid = url.get("uuid");

    const [ data, setData ] = useState([]);
    const [ options, setOptions ] = useState()

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/roads/${uuid}`).then(async (response) => {
            await response.data;
            setData(response.data);
        })
    }, []);

    return(
        <GoogleMap
            id="map"
            zoom={ 14 }
        >
            <DistanceMatrixService
                options={{ 
                    origins: [{ lat: 1, lng: 1 }],
                    destinations: [{ lat: 1, lng: 1 }],
                    travelMode: "DRIVING"
                 }}
            />
        </GoogleMap>
    )
}