import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from '../../addons/images/icon.png';
import user_icon from '../../addons/temp/user_icon.png';
import { faFlag, faGear, faMoon, faRightFromBracket, faSearch, faSun, faUser, faWrench } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [ theme, setTheme ] = useState(true);

    return (
        <nav className='flex justify-between items-center p-3 bg-white border-b-2 border-neutral-100'>
            <div className="order-1">
                <img src={ icon } alt='icon_web' className='w-12'></img>
            </div>
            <div className="order-2">
                <ul className='flex flex-row space-x-10 items-center'>
                    <li>
                        <a href={"/home"} className='text-black hover:underline underline-offset-2 uppercase'>
                            Accueil
                        </a>
                    </li>
                    <li>
                        <a href={"/trajects"} className='text-black hover:underline underline-offset-2 uppercase'>
                            Trajets
                        </a>
                    </li>
                    <li>
                        <a href={ "/about-us" } className='text-black hover:underline underline-offset-2 uppercase'>
                            A Propos de nous
                        </a>
                    </li>
                    <li>
                        <a href={ "/contact" } className='text-black hover:underline underline-offset-2 uppercase'>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            <div className="order-3">
                <div className='flex flex-row space-x-5 items-center'>
                    <div className='flex flex-row space-x-1 items-center bg-gray-100 p-1 rounded-lg'>
                        <FontAwesomeIcon icon={ faSearch }/>
                        <form className='bg-gray-100'>
                            <input type='search' className='p-1 bg-gray-100 text-black placeholder:text-black rounded-lg border-none' placeholder='Recherche de trajets'></input>
                        </form>
                    </div>
                    <div className=''>
                        {!user ? 
                            <>
                                <a href={ route("login") } className=''>
                                    <FontAwesomeIcon icon={ faUser } />
                                </a>
                            </>
                        :
                            <>
                                <span>
                                    { user.name }
                                </span>
                            </>
                        }
                    </div>
                    <div>
                        <button className='text-gray-500' onClick={(e) => {
                            const element = document.getElementById('dropdown-menu');

                            if(element.style.display === "block") {
                                element.style.display = "none"
                            } else {
                                element.style.display = "block"
                            }
                        }}>
                            <FontAwesomeIcon icon={ faGear } />
                        </button>
                        <div className='hidden absolute right-1 mt-1 w-40 top-16 bg-gray-900/25 p-2 rounded-lg' id='dropdown-menu'>
                            <ul className='flex flex-col space-y-5'>
                                <li>
                                    <a href={route('profile.edit')} className='flex flex-row space-x-3 items-center'>
                                        <FontAwesomeIcon icon={ faWrench } className='text-neutral-900' />
                                        <span className='font-bold text-white hover:text-neutral-100 uppercase text-sm'>
                                            Paramètres
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <div className='flex flex-row space-x-3 items-center'>
                                        <FontAwesomeIcon icon={ faFlag } className='text-neutral-900' />
                                        <select className='border-none bg-transparent w-full font-bold text-white hover:text-neutral-100'>
                                            <option className='text-black'>
                                                FR
                                            </option>
                                            <option className='text-black'>
                                                EN
                                            </option>
                                            <option className='text-black'>
                                                DE
                                            </option>
                                            <option className='text-black'>
                                                IT
                                            </option>
                                            <option className='text-black'>
                                                ES
                                            </option>
                                        </select>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex flex-row space-x-3 items-center'>
                                        <FontAwesomeIcon icon={ theme === true ? faSun : faMoon } className='text-neutral-900' />
                                        <button className='font-bold text-white hover:text-neutral-100 uppercase text-sm' onClick={(e) => {
                                            theme === true ? setTheme(false) : setTheme(true)
                                        }}>
                                            { theme === true ? "Mode clair" : "Mode sombre"}
                                        </button>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex flex-row space-x-3 items-center'>
                                        <FontAwesomeIcon icon={ faRightFromBracket } className='text-red-400' />
                                        <Link href={route('logout')} method='post' as='button' className='font-bold text-red-500 hover:text-red-600 uppercase text-sm'>
                                            Déconnexion
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
}
