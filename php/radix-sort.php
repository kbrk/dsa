<?php
include './randomNumericArray.php';



function radixSort($nums)
{
    $max = max($nums);
    $exp = 1; // exp's digit
    while (floor($max / $exp) > 0) {
        $arrayRadix = array_fill(0, 10, []); // initial array of radix with index 0 to 9

        // a loop that takes values in nums array, find their exp's digits and pushes them to the related index in radix array
        while (count($nums) > 0) {
            $value = array_pop($nums);
            $iRadix = floor($value / $exp) % 10;
            $arrayRadix[$iRadix][] = $value;
        }

        // a nested loop that takes values in the radix array and re-organize the nums array.
        foreach ($arrayRadix as $arrayValue) {
            while (count($arrayValue) > 0) {
                $nums[] = array_pop($arrayValue);
            }
        }
        $exp *= 10; // n*10's digit 
    }
    return $nums;
}


$nums = randomNumericArray(0, 100);

echo "Random Array: ";
print_r($nums);
$arrayResult = radixSort($nums);
echo "Result Array: ";
print_r($arrayResult);
