<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
    protected $fillable = ['name','email','phoneNo','address','productTitle','createdAt','price','quantity','image','UUID','product_id','store_id','user_id'];

    //create relationship with user table
    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }

    //create relationship with the store table
    public function store(){
        return $this->belongsTo(Store::class,'store_id');
    }

    //creates relationship with the product
    public function product(){
        return $this->belongsTo(Product::class,'product_id');
    }
}
