import { faChevronRight, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterComponents = () => {
    return(
        <footer className="" id="footer">
            <div className="flex justify-between p-5">
                <div className="order-1">
                    <div className="flex flex-col space-y-5">
                        <span className="text-white font-bold text-xl uppercase">
                            VroomEco
                        </span>
                        <p className="text-gray-200 w-96">
                            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        </p>
                    </div>
                </div>
                <div className="order-2">
                    <div className="flex flex-row space-x-24">
                        <div className="flex flex-col space-y-5">
                            <span className="text-white font-bold uppercase">
                                Explore
                            </span>
                            <div className="flex flex-row space-x-10 text-gray-200">
                                <ul className="flex flex-col space-y-3">
                                    <li>
                                        <div className="flex flex-row space-x-2 items-center">
                                            <FontAwesomeIcon icon={ faChevronRight } />
                                            <span>Redirect</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-row space-x-2 items-center">
                                            <FontAwesomeIcon icon={ faChevronRight } />
                                            <span>Redirect</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-row space-x-2 items-center">
                                            <FontAwesomeIcon icon={ faChevronRight } />
                                            <span>Redirect</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="flex flex-col space-y-3">
                                    <li>
                                        <div className="flex flex-row space-x-2 items-center">
                                            <FontAwesomeIcon icon={ faChevronRight } />
                                            <span>Redirect</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-row space-x-2 items-center">
                                            <FontAwesomeIcon icon={ faChevronRight } />
                                            <span>Redirect</span>
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
                        <div className="flex flex-col space-y-5">
                            <span className="text-white font-bold uppercase">
                                Contact Us
                            </span>
                            <ul className="flex flex-col space-y-3 text-gray-200">
                                <li>
                                    <div className="flex flex-row space-x-2 items-center">
                                        <FontAwesomeIcon icon={ faLocationDot } />
                                        <span>Adresse here</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-row space-x-2 items-center">
                                        <FontAwesomeIcon icon={ faPhone } />
                                        <span>Phone here</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-row space-x-2 items-center">
                                        <FontAwesomeIcon icon={ faEnvelope } />
                                        <span>Email here</span>
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