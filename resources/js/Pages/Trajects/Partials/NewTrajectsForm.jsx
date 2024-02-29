import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";

export default function TrajectsForm({ auth }) {
    const [ departure, setDeparture ] = useState('');
    const [ arrival, setArrival ] = useState('');
    const [ date, setDate ] = useState(null);

    const [ data, setData ] = useState([]);

    const closeModal = () => {
        const element = document.getElementById('new_traject');

        element.style.display = 'none';
    }

    const searchCarModel = (model) => {

    }

    function onSubmit() {
        axios.post('http://127.0.0.1:8000/api/create-road', {
            ville_depart: departure,
            ville_arriver: arrival,
            date_traject: date
        })
    }

    return(
        <div className="hidden absolute z-99 bg-black/25 h-screen w-screen" id="new_traject">
            <div className="h-screen flex items-center justify-center">
                <div className="bg-white p-7 rounded-lg w-96">
                    <div className="flex justify-between">
                        <div className="order-1">
                            <div className="flex flex-row space-x-3 items-center">
                                <img src="https://static.generated.photos/vue-static/face-generator/landing/wall/20.jpg" alt="user_avatar" className="w-10 h-10 rounded-full"></img>

                            </div>
                        </div>
                        <div className="order-2">
                            <button onClick={(e) => {
                                closeModal()
                            }}>
                                <FontAwesomeIcon icon={ faX } />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-5 mt-10">
                        <span className="uppercase font-bold underline underline-offset-2">Trajet :</span>
                        <div className="flex flex-col space-y-3">
                            <div className="flex justify-between">
                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm uppercase font-bold">Ville de départ :</label>
                                    <input type="text" placeholder="Départ" className="w-32"></input>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm uppercase font-bold">Ville d'arrivé :</label>
                                    <input type="text" placeholder="Arrivé" className="w-32"></input>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm uppercase font-bold">Passager(s) :</label>
                                    <input type="number" placeholder="0" className="w-32"></input>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm uppercase font-bold">Date de départ :</label>
                                    <input type="date" placeholder="" className="w-32"></input>
                                </div>
                            </div>
                        </div>
                        <span className="uppercase font-bold underline underline-offset-2">Véhicule :</span>
                        <div className="flex flex-col space-y-3">
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm uppercase font-bold">Modèle de véhicule :</label>
                                <div className="flex flex-row">
                                    <input type="text" placeholder="Véhicule" className="w-80"></input>
                                    <button className="bg-blue-600 hover:bg-blue-700 p-2" onClick={(e) => {
                                        searchCarModel(e.target.value)
                                    }}>
                                        <FontAwesomeIcon icon={ faCheck } className="text-white font-bold" />
                                    </button>
                                </div>
                                {!data[0] ?
                                    <>
                                    </>
                                :
                                    <>
                                        <div className="flex flex-row space-x-5 mt-10">
                                            <div className="bg-black/10 p-3 shadow-lg rounded-lg">
                                                <img src="https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2018-Toyota-Tacoma-Blazing-Blue-Pearl.png" alt="cars" className="w-40"></img>
                                            </div>
                                            <div className="flex flex-col space-y-1">
                                                <span className="font-bold">
                                                    Vehicule Name
                                                </span>
                                                <span className="text-sm">
                                                    red
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm uppercase font-bold">Couleur du véhicule :</label>
                                <div className="flex flex-row space-x-5 items-center">
                                    <input type="checkbox" className="w-5 h-5 rounded-full bg-red-500 ring-red-600 focus:ring-red-600 border border-black checked:text-red-500/50"></input>
                                </div>
                            </div>
                        </div>
                        <span className="uppercase font-bold underline underline-offset-2">Options :</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}