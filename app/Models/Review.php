<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $fillable = ['product_id','user_id','comment','rating'];

    //creates a relationship with the user table
    public function user(){
       return $this->belongsTo(User::class,'user_id');
    }

    //creates a relationship with the product table
    public function product(){
       return $this->belongsTo(Product::class,'product_id');
    }
}
