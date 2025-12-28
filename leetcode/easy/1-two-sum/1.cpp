#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
   public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> indices;

        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];

            if (indices.count(complement)) {
                return {indices[complement], i};
            };

            indices[nums[i]] = i; 
        }

        return {};
    }
};