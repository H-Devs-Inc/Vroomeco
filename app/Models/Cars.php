<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cars extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'marque',
        'model',
        'type',
        'colors',
        'annee',
        'immatriculation'
    ];

    // Supprime le timestamp de mise à jour automatique
    public $timestamps = false;

    // Définit la clé primaire personnalisée
    protected $primaryKey = 'id';

    /**
     * Obtenez l'utilisateur qui possède cette voiture.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
