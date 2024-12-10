<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Search extends Model
{
    use HasFactory;
    protected $fillable = ['keyword', 'user_id','product_id','store_id'];

    //creates relationship with the user
    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }

    //creates relationship with the store
    public function store(){
        return $this->belongsTo(Store::class, 'store_id');
    }

    //creates relationship with the product
    public function product(){
        return $this->belongsTo(Product::class,'product_id');
    }
}
