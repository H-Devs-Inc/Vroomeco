import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

import main_image from '../../../addons/images/main_image.jpeg';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import FooterComponents from '@/Components/Footer/footer_components';

export default function ForgotPassword({ auth, status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <>
            <Head title="Forgot Password" />
            <AuthenticatedLayout user={auth.user} />
            <section className='h-full' id='bg-linear-focus'>
                <div className='flex justify-center items-center flex-col space-y-10 p-36'>
                    <form className='flex flex-col space-y-5 w-96 bg-white p-5 rounded-lg' onSubmit={ submit }>
                        <span className='font-bold text-black text-2xl'>
                            Mot de passe oublié
                        </span>
                        <p className='text-sm'>
                            Vous avez oublier votre mot de passe ? Entrez votre adresse e-mail et nous vous renvoyer un lien afin de le modifier.
                        </p>
                        <div className='flex flex-col space-y-2 pt-5'>
                            <div className='flex flex-row space-x-3 items-center'>
                                <FontAwesomeIcon icon={ faEnvelope } />
                                <label className='text-sm uppercase font-bold'>E-Mail</label>
                            </div>
                            <input type='email' className='bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-black' placeholder='Entrez votre adresse e-mail' value={data.email} onChange={(e) => setData('email', e.target.value)}></input>
                        </div>
                        <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 flex items-center justify-center rounded-lg'>
                            Réinitialiser mon mot de passe
                        </button>
                    </form>
                </div>
            </section>
            <FooterComponents/>
        </>
    );
}
