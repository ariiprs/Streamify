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
                'video_url' => 'https://www.youtube.com/watch?v=Q3MBjG7k3CE',
                'thumbnail' => 'https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/1280x1280/products/114648/868491/135092-1024__70390.1692662950.jpg?c=2',
                'rating' => 3.8,
                'is_featured' => true,
            ],
            [
                'name' => 'The Dark Knight',
                'slug' => 'the-dark-knight',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=Q3MBjG7k3CE',
                'thumbnail' => 'https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/1280x1280/products/114648/868491/135092-1024__70390.1692662950.jpg?c=2',
                'rating' => 3.0,
                'is_featured' => false,
            ],
            [
                'name' => 'Interstellar',
                'slug' => 'interstellar',
                'category' => 'Sci-Fi',
                'video_url' => 'https://www.youtube.com/watch?v=Q3MBjG7k3CE',
                'thumbnail' => 'https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/1280x1280/products/114648/868491/135092-1024__70390.1692662950.jpg?c=2',
                'rating' => 3.6,
                'is_featured' => false,
            ],
        ];

        Movie::insert($movies);
    }
}
