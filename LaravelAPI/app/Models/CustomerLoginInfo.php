<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerLoginInfo extends Model
{
    use HasFactory;
    public $customer_id;
    public $customer_name;
    public $customer_email;
    public $customer_pwd;
    public $customer_contact;
    public $customer_dob;
    public $customer_img_name;
    public $customer_address;
    public $status;
    public $token;
}
