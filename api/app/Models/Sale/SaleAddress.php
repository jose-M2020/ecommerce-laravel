<?php

namespace App\Models\Sale;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaleAddress extends Model
{
    use HasFactory;
    protected $fillable = [
        "sale_id",
        "full_name",
        "full_surname",
        "company_name",
        "county_region",
        "direccion",
        "city",
        "zip_code",
        "phone",
        "email",
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

    public function sale()
    {
        return $this->belongsTo(Sale::class);
    }
}
