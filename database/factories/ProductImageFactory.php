<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProductImage>
 */
class ProductImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $ran1 =$this->faker->numberBetween(1,72);
        if (strlen($ran1)  == 1){
            $ran1 = '0'.$ran1;
        }
        $ran2 =$this->faker->numberBetween(1,72);
        if (strlen($ran2)  == 1){
            $ran2 = '0'.$ran2;
        }
        $ran3 =$this->faker->numberBetween(1,72);
        if (strlen($ran3)  == 1){
            $ran3 = '0'.$ran3;
        }
        return [
            'productImg1'=>  'img/shop/catalog/'.$ran1. '.jpg',
            'productImg2'=>  'img/shop/catalog/'.$ran2. '.jpg',
            'productImg3'=>  'img/shop/catalog/'.$ran3. '.jpg',
        ];
    }
}
