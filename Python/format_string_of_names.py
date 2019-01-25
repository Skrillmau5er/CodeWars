#https://www.codewars.com/kata/53368a47e38700bd8300030d/train/python
#Given: an array containing hashes of names

#Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

#Example:

#namelist([ {'name': 'Bart'}, {'name': 'Lisa'}, {'name': 'Maggie'} ])
# returns 'Bart, Lisa & Maggie'

#namelist([ {'name': 'Bart'}, {'name': 'Lisa'} ])
# returns 'Bart & Lisa'

#namelist([ {'name': 'Bart'} ])
# returns 'Bart'

#namelist([])
# returns ''
#Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

def namelist(names):
    length = len(names)
    nameString = ""
    for x in range(length) : 
        if(length == 1) :
            return names[x]['name']
        else : 
            if((x+1) == length) :
                nameString += " & " + names[x]['name']
                return nameString
            elif((x+2) == length) :
                nameString += names[x]['name']
            else : 
                nameString += names[x]['name'] + ', '
    if nameString == "" :
        return ''


