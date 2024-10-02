from randomNumericList import randomNumericList


def merge(left, right):
    sorted = []
    i = 0
    j = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            sorted.append(left[i])
            i += 1
        else:
            sorted.append(right[j])
            j += 1

    # merge the remaining parts of the arrays with the sorted array if there are any
    return sorted + left[i:] + right[j:]


def mergeSort(nums):
    # divide until there is one element in the list.
    if len(nums) <= 1:
        return nums

    mid = len(nums) // 2  # to divide the nums into two halves.
    left = nums[:mid]  # the left half
    right = nums[mid:]  # the right half

    # recursively call mergeSort for the left and the right halves.
    return merge(mergeSort(left), mergeSort(right))


nums = randomNumericList()
result = mergeSort(nums)
print(result)
