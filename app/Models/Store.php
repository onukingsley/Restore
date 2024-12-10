<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasFactory;
    protected $fillable = ['user_id','name','email','balance','lifetimeEarnings','address','description','logo','socials','phoneNo','suspended'];

    //creates relationship with the order
    public function order(){
        return $this->hasMany(Order::class);
    }

    //creates relationship with the cart
    public function Cart(){
        return $this->hasMany(Cart::class);
    }

    //creates relationship with the product
    public function product(){
        return $this->hasMany(Product::class);
    }

    //creates relationship with the delivered
    public function delivered(){
        return $this->hasMany(Delivered::class);
    }

    //creates relationship with the search
    public function search(){
        return $this->hasMany(Search::class);
    }

    //creates relationship with the user
    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }
}
