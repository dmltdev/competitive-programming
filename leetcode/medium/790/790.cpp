#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int numTilings(int n) {
        if (n == 0) {
            return 0;
        }
        if (n == 1) {
            return 1;
        }
        if (n == 2) {
            
        }

        const int MOD = 1000000007;

        vector<int> dp(n + 1, 0);
        dp[0] = 1;
        dp[1] = 1;
        dp[2] = 2;

        for (int i = 3; i <= n; i++) {
            dp[i] = ( (static_cast<long long>(dp[i-1]) * 2 % MOD) + dp[i-3] ) % MOD;
        }

        return dp[n];
    }
};

int main() {
    int n;
    cout << "Enter n: ";
    cin >> n;
    Solution sol;
    cout << sol.numTilings(n) << endl;
    return 0;
}