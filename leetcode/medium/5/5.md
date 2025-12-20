# 5. Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.

## Algorithm

- Expand around center:
    - For each character in the string, consider it as the center of a palindrome.
    - There are two types of centers:
        - A single character (for odd-length palindromes)
        - A pair of adjacent characters (for even-length palindromes)
    For each center, expand outwards as long as the characters on both sides are equal (i.e., the substring is a palindrome)
- Tracking the Longest Palindrome:
    - For each center, calculate the length of the palindrome found.
    - If this length is greater than the previously found maximum, update the starting index and the maximum length.
- Return the result:
    - After checking all centers, return to substring starting at the recorder index with the recorded length.