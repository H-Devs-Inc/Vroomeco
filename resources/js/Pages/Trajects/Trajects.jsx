import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import FooterComponents from "@/Components/Footer/footer_components";

import RoadsList from "./Partials/RoadsList";
import TrajectsForm from "./Partials/NewTrajectsForm";

import { Head } from '@inertiajs/react';

export default function Trajects({ auth }) {
    return(
        <>
            <Head title="Trajets" />

            <TrajectsForm/>

            <AuthenticatedLayout user={auth.user} />
            <div className="p-5">
                <RoadsList/>
            </div>
            <FooterComponents/>
        </>
    )
}