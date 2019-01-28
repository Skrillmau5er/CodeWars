#URL for challenge: https://www.codewars.com/kata/5949481f86420f59480000e7/train/python
#Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.

#Give your answer in string format as 'odd' or 'even'.

#If the input array is empty consider it as: [0] (array with a zero).
def oddOrEven(arr):
    sum = 0
    for x in arr :
        sum += x
    return 'odd' if sum % 2 else 'even'


print(oddOrEven([3,6,8,77,55]))