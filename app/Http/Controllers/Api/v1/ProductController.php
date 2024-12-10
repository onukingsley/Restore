<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\ProductCollection;
use App\Http\Resources\v1\ProductResource;
use App\Models\Category;
use App\Models\Product;
use App\Services\v1\ProductQuery;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use function Ramsey\Collection\add;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new ProductQuery();
        $queryItems = $filter->transform($request);
        $products = Product::where($queryItems);

        $includeorder = $request['order'];
        $includecategory = $request['category'];
        $includestore = $request['store'];
        $includeproductImage = $request['productImg'];
        $includereview = $request['review'];
        $includecart = $request['cart'];
        $includedelivered = $request['delivered'];
        $includesearch = $request['search'];

        $block = [];
        if ($includeorder){
            $block[] = 'order';
        }
        if ($includecategory){
            $block[] = 'category';
        }
        if ($includestore){
            $block[] = 'store';
        }
        if ($includeproductImage){
               $block[] = 'productImg';

        }
        if ($includereview){
              $block[] = 'review';
        }
        if ($includecart){
            $block[] = 'cart';
        }
        if ($includedelivered){
            $block[] = 'delivered';
        }
        if ($includesearch){
            $block[] = 'search';
        }
        $products = $products->with($block);

        return new ProductCollection( ($products->paginate(8)->appends($request->query())));
    }

    /**
     * Show the form for creating a new resource.
     */
/*    public function create()
    {
        //
    }*/

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $formrequest = $request->all();
        $category = Category::where('categoryName','=', $formrequest['category'])->first();
        $formrequest['store_id'] = $request->user()?->store->id;
        $formrequest['category_id'] = $category?->id;

        $product = Product::create($formrequest);
        return response(new ProductResource($product),200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product,  Request $request)
    {
        if ($request['store']){
            $product = $product->loadMissing('store');
        }
        if ($request['order']){
            $product = $product->loadMissing('order');
        }
        if ($request['productImage']){
            $product = $product->loadMissing('productImage');
        }
        if ($request['review']){
            $product = $product->loadMissing('review');
        }
        if ($request['cart']){
            $product = $product->loadMissing('cart');
        }
        if ($request['delivered']){
            $product = $product->loadMissing('delivered');
        }
        if ($request['search']){
            $product = $product->loadMissing('search');
        }
        if ($request['category']){
            $product = $product->loadMissing('category');
        }
        return response()->json(new ProductResource($product));
    }

    /**
     * Show the form for editing the specified resource.
     */
/*    public function edit(Product $product, Request $request)
    {

    }*/

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
       $prod = $product->update(request()->all());
       return response()->json($prod,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(['message'=>'product Deleted Successfully'],200);
    }
}
