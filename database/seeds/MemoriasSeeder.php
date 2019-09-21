<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MemoriasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        DB::table('memorias')->insert([
            [
                'en-name' => 'Two Magical Lights',
                'jp-name' => 'Two Magical Lights',
                'rarity' => 3,
                'max-lvl' => 40,
                'mem_type_id' => 1,
                'img-url' => 'https://vignette.wikia.nocookie.net/magiarecord-en/images/b/b4/Memoria_1357_c.png/revision/latest/scale-to-width-down/275?cb=20190618222620',
                'shoujo_id' => 1,
                'isPersonal' => true,
            ]
        ]);
    }
}
