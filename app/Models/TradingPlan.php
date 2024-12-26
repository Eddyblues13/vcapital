<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TradingPlan extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'min_amount', 'max_amount', 'duration'];
} 
