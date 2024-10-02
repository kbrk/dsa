nums = [64, 34, 25, 12, 22, 11, 90, 5]

lengthNums = len(nums)


def bubbleSort():
    for i in range(lengthNums - 1):
        swapped = False
        for j in range(lengthNums - i - 1):
            if nums[j] > nums[j + 1]:
                nums[j], nums[j + 1] = nums[j + 1], nums[j]
                swapped = True
        if not swapped:
            break
bubbleSort()
print(nums)
