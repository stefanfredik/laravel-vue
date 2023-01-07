<?php

use App\Http\Controllers\Api\V1\SkillController;
use Illuminate\Support\Facades\Route;


Route::group(['prefix' => 'v1'], function () {
    Route::apiResource('skills', SkillController::class);
});
