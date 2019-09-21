<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Memoria extends Model {
    public function memType () {
        return $this->belongsTo('\App\MemType');
    }

    public function shoujo() {
        return $this->hasOne('\App\Shoujo');
    }
}
