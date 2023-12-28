import { useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import NavbarComponents from '@/Components/Header/navbar_components';
import FooterComponents from '@/Components/Footer/footer_components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

export default function Login({ status, canResetPassword }) {
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
            <NavbarComponents/>
            <div className='flex justify-between'>
                <div className='order-1'>
                    <img src='https://www.permispratique.com/photo/art/grande/59981667-43970396.jpg?v=1635873143' alt='' className='h-full' id='img-auth'></img>
                </div>
                <div className='order-2 p-32'>
                    <div className='rounded-lg w-96' id='bg-linear-focus'>
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
                                    <label>E-Mail</label>
                                </div>
                                <input type='email' className='bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-black' placeholder='Entrez votre adresse e-mail' onChange={(e) => { setData({ email: e.target.value }) }}></input>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex flex-row space-x-3 items-center'>
                                    <FontAwesomeIcon icon={ faLock } />
                                    <label>Mot de passe</label>
                                </div>
                                <input type='password' className='bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-black' placeholder='******' onChange={(e) => { setData({ password: e.target.value }) }}></input>
                            </div>
                            <div className='flex justify-between'>
                                <div className='order-1'>
                                    <div className='flex flex-row space-x-1 items-center'>
                                        <input type='checkbox' onChange={(e) => {
                                            setData({ remember: e.target.checked })
                                        }}></input>
                                        <label className=''>Se souvenir de moi</label>
                                    </div>
                                </div>
                                <div className='order-2'>
                                    <a href='' className='text-sm hover:underline underline-offset-2'>
                                        Mot de passe oublié?
                                    </a>
                                </div>
                            </div>
                            <div className=''>
                                <button className='bg-white hover:bg-transparent border-2 border-white text-black p-2 w-full rounded-lg'>
                                    Se connecter
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
