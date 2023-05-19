<?php

namespace App\Http\Controllers\Slider;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Slider;

class SliderController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sliders = Slider::orderBy("id","desc")->get();

        return response()->json([
            "sliders" => $sliders,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if($request->hasFile("imagen_file")){
            $path = Storage::putFile("sliders",$request->file("imagen_file"));
            $request->request->add(["imagen" => $path]);
        }
        $slider = Slider::create($request->all());
        return response()->json([
            "slider" => $slider,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $slider = Slider::findOrFail($id);
        if($request->hasFile("imagen_file")){
            if($slider->imagen){
                Storage::delete($slider->imagen);
            }
            $path = Storage::putFile("sliders",$request->file("imagen_file"));
            $request->request->add(["imagen" => $path]);
        }
        $slider->update($request->all());
        return response()->json([
            "slider" => $slider,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $slider = Slider::findOrFail($id);
        $slider->delete();

        return response()->json(["message" => 200]);
    }
}
