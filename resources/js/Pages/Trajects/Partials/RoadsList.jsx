import { faArrowRight, faArrowRightArrowLeft, faCar, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const RoadsList = () => {
    const [ data, setData ] = useState([]);

    const openModal = () => {
        const element = document.getElementById('new_traject');
        console.log(element);

        element.style.display = 'block';
    }


    return(
        <>
            {!data[0] ?
                <>
                    <div className="p-5">
                        <div className="flex flex-col space-y-5">
                            <span>
                                Aucun trajets disponible selon vos recherches. Nous vous proposons alors ceux-ci !
                            </span>
                            <button className="flex flex-row space-x-2 justify-center items-center w-52 p-3 rounded-lg text-black font-bold" id="bg-linear" onClick={(e) => {
                                openModal()
                            }}>
                                <FontAwesomeIcon icon={ faPlus } />
                                <span>
                                    Proposer un trajet
                                </span>
                            </button>
                        </div>
                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        <div className="mt-6">
                            <span className="text-black font-bold uppercase text-2xl">
                                Suggestions
                            </span>
                            <div className="mt-5" id="roads_suggests_container">
                                <div className="bg-neutral-100 shadow-md hover:shadow-xl p-5 w-52 rounded-lg">
                                    <div className="flex justify-between">
                                        <div className="order-1">
                                            <div className="flex flex-row space-x-2 items-center">
                                                <span className="text-black uppercase font-bold">
                                                    Paris
                                                </span>
                                                <FontAwesomeIcon icon={ faArrowRight } />
                                                <span className="text-black uppercase font-bold">
                                                    Lille
                                                </span>
                                            </div>
                                        </div>
                                        <div className="order-2">
                                            <div>
                                                <a href="/#">
                                                    <img src="https://static.generated.photos/vue-static/face-generator/landing/wall/16.jpg" alt="road_user" className="w-7 h-7 rounded-full"></img>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-3 mt-5">
                                        <div className="flex flex-col space-y-3">
                                            <div className="flex flex-col space-y-0">
                                                <span className="font-bold text-black">
                                                    00:00
                                                </span>
                                                <div className="flex flex-row space-x-1 items-center text-indigo-400">
                                                    <FontAwesomeIcon icon={ faCar } className="text-sm"/>
                                                    <span className="text-sm p-1">
                                                        2h30
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="font-bold text-black">
                                                02:30
                                            </span>
                                        </div>
                                        <div className="items-center text-center">
                                            <div className="w-3 h-3 rounded-full bg-transparent border-2 border-blue-600"></div>
                                            <div class="inline-block h-16 w-0.5 bg-blue-600 opacity-100 mt-1"></div>
                                            <div className="w-3 h-3 rounded-full bg-transparent border-2 border-blue-600"></div>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-600  p-2 w-44 rounded-lg">
                                            Réserver ce trajet
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            :
                <>
                </>
            }
        </>
    )
}

export default RoadsList;