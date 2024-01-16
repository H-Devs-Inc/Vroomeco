import { Link, Head } from '@inertiajs/react';

import NavbarComponents from '@/Components/Header/navbar_components';
import FooterComponents from '@/Components/Footer/footer_components';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCircle, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons';
import Autocomplete from 'react-autocomplete';

import roads from '../../addons/images/roads.png';
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
            <section className='p-5 h-screen' id='main-content'>
              <div className='flex justify-between p-20'>
                <div className='order-1'>
                  <div className='flex flex-col space-y-10'>
                  <span className='text-4xl text-blue-600 font-extrabold' id='title'>
                      Bienvenue sur VroomEco !
                    </span>
                    <p className='w-3/4'>
                      VroomEco vous offre bien plus qu'un simple moyen de déplacement partagé ; c'est une initiative dédiée à la préservation de notre environnement tout en créant des liens et en simplifiant vos trajets.
                      <br/><br/>
                      Notre plateforme innovante facilite la mise en relation entre conducteurs et passagers qui partagent des itinéraires similaires à travers la Suisse.
                    </p>
                  </div>
                </div>
                <div className='order-2'>
                  <div className='pr-36'>
                    <img src={ group_1 } alt='temp_image' className='w-64 h-96'></img>
                  </div>
                </div>
              </div>
              <div className='flex flex-col space-y-10 items-center justify-center'>
                <span className='text-4xl text-blue-600 font-extrabold' id='title'>
                  Et si on voyageait ensemble ?
                </span>
                <form className='bg-white flex justify-between items-center rounded-lg p-2' id='search-bar-main'>
                  <div className='order-1'>
                    <div className='flex flex-row space-x-2 items-center'>
                      <FontAwesomeIcon icon={ faCircle } className='text-green-400' />
                      <select className='border-0 w-32'>
                        <option>Départ</option>
                        {cities.map((city, index) => (
                          <option>
                            { city }
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className='order-2'>
                    <div className='flex flex-row space-x-2 items-center'>
                      <FontAwesomeIcon icon={ faCircle } className='text-green-400' />
                      <select className='border-0 w-32'>
                        <option>Arrivé</option>
                        {cities.map((city, index) => (
                          <option>
                            { city }
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className='order-3'>
                    <div className='flex flex-row space-x-2 items-center'>
                      <FontAwesomeIcon icon={ faUser } className='text-green-400' />
                      <input type='number' className='text-sky-900 w-16 border-0' value={ number }></input>
                    </div>
                  </div>
                  <div className='order-4'>
                    <div className='flex flex-row space-x-2 items-center'>
                      <FontAwesomeIcon icon={ faCalendarAlt } className='text-green-400' />
                      <input type="date" className='text-sky-900 border-0 w-42'></input>
                    </div>
                  </div>
                  <div className='order-5'>
                    <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg w-28 p-2'>
                      Rechercher
                    </button>
                  </div>
                </form>
              </div>
            </section>
            <section className='p-5' id='secondary'>
              <div className='flex items-center justify-center'>
                  <span className='text-3xl text-blue-500 font-bold'>
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
