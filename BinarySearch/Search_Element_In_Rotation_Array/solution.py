### Iterative Search Element
def iterativeSearchElement(arr,searchElem):
    for i in range(len(arr)):
        if arr[i]==searchElem:
            return i
iterativeSearchElement([8, 9, 10, 2, 5, 6],10)

### Binary Search Element
def binarySearchElement(arr,search_elem):
    low=0
    high=len(arr)-1
    result=-1
    while low<=high:
        mid=low+(high-low)//2
        if arr[mid]==search_elem:
            return mid
        if arr[mid]<search_elem:
            low=mid+1
        else:
            high=mid-1
    return result
binarySearchElement([9, 10, 2, 5, 6, 8],5)