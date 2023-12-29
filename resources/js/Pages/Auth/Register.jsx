import { useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import NavbarComponents from '@/Components/Header/navbar_components';
import FooterComponents from '@/Components/Footer/footer_components';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <>
            <Head title="Register" />
            <NavbarComponents/>
            <div className='flex justify-between'>
                <div className='order-1'>
                    <img src='https://www.permispratique.com/photo/art/grande/59981667-43970396.jpg?v=1635873143' alt='' className='h-full' id='img-auth'></img>
                </div>
                <div className='order-2 mr-32 mt-10'>
                    <div className='rounded-lg w-96' id='bg-linear-focus'>
                        <div className='flex flex-col space-y-5 p-5'>
                            <span className='font-bold text-black text-2xl'>
                                M'enregistrer
                            </span>
                            <p>
                                Vous avez déjà un compte ? Alors <a href={ route("login") } className='hover:font-bold underline underline-offset-2'>connectez-vous</a> dès maitenant.
                            </p>
                        </div>
                        <form className='flex flex-col space-y-5 p-5' onSubmit={ submit }>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex flex-row space-x-3 items-center'>
                                    <FontAwesomeIcon icon={ faEnvelope } />
                                    <label>E-Mail</label>
                                </div>
                                <input type='email' className='bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-black' placeholder='Entrez votre adresse e-mail' value={data.email} onChange={(e) => setData('email', e.target.value)}></input>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex flex-row space-x-3 items-center'>
                                    <FontAwesomeIcon icon={ faUser } />
                                    <label>Nom d'utilisateur</label>
                                </div>
                                <input type='text' className='bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-black' placeholder="Entrez votre nom d'utilisateur" value={data.name} onChange={(e) => setData('name', e.target.value)}></input>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex flex-row space-x-3 items-center'>
                                    <FontAwesomeIcon icon={ faLock } />
                                    <label>Mot de passe</label>
                                </div>
                                <input type='password' className='bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-black' placeholder='******' value={data.password} onChange={(e) => setData('password', e.target.value)}></input>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex flex-row space-x-3 items-center'>
                                    <FontAwesomeIcon icon={ faLock } />
                                    <label>Confirmer mot de passe</label>
                                </div>
                                <input type='password' className='bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-black' placeholder='******' value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)}></input>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <span className=''>
                                    Authentification a partir de 
                                </span>
                                <div className='flex justify-between'>
                                    <div className='order-1'>
                                        google
                                    </div>
                                    <div className='order-2'>
                                        facebook
                                    </div>
                                    <div className='order-3'>
                                        apple
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <button className='bg-white hover:bg-transparent border-2 border-white text-black p-2 w-full rounded-lg'>
                                    S'enregistrer
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
