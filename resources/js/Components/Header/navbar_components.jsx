import icon from '../../../addons/images/icon.png';
import user_icon from '../../../addons/temp/user_icon.png';


export default function NavbarComponents({ user }) {
    return(
        <nav className="flex justify-between items-center p-3 bg-white">
            <div className="order-1">
                <img src={ icon } alt='icon_web' className='w-12'></img>
            </div>
            <div className="order-2">
                <ul className='flex flex-row space-x-5 items-center'>
                    <li>
                        <a href='/#' className='text-black underline underline-offset-2 font-bold'>
                            Accueil
                        </a>
                    </li>
                    <li>
                        <a href='/#' className='text-sky-900 hover:underline underline-offset-2 font-bold'>
                            Trajets
                        </a>
                    </li>
                    <li>
                        <a href='/#' className='text-sky-900 hover:underline underline-offset-2 font-bold'>
                            A Propos de nous
                        </a>
                    </li>
                    <li>
                        <a href='/#' className='text-sky-900 hover:underline underline-offset-2 font-bold'>
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
                                <div className='flex flex-row space-x-3'>
                                    <a href={ route('login') } className='bg-cyan-800 hover:bg-cyan-900 text-white p-1 rounded-md'>
                                        Se connecter
                                    </a>
                                    <a href={ route('register') } className='bg-white hover:bg-gray-100 border border-black rounded-lg p-1'>
                                        S'enregistrer
                                    </a>
                                </div>
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