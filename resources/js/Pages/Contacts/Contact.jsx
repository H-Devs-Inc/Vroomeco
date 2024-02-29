import FooterComponents from "@/Components/Footer/footer_components";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import FormContact from "./Partials/FormContact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import FrenquentlyAskedQuestions from "./Partials/FrequentlyAskedQuestions";

import { Head } from '@inertiajs/react';

export default function Contact({ auth }) {
    return(
        <>
            <Head title="Contact" />
            <AuthenticatedLayout user={auth.user} />
            <div className="p-10" id="main-content">
                <div className="flex justify-between mt-20">
                    <div className="order-1">
                        <FormContact/>
                    </div>
                    <div className="order-2 mr-40">
                        <div className="flex flex-col space-y-10">
                            <span className="text-4xl text-blue-600 font-extrabold" id="title">Comment nous joindre ?</span>
                            <p className="w-96">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="flex flex-col space-y-3">
                                <div className="flex flex-row space-x-2 items-center">
                                    <FontAwesomeIcon icon={ faEnvelope } className="text-green-400" />
                                    <span>contact@vroomeco.com</span>
                                </div>
                                <div className="hidden flex flex-row space-x-2 items-center">
                                    <FontAwesomeIcon icon={ faPhone } className="text-green-400" />
                                    <span>...</span>
                                </div>
                                <div className="hidden flex flex-row space-x-2 items-center">
                                    <FontAwesomeIcon icon={ faLocationDot } className="text-green-400" />
                                    <span>...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FrenquentlyAskedQuestions/>
            <FooterComponents/>
        </>
    )
}