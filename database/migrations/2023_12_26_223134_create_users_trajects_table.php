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
        Schema::create('users_trajects', function (Blueprint $table) {
            $table->id('user_traject_id');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->uuid('traject_uuid')->nullable();
            $table->date('confirmed_at')->nullable();
            $table->timestamps();
            
            $table->foreign('user_id')->references('user_id')->on('users');
            $table->foreign('traject_uuid')->references('uuid')->on('trajects');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users_trajects');
    }
};
