<?php

namespace App\Http\Controllers\Student;

use App\Models\Student;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use illuminate\Http\Client\Response;

class LoginController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        //validate the form data
        $request->validate([
            'course_code'      => 'required',
            'class_id'  => 'required',
            'email_TIAS'  => 'required|email',
            'password_TIAS'  => 'required',
        ]);

        $student = Http::post('https://660a7136ccda4cbc75dae023.mockapi.io/api/users/users', [
            'course_code' => $request->course_code,
            'class_id' => $request->class_id,
            'email_TIAS' => $request->email_TIAS,
            'password_TIAS' => $request->password_TIAS,
        ])->first();

        //cek nisn dan password
        // $student = Student::where([
        //     'nisn'      => $request->nisn,
        //     'password'  => $request->password
        // ])->first();

        if(!$student) {
            return redirect()->back()->with('error', 'Data yang dimasukan salah');
        }
        
        //login the user
        auth()->guard('student')->login($student);

        //redirect to dashboard
        return redirect()->route('student.dashboard');
    }
}