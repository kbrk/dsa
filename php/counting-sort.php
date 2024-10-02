<?php
include './randomNumericArray.php';

/**
 * Generate a count array with the initial values of zero.
 * @param array $nums: generated random numeric array
 * 
 * @return array count array
 */
function getCountArray($nums)
{
    $max = max($nums);
    $arrayCount = array_fill(0, $max + 1, 0); // initialize the count array with all values as zero.

    foreach ($nums as $value) {
        $arrayCount[$value] = $arrayCount[$value] + 1; //storing the count of each element at their indexes.
    }

    return $arrayCount;
}


function countingSort($nums)
{
    $arrayResult = [];
    $arrayCount = getCountArray($nums);
    echo "Count Array: ";
    print_r($arrayCount);


    foreach ($arrayCount as $i => $value) {
        if ($value > 0) {
            // Add the index values in the countArray to the result array as many times as their count.  
            for ($j = 0; $j < $value; $j++) {
                $arrayResult[] = $i;
            }
        }
    }
    return $arrayResult;
}

$nums = randomNumericArray(0, 10);
echo "Random Array: ";
print_r($nums);
$result = countingSort($nums);
echo "Result Array: ";
print_r($result);
