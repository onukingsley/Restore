<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = ['categoryName','image','description'];

    //create a relationship to the product table
    public function product(){
       return $this->hasMany(Product::class);
    }

}
