import random


def randomNumericList():
    """
        Generate a list with a random number of random elements.
    """
    nums = []
    count = round(random.random()*20) + 1 # Let the count be greater than zero.
    print("Count: ", count) 
    for i in range(count):
        value = round(random.random()*20)
        nums.append(value)
    print("List: ", nums)
    return nums