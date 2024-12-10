<?php


namespace App\Services\v1;


class OrderQuery extends ApiFilter
{
    protected $safeParms = [
      'product_id' => ['eq'],
      'store_id' => ['eq'],
      'user_id' => ['eq'],
      'quantity' => ['eq','gt','lt'],
      'paymentMethod' => ['eq'],
      'delieveryMethod' => ['eq'],
      'UUID' => ['eq'],
      'pickupStation' => ['eq'],
    ];
}
