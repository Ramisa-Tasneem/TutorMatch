<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Applicant extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'phone', 'email', 'hsc_year', 'ssc_year', 'current_student_at', 'student_id', 'national_id'
    ];
}

