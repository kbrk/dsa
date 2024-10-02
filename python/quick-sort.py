from randomNumericList import randomNumericList

def quickSort(nums):
    
    if(len(nums) <= 1):
        return nums
    
    pivot = nums.pop() # Let the pivot element is the last one.
    
    arrayLower = [] # Has smaller elements than the pivot number.
    arrayGreater = [] # Has greater or equal elements than the pivot number.

    for i in nums:
        if i < pivot:
            arrayLower.append(i)
        else:
            arrayGreater.append(i)
    
    return quickSort(arrayLower) + [pivot] + quickSort(arrayGreater) # merge arrays recursively


nums = randomNumericList()
result = quickSort(nums)
print(result)