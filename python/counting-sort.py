from randomNumericList import randomNumericList

'''
Generate a count list with the initial values of zero.
'''
def getCountList(nums):
    maxi = max(nums)
    listCount = [0] * (maxi+1) #initialize the count array with all values as zero.
    
    for i in nums:
        listCount[i] = listCount[i] + 1
    
    return listCount

def countingSort(nums):
    listResult = []
    listCount = getCountList(nums)
    print("Count List: ", listCount)
    
    for i, value in enumerate(listCount):
        if value > 0:
            # Add the index values in the countList to the result list as many times as their count.
            for j in range(value):
                listResult.append(i)
    return listResult
    

nums = randomNumericList()
result =  countingSort(nums)
print("Result List: ", result)