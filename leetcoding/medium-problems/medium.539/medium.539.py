from typing import List

class Solution:
    @classmethod
    def findMinDifference(self, timePoints: List[str]) -> int:
        totalMinutesInDay = 1440
        minDiff = totalMinutesInDay
        minutePoints = []
        
        for time in timePoints:
          hours, minutes = time.split(':')
          totalMinutes = int(hours) * 60 + int(minutes)
          minutePoints.append(totalMinutes)
          
        minutePoints = sorted(minutePoints)

        for i in range (1, len(minutePoints)):
          diff = minutePoints[i] - minutePoints[i - 1]
          minDiff = min(minDiff, diff)
          
        circularDiff = totalMinutesInDay - minutePoints[-1] + minutePoints[0]
        minDiff = min(minDiff, circularDiff)
          
        return minDiff
      
result1 = Solution.findMinDifference(["23:59", "00:00"])
print(result1)