<?php

namespace App\Http\Controllers;

use App\Models\Applicant;
use Illuminate\Http\Request;

class ApplicantController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:15',
            'email' => 'required|email|max:255',
            'hsc_year' => 'required|string|max:4',
            'ssc_year' => 'required|string|max:4',
            'current_student_at' => 'required|string|max:255',
            'student_id' => 'required|file|mimes:jpg,png,pdf|max:2048',
            'national_id' => 'required|file|mimes:jpg,png,pdf|max:2048',
        ]);
    
        $studentIdPath = $request->file('student_id')->store('student_ids', 'public');
        $nationalIdPath = $request->file('national_id')->store('national_ids', 'public');
    
        $applicant = Applicant::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'email' => $request->email,
            'hsc_year' => $request->hsc_year,
            'ssc_year' => $request->ssc_year,
            'current_student_at' => $request->current_student_at,
            'student_id' => $studentIdPath,
            'national_id' => $nationalIdPath,
        ]);
    
        return response()->json([
            'message' => 'Application submitted successfully!',
            'applicant' => $applicant
        ], 201);
    }
    

}

