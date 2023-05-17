<?php

namespace App\Models\Cupon;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cupone extends Model
{
    use HasFactory;
    protected $fillable = [
        "code",
        "type_discount",
        "discount",
        "type_count",
        "num_use",
        "state",
        "products",
        "categories",
    ];

    public function setCreatedAtAttribute($value)
    {
    	date_default_timezone_set("America/Mexico_City");
        $this->attributes["created_at"]= Carbon::now();
    }
    public function setUpdatedAtAttribute($value)
    {
    	date_default_timezone_set("America/Mexico_City");
        $this->attributes["updated_at"]= Carbon::now();
    }

}
