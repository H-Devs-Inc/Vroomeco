import { Link, Head } from '@inertiajs/react';

import NavbarComponents from '@/Components/Header/navbar_components';
import FooterComponents from '@/Components/Footer/footer_components';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCircle, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons';
import Autocomplete from 'react-autocomplete';

import tree from '../../addons/images/tree.png';
import tree_symbol from '../../addons/temp/tree_symb.png';
import group_1 from '../../addons/temp/group_0001.png';
import { useState } from 'react';

export default function Welcome({ user }) {
    const [number, setNumber ] = useState(0);

    const cities = [
        "Annecy",
        "Cluses",
        "Genève",
        "Lausanne",
    ]

    return (
        <>
            <Head title="Home" />
            <NavbarComponents/>
            <section className='p-5' id='main-content'>
                <div className='flex flex-row space-x-5 items-center justify-center section-75'>
                    <div className='flex flex-col space-y-10 items-center justify-center'>
                    <span className='text-3xl text-blue-800 font-bold'>
                      Bienvenue sur VroomEco !
                    </span>
                        <p className='w-96 text-center'>
                            VroomEco vous offre bien plus qu'un simple moyen de déplacement partagé ; c'est une initiative dédiée à la préservation de notre environnement tout en créant des liens et en simplifiant vos trajets.
                            <br/><br/>
                            Notre plateforme innovante facilite la mise en relation entre conducteurs et passagers qui partagent des itinéraires similaires à travers la Suisse.
                        </p>
                        <div className='flex flex-row space-x-5'>
                            <a className="appstore-button" href="#">
                                <svg className="appstore-icon" fill="#000000" height="800px" width="800px" version="1.1"
                                     id="Capa_1"
                                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                     viewBox="0 0 22.773 22.773" xml:space="preserve">
                                <g>
                                    <g>
                                        <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573
                                            c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"/>
                                        <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334
                                            c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0
                                            c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019
                                            c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464
                                            c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648
                                            c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"/>
                                    </g>
                                </g>
                                </svg>
                                <span className="texts">
                                    <span className="text-2">Download for iOS</span>

                                </span>
                            </a>
                            <a className="playstore-button" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="playstore-icon"
                                     viewBox="0 0 512 512">
                                    <path
                                        d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                                </svg>
                                <span className="texts">
                                    <span className="text-2">Download for Android</span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className='pt-10 pl-32'>
                        <img src={group_1} alt='temp_image' className='w-64 h-96'></img>
                    </div>
                </div>
                <div className='flex flex-col space-y-10 items-center justify-center section-25'>
                <span className='text-3xl text-blue-800 font-bold'>
                  Et si on voyageait ensemble ?
                </span>
                    <form className='bg-white flex justify-between items-center rounded-lg p-2' id='search-bar-main'>
                        <div className='order-1'>
                            <div className='flex flex-row space-x-2 items-center'>
                                <FontAwesomeIcon icon={faCircle} className='text-green-400'/>
                                <select className='border-0 w-32'>
                                    <option>Départ</option>
                                    {cities.map((city, index) => (
                                        <option>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <span className="order-1 divider"></span>
                        <div className='order-2'>
                            <div className='flex flex-row space-x-2 items-center'>
                                <FontAwesomeIcon icon={faCircle} className='text-green-400'/>
                                <select className='border-0 w-32'>
                                    <option>Arrivé</option>
                                    {cities.map((city, index) => (
                                        <option>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <span className="order-2 divider"></span>
                        <div className='order-3'>
                            <div className='flex flex-row space-x-2 items-center'>
                                <FontAwesomeIcon icon={faUser} className='text-green-400'/>
                                <input type='number' className='text-sky-900 w-16 border-0' value={number}></input>
                            </div>
                        </div>
                        <span className="order-3 divider"></span>
                        <div className='order-4'>
                            <div className='flex flex-row space-x-2 items-center'>
                                <FontAwesomeIcon icon={faCalendarAlt} className='text-green-400'/>
                                <input type="date" className='text-sky-900 border-0 w-42'></input>
                            </div>
                        </div>
                        <div className='order-5'>
                            <button
                                className='bg-indigo-400 hover:bg-indigo-500 text-white font-bold rounded-lg w-28 p-2'>
                                Rechercher
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <section className='p-5' id='secondary'>
                <div className='flex items-center justify-center'>
                  <span className='text-3xl text-blue-800 font-bold'>
                    Pourquoi choisir VroomEco ?
                  </span>
                </div>
                <div className='flex justify-between mt-24'>
                    <div className='order-1'>
                        <div className='flex flex-col space-y-12'>
                            <div className='flex flex-row space-x-5'>
                                <img src={ tree_symbol } alt='symb_tree' className='h-24'></img>
                                <div className='flex flex-col space-y-2'>
                        <span className='text-cyan-900 font-bold'>
                          Trajets flexibles
                        </span>
                                    <p className='w-96 text-sm'>
                                        Que ce soit pour les trajets domicile-travail, les escapades en week-end ou les voyages interurbains, trouvez le covoiturage idéal pour répondre à vos besoins.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row space-x-5'>
                                <img src={ tree_symbol } alt='symb_tree' className='h-24'></img>
                                <div className='flex flex-col space-y-2'>
                        <span className='text-cyan-900 font-bold'>
                          Impact visible
                        </span>
                                    <p className='w-96 text-sm'>
                                        Sur votre tableau de bord personnel, suivez l'empreinte carbone que vous avez contribué à réduire, et soyez fier de chaque kilomètre parcouru ensemble.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row space-x-5'>
                                <img src={ tree_symbol } alt='symb_tree' className='h-24'></img>
                                <div className='flex flex-col space-y-2'>
                        <span className='text-cyan-900 font-bold'>
                          Rencontres enrichissantes
                        </span>
                                    <p className='w-96 text-sm'>
                                        Rencontrez de nouvelles personnes qui partagent vos intérêts et vos valeurs tout en partageant un trajet agréable. Covoiturer, c'est aussi tisser des liens sociaux.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='order-2'>
                        {/*<img src={ tree } alt='tree_arborescence' className='h-96'></img>*/}
                    </div>
                    <div className='order-3'>
                        <div className='flex flex-col space-y-12'>
                            <div className='flex flex-row space-x-5'>
                                <div className='flex flex-col items-end space-y-2'>
                        <span className='text-cyan-900 font-bold'>
                          Ecologie
                        </span>
                                    <p className='w-96 text-sm text-end'>
                                        Parce que chaque kilomètre partagé réduit notre empreinte carbone, vous contribuez activement à la préservation de la beauté naturelle qui nous entoure.
                                    </p>
                                </div>
                                <img src={ tree_symbol } alt='symb_tree' className='h-24'></img>
                            </div>
                            <div className='flex flex-row space-x-5'>
                                <div className='flex flex-col items-end space-y-2'>
                        <span className='text-cyan-900 font-bold'>
                          Sécurité
                        </span>
                                    <p className='w-96 text-sm text-end'>
                                        Notre système de vérification des profils et les évaluations mutuelles garantissent une expérience de covoiturage sûre et fiable.
                                    </p>
                                </div>
                                <img src={ tree_symbol } alt='symb_tree' className='h-24'></img>
                            </div>
                            <div className='flex flex-row space-x-5'>
                                <div className='flex flex-col items-end space-y-2'>
                        <span className='text-cyan-900 font-bold'>
                          Couverture nationale
                        </span>
                                    <p className='w-96 text-sm text-end'>
                                        Que vous souhaitiez explorer les montagnes, les lacs ou les villes suisses, notre réseau de covoiturage s'étend à travers tout le pays
                                    </p>
                                </div>
                                <img src={ tree_symbol } alt='symb_tree' className='h-24'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='p-5'>
                <div className='flex items-center justify-center'>
                  <span className='text-3xl text-blue-800 font-bold'>
                    Ils nous font confiances
                  </span>
                </div>
                <div className='flex justify-center items-center p-5'>
                    newsletter
                </div>
                <div className='flex justify-center items-center bg-white shadow-xl p-3' id='middle-content-newsletter'>
                    <div className='flex justify-between'>
                        <div className='order-1 p-1.5'>
                    <span className=''>
                      Souscrivez à notre <a href='/#' className='hover:underline underline-offset-2 font-bold'>newsletters</a>*
                    </span>
                        </div>
                        <div className='order-2 ml-10'>
                            <form className='flex flex-row items-center'>
                                <input className='p-1.5 bg-neutral-200 w-52 border-0 rounded-l-lg' placeholder='Entrez votre e-mail'></input>
                                <button type='submit' className='bg-indigo-400 hover:bg-indigo-500 text-sm uppercase font-bold text-white p-2 rounded-r-lg'>
                                    S'abonner
                                </button>
                            </form>
                        </div>
                        <div className='order-3'>

                        </div>
                    </div>
                </div>
            </section>
            <FooterComponents/>
        </>
    );
}
