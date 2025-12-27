def containsDuplicaate(nums: list]int]) -> bool:
    freq = {}
    for num in nums:
        if num in freq:
            return True
        freq[num] = 1
    return False