import { useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import FooterComponents from '@/Components/Footer/footer_components';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import main_image from '../../../addons/images/main_image.jpeg'

export default function Login({ auth, status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <Head title="Log in" />
            <AuthenticatedLayout user={ auth.user } />
            <div className='flex justify-between' id='bg-linear-focus'>
                <div className='order-1'>
                    <img src={ main_image } alt='' className='h-full rounded-r-3xl' id='img-auth'></img>
                </div>
                <div className='order-2 p-10 pr-40'>
                    <div className='rounded-lg w-96 mt-12'>
                        <div className='flex flex-col space-y-5 p-5'>
                            <span className='font-bold text-black text-2xl'>
                                Se connecter
                            </span>
                            <p>
                                Vous n'avez pas encore de compte enregistré ? Alors <a href={ route("register") } className='hover:font-bold underline underline-offset-2'>créer-en</a> dès maitenant.
                            </p>
                        </div>
                        <form className='flex flex-col space-y-5 p-5' onSubmit={ submit }>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex flex-row space-x-3 items-center'>
                                    <FontAwesomeIcon icon={ faEnvelope } />
                                    <label className='text-sm uppercase font-bold'>E-Mail</label>
                                </div>
                                <input type='email' className='bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-black' placeholder='Entrez votre adresse e-mail' value={data.email} onChange={(e) => setData('email', e.target.value)}></input>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex flex-row space-x-3 items-center'>
                                    <FontAwesomeIcon icon={ faLock } />
                                    <label className='text-sm uppercase font-bold'>Mot de passe</label>
                                </div>
                                <input type='password' className='bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-black' placeholder='******' value={data.password} onChange={(e) => setData('password', e.target.value)}></input>
                            </div>
                            <div className='flex justify-between'>
                                <div className='order-1'>
                                    <div className='flex flex-row space-x-1 items-center'>
                                        <input type='checkbox' onChange={(e) => {
                                            setData('remember', e.target.checked)
                                        }}
                                        checked={ data.remember }></input>
                                        <label className=''>Se souvenir de moi</label>
                                    </div>
                                </div>
                                <div className='order-2'>
                                    <a href={ route('password.request') } className='text-blue-600 hover:text-blue-700 text-sm hover:underline underline-offset-2'>
                                        Mot de passe oublié?
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col space-y-5 items-center justify-center'>
                                <button className='bg-white hover:bg-transparent border-2 border-white text-black p-2 w-full rounded-lg' type='submit'>
                                    Se connecter
                                </button>
                                <span className='text-black font-bold uppercase text-sm'>
                                    Ou
                                </span>
                                <button className='flex flex-row space-x-3 items-center justify-center bg-blue-600 hover:bg-blue-700 border-2 border-blue-600 hover:border-blue-700 text-white p-2 w-full rounded-lg' type='submit'>
                                    <FontAwesomeIcon icon={ faWandMagicSparkles } />
                                    <span>Lien magique</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <FooterComponents/>
        </>
    );
}
