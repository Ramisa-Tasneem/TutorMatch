<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InterestedTutor extends Model
{
    use HasFactory;
    protected $table = 'interested_tutor';

    protected $fillable = [
        'name', 'gender', 'qualification', 'location', 'tutoring_experience',
        'preferred_class', 'preferred_medium', 'preferred_subjects', 
        'preferred_time', 'expected_minimum_salary', 'preferred_tuition_style'
    ];
}
