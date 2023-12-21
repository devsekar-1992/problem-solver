### Iterative Method With O(n)
def rotatedArray(arr):
    minimumElem=arr[0]
    index=-1
    for i in range(len(arr)):
        if arr[i]<minimumElem:
            minimumElem=arr[i]
    return arr.index(minimumElem)
rotatedArray([8, 9, 10, 2, 5, 6])

### Iterative Binary Search
def rotatedArrayInBS(arr):
    low=0
    high=len(arr)-1
    while low<high:
        mid=low+(high-low)//2
        if arr[mid]>arr[high]:
            low=mid+1
        else:
            high=mid
    return low
rotatedArrayInBS([8, 9, 10, 1, 2, 3, 4, 5, 6, 7])