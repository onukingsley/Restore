<?php

namespace App\Http\Resources\v1;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StoreResource extends JsonResource
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
            'name' => $this->name,
            'email' => $this->email,
            'address' => $this->address,
            'description' => $this->description,
            'logo' => $this->logo,
            'socials' => $this->socials,
            'phoneNo' => $this->phoneNo,
            'user' => new UserResource($this->whenLoaded('user'))
        ];
    }
}
