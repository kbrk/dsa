<?php
include './randomNumericArray.php';

function insertionSort()
{
    $nums = randomNumericArray(0, 100);
    print_r($nums);
    $lengthNums = count($nums);

    for ($i = 1; $i <= $lengthNums - 1; $i++) {
        $value = $nums[$i];
        $iInsert = $i;
        for ($j = $i - 1; $j >= 0; $j--) {
            if ($nums[$j] > $value) {
                $iInsert = $j;
                $nums[$j+1] = $nums[$j];
            }
        }
        $nums[$iInsert] = $value;
    }
    return $nums;
}

$result = insertionSort();
print_r($result);
