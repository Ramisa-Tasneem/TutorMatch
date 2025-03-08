<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostTuition extends Model
{
    use HasFactory;
    
    protected $table = 'post_tuitions';
    
    protected $fillable = [
        'StudentName',
        'ParentName',
        'ParentEmail', 
        'PhoneNumber',
        'Class',
        'Subject',
        'City',
        'Area',
        'Time',
        'Salary',
        'ShortTuitionDescription',
        'PreferredMedium',
        'Experience',
        'Type'
    ];
}
