import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FooterComponents from "@/Components/Footer/footer_components";
import { Head } from "@inertiajs/react";

export default function AboutUs({ auth }) {
    return(
        <>
            <Head title="A Propos" />
            <AuthenticatedLayout user={auth.user} />
            <div className="p-5">
                about us
            </div>
            <FooterComponents/>
        </>
    )
}