<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
          $movies = [
            [
                'name' => 'Inception',
                'slug' => 'inception',
                'category' => 'Sci-Fi',
                'video_url' => 'https://example.com/inception',
                'thumbnail' => 'https://example.com/inception',
                'rating' => 3.8,
                'is_featured' => true,
            ],
            [
                'name' => 'The Dark Knight',
                'slug' => 'the-dark-knight',
                'category' => 'Action',
                'video_url' => 'https://example.com/the-dark-knight',
                'thumbnail' => 'https://example.com/inception',
                'rating' => 3.0,
                'is_featured' => false,
            ],
            [
                'name' => 'Interstellar',
                'slug' => 'interstellar',
                'category' => 'Sci-Fi',
                'video_url' => 'https://example.com/interstellar',
                'thumbnail' => 'https://example.com/inception',
                'rating' => 3.6,
                'is_featured' => false,
            ],
        ];

        Movie::insert($movies);
    }
}
