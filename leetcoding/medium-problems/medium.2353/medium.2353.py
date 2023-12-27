from collections import defaultdict
from sortedcontainers import SortedSet
from typing import List

class FoodRatings:
  
  # O(n log n)
  def __init__(self, foods: List[str], cuisines: List[str], ratings: List[int]):
    self.cuisines_food = defaultdict(SortedSet)
    self.cuisines = {} 
    self.ratings = {}
    
    for i in range(len(foods)):
      self.cuisines_food[cuisines[i]].add((-ratings[i], foods[i]))
      self.cuisines[foods[i]] = cuisines[i]
      self.ratings[foods[i]] = ratings[i]
    
  # O(log n)
  def changeRating(self, food: str, newRating: int) -> None:
    currFood = self.cuisines[food]
    rating = self.ratings[food]
    
    self.cuisines_food[currFood].remove((-rating, food))
    self.cuisines_food[currFood].add((-newRating, food))
    
    self.ratings[food] = newRating
    
  # O(1)
  def highestRated(self, cuisine: str) -> str:
    return self.cuisines_food[cuisine][0][1]
    