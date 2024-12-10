<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\CartCollection;
use App\Http\Resources\v1\CartResource;
use App\Models\Cart;
use App\Services\v1\CartQuery;
use Illuminate\Http\Request;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new CartQuery();
        $queryItem = $filter->transform($request);

        $cart = Cart::where($queryItem);

        $include = [];
        if ($request['user']){
            $include[] = 'user';
        }
        if ($request['store']){
            $include[] = 'store';
        }
        if ($request['product']){
            $include[] = 'product';
        }
        $cart = $cart->with($include);

        return new CartCollection($cart->latest()->paginate()->appends($request->query()));
        /*return  CartResource::collection($cart->paginate()->append($request->query()));*/


    }

    /**
     * Show the form for creating a new resource.
     */
    /*public function create()
    {
        //
    }*/

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $formrequest = $request->all();
        $cart = Cart::create($formrequest);

        return response( new CartResource($cart),200);

    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart, Request $request)
    {
        $include = [];
        if ($request['user']){
            $include[] = 'user';
        }
        if ($request['store']){
            $include[] = 'store';
        }
        if ($request['product']){
            $include[] = 'product';
        }
        $cart = $cart->with($include);
        return new CartResource($cart);
    }

    /**
     * Show the form for editing the specified resource.
     */
   /* public function edit(Cart $cart, Request $request)
    {

    }*/

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cart $cart)
    {
        $cart = $cart->update($request->all());
        return response()->json($cart,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(String $id, Request $request)
    {
        $carts = Cart::where('user_id',$request->user()->id)->where('product_id',$id)->get();
        if (!$carts){
            return response('no Cart found');
        }
        foreach ($carts as $cart){

            $cart->delete();
        }

        return response()->json(['message'=>'Cart deleted Successfully'],200);
    }
}
