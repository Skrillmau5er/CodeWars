#URL for Challenge: https://www.codewars.com/kata/ip-validation/train/python
#Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

#Input to the function is guaranteed to be a single string.

#Examples
#Valid inputs:

#1.2.3.4
#123.45.67.89
#Invalid inputs:

#1.2.3
#1.2.3.4.5
#123.456.78.90
#123.045.067.089
#Note that leading zeros (e.g. 01.02.03.04) are considered invalid.

def is_valid_IP(strng):
    stringy = ''
    indexplus = 0
    for x in range (4) :
        index = strng.find('.')
        stringy += strng[indexplus:(index + 1)]
        indexplus += (index + 1)
    return stringy
print(is_valid_IP('123.444.123.123'))