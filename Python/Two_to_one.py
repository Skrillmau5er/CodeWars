#https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/python
#Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters,

#each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
#a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```

def longest(s1,s2):
    s1sorted = sorted(s1)
    s2sorted = sorted(s2)
    sortedList = []

    for x in s1sorted :
        if x not in sortedList :
            sortedList.append(x)

    for x in s2sorted :
        if x not in sortedList :
            sortedList.append(x)
    return ''.join(sorted(sortedList))
    