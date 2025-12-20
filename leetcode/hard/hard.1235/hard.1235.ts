/* 
1235. Maximum Profit in Job Scheduling

We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i].

You're given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.

If you choose a job that ends at time X you will be able to start another job that starts at time X.

 

Example 1:



Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
Output: 120
Explanation: The subset chosen is the first and fourth job. 
Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.
Example 2:



Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
Output: 150
Explanation: The subset chosen is the first, fourth and fifth job. 
Profit obtained 150 = 20 + 70 + 60.
Example 3:



Input: startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]
Output: 6
 

Constraints:

1 <= startTime.length == endTime.length == profit.length <= 5 * 104
1 <= startTime[i] < endTime[i] <= 109
1 <= profit[i] <= 104
*/

function bisect(intervals: [number, number, number][], endTime: number) {
  let lo = 0;
  let hi = intervals.length;

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (intervals[mid][0] < endTime) lo = mid + 1;
    else hi = mid;
  }

  return lo;
}

function jobScheduling(
  startTime: number[],
  endTime: number[],
  profit: number[]
): number {
  const intervals: [number, number, number][] = [];
  for (let i = 0; i < startTime.length; i++) {
    intervals.push([startTime[i], endTime[i], profit[i]]);
  }
  intervals.sort((a, b) => a[0] - b[0]);

  const cache: { [key: number]: number } = {};

  function dfs(i: number): number {
    if (i === intervals.length) return 0;
    if (i in cache) return cache[i];

    const res = dfs(i + 1);
    const j = bisect(intervals, intervals[i][1]);
    const maxProfit = Math.max(res, intervals[i][2] + dfs(j));
    cache[i] = maxProfit;

    return maxProfit;
  }

  return dfs(0);
}

jobScheduling([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70]); //?
