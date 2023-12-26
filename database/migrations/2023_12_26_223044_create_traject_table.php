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
            $table->uuid('uuid')->unique(); // Utilisez unsignedBigInteger ici
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('vehicule')->nullable();
            $table->string('ville_depart');
            $table->string('ville_arriver');
            $table->date('date_traject');
            $table->time('estimated_time');
            $table->integer('distance');
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
