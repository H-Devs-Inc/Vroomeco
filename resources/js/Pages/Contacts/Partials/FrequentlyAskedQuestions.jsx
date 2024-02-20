const FrenquentlyAskedQuestions = () => {
    return(
        <div className="flex items-center justify-center p-10 mt-10">
            <div className="flex flex-col space-y-3 items-center justify-center">
                <span className="text-4xl text-blue-600 font-extrabold" id="title">
                    Questions fréquemment posées
                </span>
                <p>
                    Loreum Ipseum
                </p>
                <div className="pt-10">
                    <div className="flex flex-col space-y-10">
                        <details className="bg-neutral-100 shadow-xl p-5 rounded-lg" id="details-control">
                            <summary className="font-bold text-black text-sm uppercase">
                                test
                            </summary>
                            <p className="p-4 text-gray-900">
                                Loreum Ipseum
                            </p>
                        </details>
                        <details className="bg-neutral-100 shadow-xl p-5 rounded-lg" id="details-control">
                            <summary className="font-bold text-black text-sm uppercase">
                                test
                            </summary>
                            <p className="p-4 text-gray-900">
                                Loreum Ipseum
                            </p>
                        </details>
                        <details className="bg-neutral-100 shadow-xl p-5 rounded-lg" id="details-control">
                            <summary className="font-bold text-black text-sm uppercase">
                                test
                            </summary>
                            <p className="p-4 text-gray-900">
                                Loreum Ipseum
                            </p>
                        </details>
                        <details className="bg-neutral-100 shadow-xl p-5 rounded-lg" id="details-control">
                            <summary className="font-bold text-black text-sm uppercase">
                                test
                            </summary>
                            <p className="p-4 text-gray-900">
                                Loreum Ipseum
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrenquentlyAskedQuestions;