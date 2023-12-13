from typing import List
from solution import numSpecial
import pytest

def test_numSpecial():
  matrix = [[1,0,0],[0,0,1],[1,0,0]]
  assert numSpecial(matrix) == 1