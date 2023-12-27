const FormContact = () => {
    return(
        <form className="shadow-xl p-5 rounded-lg ml-32" id="form_contact">
            <div className="flex justify-between mb-4">
                <div className="order-1">
                    <div className="flex flex-col space-y-1">
                        <label className="uppercase text-sm font-bold">
                            Nom
                        </label>
                        <input type="text" className="bg-gray-100 rounded-lg border-none"></input>
                    </div>
                </div>
                <div className="order-2">
                    <div className="flex flex-col space-y-1">
                        <label className="uppercase text-sm font-bold">
                            Prénom
                        </label>
                        <input type="text" className="bg-gray-100 rounded-lg border-none"></input>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mb-4">
                <div className="order-1">
                    <div className="flex flex-col space-y-1">
                        <label className="uppercase text-sm font-bold">
                            Numéro de téléphone
                        </label>
                        <input type="text" className="bg-gray-100 rounded-lg border-none"></input>
                    </div>
                </div>
                <div className="order-2">
                    <div className="flex flex-col space-y-1">
                        <label className="uppercase text-sm font-bold">
                            Entreprise
                        </label>
                        <input type="text" className="bg-gray-100 rounded-lg border-none"></input>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="flex flex-col space-y-1">
                    <label className="uppercase text-sm font-bold">
                        Message
                    </label>
                    <textarea name="" id="" cols="15" rows="4" className="bg-gray-100 rounded-lg border-none"></textarea>
                </div>
            </div>
            <div className="">
                <button className="bg-white hover:bg-transparent border-2 border-white hover:border-black p-2 rounded-lg w-44 uppercase text-sm font-bold" id="">
                    Envoyer
                </button>
            </div>
        </form>
    )
}

export default FormContact;