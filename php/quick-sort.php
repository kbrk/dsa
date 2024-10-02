<?php
include './randomNumericArray.php';

function quickSort($nums)
{
    print_r($nums);
    if (count($nums) <= 1) {
        return $nums;
    }

    $pivot = array_pop($nums); // Let the pivot element is the last one.

    $arrayLower = []; // Has smaller elements than the pivot number.
    $arrayGreater = []; // Has greater or equal elements than the pivot number.

    foreach ($nums as $value) {
        if ($value < $pivot) {
            $arrayLower[] = $value;
        } else {
            $arrayGreater[] = $value;
        }
    }

    return array_merge(quickSort($arrayLower), [$pivot], quickSort($arrayGreater)); // merge arrays recursively
}

$nums = randomNumericArray(0, 100, 15);
$result = quickSort($nums);
print_r($result);
