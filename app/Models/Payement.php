<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Road; // Assuming you have a Trajet model

class Payement extends Model
{
    use HasFactory;
    protected $fillable = [
        'trajet_id',
        'utilisateur_id',
        'montant', // Amount paid
        'stripe_payment_id', // Stripe payment ID
        'statut', // Payment status (e.g., pending, completed, failed)
    ];

    public function trajet()
    {
        return $this->belongsTo(Road::class);
    }

    // ... other methods related to payment logic (optional)
}
