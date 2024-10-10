<?php

$hashSet = array_fill(0, 20, []); // an hash set with a fixed size of ten elements
$sampleArray = ['Apple', 'Banana', 'Peach', 'Plum', 'Lemon', 'Pineapple', 'Coconut', 'Olive', 'Melon', 'Kiwi', 'Fig', 'Grape'];

// a simple hash function
function hashValue($item){
    $sumofChars = 0;
    $chars = str_split($item);
    foreach($chars as $value){
        $sumofChars += ord($value);
    }
    $hashValue = $sumofChars % count($GLOBALS["hashSet"]);
    return $hashValue;
}

foreach($sampleArray as $item){
    $hashSet[hashValue($item)][] = $item;
}

$item = 'Fig';
$hashValue = hashValue($item);
print_r("The index value of the item $item is $hashValue.");