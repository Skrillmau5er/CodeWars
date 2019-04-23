'''
URL for challenge: https://www.codewars.com/kata/the-hashtag-generator/train/python
The marketing team is spending way too much time typing in hashtags.
Let's help them with out own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
'''

def generate_hashtag(s):
    if len(s) > 140 or len(s) == 0:
        return False
    s = s.split()
    for x in range (0, len(s)):
        s[x] = s[x].title()
    s = ''.join(s)
    s = '#' + s
    return s

print(generate_hashtag('   code wars is nice'))