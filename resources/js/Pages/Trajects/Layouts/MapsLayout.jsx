import axios from "axios";
import { useEffect, useState } from "react";

export default function MapsLayout() {
    const url = new URLSearchParams(document.location.search);
    const uuid = url.get("uuid");

    const [ map, setMap ] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/roads/${uuid}`).then(async (response) => {
            const data = response.data;
            
            const initMap = () => {
                const directionsService = new window.google.maps.DirectionsService();
                const directionsRenderer = new window.google.maps.DirectionsRenderer();

                const mapOptions = {
                    center: { lat: 0, lng: 0 },
                    zoom: 6,
                };

                const newMap = new window.google.maps.Map(document.getElementById('map'), mapOptions);
                directionsRenderer.setMap(newMap);

                const request = {
                    origin: data.ville_depart,
                    destination: data.ville_arriver,
                    travelMode: 'DRIVING',
                }

                directionsService.route(request, (response, status) => {
                    if(status === 'OK') {
                        directionsRenderer.setDirections(response);
                    } else {
                        console.error('Erreur', status);
                    }
                });

                setMap(newMap);
            };

            if(window.google && window.google.maps) {
                initMap();
            } else {
                const script = document.createElement('script');
                script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBh9i8CNaISR_ZMEg-Yq7uTbmKxuF3pCR0&callback=initMap`;
                script.defer = true;
                document.body.appendChild(script);
                script.onload = initMap;
            }
        })
    }, []);

    return(
        <div id="map" style={{ height: '400px', width: '100%' }}></div>
    )
}