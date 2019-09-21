<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MemoriaTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        DB::table('mem_types')->insert([
            [
                'name' => 'Skill',
            ],
            [
                'name' => 'Ability',
            ]
        ]);
    }
}
