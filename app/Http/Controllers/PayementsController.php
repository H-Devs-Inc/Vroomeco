<?php

namespace App\Http\Controllers;

use App\Models\Payement;
use App\Models\Road;
use App\Models\User;
use Illuminate\Http\Request;


use Stripe\Checkout\Session;
use Stripe\Event;

class PayementsController extends Controller {

    public function create(Request $request)
    {
        // Traitement de la création du paiement
        $trajet = Road::findOrFail($request->trajet_id);
        $utilisateur = User::findOrFail($request->utilisateur_id);

        $session = Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'name' => 'Trajet ' . $trajet->id,
                'amount' => $trajet->prix * 100, // En centimes
                'currency' => 'eur',
            ]],
            'success_url' => route('paiement.success'),
            'cancel_url' => route('paiement.cancel'),
        ]);

        return redirect($session->url);
    }

    public function success(Request $request)
    {
        $session = Session::retrieve($request->session_id);

        if ($session->payment_status === 'paid') {
            $trajet = Road::findOrFail($session->metadata['trajet_id']);
            $trajet->update(['statut' => 'en_cours']);

            return view('paiement.success', ['trajet' => $trajet]);
        }

        return abort(404);
    }
    public function cancel(Request $request)
    {
        // renvoi un json si le paiement est annulé
        return response()->json(['message' => 'Paiement annulé']);
    }

    public function webhook(Request $request)
    {
        $event = Event::constructFrom(
            json_decode($request->getContent(), true),
            $_SERVER['HTTP_STRIPE_SIGNATURE'],
            env('STRIPE_SECRET')
        );

        switch ($event->type) {
            case 'checkout.session.completed':
                $session = $event->data['object'];
                $trajet = Road::findOrFail($session->metadata['trajet_id']);
                $trajet->update(['statut' => 'en_cours']);
                break;
            case 'checkout.session.expired':
                // Gérer l'expiration de la session
                break;
            // ... autres événements
        }

        return response()->noContent();
    }

}
