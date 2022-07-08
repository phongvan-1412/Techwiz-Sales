<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    
    protected $table = 'product';
    protected $primaryKey = 'product_id';
    public $timestamps = false;
    protected $fillable = [
        'product_name',
        'category_id',
        'product_quatity',
        'product_information',
        'product_img_name',
        'product_price_per_unit',
        'product_status'
    ];

    public $product_id;
    public $product_name;
    public $category_id;
    public $product_quatity;
    public $product_information;
    public $product_img_name;
    public $product_price_per_unit;
    public $product_status;
}
