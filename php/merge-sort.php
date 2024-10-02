<?php
include './randomNumericArray.php';


function merge($left, $right)
{
    $sorted = [];
    $i = 0;
    $j = 0;

    while ($i < count($left) && $j < count($right)) {
        if ($left[$i] < $right[$j]) {
            $sorted[] = $left[$i];
            $i++;
        } else {
            $sorted[] = $right[$j];
            $j++;
        }
    }

    // merge the remaining parts of the arrays with the sorted array if there are any
    return array_merge($sorted, array_slice($left, $i), array_slice($right, $j));
}

function mergeSort($nums)
{
    // divide until there is one element in the array.
    if (count($nums) <= 1) {
        return $nums;
    }

    $mid = floor(count($nums) / 2); // to divide the nums into two halves.
    $left = array_slice($nums, 0, $mid); // the left half
    $right = array_slice($nums, $mid); // the right half

    // recursively call mergeSort for the left and the right halves.
    return merge(mergeSort($left), mergeSort($right));
}


$nums = randomNumericArray(0, 100);

echo "Random Array: ";
print_r($nums);
$arrayResult = mergeSort($nums);
echo "Result Array: ";
print_r($arrayResult);
