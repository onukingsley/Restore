<?php
namespace App\Services\v1;
use Illuminate\Http\Request;

class ProductQuery extends ApiFilter
{
    protected $safeParms = [
        'store_id' => ['eq'],
        'category_id' => ['eq'],
        'quantity' => ['eq'],
        'productName' => ['eq', 'like'],
        'price' => ['eq', 'gt', 'lt'],
        'discountPrice' => ['eq', 'has',],
    ];

}

