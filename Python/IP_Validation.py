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
    for x in range (4) :
        print(x)
        print(strng)
        if x == 3 : 
            ipnum = int(strng)
        else: 
            ipnum = int(strng[0:strng.find('.')])
        if(ipnum > 255 or ipnum <= 0) :
            return False
        strng = strng[(strng.find('.') + 1):len(strng)]
    return True
if(is_valid_IP('1.124.5.0')) :
    print("Valid")
else : 
    print("Not Valid")