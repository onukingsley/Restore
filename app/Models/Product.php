<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['store_id','category_id','quantity','productName','productDesc','productSpec','image','price','color','discountPrice'];
    protected $casts = [
        'productSpec' => 'array',
        'color' => 'array',
    ];

    //create a relationship to the category table
    public function category(){
       return $this->belongsTo(Category::class,'category_id');
    }

    //create a relationship to the category table
    public function store(){
      return $this->belongsTo(Store::class,'store_id');
    }

    //create a relationship to the productimage table
    public function productImg(){
      return $this->hasMany(ProductImage::class );
    }

    //create a relationship to the order table
    public function order(){
      return $this->hasMany(Order::class);
    }

    //create a relationship to the review table
    public function review(){
      return  $this->hasMany(Review::class);
    }

    //create a relationship to the cart table
    public function cart(){
       return $this->hasMany(Cart::class);
    }

    //create a relationship to the delivered table
    public function delivered(){
      return $this->hasMany(Delivered::class);
    }

    //create a relationship to the search table
    public function search(){
        $this->hasMany(Search::class);
    }
}
