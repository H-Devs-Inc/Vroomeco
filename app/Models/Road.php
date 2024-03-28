<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Road extends Model
{
    use HasFactory;
    protected $table = 'trajects';

    protected $fillable = [
        'uuid',
        'created_by',
        'vehicule',
        'ville_depart',
        'ville_arriver',
        'date_traject',
        'estimated_time',
        'distance',
        'prix',
    ];

    // Supprime le timestamp de mise à jour automatique
    public $timestamps = false;

    // Définit la clé primaire personnalisée
    protected $primaryKey = 'traject_id';
}
