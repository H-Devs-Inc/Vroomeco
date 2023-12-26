import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from '../../../addons/images/icon.png';
import user_icon from '../../../addons/temp/user_icon.png';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export default function NavbarComponents({ user }) {
    return(
        <nav className="flex justify-between items-center p-3 bg-white">
            <div className="order-1">
                <img src={ icon } alt='icon_web' className='w-12'></img>
            </div>
            <div className="order-2">
                <ul className='flex flex-row space-x-5 items-center'>
                    <li>
                        <a href='/home' className='text-black underline underline-offset-2 font-bold'>
                            Accueil
                        </a>
                    </li>
                    <li>
                        <a href='/trajects' className='text-sky-900 hover:underline underline-offset-2 font-bold'>
                            Trajets
                        </a>
                    </li>
                    <li>
                        <a href='/about-us' className='text-sky-900 hover:underline underline-offset-2 font-bold'>
                            A Propos de nous
                        </a>
                    </li>
                    <li>
                        <a href='/contact' className='text-sky-900 hover:underline underline-offset-2 font-bold'>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            <div className="order-3">
                <div className='flex flex-row space-x-5 items-center'>
                    <div className=''>
                        <form className=''>
                            <input type='search' className='p-1 bg-gray-100 text-black placeholder:text-black rounded-lg' placeholder='Recherche de trajets'></input>
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
                </div>
            </div>
        </nav>
    )
}