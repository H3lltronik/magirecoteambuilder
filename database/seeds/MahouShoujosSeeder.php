<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MahouShoujosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        DB::table('shoujos')->insert([
            [
                'name' => 'Fate T. Harlaown',
                'img-url' => 'https://vignette.wikia.nocookie.net/magiarecord-en/images/7/7b/Fate_T._Harlaown_04.png/revision/latest/scale-to-width-down/280?cb=20190625130958',
                'memoria_id' => 1,
            ]
        ]);
    }
}
