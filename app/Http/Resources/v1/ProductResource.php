<?php

namespace App\Http\Resources\v1;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'productName' => $this->productName,
            'image' => $this->image,
            'quantity' => $this->quantity,
            'productDesc' => $this->productDesc,
            'productSpec' => $this->productSpec,
            'discountPrice' => $this->discountPrice,
            'price' => $this->price,
            'review' => ReviewResource::collection($this->whenLoaded('review')),
            'order' => OrderResource::collection($this->whenLoaded('order')),
            'cart' => CartResource::collection($this->whenLoaded('cart')),
            'productImg' => ProductImageResource::collection($this->whenLoaded('productImg')),
            'delivered' => DeliveredResource::collection($this->whenLoaded('delivered')),
            'search' => SearchResource::collection($this->whenLoaded('search')),
           'store' => new StoreResource($this->whenLoaded('store')),
           'category' => new StoreResource($this->whenLoaded('category'))
        ];
    }
}
