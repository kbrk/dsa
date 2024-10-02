<?php


function bubbleSort()
{
    $nums = [64, 34, 25, 12, 22, 11, 90, 55];
    $lengthNums = count($nums);
    for ($i = 0; $i < $lengthNums; $i++) {
        $swapped = false;
        for ($j = 0; $j < $lengthNums - $i - 1; $j++) {
            if ($nums[$j] > $nums[$j + 1]) {
                [$nums[$j], $nums[$j + 1]] = [$nums[$j + 1], $nums[$j]];
                $swapped = true;
            }
        }
        if (!$swapped) {
            break;
        }
    }
    return $nums;
}

print_r(bubbleSort());
