<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shoujo extends Model {
    public function memoria() {
        return $this->hasOne('\App\Memoria');
    }
}
