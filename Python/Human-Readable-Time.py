'''
URL to Challenge: https://www.codewars.com/kata/52685f7382004e774f0001f7/train/python
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
'''

def make_readable(seconds):
    hours = seconds / 3600
    hours = str(int(hours))
    seconds = seconds % 3600
    minutes = seconds / 60
    minutes = str(int(minutes))
    seconds = str(seconds % 60)
    if len(hours) < 2:
        hours = "0" + hours
    if len(minutes) < 2:
        minutes = "0" + minutes
    if len(seconds) < 2:
        seconds = "0" + seconds
    time = hours + ':' + minutes + ':' + seconds
    return time
        


print(make_readable(454545))