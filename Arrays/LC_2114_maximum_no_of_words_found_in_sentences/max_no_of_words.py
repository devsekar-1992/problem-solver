class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        x=[];
        for i in sentences:
            x.append(len(i.split(' ')))
        return max(x)