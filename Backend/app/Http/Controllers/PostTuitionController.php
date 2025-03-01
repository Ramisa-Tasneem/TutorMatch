<?php

namespace App\Http\Controllers;

use App\Models\PostTuition;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\TuitionPostedMail;
use Illuminate\Support\Facades\Log;

class PostTuitionController extends Controller
{
    public function index()
    {
        $posts = PostTuition::all();
        return response()->json($posts);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'StudentName' => 'required|string|max:255',
            'ParentName' => 'required|string|max:255',
            'ParentEmail' => 'required|email|max:255', 
            'PhoneNumber' => 'required|string|max:20',
            'Class' => 'required|string|max:50',
            'Subject' => 'required|string',
            'City' => 'required|string|max:100',
            'Area' => 'required|string|max:100',
            'Time' => 'required|string|max:100',
            'Salary' => 'required|numeric',
            'ShortTuitionDescription' => 'nullable|string',
            'PreferredMedium' => 'nullable|string|max:100',
            'Experience' => 'nullable|string|max:100',
            'Type' => 'nullable|string|max:50',
        ]);

        try {
            $post = PostTuition::create($validatedData);
    
            return response()->json([
                'message' => 'Tuition request submitted successfully',
                'post' => $post
            ], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to submit request', 'details' => $e->getMessage()], 500);
        }
        
    }
    public function show($id)
    {
        $post = PostTuition::findOrFail($id);
        return response()->json($post);
    }
    
    public function update(Request $request, $id)
    {
        $post = PostTuition::findOrFail($id);

        $validatedData = $request->validate([
            'StudentName' => 'sometimes|required|string|max:255',
            'ParentName' => 'sometimes|required|string|max:255',
            'ParentEmail' => 'sometimes|required|email|max:255', 
            'PhoneNumber' => 'sometimes|required|string|max:20',
            'Class' => 'sometimes|required|string|max:50',
            'Subject' => 'sometimes|required|string',
            'City' => 'sometimes|required|string|max:100',
            'Area' => 'sometimes|required|string|max:100',
            'Time' => 'sometimes|required|string|max:100',
            'Salary' => 'sometimes|required|numeric',
            'ShortTuitionDescription' => 'nullable|string',
            'PreferredMedium' => 'nullable|string|max:100',
            'Experience' => 'nullable|string|max:100',
            'Type' => 'nullable|string|max:50',
        ]);

        $post->update($validatedData);
        return response()->json($post);
    }
    
    public function destroy($id)
    {
        $post = PostTuition::findOrFail($id);
        $post->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}