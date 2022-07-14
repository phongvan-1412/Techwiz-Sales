<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminProduct extends Model
{
    use HasFactory;
    protected $table = 'product';
    protected $primaryKey = 'product_id';
    public $timestamps = false;
    protected $fillable = [
        'product_SKU',
        'product_name',
        'category_id',
        'product_quantity',
        'product_information',
        'product_ingredients',
        'product_instruction_use',
        'product_instruction_store',
        'product_img_name',
        'product_price_per_unit',
        'product_status'
    ];
}

