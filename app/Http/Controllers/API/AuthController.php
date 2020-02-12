<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserLR;
use App\Http\Requests\UserRR;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Laravel\Passport\Client as PassportClient;

class AuthController extends Controller {
    
    /*
    * [@name]
    ** Description: 
    * [return]
    * [data]
    */
    public function login(UserLR $request) {
        
        $passwordGrantClient = PassportClient::where('password_client', 1)->first();
        
        $data = [
            'grant_type' => 'password',
            'client_id' => $passwordGrantClient->id,
            'client_secret' => $passwordGrantClient->secret,
            'username' => $request->email,
            'password' => $request->password,
            'scope' => '*'
        ];
        $tokenRequest = Request::create('oauth/token', 'post', $data);
        return app()->handle($tokenRequest);
    }

    /*
    * [@name]
    ** Description: 
    * [return]
    * [data]
    */
    public function register(UserRR $request) {
        $user = User::create($request->all());

        if (!$user) {
            return response()->json(["status" => "User not registered. Try again"], Response::HTTP_BAD_REQUEST);
        }
        return response()->json(["status" => "User registered"], Response::HTTP_CREATED);
    } 
}
