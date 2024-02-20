import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import FooterComponents from "@/Components/Footer/footer_components";

import RoadsList from "./Partials/RoadsList";
import TrajectsForm from "./Partials/NewTrajectsForm";

import { Head } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faInfo, faInfoCircle, faStar, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Trajects({ auth }) {
    const url = new URLSearchParams(document.location.search);

    const uuid = url.get("uuid");
    const departure_city = url.get("departure_city");

    return(
        <>
            <Head title="Trajets" />
            <TrajectsForm/>

            <AuthenticatedLayout user={auth.user} />
            { !uuid ?
                <>
                    <div className="p-5">
                        <RoadsList/>
                    </div>
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
                                        Paris <FontAwesomeIcon icon={ faArrowRight } /> Lille
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
                                            Paris, France
                                        </span>
                                    </div>
                                    <div className='order-2'>
                                        <span className='text-sm text-blue-600'>
                                            2h40
                                        </span>
                                    </div>
                                    <div className='order-3'>
                                        <span>
                                            Lille, France
                                        </span>
                                    </div>
                                </div>
                                <div className='flex flex-row space-x-1 items-center'>
                                    <div className='flex flex-row space-x-2 items-center'>
                                        <span className='text-sm'>
                                            14:00
                                        </span>
                                        <div className='w-4 h-4 rounded-full border-2 border-blue-600'/>
                                    </div>
                                    <div className='w-full h-1.5 rounded-full bg-blue-600'/>
                                    <div className='flex flex-row space-x-2 items-center'>
                                        <div className='w-4 h-4 rounded-full border-2 border-blue-600'/>
                                        <span className='text-sm'>
                                            16:40
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
                                            <FontAwesomeIcon icon={ faUser } className='text-red-500' />
                                            <FontAwesomeIcon icon={ faUser } className='text-red-500' />
                                            <FontAwesomeIcon icon={ faUser } className='text-yellow-500' />
                                            <FontAwesomeIcon icon={ faUser } className='text-green-500' />
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
                            Google Maps SDK
                        </div>
                    </div>
                </>
            }
            <FooterComponents/>
        </>
    )
}