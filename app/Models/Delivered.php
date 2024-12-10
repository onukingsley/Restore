<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Delivered extends Model
{
    use HasFactory;
    protected $fillable = ['product_id','createdAt','store_id','user_id','quantity','paymentMethod','deliveryMethod','deliveryStatus','UUID','pickupStation'];

    //create a relationship to the product table
    public function product(){
      return $this->belongsTo(Product::class,'product_id');
    }

    //create a relationship to the store table
    public function store(){
       return $this->belongsTo(Store::class,'store_id');
    }

    //create a relationship to the user table
    public function user(){
      return  $this->belongsTo(User::class,'user_id');
    }

}
