<?php

namespace App\Http\Controllers;

use App\Models\Road;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
class RoadController extends Controller
{
    public function index()
    {
        $roads = Road::all();

        return view('roads.index', compact('roads'));
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
        $road->ville_depart = $requestData['ville_depart'];
        $road->ville_arriver = $requestData['ville_arriver'];
        $road->date_traject = $requestData['date_traject'];

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


        
        // Sauvegarder la route
        $road->save();
        
        // Renvoyer un JSON avec les informations de la route
        return response()->json($road);

    }
}
