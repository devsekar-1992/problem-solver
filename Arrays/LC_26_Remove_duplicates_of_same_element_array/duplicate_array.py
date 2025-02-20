from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        k=0
        for i in range(len(nums)):
            if nums[i] != nums[k]:
                k += 1
                nums[k] = nums[i]
        return k+1


if __name__ == "__main__":
    solution = Solution()
    print(solution.removeDuplicates([1, 1, 2]))
