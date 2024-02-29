import { faArrowRight, faArrowRightArrowLeft, faCar, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";

const RoadsList = () => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        axios.post('/api/roads').then(async (response) => {
            await response.data;
            setData(response.data);
        })
    }, [])

    return(
        <>
            {!data[0] ?
                <>
                    <div className="p-5">
                        <div className="mt-6">
                            <span className="text-black font-bold uppercase text-2xl">
                                Suggestions
                            </span>
                        </div>
                    </div>
                </>
            :
                <>
                    <div className="p-5">
                        <span className="text-black font-bold uppercase text-2xl">
                            Suggestions
                        </span>
                        <div className="mt-5" id="roads_suggests_container">
                            { data.map((item, index) => (
                                <div className="bg-neutral-100 shadow-md hover:shadow-xl p-5 w-52 rounded-lg">
                                    <div className="flex justify-between">
                                        <div className="order-1">
                                            <div className="flex flex-row space-x-2 items-center">
                                                <span className="text-black uppercase font-bold">
                                                    { item.ville_depart }
                                                </span>
                                                <FontAwesomeIcon icon={ faArrowRight } />
                                                <span className="text-black uppercase font-bold">
                                                    { item.ville_arriver }
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
                                                    { item.heure_depart.slice(0, 5) }
                                                </span>
                                                <div className="flex flex-row space-x-1 items-center text-indigo-400">
                                                    <FontAwesomeIcon icon={ faCar } className="text-sm"/>
                                                    <span className="text-sm p-1">
                                                        { item.estimated_time.slice(0, 5) }
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="font-bold text-black">
                                                { item.heure_arriver.slice(0, 5)}
                                            </span>
                                        </div>
                                        <div className="items-center text-center">
                                            <div className="w-3 h-3 rounded-full bg-transparent border-2 border-blue-600"></div>
                                            <div class="inline-block h-16 w-0.5 bg-blue-600 opacity-100 mt-1"></div>
                                            <div className="w-3 h-3 rounded-full bg-transparent border-2 border-blue-600"></div>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <a href={`?uuid=${item.uuid}`} className="bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-600 p-2 rounded-lg">
                                            Réserver ce trajet
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default RoadsList;