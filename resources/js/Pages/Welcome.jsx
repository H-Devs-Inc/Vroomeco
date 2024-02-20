import { Head } from '@inertiajs/react';
import { useRef, useState } from 'react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import FooterComponents from '@/Components/Footer/footer_components';

import { StandaloneSearchBox, useJsApiLoader } from '@react-google-maps/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCircle, faUser } from '@fortawesome/free-solid-svg-icons';

import video from '../../addons/videos/video_official.mp4';

import roads from '../../addons/images/roads.png';
import tree from '../../addons/images/tree.png';
import tree_symbol from '../../addons/temp/tree_symb.png';
import group_1 from '../../addons/temp/group_0001.png';

export default function Welcome({ auth }) {
    const inputRef = useRef();
    const inputRef_1 = useRef();

    const [ options, setOptions ] = useState({
      departure_select: '',
      arrival_select: '',
      city_departure: 'Départ',
      city_arrival: 'Arrivé',
      date: ''
    })

    const [number, setNumber ] = useState(0);

    const { isLoaded } = useJsApiLoader({
      id: 'google-maps-script',
      googleMapsApiKey: "AIzaSyAMAOUTF_smICXoMH3bWrSpGTN7ltamHO4",
      libraries: ['places']
    })

    const handlePlaceChanged = () => {
      const [ place ] = inputRef.current.getPlaces();
      if(place) {
        console.log(place.formatted_address);
        setOptions({
          departure_select: place.formatted_address
        })
      }
    }

    const handlePlaceChanged_1 = () => {
      const [ place_1 ] = inputRef_1.current.getPlaces();
      if(place_1) {
        console.log(place_1.formatted_address)
        setOptions({
          arrival_select: place_1.formatted_address
        })
      }
    }

    async function Search() {
      console.log(options);
      axios.post('/api/search', {
        "ville_depart": options.city_departure,
        "ville_arriver": options.city_arrival,
        "date_traject": options.date
      })
    }

    return (
        <>
            <Head title="Home" />
            <AuthenticatedLayout user={auth.user} />
            <section className='p-5 h-screen' id='main-content'>
              <div className='flex flex-row space-x-12 md:p-12'>
                <div className='flex flex-col space-y-10'>
                  <span className='text-4xl text-blue-600 font-extrabold' id='title'>
                    Bienvenue sur VroomEco !
                  </span>
                  <div className='flex flex-col space-y-5'>
                    <p className='w-80 md:w-3/4'>
                      VroomEco vous offre bien plus qu'un simple moyen de déplacement, c'est une initiative dédiée à la préservation de notre environnement tout en créant des liens. L'aspect économique joue aussi un grand rôle dans un service de covoiturage, aussi cette méthode permet de simplifier vos trajets.
                    </p>
                    <ul className='flex flex-row space-x-5 md:w-3/4'>
                      <li>
                        <span className='font-bold'>
                          Ecologie
                        </span>
                      </li>
                      <li>
                        <span className='font-bold'>
                          Economie
                        </span>
                      </li>
                      <li>
                        <span className='font-bold'>
                          Communautaire
                        </span>
                      </li>
                    </ul>
                    <p className='w-80 md:w-3/4'>
                      Notre plateforme innovante facilite la mise en relation entre conducteurs et passagers qui partagent des itinéraires similaires à travers la Suisse et au delà de ses frontières.
                    </p>
                  </div>
                </div>
                <video controls autoplay className='w-96 h-96 rounded-lg'>
                  <source src={ video } type='video/mp4' />
                </video>
              </div>
              <div className='flex flex-col space-y-10 items-center justify-center sm:mt-5'>
                <span className='text-4xl text-blue-600 font-extrabold' id='title'>
                  Et si on voyageait ensemble ?
                </span>
                <div className='flex flex-row'>
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
                              <input type='text' value={ options.departure_select !== '' ? options.departure_select : options.city_departure } className='form-control rounded-lg text-black placeholder:text-black border border-gray-200' placeholder='Départ'
                                onChange={(e) => {
                                  setOptions({
                                    city_departure: e.target.value
                                  })
                                }}>
                              </input>
                            </StandaloneSearchBox>
                        </>
                        :
                        <>
                          none
                        </>}
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
                              <input type='text' value={ options.arrival_select !== '' ? options.arrival_select : options.city_arrival } className='form-control rounded-lg text-black placeholder:text-black border border-gray-200' placeholder='Arrivé'></input>
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
                        <input type='number' value={ number < 0 ? 0 : number } onChange={(e) => { setNumber(e.target.value) }} placeholder='0' className='w-14 rounded-lg text-black placeholder:text-black border border-gray-200' />
                      </div>
                    </div>
                    <div className='ml-5 order-4'>
                      <div className='flex flex-row space-x-3 items-center'>
                        <FontAwesomeIcon icon={ faCalendarAlt } className='text-green-500' />
                        <input type='date' className='rounded-lg text-black placeholder:text-black border border-gray-200' onChange={(e) => {
                          setOptions({ date: e.target.value });
                        }}/>
                      </div>
                    </div>
                  </div>
                  <button className='text-white font-bold flex items-center justify-center p-3 bg-blue-600 hover:bg-blue-700 rounded-r-xl' onClick={(e) => {
                    Search();
                  }}>
                    Rechercher
                  </button>
                </div>
              </div>
            </section>
            <section className='p-5 hidden md:block' id='secondary'>
              <div className='flex items-center justify-center'>
                  <span className='text-4xl text-blue-600 font-extrabold' id="title">
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
                  <img src={ tree } alt='tree_arborescence' className='h-96'></img>
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
                  <span className='text-4xl text-blue-600 font-extrabold' id='title'>
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
                      Souscrivez à notre <a href={ '/newsletters' } className='hover:underline underline-offset-2 font-bold'>newsletters</a>*
                    </span>
                  </div>
                  <div className='order-2 ml-10'>
                    <form className='flex flex-row items-center'>
                      <input className='p-1.5 bg-neutral-200 w-52 border-0 rounded-l-lg' placeholder='Entrez votre e-mail'></input>
                      <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-sm uppercase font-bold text-white p-2 rounded-r-lg'>
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
