<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = ['product_id','store_id','user_id','processingOrder','quantity','paymentMethod','deliveryMethod','UUID','total','payment_id','individualConfirmation','collectionConfirmation','createdAt','pickupStation'];

    //create a relationship to the product table
    public function product(){
      return  $this->belongsTo(Product::class,'product_id');
    }

    //create a relationship to the store table
    public function store(){
        $this->belongsTo(Store::class,'store_id');
    }

    //create a relationship to the user table
    public function user(){
        $this->belongsTo(User::class,'user_id');
    }


}
