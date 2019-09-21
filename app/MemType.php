<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MemType extends Model {
    public function memorias() {
        return $this->hasMany('\App\Memoria');
    }
}
