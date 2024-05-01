<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Student extends Authenticatable
{
    use HasFactory;

    /**
     * fillable
     *
     * @var array
     */
    protected $fillable = [
        'course_code',
        'class_id',
        'email_TIAS',
        'password_TIAS'
    ];

    /**
     * classroom
     *
     * @return void
     */
    // public function classroom()
    // {
    //     return $this->belongsTo(Classroom::class);
    // }
}