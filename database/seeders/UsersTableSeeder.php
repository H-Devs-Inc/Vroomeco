<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Créez un utilisateur de test
        DB::table('users')->insert([
            'name' => 'John Doe',
            'username' => 'johndoe',
            'email' => 'johndoe@example.com',
            'phone_number' => '123456789',
            'password' => Hash::make('password'), 
            'biographie' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Vous pouvez ajouter plus d'utilisateurs ici si nécessaire
    }
}
