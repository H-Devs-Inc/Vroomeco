import FooterComponents from "@/Components/Footer/footer_components";
import NavbarComponents from "@/Components/Header/navbar_components";
import FormContact from "./Partials/FormContact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import FrenquentlyAskedQuestions from "./Partials/FrequentlyAskedQuestions";

const Contacts = () => {
    return(
        <>
            <NavbarComponents/>
            <div className="p-5">
                <div className="flex justify-between">
                    <div className="order-1">
                        <FormContact/>
                    </div>
                    <div className="order-2 mr-32 p-5">
                        <div className="flex flex-col space-y-5">
                            <span className="text-2xl text-cyan-900 font-bold">
                                Mettez vous en contact avec nous
                            </span>
                            <p>
                                Loreum Ipseum
                            </p>
                        </div>
                        <div className="mt-24 rounded-lg p-5" id="bg-linear-focus">
                            <ul className="flex flex-col space-y-5">
                                <li>
                                    <div className="flex flex-row space-x-3 items-center">
                                        <FontAwesomeIcon icon={ faEnvelope } />
                                        <span className="text-sm font-bold">support@vroomeco.con</span>
                                    </div> 
                                </li>
                                <li>
                                    <div className="flex flex-row space-x-3 items-center">
                                        <FontAwesomeIcon icon={ faPhone } />
                                        <span className="text-sm font-bold">+41 000 00 000</span>
                                    </div> 
                                </li>
                                <li>
                                    <div className="flex flex-row space-x-3 items-center">
                                        <FontAwesomeIcon icon={ faLocationDot } />
                                        <span className="text-sm font-bold">00 Avenue X, Ville, Code Postal, Pays</span>
                                    </div> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <FrenquentlyAskedQuestions/>
            </div>
            <FooterComponents/>
        </>
    )
}

export default Contacts;