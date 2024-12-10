<?php

namespace Database\Seeders;

use App\Models\Cart;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\Store;
use App\Models\User;
use Database\Factories\CartFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        User::factory(3)->state(['usertype'=> '1'])->create();

      /*  User::factory(5)
            ->has(Store::factory(),'store')
            ->create();*/

        User::factory(17)
            ->has(Store::factory()->has(Product::factory()->count(5)->has(ProductImage::factory(),'productImg'),'product'),'store')
            ->create()
        ;


        User::factory(3)
            ->create();

        /*Cart::factory(100)->create();*/
    }
}
