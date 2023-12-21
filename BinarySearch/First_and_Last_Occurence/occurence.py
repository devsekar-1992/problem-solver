### Iterative
def ocurrenceCheck(arr,target):
    first=-1
    last=-1
    for i in range(len(arr)):
        if arr[i]==target and arr[i+1]==target:
            if first==-1:
                first=i
            last=i+1
    print(first,last)
ocurrenceCheck([2, 5, 5, 5, 6, 6, 8, 9, 9, 9],4)

### Binary Search
def occurenceCheckInBinarySearch(arr,target):
    first=-1
    last=-1
    low=0
    high=len(arr)-1
    while low<=high:
        mid=(low+high)//2
        if arr[mid]==target:
            first=mid
            last=mid
            break
        elif arr[mid]<target:
            low=mid+1
        else:
            high=mid-1
     # Check if target is found, then expand the search range
    if first != -1:
        # Search left for the first occurrence
        while first > 0 and arr[first - 1] == target:
            first -= 1

        # Search right for the last occurrence
        while last < len(arr) - 1 and arr[last + 1] == target:
            last += 1
    return (first,last)
occurenceCheckInBinarySearch([5,10,10,20,20],5)