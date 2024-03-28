<?php

namespace App\Http\Controllers;

use App\Models\Cars;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
class CarsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //recupere toute les voitures de l'utilisateur actif
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validation des données
        $validator = Validator::make($request->all(), [
            // recupere l'id de l'utilisateur
            'user_id' => 'required|integer|exists:users,id',
            'marque' => 'required|string|max:255',
            'model' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'colors' => 'required|string|max:255',
            'annee' => 'required|date_format:Y-m-d',
            'immatriculation' => 'required|string|max:255|unique:cars',
            'nombre_place' => 'required|integer|min:1|max:9',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Création de la nouvelle voiture
        $car = Cars::create([
            'user_id' => $request->input('user_id'),
            'marque' => $request->input('marque'),
            'model' => $request->input('model'),
            'type' => $request->input('type'),
            'colors' => $request->input('colors'),
            'annee' => $request->input('annee'),
            'immatriculation' => $request->input('immatriculation'),
            'nombre_place' => $request->input('nombre_place'),
        ]);

        // Renvoyer la voiture créée avec un code de succès
        return response()->json($car, 201);
    }


    /**
     * Display the specified resource.
     */
    public function show(Cars $cars)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cars $cars)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cars $cars)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Cars $cars)
   {
        // Récupère l'ID de l'utilisateur et l'ID de la voiture à supprimer
        $user_id = $request->input('user_id');
        $carToDeleteId = $request->input('carToDelete');

        // Recherche l'utilisateur et la voiture
        $user = User::find($user_id);
        //verifier si l'utilisateur a cette voiture a partire de son id dans user_id
        $carToDelete = Cars::where('id', $carToDeleteId)
            ->where('user_id', $user_id)
            ->first();
        // Vérifie si l'utilisateur et la voiture existent
        if (!$user || !$carToDelete) {
            return response()->json(['error' => 'User or car not found'], 404);
        }

        // Vérifie si la voiture appartient bien à l'utilisateur
        if ($carToDelete->user_id != $user_id) {
            return response()->json(['error' => 'Unauthorized to delete this car'], 403);
        }

        // Supprime la voiture
        $carToDelete->delete();

        return response()->json(['success' => 'Car deleted successfully'], 200);
    }
}
