<?php

namespace App\Http\Controllers;

use App\Models\Road;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
class RoadController extends Controller
{
    public function index()
    {
        // Récupérer toutes les routes
        $roads = Road::all();
        // Renvoyer les routes au format JSON
        return response()->json($roads);
    }

    // fonction de creation des roads a partir d'un formulaire public function create(Request $request)
    public function create(Request $request)
    {
        // Récupérer les informations du formulaire envoyé par la méthode POST sous format JSON
        $requestData = $request->json()->all();
        
        // Créer un objet Road
        $road = new Road();
        // Générer un UUID aléatoire unique de 2 à 16 caractères
        $uuid = Str::random(10);
        
        // Assigner l'UUID généré
        $road->uuid = $uuid;
        // Assigner les autres attributs
        $road->created_by = $requestData['created_by'];
        $road->vehicule = $requestData['vehicule'];
        $road->nombre_place = $requestData['nombre_place'];
        $road->ville_depart = $requestData['ville_depart'];
        $road->ville_arriver = $requestData['ville_arriver'];
        $road->date_traject = $requestData['date_traject'];
        $road->heure_depart = $requestData['heure_depart'];

        //calcule de la distance entre les deux villes grace a l'api google map
        $url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=".$requestData['ville_depart']."&destinations=".$requestData['ville_arriver']."&key=AIzaSyBh9i8CNaISR_ZMEg-Yq7uTbmKxuF3pCR0";
        $response = file_get_contents($url);
        $response = json_decode($response);
        // recupere la distance en kilometre entre les deux villes 
        $road->distance = $response->rows[0]->elements[0]->distance->text;

        // Convertir la chaîne en un tableau contenant le nombre d'heures et de minutes
        $timeParts = explode(' ', $response->rows[0]->elements[0]->duration->text);

        // Extraire le nombre d'heures et / ou  de minutes suivant le trajet
        $hours = 0;
        $minutes = 0;
        if (count($timeParts) == 4) {
            $hours = (int)$timeParts[0];
            $minutes = (int)$timeParts[2];
        } else {
            $minutes = (int)$timeParts[0];
        }

        // Convertir les heures et les minutes en secondes
        $totalSeconds = $hours * 3600 + $minutes * 60;

        // Convertir le nombre total de secondes en un format de temps HH:MM:SS
        $formattedTime = gmdate('H:i:s', $totalSeconds);

        // Assigner le temps estimé formaté à la propriété 'estimated_time'
        $road->estimated_time = $formattedTime;


        //calculer l'heure d'arriver en ajoutant le temps estimé au temps de depart
        $road->heure_arriver = date('H:i:s', strtotime($requestData['heure_depart']) + strtotime($formattedTime));

        // Sauvegarder la route
        $road->save();
        
        // Renvoyer un JSON avec les informations de la route
        return response()->json($road);

    }




    public function search(Request $request)
    {
        $villeDepart = $request->input('ville_depart');
        $villeArrivee = $request->input('ville_arriver');
        $dateTraject = $request->input('date_traject');

        // Recherche dans la base de données en fonction des critères de recherche
        $trajets = Road::where('ville_depart', 'like', '%'.$villeDepart.'%')
                        ->where('ville_arriver', 'like', '%'.$villeArrivee.'%')
                        ->whereDate('date_traject', $dateTraject)
                        ->get();
        // Si la recherche ne renvoie aucun résultat, renvoyer un message d'erreur
        if ($trajets->isEmpty()) {
            return response()->json(['message' => 'NO_TRAJECTS.'], 404);
        }
        // Renvoyer les résultats de la recherche au format JSON
        return response()->json($trajets);
    }

    public function show($uuid)
    {
        // Rechercher la route par son UUID
        $road = Road::where('uuid', $uuid)->first();

        // Vérifier si la route existe
        if (!$road) {
            return response()->json(['error' => 'Route not found'], 404);
        }

        // Retourner la route au format JSON
        return response()->json($road);
    }
}
