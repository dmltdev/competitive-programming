<?php

class Solution {

  /**
   * @param Integer[] $nums
   * @return Integer[]
   */
  function findDuplicates($nums) {
    $result = array();
    $map = array();
  
    foreach ($nums as $num) {
      if (isset($map[$num])) {
        $result[] = $num;
    } else {
        $map[$num] = true;
    }
    }
  
    return $result;
  }
}

?>