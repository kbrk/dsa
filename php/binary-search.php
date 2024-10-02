<?php
include './randomNumericArray.php';

function binarySearchwithRecursive($nums, $numSearched)
{
    $iMid = floor(count($nums) / 2);
    $mid = $nums[$iMid];

    if ($numSearched == $mid) {
        return $mid;
    }

    if ($numSearched < $mid) {
        return binarySearchwithRecursive(array_slice($nums, 0, $iMid), $numSearched); // if the mid value is greater than the searched call the function with the greater numbers of the array
    }

    if ($numSearched > $mid) {
        return binarySearchwithRecursive(array_slice($nums, $iMid), $numSearched); // if the mid value is smaller than the searched call the function with the smaller numbers of the array
    }
}


function binarySearchwithLoop($nums, $numSearched)
{
    while (count($nums) > 0) {
        $tmp = [...$nums];
        $iMid = floor(count($nums) / 2);
        $mid = $nums[$iMid];

        if($mid == $numSearched){
            return $mid;
        }
        
        if($numSearched < $mid){
            $nums = array_slice($tmp, 0, $iMid);
            continue;
        }
        
        if($numSearched > $mid){
            $nums = array_slice($tmp, $iMid);
            continue;
        }
    }
}

$nums = randomNumericArray(0, 10);
sort($nums); // sorted random array
$iSearched = mt_rand(0, count($nums) - 1); // randomly generated searched index
$numSearched = $nums[$iSearched];

echo "Random Array: ";
print_r($nums);
echo "Searched Number: ";
print_r($numSearched);

$resultRecursive = binarySearchwithRecursive($nums, $numSearched);
echo "\nResult in Recursive: $resultRecursive";
$resultLoop = binarySearchwithLoop($nums, $numSearched);
echo "\nResult in Loop: $resultLoop";
