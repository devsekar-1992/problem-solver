from typing import List


class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        return nums + nums


if __name__ == "__main__":
    solution = Solution()
    print(solution.getConcatenation([1, 2, 3]))
