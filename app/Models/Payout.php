<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payout extends Model
{
    use HasFactory;
    protected $fillable = ['store_id','amount','paymentMethod'];

    //creates relationship with store Table
    public function store(){
          return $this->belongsTo(Store::class,'store_id');
}

}
