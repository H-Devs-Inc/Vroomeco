import FooterComponents from '@/Components/Footer/footer_components';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { faArrowRight, faCar, faCircleInfo, faGear, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <>
            <AuthenticatedLayout user={auth.user} />
            <Head title="Profile" />
            <section className='' id='profile-bg'>
                <div className='p-5 flex items-center justify-center'>
                    <div className='bg-white shadow-2xl p-2 rounded-xl' id='profile-card'>
                        <div className='flex justify-between items-center p-5'>
                            <div className='order-1'>
                                <div className='flex flex-row space-x-5 items-center'>
                                    <img src='https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg' alt='profile-icon' className='w-16 h-16 rounded-full'></img>
                                    <div className='flex flex-col space-y-1'>
                                        <div className='flex flex-row space-x-2 items-center'>
                                            <span className='font-bold text-xl text-black'>
                                                { auth.user.name }
                                            </span>
                                            <a href='/#' className=''>
                                                <FontAwesomeIcon icon={ faCircleInfo } />
                                            </a>
                                        </div>
                                        <p className='text-sm'>
                                            Annecy, Haute-Savoie
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='order-2'>
                                <div className='flex flex-row space-x-5 items-center'>
                                    <button className='bg-blue-600 border hover:bg-transparent hover:text-blue-600 border-blue-600 text-white font-bold uppercase text-sm rounded-lg p-2 w-28' disabled>
                                        Suivre
                                    </button>
                                    <button className='bg-transparent border border-black hover:border-gray-600 text-black hover:text-gray-600 font-bold uppercase text-sm rounded-lg p-2 w-28'>
                                        Contacter
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='p-5'>
                            <section className='bg-neutral-100 p-2 rounded-lg'>
                                <p>
                                { auth.user.biographie }
                                </p>
                            </section>
                            <hr className="w-full h-0.5 mx-auto my-2 bg-gray-900 border-0 rounded md:my-7"></hr>
                            <section className='mt-10'>
                                <div className='flex justify-between'>
                                    <div className='order-1'>
                                        <span className='text-sm text-black font-bold uppercase'>
                                            Trajet(s) récent(s):
                                        </span>
                                    </div>
                                    <div className='order-2'>
                                        <a href='/#' className='text-sm text-sky-500 hover:text-sky-600 hover:underline underline-offset-2 lowercase'>
                                                Voir plus
                                            </a>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <div className='flex flex-row space-x-2 items-center'>
                                    <div className="bg-neutral-100 shadow-md p-5 w-52 rounded-lg">
                                    <div className="flex justify-between">
                                        <div className="order-1">
                                            <div className="flex flex-row space-x-2 items-center">
                                                <span className="text-black uppercase font-bold">
                                                    Paris
                                                </span>
                                                <FontAwesomeIcon icon={ faArrowRight } />
                                                <span className="text-black uppercase font-bold">
                                                    Lille
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
                                                    00:00
                                                </span>
                                                <div className="flex flex-row space-x-1 items-center text-indigo-400">
                                                    <FontAwesomeIcon icon={ faCar } className="text-sm"/>
                                                    <span className="text-sm p-1">
                                                        2h30
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="font-bold text-black">
                                                02:30
                                            </span>
                                        </div>
                                        <div className="items-center text-center">
                                            <div className="w-3 h-3 rounded-full bg-transparent border-2 border-green-400"></div>
                                            <div class="inline-block h-16 w-0.5 bg-green-400 opacity-100 mt-1"></div>
                                            <div className="w-3 h-3 rounded-full bg-transparent border-2 border-green-400"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-neutral-100 shadow-md p-5 w-52 rounded-lg">
                                    <div className="flex justify-between">
                                        <div className="order-1">
                                            <div className="flex flex-row space-x-2 items-center">
                                                <span className="text-black uppercase font-bold">
                                                    Paris
                                                </span>
                                                <FontAwesomeIcon icon={ faArrowRight } />
                                                <span className="text-black uppercase font-bold">
                                                    Lille
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
                                                    00:00
                                                </span>
                                                <div className="flex flex-row space-x-1 items-center text-indigo-400">
                                                    <FontAwesomeIcon icon={ faCar } className="text-sm"/>
                                                    <span className="text-sm p-1">
                                                        2h30
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="font-bold text-black">
                                                02:30
                                            </span>
                                        </div>
                                        <div className="items-center text-center">
                                            <div className="w-3 h-3 rounded-full bg-transparent border-2 border-green-400"></div>
                                            <div class="inline-block h-16 w-0.5 bg-green-400 opacity-100 mt-1"></div>
                                            <div className="w-3 h-3 rounded-full bg-transparent border-2 border-green-400"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-neutral-100 shadow-md p-5 w-52 rounded-lg">
                                    <div className="flex justify-between">
                                        <div className="order-1">
                                            <div className="flex flex-row space-x-2 items-center">
                                                <span className="text-black uppercase font-bold">
                                                    Paris
                                                </span>
                                                <FontAwesomeIcon icon={ faArrowRight } />
                                                <span className="text-black uppercase font-bold">
                                                    Lille
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
                                                    00:00
                                                </span>
                                                <div className="flex flex-row space-x-1 items-center text-indigo-400">
                                                    <FontAwesomeIcon icon={ faCar } className="text-sm"/>
                                                    <span className="text-sm p-1">
                                                        2h30
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="font-bold text-black">
                                                02:30
                                            </span>
                                        </div>
                                        <div className="items-center text-center">
                                            <div className="w-3 h-3 rounded-full bg-transparent border-2 border-green-400"></div>
                                            <div class="inline-block h-16 w-0.5 bg-green-400 opacity-100 mt-1"></div>
                                            <div className="w-3 h-3 rounded-full bg-transparent border-2 border-green-400"></div>
                                        </div>
                                    </div>
                                </div>
                                    </div>
                                </div>
                            </section>
                            <section className='mt-10'>
                                <div className='flex justify-between'>
                                    <div className='order-1'>
                                        <div className='flex flex-row space-x-2 items-center'>
                                            <span className='text-sm text-black font-bold uppercase'>   
                                                Dernier(s) avis:
                                            </span>
                                            <div className='flex flex-row space-x-1 items-center'>
                                                <span className='text-sm text-yellow-400 font-bold uppercase'>
                                                    3.9
                                                </span>
                                                <FontAwesomeIcon icon={ faStar } className='text-yellow-400 w-4 h-4' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='order-2'>
                                        <div className='flex flex-row space-x-2 items-center'>
                                            
                                            <a href='/#' className='text-sm text-sky-500 hover:text-sky-600 hover:underline underline-offset-2 lowercase'>
                                                Voir plus
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <div className='flex flex-row space-x-2 items-center'>
                                        <div className='bg-neutral-100 shadow-md p-5 w-52 rounded-lg'>
                                            <div className='flex justify-between items-center'>
                                                <div className='order-1'>
                                                    <img src='https://static.thenounproject.com/png/2166010-200.png' alt='' className='w-10 h-10'></img>
                                                </div>
                                                <div className='order-2'>
                                                    <div className='flex flex-col space-y-1'>
                                                        <span className='text-sm font-bold text-black uppercase'>
                                                            Jonh Doe
                                                        </span>
                                                        <small className='flex flex-row space-x-2 items-center'>
                                                            <FontAwesomeIcon icon={ faStar } className='text-yellow-400'/>
                                                            <span className='text-sm text-yellow-400 font-bold uppercase'>
                                                                3.9
                                                            </span>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mt-5'>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                        <div className='bg-neutral-100 shadow-md p-5 w-52 rounded-lg'>
                                            <div className='flex justify-between items-center'>
                                                <div className='order-1'>
                                                    <img src='https://static.thenounproject.com/png/2166010-200.png' alt='' className='w-10 h-10'></img>
                                                </div>
                                                <div className='order-2'>
                                                    <div className='flex flex-col space-y-1'>
                                                        <span className='text-sm font-bold text-black uppercase'>
                                                            Jonh Doe
                                                        </span>
                                                        <small className='flex flex-row space-x-2 items-center'>
                                                            <FontAwesomeIcon icon={ faStar } className='text-yellow-400'/>
                                                            <span className='text-sm text-yellow-400 font-bold uppercase'>
                                                                3.9
                                                            </span>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mt-5'>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                        <div className='bg-neutral-100 shadow-md p-5 w-52 rounded-lg'>
                                            <div className='flex justify-between items-center'>
                                                <div className='order-1'>
                                                    <img src='https://static.thenounproject.com/png/2166010-200.png' alt='' className='w-10 h-10'></img>
                                                </div>
                                                <div className='order-2'>
                                                    <div className='flex flex-col space-y-1'>
                                                        <span className='text-sm font-bold text-black uppercase'>
                                                            Jonh Doe
                                                        </span>
                                                        <small className='flex flex-row space-x-2 items-center'>
                                                            <FontAwesomeIcon icon={ faStar } className='text-yellow-400'/>
                                                            <span className='text-sm text-yellow-400 font-bold uppercase'>
                                                                3.9
                                                            </span>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mt-5'>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <FooterComponents/>
        </>
    );
}
