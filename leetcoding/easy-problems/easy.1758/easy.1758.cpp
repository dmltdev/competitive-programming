#include <iostream>
#include <string>

using namespace std;

class Solution {
   public:
    int minOperations(string s) {
      int startZero = 0;

      for (int i = 0; i < s.length(); i++) {
        if (i % 2 == 0) {
          if (s[i] == '1') {
            startZero++;
          }
        } else {
          if (s[i] == '0') {
            startZero++;
          }
        }
      }

      int startOne = s.size() - startZero;
      return min(startZero, startOne);
    }
};