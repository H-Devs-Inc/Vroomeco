import { useState } from "react";

const RoadsList = () => {
    const [ data, setData ] = useState([]);
    return(
        <>
            {!data[0] ?
                <>
                    <span>
                        Aucun trajets disponible selon vos recherches. Nous vous proposons alors ceux-ci !
                    </span>
                    <div className="">
                        <span className="text-black font-bold uppercase">
                            Suggestions
                        </span>
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