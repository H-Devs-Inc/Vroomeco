import { faChevronRight, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterComponents = () => {
    return(
        <footer className="z-60" id="footer">
            <div className="flex justify-between p-12">
                <div className="order-1">
                    <div className="flex flex-col space-y-5">
                        <span className="text-white font-bold text-xl uppercase">
                            VroomEco
                        </span>
                        <p className="text-neutral-100 w-96">
                            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        </p>
                    </div>
                </div>
                <div className="order-2">
                    <div className="flex flex-row space-x-12">
                        <div className="flex flex-col space-y-5">
                            <span className="text-white font-bold uppercase text-xl">
                                Explorez
                            </span>
                            <div className="flex flex-row space-x-10 text-neutral-100">
                                <ul className="flex flex-col space-y-3">
                                    <li>
                                        <div className="flex flex-row space-x-2 items-center">
                                            <FontAwesomeIcon icon={ faChevronRight } />
                                            <a href="/#" className="hover:underline underline-offset-2">
                                                Accueil
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-row space-x-2 items-center">
                                            <FontAwesomeIcon icon={ faChevronRight } />
                                            <a href="/#" className="hover:underline underline-offset-2">
                                                Trajets
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-row space-x-2 items-center">
                                            <FontAwesomeIcon icon={ faChevronRight } />
                                            <a href="/#" className="hover:underline underline-offset-2">
                                                A propos de nous
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="flex flex-col space-y-3">
                                    <li>
                                        <div className="flex flex-row space-x-2 items-center">
                                            <FontAwesomeIcon icon={ faChevronRight } />
                                            <a href="/#" className="hover:underline underline-offset-2">
                                                Profil
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-row space-x-2 items-center">
                                            <FontAwesomeIcon icon={ faChevronRight } />
                                            <a href="/#" className="hover:underline underline-offset-2">
                                                Paramètres
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-row space-x-2 items-center">
                                            <FontAwesomeIcon icon={ faChevronRight } />
                                            <span>Redirect</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="inline-block h-48 min-h-[1em] w-0.5 self-stretch bg-blue-700 opacity-100"></div>
                        <div className="flex flex-col space-y-5">
                            <span className="text-white font-bold uppercase text-xl">
                                Légal
                            </span>
                            <ul className="flex flex-col space-y-3 text-neutral-100">
                                <li>
                                    <div className="flex flex-row space-x-2 items-center">
                                        <FontAwesomeIcon icon={ faChevronRight } />
                                        <a href="/#" className="hover:underline underline-offset-2">
                                            Politique de confidentialité
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-row space-x-2 items-center">
                                        <FontAwesomeIcon icon={ faChevronRight } />
                                        <a href="/#" className="hover:underline underline-offset-2">
                                            Conditions d'utilisations
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-row space-x-2 items-center">
                                        <FontAwesomeIcon icon={ faChevronRight } />
                                        <a href="/#" className="hover:underline underline-offset-2">
                                            Charte Graphique
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="inline-block h-48 min-h-[1em] w-0.5 self-stretch bg-blue-700 opacity-100"></div>
                        <div className="flex flex-col space-y-5">
                            <span className="text-white font-bold uppercase text-xl">
                                Nous contacter
                            </span>
                            <ul className="flex flex-col space-y-3 text-neutral-100">
                                <li>
                                    <div className="flex flex-row space-x-2 items-baseline">
                                        <FontAwesomeIcon icon={ faLocationDot } />
                                        <span className="w-52">00 Avenue X, Ville, Code Postal, Pays</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-row space-x-2 items-center">
                                        <FontAwesomeIcon icon={ faPhone } />
                                        <span>+41 000 00 000</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-row space-x-2 items-center">
                                        <FontAwesomeIcon icon={ faEnvelope } />
                                        <span>support@vroomeco.con</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center bg-white p-2">
                <p>
                    Copyright © 2022 by H-Devs Inc. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default FooterComponents;