<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Http\Resources\v1\UserCollection;
use App\Http\Resources\v1\UserResource;
use App\Models\Store;
use App\Models\User;
use http\Env\Response;
use Illuminate\Hashing\BcryptHasher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use mysql_xdevapi\Exception;
use function Laravel\Prompts\password;

class ApiUserController extends Controller
{
    public function getusertype($usertype){
        //switch statement to determine the scope where 2 is admin, 1 is seller and 0 is customer
        switch ($usertype){
            case '2':
                return ['create','update','delete','updateProduct','deleteProduct','deleteUser','suspend'];

            case '1':
                return ['create','update','updateProduct','deleteProduct','deleteStore'];

            case '0':
                return ['create','update','deleteProfile'];
            default:
                return ['create','update'];

        }
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return new UserCollection($users->loadMissing('store'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
        * Store a newly created resource in storage.
    */
    public function store(){
        //
    }


    public function register(UserRequest $request)
    {

        //declaring request, adding usertype field, hashing the password from request
        $requests = $request->all();
        $pass = $requests['password'];
        $requests['password'] = bcrypt($requests['password']);
        $requests['usertype'] = $requests['usertype'] ?? '0';

        /* @var User $user */

        //Create a new user in the database
        $user = User::create($requests);


        //checks if the usertype is 1 which means the user is a seller; and creates a store
        if ($user->usertype=='1'){
            $store = [];
            $store['user_id'] = $user->id;
            $store['name'] = $user->name;
            $store['email'] = $user->email;
            $store['address'] = $user->address;
            $store['description'] = $requests['description']?? null;
            $store['logo'] = $requests['logo'] ?? null;
            $store['phoneNo'] = $requests['store_phone'] ?? $user->phoneNo;
            $store['socials'] = $requests['socials'] ?? null;
            $st = Store::create($store);
        }
        auth()->attempt(["email"=>$user->email,"password" => $pass]);


        //creates user token based on the scope provided

        $token = $user->createToken($user->usertype.'-token',$this->getusertype($user['usertype']))->plainTextToken;
        return response()->json(['token'=> $token, 'user-type'=>$user->usertype,'user'=>new UserResource($user)],200);
    }

    public function authenticate (Request $request){
        //validate the request
        $formrequest = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        // attempt to login the user
        if (!auth()->attempt($formrequest)){
            return response()->json([
                'message' => 'invalid User Credentials',
                'status' => '401'
            ],401);
        }elseif (\auth()->attempt($formrequest)){
            /* @var User $user */
            $user = Auth::user();
            $token = $user->createToken($user->usertype.'-token',$this->getusertype($user['usertype']))->plainTextToken;

            return response()->json([
                'token'=> $token, 'user-type'=>$user->usertype,'user'=>new UserResource($user),'status'=>200
            ],200);
        }
        //declaring the user and creating a token for the user


    }
    public function getuser(Request $request){
        return \response()->json($request->user());
    }

    public function logout(Request $request){
    /*return response()->json(["user"=> $request->user()]);*/
        //declaring the current user from request
        /* @var User $user */
        try {
            $user = $request->user();

            //delete the current user's token
           /* $user->tokens()->delete();*/
            $user->currentAccessToken()->delete();

            return response()->json([
                'message' => 'Logout successful',
                'status' => '200'
            ],200);
        }catch (\Exception $exception){
            return response()->json([
               $exception
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return new $user;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $user = $user->update($request->all());

        return response($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
