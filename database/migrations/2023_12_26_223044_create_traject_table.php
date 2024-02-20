<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('trajects', function (Blueprint $table) {
            $table->id('traject_id');
            //création de la colonne uuid de facon aleatoire
            $table->string('uuid')->unique();
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('vehicule')->nullable();
            $table->string('ville_depart');
            $table->string('ville_arriver');
            $table->date('date_traject');
            $table->integer('nombre_place')->nullable();
            $table->time('heure_depart')->nullable();
            $table->time('heure_arriver')->nullable();
            $table->time('estimated_time')->nullable();
            $table->string('distance')->nullable();
            $table->timestamps();

            // Définit la clé étrangère
            $table->foreign('vehicule')->references('id')->on('cars');
        });//->onDelete('cascade')
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('traject');
    }
};
