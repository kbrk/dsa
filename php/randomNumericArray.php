<?php

/**
 * Generate a random numeric array
 * @param int $min: starting number
 * @param int $max: ending number
 * @param int $n: count of the array
 * 
 * @return array the generated array
 */
function randomNumericArray($min, $max, $n = 1)
{
    $nums = [];
    for($i = 0; $i < mt_rand(1, 20); $i++){
        $nums[] = mt_rand($min, $max);
    }
    return $nums;
}