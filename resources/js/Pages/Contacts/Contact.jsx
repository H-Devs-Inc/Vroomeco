import FooterComponents from "@/Components/Footer/footer_components";
import NavbarComponents from "@/Components/Header/navbar_components";
import FormContact from "./Partials/FormContact";

const Contacts = () => {
    return(
        <>
            <NavbarComponents/>
            <div className="p-5">
                <div className="flex justify-between">
                    <div className="order-1">
                        <FormContact/>
                    </div>
                    <div className="order-2">
                        <div className="flex flex-col space-y-5">
                            <span>
                                Mettez vous en contact avec nous
                            </span>
                            <p>
                                Loreum Ipseum
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponents/>
        </>
    )
}

export default Contacts;