import NavbarComponents from "@/Components/Header/navbar_components";
import FooterComponents from "@/Components/Footer/footer_components";

import RoadsList from "./Partials/RoadsList";

const Trajects = () => {
    return(
        <>
            <NavbarComponents/>
            <div className="p-5">
                <RoadsList/>
            </div>
            <FooterComponents/>
        </>
    )
}

export default Trajects;