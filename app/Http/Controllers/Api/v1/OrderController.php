<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\OrderCollection;
use App\Http\Resources\v1\OrderResource;
use App\Models\Cart;
use App\Models\Delivered;
use App\Models\Order;
use App\Services\v1\OrderQuery;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new OrderQuery();
        $query = $filter->transform($request);
        $order = Order::where($query);

        $includes = [];
        if ($request['store']){
          $includes[] = 'store';
        }
        if ($request['user']){
            $includes[] = 'user';
        }
        if ($request['product']){
            $includes[] = 'product';
        }
        $order = $order->with($includes);

        return new OrderCollection($order->paginate(10)->appends($request->query()));

    }

    /**
     * Show the form for creating a new resource.
     */
  /*  public function create()
    {
        //
    }*/

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        /*return response($UUID);*/
        $ords = Cart::where('user_id',$request->user()->id)->where('product_id',$request->product_id)->get();
        if ($ords->isEmpty()){
            return response('Cannot place an order, Cart is empty');
        }
        //loops through ords data
        foreach ($ords as $ord){
           /* //creates payload from ord record
            $payload = [
                "product_id" => $ord['product_id'],
                "store_id" => $ord['store_id'],
                "user_id" => $ord['user_id'],
                "quantity" => $ord['quantity'],
                "paymentMethod" => $request['paymentMethod'],
                "deliveryMethod" => $request['deliveryMethod'],
                "UUID" => $UUID,
                "processingOrder" => '0',
                "pickupStation" => $request['pickupStation'],
            ];
            $order = Order::create($payload);*/

            $deleted = $ord->delete();
        }
        $payload = $request->all();

        $payload["pickupStation"] = $request['pickupStation'];
        $payload["user_id"] = $request->user()->id;

        $order = Order::create($payload);
        /*$formRequst  = $request->all();
        $formRequst['user_id'] = $request->user()?->id;*/



        return response($order . $deleted);
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order, Request $request)
    {
        $includes = [];
        if ($request['store']){
            $includes[] = 'store';
        }
        if ($request['user']){
            $includes[] = 'user';
        }
        if ($request['product']){
            $includes[] = 'product';
        }
        $order = $order->with($includes);
        return response(new OrderResource($order),200);
    }

    /**
     * Show the form for editing the specified resource.
     */
   /* public function edit(Order $order)
    {
        //
    }*/

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        $order = $order->update($request->all());
        return response(new OrderResource($order),200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(String $UUID, Request $request)
    {

        $orders = Order::where('UUID', $UUID)->get();

        //checks if orders is empty
        if ($orders->isEmpty()) {
            return response()->json(['message' => 'No orders found with the specified UUID'], 404);
        }


        foreach ($orders as $ord){
            //prepare data for the Delivered table
            $delivered = [
                'product_id' => $ord->product_id,
                'store_id' => $ord->store_id,
                'user_id' => $ord->user_id,
                'quantity' => $ord->quantity,
                'paymentMethod' => $ord->paymentMethod,
                'deliveryMethod' => $ord->deliveryMethod,
                'deliveryStatus' => $request['deliveryStatus'],
                'UUID' => $ord->UUID,
                'pickupStation' => $ord->pickupStation,
            ];
            //creates a record in the Delivered table
            Delivered::create($delivered);


            $success = $ord->delete();

        }


        return response()->json(['message'=>'Order Deleted Successfully','code'=>'deleted with code '.$success],200);
    }
}
