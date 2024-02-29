import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import FooterComponents from "@/Components/Footer/footer_components";

import RoadsList from "./Partials/RoadsList";
import TrajectsForm from "./Partials/NewTrajectsForm";

import { StandaloneSearchBox, useJsApiLoader } from '@react-google-maps/api';

import { Head } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendarAlt, faCar, faCircle, faInfo, faInfoCircle, faPlus, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import MapsLayout from './Layouts/MapsLayout';
import { useEffect, useRef, useState } from 'react';

import axios from 'axios';

export default function Trajects({ auth }) {
    const url = new URLSearchParams(document.location.search);

    const uuid = url.get("uuid");

    const departure_city = url.get("departure");
    const arrival_city = url.get("arrival");
    const passengers = url.get("passengers");
    const date = url.get("date");

    const [ data, setData ] = useState([]);
    const [ roads, setRoads ] = useState([]);

    const [ departure, setDeparture ] = useState('Autour de chez vous');
    const [ arrival, setArrival ] = useState('');

    const inputRef = useRef();
    const inputRef_1 = useRef();

    const { isLoaded } = useJsApiLoader({
        id: 'google-maps-script',
        googleMapsApiKey: "AIzaSyAMuvQnNsDAKJ6wGKkoa7MRHmn9WEP7WS8",
        libraries: ['places']
      })
  
      const handlePlaceChanged = () => {
        const [ place ] = inputRef.current.getPlaces();
        if(place) {
          console.log(place.formatted_address);
        }
      }
  
      const handlePlaceChanged_1 = () => {
        const [ place_1 ] = inputRef_1.current.getPlaces();
        if(place_1) {
          console.log(place_1.formatted_address)
        }
      }

      const openModal = () => {
        const element = document.getElementById('new_traject');
        console.log(element);

        element.style.display = 'block';
    }

    useEffect(() => {
        if(!uuid) {

        } else {
            axios.get(`http://127.0.0.1:8000/api/roads/${uuid}`).then(async (response) => {
                console.log(response.data)
                await setData(response.data)
            })
        }

        if(!date) {

        } else {
            axios.post("http://127.0.0.1:8000/api/search", {
                ville_depart: "",
                ville_arriver: "",
                date_traject: "2024-03-08"
            }).then(async (response) => {
                console.log(response);
                await setRoads(response.data);
            })
        }
    }, [])

    return(
        <>
            <Head title="Trajets" />
            <TrajectsForm/>

            <AuthenticatedLayout user={auth.user} />
            { !uuid ?
                <>
                    {!date ?
                        <>
                        <div className='flex flex-col space-x-5' id='main-content'>
                            <div className='flex flex-row justify-center items-center pt-24'>
                                <div className='flex justify-between bg-white p-3 rounded-l-xl'>
                                    <div className='order-1'>
                                        <div className='flex flex-row space-x-3 items-center'>
                                            <FontAwesomeIcon icon={ faCircle } className='text-green-500' />
                                            { isLoaded ?
                                                <>
                                                    <StandaloneSearchBox 
                                                      onLoad={ ref => (inputRef.current = ref) }
                                                      onPlacesChanged={ handlePlaceChanged }
                                                    >
                                                      <input type='text' value={ !departure_city ? departure : departure_city } className='form-control rounded-lg text-black placeholder:text-black border border-gray-200' placeholder='Départ' onChange={(e) => { setDeparture(e.target.value) }}>
                                                      </input>
                                                    </StandaloneSearchBox>
                                                </>
                                            :
                                                <>
                                                  none
                                                </>
                                            }
                                        </div>
                                    </div>
                                    <div className='ml-5 order-2'>
                                        <div className='flex flex-row space-x-3 items-center'>
                                            <FontAwesomeIcon icon={ faCircle } className='text-green-500' />
                                            { isLoaded ?
                                                <>
                                                  <StandaloneSearchBox 
                                                    onLoad={ ref => (inputRef_1.current = ref) }
                                                    onPlacesChanged={ handlePlaceChanged_1 }
                                                  >
                                                    <input type='text' value={ !arrival_city ? arrival : arrival_city  } className='form-control rounded-lg text-black placeholder:text-black border border-gray-200' placeholder='Arrivé' onChange={(e) => { setArrival(e.target.value) }}></input>
                                                  </StandaloneSearchBox>
                                                </>
                                            :
                                                <>
                                                  none
                                                </>
                                            }
                                        </div>
                                    </div>
                                    <div className='ml-5 order-3'>
                                        <div className='flex flex-row space-x-3 items-center'>
                                          <FontAwesomeIcon icon={ faUser } className='text-green-500' />
                                          <input type='number' value={ !passengers ? 1 : passengers  } placeholder='0' className='w-14 rounded-lg text-black placeholder:text-black border border-gray-200' />
                                        </div>
                                    </div>
                                    <div className='ml-5 order-4'>
                                      <div className='flex flex-row space-x-3 items-center'>
                                        <FontAwesomeIcon icon={ faCalendarAlt } className='text-green-500' />
                                        <input type='date' value={ date } className='rounded-lg text-black placeholder:text-black border border-gray-200'/>
                                      </div>
                                    </div>
                                </div>
                                <button className='text-white font-bold flex items-center justify-center p-5 bg-blue-600 hover:bg-blue-700 rounded-r-xl' onClick={(e) => {
                                    Search();
                                }}>
                                    Rechercher
                                </button>
                            </div>
                            <div className="flex flex-col space-y-5 p-9 mt-10">
                                <span>
                                    Aucun trajets disponible selon vos recherches. Nous vous proposons alors ceux-ci !
                                </span>
                                <button className="flex flex-row space-x-2 justify-center items-center w-52 p-3 rounded-lg text-white font-bold bg-transaprent hover:bg-gray-200/25 border border-white" id="" onClick={(e) => {
                                    openModal()
                                }}>
                                    <FontAwesomeIcon icon={ faPlus } />
                                    <span>
                                        Proposer un trajet
                                    </span>
                                </button>
                            </div>
                            </div>
                            <div className="p-0">
                                <RoadsList/>
                            </div>
                        </>
                    :
                        <>
                            <div className='flex flex-row justify-center items-center p-10' id='main-content'>
                                <div className='flex justify-between bg-white p-3 rounded-l-xl'>
                                    <div className='order-1'>
                                        <div className='flex flex-row space-x-3 items-center'>
                                            <FontAwesomeIcon icon={ faCircle } className='text-green-500' />
                                            { isLoaded ?
                                                <>
                                                    <StandaloneSearchBox 
                                                      onLoad={ ref => (inputRef.current = ref) }
                                                      onPlacesChanged={ handlePlaceChanged }
                                                    >
                                                      <input type='text' value={ !departure_city ? departure : departure_city } className='form-control rounded-lg text-black placeholder:text-black border border-gray-200' placeholder='Départ' onChange={(e) => { setDeparture(e.target.value) }}>
                                                      </input>
                                                    </StandaloneSearchBox>
                                                </>
                                            :
                                                <>
                                                  none
                                                </>
                                            }
                                        </div>
                                    </div>
                                    <div className='ml-5 order-2'>
                                        <div className='flex flex-row space-x-3 items-center'>
                                            <FontAwesomeIcon icon={ faCircle } className='text-green-500' />
                                            { isLoaded ?
                                                <>
                                                  <StandaloneSearchBox 
                                                    onLoad={ ref => (inputRef_1.current = ref) }
                                                    onPlacesChanged={ handlePlaceChanged_1 }
                                                  >
                                                    <input type='text' value={ !arrival_city ? arrival : arrival_city  } className='form-control rounded-lg text-black placeholder:text-black border border-gray-200' placeholder='Arrivé' onChange={(e) => { setArrival(e.target.value) }}></input>
                                                  </StandaloneSearchBox>
                                                </>
                                            :
                                                <>
                                                  none
                                                </>
                                            }
                                        </div>
                                    </div>
                                    <div className='ml-5 order-3'>
                                        <div className='flex flex-row space-x-3 items-center'>
                                          <FontAwesomeIcon icon={ faUser } className='text-green-500' />
                                          <input type='number' value={ !passengers ? 1 : passengers  } placeholder='0' className='w-14 rounded-lg text-black placeholder:text-black border border-gray-200' />
                                        </div>
                                    </div>
                                    <div className='ml-5 order-4'>
                                      <div className='flex flex-row space-x-3 items-center'>
                                        <FontAwesomeIcon icon={ faCalendarAlt } className='text-green-500' />
                                        <input type='date' value={ date } className='rounded-lg text-black placeholder:text-black border border-gray-200'/>
                                      </div>
                                    </div>
                                </div>
                                <button className='text-white font-bold flex items-center justify-center p-5 bg-blue-600 hover:bg-blue-700 rounded-r-xl' onClick={(e) => {
                                    Search();
                                }}>
                                    Rechercher
                                </button>
                            </div>
                            <div className='p-10'>
                                { !roads[0] ?
                                    <>
                                        <div className="flex flex-col space-y-5">
                                            <span>
                                                Aucun trajets disponible selon vos recherches. Nous vous proposons alors ceux-ci !
                                            </span>
                                            <button className="flex flex-row space-x-2 justify-center items-center w-52 p-3 rounded-lg text-white font-bold bg-green-500 hover:bg-green-600" id="" onClick={(e) => {
                                                openModal()
                                            }}>
                                                <FontAwesomeIcon icon={ faPlus } />
                                                <span>
                                                    Proposer un trajet
                                                </span>
                                            </button>
                                        </div>
                                        <RoadsList/>
                                    </>
                                :
                                    <>
                                        <div className='grid grid-cols-4 gap-4'>
                                            { roads.map((item, index) => (
                                                <div className="bg-neutral-100 shadow-md hover:shadow-xl p-5 w-52 rounded-lg" key={ index }>
                                                    <div className="flex justify-between">
                                                        <div className="order-1">
                                                            <div className="flex flex-row space-x-2 items-center">
                                                                <span className="text-black uppercase font-bold">
                                                                    { item.ville_depart }
                                                                </span>
                                                                <FontAwesomeIcon icon={ faArrowRight } />
                                                                <span className="text-black uppercase font-bold">
                                                                    { item.ville_arriver }
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="order-2">
                                                            <div>
                                                                <a href="/#">
                                                                    <img src="https://static.generated.photos/vue-static/face-generator/landing/wall/16.jpg" alt="road_user" className="w-7 h-7 rounded-full"></img>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row space-x-3 mt-5">
                                                        <div className="flex flex-col space-y-3">
                                                            <div className="flex flex-col space-y-0">
                                                                <span className="font-bold text-black">
                                                                    { item.heure_depart.slice(0, 5) }
                                                                </span>
                                                                <div className="flex flex-row space-x-1 items-center text-indigo-400">
                                                                    <FontAwesomeIcon icon={ faCar } className="text-sm"/>
                                                                    <span className="text-sm p-1">
                                                                        { item.estimated_time.slice(0, 5) }
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <span className="font-bold text-black">
                                                                { item.heure_arriver.slice(0, 5) }
                                                            </span>
                                                        </div>
                                                        <div className="items-center text-center">
                                                            <div className="w-3 h-3 rounded-full bg-transparent border-2 border-blue-600"></div>
                                                            <div class="inline-block h-16 w-0.5 bg-blue-600 opacity-100 mt-1"></div>
                                                            <div className="w-3 h-3 rounded-full bg-transparent border-2 border-blue-600"></div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-5">
                                                        <a href={`?uuid=${item.uuid}`} className="bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-600 p-2 rounded-lg">
                                                            Réserver ce trajet
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                }
                            </div>
                        </>
                    }
                </>
            :
                <>
                    <div className='flex flex-row'>
                        <div className='border-r border-black' id='traject_container'>
                            <div className='flex flex-col space-y-24 justify-center items-center p-10'>
                                <div className='flex flex-col space-y-5 items-center justify-center'>
                                    <span className='font-bold text-xl'>
                                        Vendredi 2 février
                                    </span>
                                    <p>
                                        { data.ville_depart } &ensp;<FontAwesomeIcon icon={ faArrowRight } />&ensp; { data.ville_arriver }
                                    </p>
                                </div>
                            </div>
                            <div className='p-5'>
                                <span className='text-black font-bold uppercase'>
                                    Trajet :
                                </span>
                                <div className='flex justify-between mt-3'>
                                    <div className='order-1'>
                                        <span>
                                            { data.ville_depart }
                                        </span>
                                    </div>
                                    <div className='order-2'>
                                        <span className='text-sm text-blue-600'>
                                            { data.estimated_time }
                                        </span>
                                    </div>
                                    <div className='order-3'>
                                        <span>
                                            { data.ville_arriver }
                                        </span>
                                    </div>
                                </div>
                                <div className='flex flex-row space-x-1 items-center'>
                                    <div className='flex flex-row space-x-2 items-center'>
                                        <span className='text-sm'>
                                            { data.heure_depart }
                                        </span>
                                        <div className='w-4 h-4 rounded-full border-2 border-blue-600'/>
                                    </div>
                                    <div className='w-full h-1.5 rounded-full bg-blue-600'/>
                                    <div className='flex flex-row space-x-2 items-center'>
                                        <div className='w-4 h-4 rounded-full border-2 border-blue-600'/>
                                        <span className='text-sm'>
                                            { data.heure_arriver }
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <hr className='h-px bg-black border-0'></hr>
                            <div className='p-5'>
                                <span className='text-black font-bold uppercase'>
                                    Véhicule :
                                </span>
                                <div className='flex flex-row space-x-5 mt-5'>
                                    <img src='https://png.pngtree.com/png-vector/20231023/ourmid/pngtree-tesla-model-3-red-transparent-background-png-image_10337019.png' alt='vehicle' className='w-32 bg-gray-200 rounded-lg shadow-lg'></img>
                                    <div className='flex flex-col space-y-3'>
                                        <span className='uppercase font-bold text-black'>
                                            Tesla model 3
                                            <FontAwesomeIcon icon={ faInfoCircle } className='text-blue-600 ml-2' />
                                        </span>
                                        <p>
                                            Couleur : Rouge
                                        </p>
                                        <div className='flex flex-row space-x-5 items-center'>
                                            <FontAwesomeIcon icon={ faUser } className={`${data.nombre_place < 1 ? 'text-red-500' : 'text-green-500'}`} />
                                            <FontAwesomeIcon icon={ faUser } className={`${data.nombre_place < 2 ? 'text-red-500' : 'text-green-500'}`} />
                                            <FontAwesomeIcon icon={ faUser } className={`${data.nombre_place < 3 ? 'text-red-500' : 'text-green-500'}`} />
                                            <FontAwesomeIcon icon={ faUser } className={`${data.nombre_place < 4 ? 'text-red-500' : 'text-green-500'}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='h-px bg-black border-0'></hr>
                            <div className='p-5'>
                                <span className='text-black font-bold uppercase'>
                                    Passagers (2) :
                                </span>
                                <div className='flex flex-col space-y-5'>
                                    <div className='flex flex-row space-x-3 items-center mt-5'>
                                        <img src='https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg' alt='avatar' className='w-10 h-10 rounded-full' />
                                        <div className='flex flex-col'>
                                            <span className='font-semibold'>
                                                Baptiste
                                            </span>
                                            <p>
                                                <FontAwesomeIcon icon={ faStar } className='w-4 h-4 me-2 text-yellow-200' />
                                                3.4
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='h-px bg-black border-0'></hr>
                            <div className='p-5'>
                                <span className='text-black font-bold uppercase'>
                                    Options :
                                </span>
                                <div className='flex justify-between mt-5'>
                                    <div className='flex flex-col space-y-5'>
                                        <div className='flex flex-row space-x-2 items-center'>
                                            <div className='w-4 h-4 bg-gray-200'></div>
                                            <span>
                                                Fumeurs
                                            </span>
                                        </div>
                                        <div className='flex flex-row space-x-2 items-center'>
                                            <div className='w-4 h-4 bg-gray-200'></div>
                                            <span>
                                                Animaux de compagnies
                                            </span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col space-y-5'>
                                        <div className='flex flex-row space-x-2 items-center'>
                                            <div className='w-4 h-4 bg-gray-200'></div>
                                            <span>
                                                Bagages
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center p-5 mt-10'>
                                <div className='flex flex-col space-y-3 items-center'>
                                    <span className='uppercase font-bold'>
                                        5.99€ / voyageur(s)
                                    </span>
                                    <button className='bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg w-64'>
                                        Réserver
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <></>
                        </div>
                    </div>
                </>
            }
            <FooterComponents/>
        </>
    )
}