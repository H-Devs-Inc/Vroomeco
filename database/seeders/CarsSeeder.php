<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CarsSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Créez quelques voitures de démonstration
        DB::table('cars')->insert([
            [
                'user_id' => 1,
                'marque' => 'Toyota',
                'model' => 'Corolla',
                'type' => 'Sedan',
                'colors' => 'Blue',
                'annee' => '2020-01-01',
                'immatriculation' => 'AB-123-CD',
                'nombre_place' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Ajoutez plus de voitures si nécessaire
        ]);
    }
}
