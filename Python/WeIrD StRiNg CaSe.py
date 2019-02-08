#https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/python
#Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, 
#and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

#The passed in string will only consist of alphabetical characters and spaces(' '). 
#Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

#Examples:
#to_weird_case('String'); # => returns 'StRiNg'
#to_weird_case('Weird string case') # => returns 'WeIrD StRiNg CaSe'

def to_weird_case(string):
    x = 0
    listString = list(string)
    for pos,char in enumerate(listString) :
        if char.isalpha() :
            if(x % 2) :
               listString[pos] = char.lower()
            else :
                listString[pos] = char.upper()
            x += 1
    return ''.join(listString)

print(to_weird_case("ThIs Is ThE fInAl TeSt CaSe"))