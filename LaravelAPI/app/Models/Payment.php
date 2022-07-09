<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $table = 'payment_mode';
    protected $primaryKey = 'payment_mode_id';
    public $timestamps = false;
    protected $fillable = [
        'payment_mode_name',
        'payment_mode_code',
    ];
}
