<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cart>
 */
class CartFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $ran =$this->faker->numberBetween(1,85);
        if (strlen($ran)  == 1){
            $ran = '0'.$ran;
        }
        $storeran =$this->faker->numberBetween(1,17);
        if (strlen($storeran)  == 1){
            $storeran = '0'.$storeran;
        }

        $ranimg =$this->faker->numberBetween(1,85);
        if (strlen($ranimg)  == 1){
            $ranimg = '0'.$ranimg;
        }
        $userran =$this->faker->numberBetween(1,85);
        if (strlen($userran)  == 1){
            $userran = '0'.$userran;
        }

        return [
            'product_id' => $ran,
            'store_id' => $storeran,
            'user_id' => $userran,
            'name' => $this->faker->name,
            'image' => 'img/shop/catalog/'.$ranimg. '.jpg',
            'email' => $this->faker->email,
            'phoneNo' => $this->faker->phoneNumber,
            'address' => $this->faker->address,
            'productTitle' => $this->faker->name,
            'price' => $this->faker->numberBetween(50,5000),
            'quantity' => $this->faker->numberBetween(10,100),
            'UUID' => $this->faker->uuid,

        ];
    }
}
