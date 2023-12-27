const FormContact = () => {
    return(
        <form className="bg-neutral-100 shadow-xl p-5 rounded-lg ml-32" id="form_contact">
            <div className="flex justify-between mb-4">
                <div className="order-1">
                    <div className="flex flex-col space-y-1">
                        <label>
                            Nom
                        </label>
                        <input type="text" className=""></input>
                    </div>
                </div>
                <div className="order-2">
                    <div className="flex flex-col space-y-1">
                        <label>
                            Prénom
                        </label>
                        <input type="text" className=""></input>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mb-4">
                <div className="order-1">
                    <div className="flex flex-col space-y-1">
                        <label>
                            Phone
                        </label>
                        <input type="text" className=""></input>
                    </div>
                </div>
                <div className="order-2">
                    <div className="flex flex-col space-y-1">
                        <label>
                            Entreprise
                        </label>
                        <input type="text" className=""></input>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="flex flex-col space-y-1">
                    <label>
                        Message
                    </label>
                    <textarea name="" id="" cols="15" rows="4"></textarea>
                </div>
            </div>
            <div className="">
                <button className="p-2 rounded-lg w-44" id="bg-linear">
                    Envoyer
                </button>
            </div>
        </form>
    )
}

export default FormContact;