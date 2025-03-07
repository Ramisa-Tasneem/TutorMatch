<?php

namespace App\Http\Controllers;

use App\Models\Applicant;
use Illuminate\Http\Request;

class ApplicantController extends Controller
{
    public function store(Request $request)
    {
        
        /*$request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:15',
            'email' => 'required|email|max:255',
            'hscYear' => 'required|integer|min:1900|max:2100',
            'sscYear' => 'required|integer|min:1900|max:2100',
            'currentStudentAt' => 'nullable|string|max:255',
            'studentId' => 'nullable|file|mimes:jpg,png,pdf|max:2048',
            'nationalId' => 'nullable|file|mimes:jpg,png,pdf|max:2048',
        ]);
        */

        
        $studentIdPath = "abcd";
        $nationalIdPath = "abcd";
        $applicant = Applicant::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'email' => $request->email,
            'hsc_year' => $request->hscYear,
            'ssc_year' => $request->sscYear,
            'current_student_at' => $request->currentStudentAt,
            'student_id' => $studentIdPath,
            'national_id' => $nationalIdPath,
        ]);

        return response()->json([
            'message' => 'Application submitted successfully!',
            'applicant' => $applicant
        ], 201);
    }
}

