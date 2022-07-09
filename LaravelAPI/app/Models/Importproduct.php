<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Importproduct extends Model
{
    use HasFactory;
    protected $table = 'import_product';
    protected $primaryKey = 'import_product_id';
    public $timestamps = false;
    protected $fillable = [
        'product_id',
        'import_product_quantity',
        'import_product_price_per_unit',
        'import_product_date',
        'import_product_total_payment',
    ];
}
