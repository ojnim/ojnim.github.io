#sorting
rearrange a given array or list of elements according to a comparison operator on the elements



[Quick Sort]
Best Case: nlogn
Average Case: nlogn
Worst Case: n^2
Memory: logn
Stable: No

partition is done recursively
smaller than pivot->left, else->right

https://www.geeksforgeeks.org/quick-sort/#

# Function to find the partition position
def partition(array, low, high):

    # Choose the rightmost element as pivot
    pivot = array[high]

    # Pointer for greater element
    i = low - 1

    # Traverse through all elements
    # compare each element with pivot
    for j in range(low, high):
        if array[j] <= pivot:

            # If element smaller than pivot is found
            # swap it with the greater element pointed by i
            i = i + 1

            # Swapping element at i with element at j
            (array[i], array[j]) = (array[j], array[i])

    # Swap the pivot element with
    # the greater element specified by i
    (array[i + 1], array[high]) = (array[high], array[i + 1])

    # Return the position from where partition is done
    return i + 1


# Function to perform quicksort
def quicksort(array, low, high):
    if low < high:

        # Find pivot element such that
        # element smaller than pivot are on the left
        # element greater than pivot are on the right
        pi = partition(array, low, high)

        # Recursive call on the left of pivot
        quicksort(array, low, pi - 1)

        # Recursive call on the right of pivot
        quicksort(array, pi + 1, high)


-Advantages: easy to solve problems, efficient on larget data sets, requires small amount of memory

-Disadvantages: worst case, not a good choice for small data sets, not a stable sort


[Merge Sort]
Best Case: nlogn
Average Case: nlogn
Worst Case: nlogn
Memory: n
Stable: Yes

https://www.geeksforgeeks.org/merge-sort/

recursive algorithm that continuously splits the array in half until it cannot be further divided


# Python program for implementation of MergeSort

def mergeSort(arr):
	if len(arr) > 1:

		# Finding the mid of the array
		mid = len(arr)//2

		# Dividing the array elements
		L = arr[:mid]

		# Into 2 halves
		R = arr[mid:]

		# Sorting the first half
		mergeSort(L)

		# Sorting the second half
		mergeSort(R)

		i = j = k = 0

		# Copy data to temp arrays L[] and R[]
		while i < len(L) and j < len(R):
			if L[i] <= R[j]:
				arr[k] = L[i]
				i += 1
			else:
				arr[k] = R[j]
				j += 1
			k += 1

		# Checking if any element was left
		while i < len(L):
			arr[k] = L[i]
			i += 1
			k += 1

		while j < len(R):
			arr[k] = R[j]
			j += 1
			k += 1


-Applications: sorting large data sets, external sorting, custom sorting, inversion count problem

-Advantages: stability, guaranted worst-case performance, parallelizable


[Heap Sort]
Best Case
Average Case
Worst Case
Memory
Stable

[Insertion Sort]
Best Case
Average Case
Worst Case
Memory
Stable

[Tim Sort]
Best Case
Average Case
Worst Case
Memory
Stable

[Selection Sort]
Best Case
Average Case
Worst Case
Memory
Stable

[Shell Sort]
Best Case
Average Case
Worst Case
Memory
Stable

[Bubble Sort]
Best Case
Average Case
Worst Case
Memory
Stable

[Tree Sort]
Best Case
Average Case
Worst Case
Memory
Stable

[Cycle Sort]
Best Case
Average Case
Worst Case
Memory
Stable

[Strand Sort]
Best Case
Average Case
Worst Case
Memory
Stable

[Cocktail Shaker Sort]
Best Case
Average Case
Worst Case
Memory
Stable

[Comb Sort]
Best Case
Average Case
Worst Case
Memory
Stable

[Odd-even Sort]
Best Case
Average Case
Worst Case
Memory
Stable




Source:
Geeks for Geeks
https://www.geeksforgeeks.org/sorting-algorithms/#