<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Models\User;
use App\Models\Tutor;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register','registerTutor','loginTutor']]);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = User::create(array_merge(
            $validator->validated(),
            ['password' => bcrypt($request->password)]
        ));

        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user,
        ], 201);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (!$token = auth('api')->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->createNewToken($token);
    }

    public function logout()
    {
        auth('api')->logout();

        return response()->json(['message' => 'User successfully logged out']);
    }

    public function profile(Request $request)
    {
        $user = auth('api')->user();

        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return response()->json(['user' => $user], 200);
    }

    public function registerTutor(Request $request)
{
    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:tutors',
        'password' => 'required|string|min:6|confirmed',
        'gender' => 'required|in:male,female,other',
        'phone' => 'required|string|max:15|unique:tutors',
        'tuition_district' => 'required|string|max:255',
        'preferred_tuition_area' => 'required|string|max:500',
        'your_location' => 'required|string|max:500',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 400);
    }

    $tutorData = $validator->validated();
    $tutorData['password'] = bcrypt($request->password);

    $tutor = Tutor::create($tutorData);

    return response()->json([
        'message' => 'Tutor successfully registered',
        'tutor' => $tutor,
    ], 201);
}

public function loginTutor(Request $request)
{
$validator = Validator::make($request->all(), [
    'email' => 'required|email',
    'password' => 'required|string|min:6',
]);

if ($validator->fails()) {
    return response()->json($validator->errors(), 422);
}

if (!$token = auth('tutor')->attempt($validator->validated())) {
    return response()->json(['error' => 'Unauthorized'], 401);
}

return $this->createNewToken($token);
}

    public function profileTutor(Request $request)
{
    $tutor = auth('tutor')->user();

    if (!$tutor) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }

    return response()->json(['tutor' => $tutor], 200);
}

public function logoutTutor()
{
    auth('tutor')->logout();
    return response()->json(['message' => 'Tutor successfully logged out']);
}
public function createNewToken($token)
{
    $user = auth('api')->user();
    $tutor = auth('tutor')->user();

    return response()->json([
        'access_token' => $token,
        'token_type' => 'bearer',
        'expires_in' => auth()->factory()->getTTL() * 60,
        'role' => $user ? 'user' : ($tutor ? 'tutor' : null),
        'user' => $user,
        'tutor' => $tutor,
    ]);
}

}