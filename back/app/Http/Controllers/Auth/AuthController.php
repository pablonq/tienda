<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

use App\Http\Requests\Auth\RegisterRequest;

use App\Models\User;

use JWTAuth;

class AuthController extends Controller
{
    public function register(RegisterRequest  $request)
    {
      $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt( $request->password ),
        ]);
        $token = JWTAuth::fromUser($user);

        return response()->json(compact('user', 'token'), 201); 
}

    public function login(LoginRequest $request){
      $credentials = $request->only('email', 'password');
      if(!$token = JWTAuth::attempt($credentials)){
        return response()->json(['error' => 'Invalid_credentials'], 401);
      }
      $user = user::where('email', $request->email)->first();
      return response()->json(compact('user','token'),200);
    }
}
