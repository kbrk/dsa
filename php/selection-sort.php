<?php
include './randomNumericArray.php';

function selectionSort()
{
    $nums = randNumericArray(0, 100, 15);
    print_r($nums);
    $lengthNums = count($nums);

    for ($i = 0; $i < $lengthNums - 1; $i++) {
        $min = $nums[$i];
        $iMin = $i;
        for ($j = $i + 1; $j < $lengthNums; $j++) {
            if ($nums[$j] < $min) {
                $min = $nums[$j];
                $iMin = $j;
            }
        }
        $nums[$iMin] = $nums[$i];
        $nums[$i] = $min;
    }
    return $nums;
}

$result = selectionSort();

print_r($result);
