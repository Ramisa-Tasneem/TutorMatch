<?php
namespace App\Http\Controllers;

use App\Models\InterestedTutor;
use Facade\FlareClient\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class InterestedTutorController extends Controller
{
    public function index()
    {
        $tutors = InterestedTutor::all();
        return response()->json($tutors);
    }

    public function store(Request $request)
    {
        // Validate the incoming request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'gender' => 'required|in:Male,Female,Other',
            'qualification' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'tutoring_experience' => 'required|string|max:100',
            'preferred_class' => 'required|string|max:255',
            'preferred_medium' => 'required|string|max:255',
            'preferred_subjects' => 'required|string',
            'preferred_time' => 'required|string|max:255',
            'expected_minimum_salary' => 'required|string|max:255',
            'preferred_tuition_style' => 'required|string|max:255',
        ]);
    
        // If validation fails, return errors
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 404);
        }
        // Create a new tutor profile using validated data
        $tutor = InterestedTutor::create($validator->validated());
    
        // Return success response
        return response()->json([
            'message' => 'Tutor profile added successfully',
            'tutor' => $tutor
        ], 200);
    }
  
    public function show($id)
    {
        $tutor = InterestedTutor::findOrFail($id);
        return response()->json($tutor);
    }

    public function update(Request $request, $id)
    {
        $tutor = InterestedTutor::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'gender' => 'sometimes|required|in:Male,Female,Other',
            'qualification' => 'sometimes|required|string|max:255',
            'location' => 'sometimes|required|string|max:255',
            'tutoring_experience' => 'sometimes|required|string|max:100',
            'preferred_class' => 'sometimes|required|string|max:255',
            'preferred_medium' => 'sometimes|required|string|max:255',
            'preferred_subjects' => 'sometimes|required|string',
            'preferred_time' => 'sometimes|required|string|max:255',
            'expected_minimum_salary' => 'sometimes|required|numeric',
            'preferred_tuition_style' => 'sometimes|required|string|max:255',
        ]);

        $tutor->update($validatedData);

        return response()->json($tutor);
    }

    public function destroy($id)
    {
        $tutor = InterestedTutor::findOrFail($id);
        $tutor->delete();
        return response()->json(['message' => 'Tutor profile deleted successfully']);
    }
}
