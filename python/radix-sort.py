from randomNumericList import randomNumericList


def radixSort(nums):
    maxNum = max(nums)
    exp = 1  # exp's digit
    listRadix = [[] for _ in range(10)]  # // initial array of radix with index 0 to 9.

    while maxNum // exp > 0:
        # a loop that takes values in nums list, find their exp's digits and pushes them to the related index in radix list
        while len(nums) > 0:
            value = nums.pop()
            iRadix = (value // exp) % 10
            listRadix[iRadix].append(value)

        # a nested loop that takes values in the radix array and re-organize the nums array.
        for listi in listRadix:
            while len(listi) > 0:
                nums.append(listi.pop())
        exp *= 10

    return nums


nums = randomNumericList()
result = radixSort(nums)
print(result)
