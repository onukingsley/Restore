<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array

    {
        $ran =$this->faker->numberBetween(1,72);
        if (strlen($ran)  == 1){
            $ran = '0'.$ran;
        }

        return [
            'productName' => $this->faker->lastName,
            'category_id' => $this->faker->randomElement(['1','2','3','4','5','6',]),
            'productDesc' => $this->faker->realText('250'),
            'image' => 'img/shop/catalog/'.$ran. '.jpg',
            'price' => $this->faker->numberBetween(50,5000),
            'quantity' => $this->faker->numberBetween(10,100),
            'discountPrice' => $this->faker->numberBetween(10,30),
            'productSpec' => ['shape'=>$this->faker->realText('20'),
                'weight'=> $this->faker->realText('20'),
                'Dimension' => $this->faker->numberBetween(10,100).'x'.$this->faker->numberBetween(10,100),
                'Material' => $this->faker->realText('250')
            ],
            'color' => [$this->faker->colorName,$this->faker->colorName,$this->faker->colorName],

        ];
    }
}
