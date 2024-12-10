<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Store>
 */
class StoreFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->word(),
            /*            'user_id' => fake()->randomElement([14,8,3,4,15,6,27]),*/
            'description' => $this->faker->realText(200),
            'address' => $this->faker->address,
            'email' => $this->faker->address,
            'phoneNo' => $this->faker->phoneNumber,

        ];
    }
}
