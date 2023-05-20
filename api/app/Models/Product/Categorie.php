<?php

namespace App\Models\Product;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Product\Product;
use App\Models\Discount\DiscountCategorie;

class Categorie extends Model
{
    use HasFactory;
    protected $fillable = [
        "name",
        "imagen",
        "icono",
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

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function discountcategories()
    {
        return $this->hasMany(DiscountCategorie::class);
    }
}
