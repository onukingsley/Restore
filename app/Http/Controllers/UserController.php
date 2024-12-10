<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use function Laravel\Prompts\password;

class UserController extends Controller
{
    public function create()
    {
        return view('Authentication.register');
    }
    public function store(Request $request){
        $formrequest = $request->validate([
            'name' => 'required',
            'email' => [Rule::unique('users', 'email'),'email','required'],
            'phoneNo' => 'required',
            'address' => 'required',
            'password' => ['required','min:5','regex:/[A-Z]/']
        ],[
            'email.unique'=> 'email taken by another user',
            'password.regex'=> 'Password requires atleast one Uppercase',
            'password.min'=> 'Password requires atleast 5 characters'
        ]);

        $formrequest['password'] = bcrypt($formrequest['password']);

        try {
            $user = User::create($formrequest);

            //login user
            auth()->login($user);
            return redirect('/')->with('success', 'Registration Successful');
        }catch (QueryException $e){
            redirect()->back()->withErrors(['query'=> "database error, Please notify the admin"]);
        }catch (\Exception $e){
            redirect()->back()->withErrors(["error"=>$e]);
        }
    }

    //logout user
    public function logout(Request $request){
        auth()->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/')->with('message', 'User Logged Out');
    }

    //authenticate User
    public function authenticate (Request $request){
        $formrequest = $request->validate([
            'email' => ['required','email'],
            'password' => ['required']
        ]);

        if (auth()->attempt($formrequest)){
            return redirect('/')->with('message','Login Successful');
        }
        else{
            return back()->withErrors(['err'=> 'invalid user credentials']);
        }
    }

}
