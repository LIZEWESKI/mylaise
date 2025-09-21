<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();

        User::factory()->create([
            'custom_id' => 'rick_was_here',
            'name' => 'Rick Sanchez',
            'pseudonym' => 'rick-c',
            'email' => 'rick@admin.com',
            'password' => '1234578',
            'server' => 'Tylezia',
            'bio' => 'What, so everyone is supposed to sleep every single night now?',
            "role" => 'admin',
        ]);
    }
}
