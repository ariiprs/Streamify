<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $featuredMovie = Movie::whereIsFeatured(true)->get();
        $browseMovie = Movie::whereIsFeatured(false)->get();
        $movies = Movie::all();


        /* ini lempar datanya ke file jsxnya langsung, jadi tinggal cek aja
        di directory ini pasti ada filenya 'User/Dashboard/Index',*/
        return Inertia::render('User/Dashboard/Dashboard', [
            'featuredMovies' => $featuredMovie,
            'browseMovie' => $browseMovie,  
            'movies' => $movies,
        ]);
    }
}
