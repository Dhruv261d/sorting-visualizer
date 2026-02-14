import React, { useState, useEffect, useRef, useMemo } from 'react';
import '../src/theme.css';

// --- DATA: Algorithm Details & Multi-language Code Snippets ---
const ALGO_DATA = {
  bubble: {
    title: 'Bubble Sort',
    initials: 'BS',
    description: 'Bubble Sort is an iterative sorting algorithm that works by repeatedly stepping through the list, comparing adjacent elements and swapping them if they are in the wrong order.\n\nLogic:\n1. Compare adjacent elements. If left > right, swap.\n2. After one pass, the largest element "bubbles up" to the end.\n3. Repeat for remaining elements.\n\nComplexity Cases:\n• Best Case: O(n) - Occurs when the array is already sorted. The algorithm finishes in a single pass using a "swapped" flag optimization.\n• Average Case: O(n²) - Occurs when elements are in random order.\n• Worst Case: O(n²) - Occurs when the array is sorted in reverse order, requiring maximum swaps.',
    best: 'O(n)', 
    average: 'O(n²)', 
    worst: 'O(n²)', 
    space: 'O(1)',
    code: {
      js: `// Complete JavaScript Implementation\nfunction bubbleSort(arr) {\n    let n = arr.length;\n    for (let i = 0; i < n - 1; i++) {\n        let swapped = false;\n        for (let j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n                swapped = true;\n            }\n        }\n        if (!swapped) break;\n    }\n    return arr;\n}\n\n// Driver Code\nconst arr = [64, 34, 25, 12, 22, 11, 90];\nconsole.log("Sorted array:", bubbleSort(arr));`,
      python: `# Complete Python Implementation\ndef bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        swapped = False\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n                swapped = True\n        if not swapped:\n            break\n    return arr\n\nif __name__ == "__main__":\n    data = [64, 34, 25, 12, 22, 11, 90]\n    print("Sorted array:", bubble_sort(data))`,
      java: `// Complete Java Implementation\nimport java.util.Arrays;\n\npublic class BubbleSort {\n    static void sort(int arr[]) {\n        int n = arr.length;\n        for (int i = 0; i < n - 1; i++) {\n            boolean swapped = false;\n            for (int j = 0; j < n - i - 1; j++) {\n                if (arr[j] > arr[j + 1]) {\n                    int temp = arr[j];\n                    arr[j] = arr[j + 1];\n                    arr[j + 1] = temp;\n                    swapped = true;\n                }\n            }\n            if (!swapped) break;\n        }\n    }\n\n    public static void main(String args[]) {\n        int arr[] = {64, 34, 25, 12, 22, 11, 90};\n        sort(arr);\n        System.out.println("Sorted: " + Arrays.toString(arr));\n    }\n}`,
      cpp: `// Complete C++ Implementation\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nvoid bubbleSort(std::vector<int>& arr) {\n    int n = arr.size();\n    for (int i = 0; i < n - 1; i++) {\n        bool swapped = false;\n        for (int j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                std::swap(arr[j], arr[j + 1]);\n                swapped = true;\n            }\n        }\n        if (!swapped) break;\n    }\n}\n\nint main() {\n    std::vector<int> arr = {64, 34, 25, 12, 22, 11, 90};\n    bubbleSort(arr);\n    for (int x : arr) std::cout << x << " ";\n    return 0;\n}`,
      c: `// Complete C Implementation\n#include <stdio.h>\n#include <stdbool.h>\n\nvoid bubbleSort(int arr[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        bool swapped = false;\n        for (int j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n                swapped = true;\n            }\n        }\n        if (!swapped) break;\n    }\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    bubbleSort(arr, n);\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}`
    }
  },
  selection: {
    title: 'Selection Sort',
    initials: 'SS',
    description: 'Selection Sort works by dividing the list into two parts: a sorted sublist of items built from left to right and a sublist of remaining unsorted items.\n\nLogic:\n1. Maintain a pointer to the start of the unsorted portion.\n2. Scan the unsorted portion to find the minimum value.\n3. Swap the minimum value with the pointer element.\n4. Advance the pointer.\n\nComplexity Cases:\n• Best Case: O(n²) - Even if the array is sorted, it must scan the entire remaining unsorted list to confirm the minimum.\n• Average Case: O(n²) - Standard for random distribution.\n• Worst Case: O(n²) - Occurs regardless of order, as the nested loops always execute.',
    best: 'O(n²)', 
    average: 'O(n²)', 
    worst: 'O(n²)', 
    space: 'O(1)',
    code: {
      js: `// Complete JavaScript Implementation\nfunction selectionSort(arr) {\n    let n = arr.length;\n    for (let i = 0; i < n; i++) {\n        let minIdx = i;\n        for (let j = i + 1; j < n; j++) {\n            if (arr[j] < arr[minIdx]) minIdx = j;\n        }\n        if (minIdx !== i) [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];\n    }\n    return arr;\n}\n\nconst arr = [29, 10, 14, 37, 13];\nconsole.log("Sorted:", selectionSort(arr));`,
      python: `# Complete Python Implementation\ndef selection_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        min_idx = i\n        for j in range(i + 1, n):\n            if arr[j] < arr[min_idx]:\n                min_idx = j\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]\n    return arr\n\nif __name__ == "__main__":\n    data = [29, 10, 14, 37, 13]\n    print("Sorted:", selection_sort(data))`,
      java: `// Complete Java Implementation\nimport java.util.Arrays;\n\npublic class SelectionSort {\n    static void sort(int arr[]) {\n        int n = arr.length;\n        for (int i = 0; i < n - 1; i++) {\n            int min_idx = i;\n            for (int j = i + 1; j < n; j++) {\n                if (arr[j] < arr[min_idx]) min_idx = j;\n            }\n            int temp = arr[min_idx];\n            arr[min_idx] = arr[i];\n            arr[i] = temp;\n        }\n    }\n\n    public static void main(String args[]) {\n        int arr[] = {29, 10, 14, 37, 13};\n        sort(arr);\n        System.out.println(Arrays.toString(arr));\n    }\n}`,
      cpp: `// Complete C++ Implementation\n#include <iostream>\n#include <vector>\n\nvoid selectionSort(std::vector<int>& arr) {\n    int n = arr.size();\n    for (int i = 0; i < n - 1; i++) {\n        int min_idx = i;\n        for (int j = i + 1; j < n; j++) {\n            if (arr[j] < arr[min_idx]) min_idx = j;\n        }\n        std::swap(arr[i], arr[min_idx]);\n    }\n}\n\nint main() {\n    std::vector<int> arr = {29, 10, 14, 37, 13};\n    selectionSort(arr);\n    for (int x : arr) std::cout << x << " ";\n    return 0;\n}`,
      c: `// Complete C Implementation\n#include <stdio.h>\n\nvoid selectionSort(int arr[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        int min_idx = i;\n        for (int j = i + 1; j < n; j++) {\n            if (arr[j] < arr[min_idx]) min_idx = j;\n        }\n        int temp = arr[min_idx];\n        arr[min_idx] = arr[i];\n        arr[i] = temp;\n    }\n}\n\nint main() {\n    int arr[] = {29, 10, 14, 37, 13};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    selectionSort(arr, n);\n    for (int i=0; i<n; i++) printf("%d ", arr[i]);\n    return 0;\n}`
    }
  },
  insertion: {
    title: 'Insertion Sort',
    initials: 'IS',
    description: 'Insertion Sort builds the final sorted array one item at a time. It is much more efficient than Bubble and Selection sort for small or nearly sorted datasets.\n\nLogic:\n1. Start from the second element (index 1).\n2. Store this value as the "key".\n3. Shift elements of the sorted sublist that are greater than the key to the right.\n4. Insert the key into its correct gap.\n\nComplexity Cases:\n• Best Case: O(n) - Occurs when the array is already sorted; each element is only compared once with its predecessor.\n• Average Case: O(n²) - Standard distribution.\n• Worst Case: O(n²) - Occurs when the array is sorted in reverse order.',
    best: 'O(n)', 
    average: 'O(n²)', 
    worst: 'O(n²)', 
    space: 'O(1)',
    code: {
      js: `// Complete JavaScript Implementation\nfunction insertionSort(arr) {\n    for (let i = 1; i < arr.length; i++) {\n        let key = arr[i], j = i - 1;\n        while (j >= 0 && arr[j] > key) {\n            arr[j + 1] = arr[j];\n            j--;\n        }\n        arr[j + 1] = key;\n    }\n    return arr;\n}\n\nconst arr = [12, 11, 13, 5, 6];\nconsole.log("Sorted:", insertionSort(arr));`,
      python: `# Complete Python Implementation\ndef insertion_sort(arr):\n    for i in range(1, len(arr)):\n        key, j = arr[i], i - 1\n        while j >= 0 and key < arr[j]:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key\n    return arr\n\nif __name__ == "__main__":\n    data = [12, 11, 13, 5, 6]\n    print("Sorted:", insertion_sort(data))`,
      java: `// Complete Java Implementation\nimport java.util.Arrays;\n\npublic class InsertionSort {\n    static void sort(int arr[]) {\n        int n = arr.length;\n        for (int i = 1; i < n; ++i) {\n            int key = arr[i];\n            int j = i - 1;\n            while (j >= 0 && arr[j] > key) {\n                arr[j + 1] = arr[j];\n                j = j - 1;\n            }\n            arr[j + 1] = key;\n        }\n    }\n\n    public static void main(String args[]) {\n        int arr[] = {12, 11, 13, 5, 6};\n        sort(arr);\n        System.out.println(Arrays.toString(arr));\n    }\n}`,
      cpp: `// Complete C++ Implementation\n#include <iostream>\n#include <vector>\n\nvoid insertionSort(std::vector<int>& arr) {\n    for (size_t i = 1; i < arr.size(); i++) {\n        int key = arr[i];\n        int j = i - 1;\n        while (j >= 0 && arr[j] > key) {\n            arr[j + 1] = arr[j];\n            j--;\n        }\n        arr[j + 1] = key;\n    }\n}\n\nint main() {\n    std::vector<int> arr = {12, 11, 13, 5, 6};\n    insertionSort(arr);\n    for (int x : arr) std::cout << x << " ";\n    return 0;\n}`,
      c: `// Complete C Implementation\n#include <stdio.h>\n\nvoid insertionSort(int arr[], int n) {\n    for (int i = 1; i < n; i++) {\n        int key = arr[i];\n        int j = i - 1;\n        while (j >= 0 && arr[j] > key) {\n            arr[j + 1] = arr[j];\n            j--;\n        }\n        arr[j + 1] = key;\n    }\n}\n\nint main() {\n    int arr[] = {12, 11, 13, 5, 6};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    insertionSort(arr, n);\n    for (int i=0; i<n; i++) printf("%d ", arr[i]);\n    return 0;\n}`
    }
  },
  quick: {
    title: 'Quick Sort',
    initials: 'QS',
    description: 'Quick Sort is a Divide and Conquer algorithm that recursively partitions an array based on a pivot element.\n\nLogic:\n1. Choose a "pivot" element from the array.\n2. Rearrange: Elements < pivot to the left, elements > pivot to the right.\n3. Recursively apply to the resulting sub-arrays.\n\nComplexity Cases:\n• Best Case: O(n log n) - Occurs when the pivot consistently splits the array into two equal halves.\n• Average Case: O(n log n) - Occurs for most random inputs.\n• Worst Case: O(n²) - Occurs when the pivot choice is extremely poor (e.g., smallest/largest element) in an already sorted array.',
    best: 'O(n log n)', 
    average: 'O(n log n)', 
    worst: 'O(n²)', 
    space: 'O(log n)',
    code: {
      js: `// Complete JavaScript Implementation\nfunction quickSort(arr, low = 0, high = arr.length - 1) {\n    if (low < high) {\n        let pi = partition(arr, low, high);\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n    return arr;\n}\n\nfunction partition(arr, low, high) {\n    let pivot = arr[high], i = low - 1;\n    for (let j = low; j < high; j++) {\n        if (arr[j] < pivot) {\n            i++;\n            [arr[i], arr[j]] = [arr[j], arr[i]];\n        }\n    }\n    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];\n    return i + 1;\n}\n\nconst arr = [10, 7, 8, 9, 1, 5];\nconsole.log("Sorted:", quickSort(arr));`,
      python: `# Complete Python Implementation\ndef partition(arr, low, high):\n    i = low - 1\n    pivot = arr[high]\n    for j in range(low, high):\n        if arr[j] < pivot:\n            i += 1\n            arr[i], arr[j] = arr[j], arr[i]\n    arr[i + 1], arr[high] = arr[high], arr[i + 1]\n    return i + 1\n\ndef quick_sort(arr, low, high):\n    if low < high:\n        pi = partition(arr, low, high)\n        quick_sort(arr, low, pi - 1)\n        quick_sort(arr, pi + 1, high)\n\nif __name__ == "__main__":\n    data = [10, 7, 8, 9, 1, 5]\n    quick_sort(data, 0, len(data) - 1)\n    print("Sorted:", data)`,
      java: `// Complete Java Implementation\nimport java.util.Arrays;\n\npublic class QuickSort {\n    static int partition(int arr[], int low, int high) {\n        int pivot = arr[high], i = (low - 1);\n        for (int j = low; j < high; j++) {\n            if (arr[j] < pivot) {\n                i++;\n                int temp = arr[i];\n                arr[i] = arr[j];\n                arr[j] = temp;\n            }\n        }\n        int temp = arr[i + 1];\n        arr[i + 1] = arr[high];\n        arr[high] = temp;\n        return i + 1;\n    }\n\n    static void sort(int arr[], int low, int high) {\n        if (low < high) {\n            int pi = partition(arr, low, high);\n            sort(arr, low, pi - 1);\n            sort(arr, pi + 1, high);\n        }\n    }\n\n    public static void main(String args[]) {\n        int arr[] = {10, 7, 8, 9, 1, 5};\n        sort(arr, 0, arr.length - 1);\n        System.out.println(Arrays.toString(arr));\n    }\n}`,
      cpp: `// Complete C++ Implementation\n#include <iostream>\n#include <vector>\n\nint partition(std::vector<int>& arr, int low, int high) {\n    int pivot = arr[high], i = low - 1;\n    for (int j = low; j <= high - 1; j++) {\n        if (arr[j] < pivot) {\n            i++;\n            std::swap(arr[i], arr[j]);\n        }\n    }\n    std::swap(arr[i + 1], arr[high]);\n    return (i + 1);\n}\n\nvoid quickSort(std::vector<int>& arr, int low, int high) {\n    if (low < high) {\n        int pi = partition(arr, low, high);\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}\n\nint main() {\n    std::vector<int> arr = {10, 7, 8, 9, 1, 5};\n    quickSort(arr, 0, arr.size() - 1);\n    for (int x : arr) std::cout << x << " ";\n    return 0;\n}`,
      c: `// Complete C Implementation\n#include <stdio.h>\n\nvoid swap(int* a, int* b) { int t = *a; *a = *b; *b = t; }\nint partition(int arr[], int l, int h) {\n    int pivot = arr[h], i = l - 1;\n    for (int j = l; j < h; j++) if (arr[j] < pivot) swap(&arr[++i], &arr[j]);\n    swap(&arr[i + 1], &arr[h]);\n    return i + 1;\n}\nvoid quickSort(int arr[], int l, int h) {\n    if (l < h) {\n        int pi = partition(arr, l, h);\n        quickSort(arr, l, pi - 1);\n        quickSort(arr, pi + 1, h);\n    }\n}\n\nint main() {\n    int arr[] = {10, 7, 8, 9, 1, 5};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    quickSort(arr, 0, n - 1);\n    for (int i=0; i<n; i++) printf("%d ", arr[i]);\n    return 0;\n}`
    }
  },
  merge: {
    title: 'Merge Sort',
    initials: 'MS',
    description: 'Merge Sort is a Divide and Conquer algorithm that recursively halves the input array and merges the sorted halves.\n\nLogic:\n1. Find the middle index to divide the array.\n2. Recursively sort the left and right halves.\n3. Merge the two sorted halves into a single sorted array.\n\nComplexity Cases:\n• Best, Average, Worst Case: O(n log n) - The algorithm consistently performs the same number of divisions and merges regardless of initial ordering. It is a stable sort with predictable performance.',
    best: 'O(n log n)', 
    average: 'O(n log n)', 
    worst: 'O(n log n)', 
    space: 'O(n)',
    code: {
      js: `// Complete JavaScript Implementation\nfunction mergeSort(arr) {\n    if (arr.length <= 1) return arr;\n    const mid = Math.floor(arr.length / 2);\n    const left = mergeSort(arr.slice(0, mid));\n    const right = mergeSort(arr.slice(mid));\n    return merge(left, right);\n}\n\nfunction merge(left, right) {\n    let res = [], l = 0, r = 0;\n    while (l < left.length && r < right.length) {\n        res.push(left[l] < right[r] ? left[l++] : right[r++]);\n    }\n    return [...res, ...left.slice(l), ...right.slice(r)];\n}\n\nconst arr = [38, 27, 43, 3, 9, 82, 10];\nconsole.log("Sorted:", mergeSort(arr));`,
      python: `# Complete Python Implementation\ndef merge_sort(arr):\n    if len(arr) > 1:\n        mid = len(arr)//2\n        L, R = arr[:mid], arr[mid:]\n        merge_sort(L)\n        merge_sort(R)\n        i = j = k = 0\n        while i < len(L) and j < len(R):\n            if L[i] < R[j]: arr[k] = L[i]; i += 1\n            else: arr[k] = R[j]; j += 1\n            k += 1\n        while i < len(L): arr[k] = L[i]; i += 1; k += 1\n        while j < len(R): arr[k] = R[j]; j += 1; k += 1\n    return arr\n\nif __name__ == "__main__":\n    data = [38, 27, 43, 3, 9, 82, 10]\n    print("Sorted:", merge_sort(data))`,
      java: `// Complete Java Implementation\nimport java.util.Arrays;\n\npublic class MergeSort {\n    static void merge(int arr[], int l, int m, int r) {\n        int n1 = m - l + 1, n2 = r - m;\n        int L[] = new int[n1], R[] = new int[n2];\n        for (int i = 0; i < n1; ++i) L[i] = arr[l + i];\n        for (int j = 0; j < n2; ++j) R[j] = arr[m + 1 + j];\n        int i = 0, j = 0, k = l;\n        while (i < n1 && j < n2) arr[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];\n        while (i < n1) arr[k++] = L[i++];\n        while (j < n2) arr[k++] = R[j++];\n    }\n\n    static void sort(int arr[], int l, int r) {\n        if (l < r) {\n            int m = l + (r - l) / 2;\n            sort(arr, l, m);\n            sort(arr, m + 1, r);\n            merge(arr, l, m, r);\n        }\n    }\n\n    public static void main(String args[]) {\n        int arr[] = {38, 27, 43, 3, 9, 82, 10};\n        sort(arr, 0, arr.length - 1);\n        System.out.println(Arrays.toString(arr));\n    }\n}`,
      cpp: `// Complete C++ Implementation\n#include <iostream>\n#include <vector>\n\nvoid merge(std::vector<int>& arr, int l, int m, int r) {\n    int n1 = m - l + 1, n2 = r - m;\n    std::vector<int> L(n1), R(n2);\n    for(int i=0; i<n1; i++) L[i] = arr[l+i];\n    for(int j=0; j<n2; j++) R[j] = arr[m+1+j];\n    int i=0, j=0, k=l;\n    while(i<n1 && j<n2) arr[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];\n    while(i<n1) arr[k++] = L[i++];\n    while(j<n2) arr[k++] = R[j++];\n}\n\nvoid mergeSort(std::vector<int>& arr, int l, int r) {\n    if(l >= r) return;\n    int m = l + (r - l) / 2;\n    mergeSort(arr, l, m);\n    mergeSort(arr, m + 1, r);\n    merge(arr, l, m, r);\n}\n\nint main() {\n    std::vector<int> arr = {38, 27, 43, 3, 9, 82, 10};\n    mergeSort(arr, 0, arr.size() - 1);\n    for (int x : arr) std::cout << x << " ";\n    return 0;\n}`,
      c: `// Complete C Implementation\n#include <stdio.h>\n\nvoid merge(int arr[], int l, int m, int r) {\n    int i, j, k, n1 = m - l + 1, n2 = r - m;\n    int L[n1], R[n2];\n    for (i = 0; i < n1; i++) L[i] = arr[l + i];\n    for (j = 0; j < n2; j++) R[j] = arr[m + 1 + j];\n    i = 0; j = 0; k = l;\n    while (i < n1 && j < n2) arr[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];\n    while (i < n1) arr[k++] = L[i++];\n    while (j < n2) arr[k++] = R[j++];\n}\n\nvoid sort(int arr[], int l, int r) {\n    if (l < r) {\n        int m = l + (r - l) / 2;\n        sort(arr, l, m); sort(arr, m + 1, r);\n        merge(arr, l, m, r);\n    }\n}\n\nint main() {\n    int arr[] = {38, 27, 43, 3, 9, 82, 10};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    sort(arr, 0, n - 1);\n    for (int i=0; i<n; i++) printf("%d ", arr[i]);\n    return 0;\n}`
    }
  },
  heap: {
    title: 'Heap Sort',
    initials: 'HS',
    description: 'Heap Sort utilizes a Binary Heap data structure (Max-Heap) to sort elements.\n\nLogic:\n1. Build a Max-Heap from the input.\n2. Repeatedly extract the maximum element (root) and swap it with the last leaf.\n3. Reduce heap size and heapify the new root.\n4. Repeat until sorted.\n\nComplexity Cases:\n• Best, Average, Worst Case: O(n log n) - Building the heap takes O(n) and each of the n extractions takes O(log n). It is an efficient in-place sort.',
    best: 'O(n log n)', 
    average: 'O(n log n)', 
    worst: 'O(n log n)', 
    space: 'O(1)',
    code: {
      js: `// Complete JavaScript Implementation\nfunction heapSort(arr) {\n    let n = arr.length;\n    for (let i = Math.floor(n/2)-1; i >= 0; i--) heapify(arr, n, i);\n    for (let i = n-1; i > 0; i--) {\n        [arr[0], arr[i]] = [arr[i], arr[0]];\n        heapify(arr, i, 0);\n    }\n    return arr;\n}\n\nfunction heapify(arr, n, i) {\n    let largest = i, l = 2*i+1, r = 2*i+2;\n    if (l < n && arr[l] > arr[largest]) largest = l;\n    if (r < n && arr[r] > arr[largest]) largest = r;\n    if (largest !== i) {\n        [arr[i], arr[largest]] = [arr[largest], arr[i]];\n        heapify(arr, n, largest);\n    }\n}\n\nconst data = [12, 11, 13, 5, 6, 7];\nconsole.log("Sorted:", heapSort(data));`,
      python: `# Complete Python Implementation\ndef heapify(arr, n, i):\n    largest, l, r = i, 2*i+1, 2*i+2\n    if l < n and arr[l] > arr[largest]: largest = l\n    if r < n and arr[r] > arr[largest]: largest = r\n    if largest != i:\n        arr[i], arr[largest] = arr[largest], arr[i]\n        heapify(arr, n, largest)\n\ndef heap_sort(arr):\n    n = len(arr)\n    for i in range(n//2-1, -1, -1): heapify(arr, n, i)\n    for i in range(n-1, 0, -1):\n        arr[i], arr[0] = arr[0], arr[i]\n        heapify(arr, i, 0)\n    return arr\n\nif __name__ == "__main__":\n    data = [12, 11, 13, 5, 6, 7]\n    print("Sorted:", heap_sort(data))`,
      java: `// Complete Java Implementation\nimport java.util.Arrays;\n\npublic class HeapSort {\n    public void sort(int arr[]) {\n        int n = arr.length;\n        for (int i = n / 2 - 1; i >= 0; i--) heapify(arr, n, i);\n        for (int i = n - 1; i > 0; i--) {\n            int temp = arr[0]; arr[0] = arr[i]; arr[i] = temp;\n            heapify(arr, i, 0);\n        }\n    }\n\n    void heapify(int arr[], int n, int i) {\n        int largest = i, l = 2 * i + 1, r = 2 * i + 2;\n        if (l < n && arr[l] > arr[largest]) largest = l;\n        if (r < n && arr[r] > arr[largest]) largest = r;\n        if (largest != i) {\n            int swap = arr[i]; arr[i] = arr[largest]; arr[largest] = swap;\n            heapify(arr, n, largest);\n        }\n    }\n\n    public static void main(String args[]) {\n        int arr[] = {12, 11, 13, 5, 6, 7};\n        new HeapSort().sort(arr);\n        System.out.println(Arrays.toString(arr));\n    }\n}`,
      cpp: `// Complete C++ Implementation\n#include <iostream>\n#include <vector>\n\nvoid heapify(std::vector<int>& arr, int n, int i) {\n    int largest = i, l = 2*i + 1, r = 2*i + 2;\n    if (l < n && arr[l] > arr[largest]) largest = l;\n    if (r < n && arr[r] > arr[largest]) largest = r;\n    if (largest != i) { std::swap(arr[i], arr[largest]); heapify(arr, n, largest); }\n}\n\nvoid heapSort(std::vector<int>& arr) {\n    int n = arr.size();\n    for (int i = n/2-1; i >= 0; i--) heapify(arr, n, i);\n    for (int i = n-1; i > 0; i--) { std::swap(arr[0], arr[i]); heapify(arr, i, 0); }\n}\n\nint main() {\n    std::vector<int> arr = {12, 11, 13, 5, 6, 7};\n    heapSort(arr);\n    for (int x : arr) std::cout << x << " ";\n    return 0;\n}`,
      c: `// Complete C Implementation\n#include <stdio.h>\n\nvoid heapify(int arr[], int n, int i) {\n    int largest = i, l = 2*i+1, r = 2*i+2;\n    if (l < n && arr[l] > arr[largest]) largest = l;\n    if (r < n && arr[r] > arr[largest]) largest = r;\n    if (largest != i) { int t = arr[i]; arr[i] = arr[largest]; arr[largest] = t; heapify(arr, n, largest); }\n}\n\nvoid heapSort(int arr[], int n) {\n    for (int i = n/2-1; i >= 0; i--) heapify(arr, n, i);\n    for (int i = n-1; i > 0; i--) { int t = arr[0]; arr[0] = arr[i]; arr[i] = t; heapify(arr, i, 0); }\n}\n\nint main() {\n    int arr[] = {12, 11, 13, 5, 6, 7};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    heapSort(arr, n);\n    for (int i=0; i<n; i++) printf("%d ", arr[i]);\n    return 0;\n}`
    }
  },
  counting: {
    title: 'Counting Sort',
    initials: 'CS',
    description: 'Counting Sort is a non-comparison based integer sorting algorithm that works by counting the number of objects possessing distinct key values.\n\nLogic:\n1. Determine the range (Max - Min) of the input data.\n2. Create a "Count Array" to store the occurrences of each unique element.\n3. Compute cumulative counts to determine the final position of each element.\n4. Reconstruct the output array.\n\nComplexity Cases:\n• Best, Average, Worst Case: O(n + k) - Where k is the range of non-negative integers. It is extremely fast when the range of values is small relative to the number of elements.',
    best: 'O(n + k)', 
    average: 'O(n + k)',
    worst: 'O(n + k)', 
    space: 'O(k)',
    code: {
      js: `// Complete JavaScript Implementation\nfunction countingSort(arr) {\n    let max = Math.max(...arr), min = Math.min(...arr);\n    let range = max - min + 1;\n    let count = new Array(range).fill(0), output = new Array(arr.length);\n    for (let x of arr) count[x - min]++;\n    for (let i = 1; i < count.length; i++) count[i] += count[i-1];\n    for (let i = arr.length - 1; i >= 0; i--) {\n        output[count[arr[i] - min] - 1] = arr[i];\n        count[arr[i] - min]--;\n    }\n    return output;\n}\n\nconst arr = [4, 2, 2, 8, 3, 3, 1];\nconsole.log("Sorted:", countingSort(arr));`,
      python: `# Complete Python Implementation\ndef counting_sort(arr):\n    max_val = max(arr)\n    count = [0] * (max_val + 1)\n    output = [0] * len(arr)\n    for x in arr: count[x] += 1\n    for i in range(1, len(count)): count[i] += count[i-1]\n    for i in range(len(arr)-1, -1, -1):\n        output[count[arr[i]] - 1] = arr[i]\n        count[arr[i]] -= 1\n    return output\n\nif __name__ == "__main__":\n    data = [4, 2, 2, 8, 3, 3, 1]\n    print("Sorted:", counting_sort(data))`,
      java: `// Complete Java Implementation\nimport java.util.Arrays;\n\npublic class CountingSort {\n    static void sort(int arr[]) {\n        int n = arr.length, max = arr[0];\n        for (int i = 1; i < n; i++) if (arr[i] > max) max = arr[i];\n        int count[] = new int[max + 1];\n        for (int i = 0; i < n; i++) count[arr[i]]++;\n        for (int i = 1; i <= max; i++) count[i] += count[i - 1];\n        int output[] = new int[n];\n        for (int i = n - 1; i >= 0; i--) { output[count[arr[i]] - 1] = arr[i]; count[arr[i]]--; }\n        for (int i = 0; i < n; i++) arr[i] = output[i];\n    }\n\n    public static void main(String args[]) {\n        int arr[] = {4, 2, 2, 8, 3, 3, 1};\n        sort(arr);\n        System.out.println(Arrays.toString(arr));\n    }\n}`,
      cpp: `// Complete C++ Implementation\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nvoid countingSort(std::vector<int>& arr) {\n    if (arr.empty()) return;\n    int maxVal = *max_element(arr.begin(), arr.end());\n    std::vector<int> count(maxVal + 1, 0), output(arr.size());\n    for (int x : arr) count[x]++;\n    for (int i = 1; i <= maxVal; i++) count[i] += count[i-1];\n    for (int i = arr.size()-1; i>=0; i--) {\n        output[count[arr[i]]-1] = arr[i];\n        count[arr[i]]--;\n    }\n    arr = output;\n}\n\nint main() {\n    std::vector<int> arr = {4, 2, 2, 8, 3, 3, 1};\n    countingSort(arr);\n    for (int x : arr) std::cout << x << " ";\n    return 0;\n}`,
      c: `// Complete C Implementation\n#include <stdio.h>\n\nvoid countingSort(int arr[], int n) {\n    int max = arr[0];\n    for (int i = 1; i < n; i++) if (arr[i] > max) max = arr[i];\n    int count[max + 1], output[n];\n    for (int i = 0; i <= max; i++) count[i] = 0;\n    for (int i = 0; i < n; i++) count[arr[i]]++;\n    for (int i = 1; i <= max; i++) count[i] += count[i-1];\n    for (int i = n - 1; i >= 0; i--) {\n        output[count[arr[i]] - 1] = arr[i];\n        count[arr[i]]--;\n    }\n    for (int i = 0; i < n; i++) arr[i] = output[i];\n}\n\nint main() {\n    int arr[] = {4, 2, 2, 8, 3, 3, 1};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    countingSort(arr, n);\n    for (int i=0; i<n; i++) printf("%d ", arr[i]);\n    return 0;\n}`
    }
  }
};

const App = () => {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Navigation State
  const [currentView, setCurrentView] = useState('home');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // Sorting Visualizer State
  const [inputMode, setInputMode] = useState('random'); 
  const [arraySize, setArraySize] = useState(20);
  const [array, setArray] = useState([]);
  const [manualInputValue, setManualInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [isSorting, setIsSorting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // History Engine State
  const [history, setHistory] = useState([]); 
  const [currentStep, setCurrentStep] = useState(0);
  const [speed, setSpeed] = useState(50);
  const [lang, setLang] = useState('js');
  const [copied, setCopied] = useState(false);

  // Comparator Specific State
  const [selectedAlgos, setSelectedAlgos] = useState(['bubble', 'quick']);
  const [compHistories, setCompHistories] = useState({});

  const playIntervalRef = useRef(null);

  // --- Initialize Array ---
  useEffect(() => {
    if (inputMode === 'random') {
      generateRandomArray(arraySize);
    }
  }, [currentView, arraySize, inputMode]);

  // FIX: Reset everything strictly whenever the view changes to prevent blank screen crashes
  useEffect(() => {
    resetSortingState();
  }, [currentView]);

  const generateRandomArray = (size = 20) => {
    const newArr = Array.from({ length: size }, () => Math.floor(Math.random() * 320) + 20);
    setArray(newArr);
    resetSortingState();
  };

  const addManualValue = () => {
    const val = parseInt(manualInputValue);
    if (isNaN(val) || val < 0 || val > 400) {
      setInputError('Please enter a value between 0 and 400.');
      setTimeout(() => setInputError(''), 3000);
      return;
    }
    if (array.length >= 60) {
      setInputError('Maximum 60 elements allowed.');
      setTimeout(() => setInputError(''), 3000);
      return;
    }
    setInputError('');
    setArray([...array, val]);
    setManualInputValue('');
    resetSortingState();
  };

  const clearArray = () => {
    setArray([]);
    resetSortingState();
  };

  const resetSortingState = () => {
    if (playIntervalRef.current) clearInterval(playIntervalRef.current);
    setIsPlaying(false);
    setIsSorting(false);
    setHistory([]);
    setCompHistories({});
    setCurrentStep(0);
  };

  const copyToClipboard = () => {
    const code = ALGO_DATA[currentView]?.code?.[lang];
    if (!code) return;
    const textArea = document.createElement("textarea");
    textArea.value = code;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed');
    }
    document.body.removeChild(textArea);
  };

  // --- Unified History Generator Engine ---
  const runSort = (algoKey, inputArray) => {
    const steps = [];
    const arr = [...inputArray];
    let comparisons = 0, swaps = 0;

    const pushStep = (a, c = [], s = [], p = null, desc = "") => {
      steps.push({ 
        array: [...a], 
        comparing: c, 
        swapping: s, 
        pivot: p, 
        stats: { comparisons, swaps }, 
        description: desc 
      });
    };

    pushStep(arr, [], [], null, "Ready to visualize...");

    if (algoKey === 'bubble') {
      for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
          comparisons++;
          pushStep(arr, [j, j + 1], [], null, `Comparing ${arr[j]} and ${arr[j+1]}`);
          if (arr[j] > arr[j + 1]) {
            swaps++;
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            swapped = true;
            pushStep(arr, [], [j, j + 1], null, "Swapping values...");
          }
        }
        if (!swapped) break;
      }
    } 
    else if (algoKey === 'selection') {
      for (let i = 0; i < arr.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
          comparisons++;
          pushStep(arr, [minIdx, j], [], null, "Scanning for minimum...");
          if (arr[j] < arr[minIdx]) minIdx = j;
        }
        if (minIdx !== i) {
          swaps++;
          [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
          pushStep(arr, [], [i, minIdx], null, "Minimum found. Swapping to front.");
        }
      }
    }
    else if (algoKey === 'insertion') {
      for (let i = 1; i < arr.length; i++) {
        let key = arr[i], j = i - 1;
        pushStep(arr, [i], [], null, `Picking key ${key}`);
        while (j >= 0 && arr[j] > key) {
          comparisons++;
          arr[j + 1] = arr[j];
          swaps++;
          pushStep(arr, [j], [j+1], null, "Shifting element to make space...");
          j--;
        }
        arr[j + 1] = key;
        pushStep(arr, [], [j+1], null, "Key inserted.");
      }
    }
    else if (algoKey === 'quick') {
      const q = (l, h) => {
        if (l >= h) return;
        let pivot = arr[h], i = l - 1;
        pushStep(arr, [], [], h, `Pivot chosen: ${pivot}`);
        for (let j = l; j < h; j++) {
          comparisons++;
          pushStep(arr, [j, h], [], h, "Comparing with pivot...");
          if (arr[j] < pivot) {
            i++; swaps++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            pushStep(arr, [], [i, j], h, "Element smaller than pivot. Swapping.");
          }
        }
        swaps++;
        [arr[i + 1], arr[h]] = [arr[h], arr[i + 1]];
        pushStep(arr, [], [i + 1, h], i + 1, "Pivot placed in final position.");
        let pi = i + 1;
        q(l, pi - 1); q(pi + 1, h);
      };
      q(0, arr.length - 1);
    }
    else if (algoKey === 'merge') {
      const m = (l, r) => {
        if (l >= r) return;
        let mid = Math.floor((l + r) / 2);
        m(l, mid); m(mid + 1, r);
        let left = arr.slice(l, mid + 1), right = arr.slice(mid + 1, r + 1);
        let i = 0, j = 0, k = l;
        while (i < left.length && j < right.length) {
          comparisons++;
          pushStep(arr, [l+i, mid+1+j], [], null, "Merging sub-arrays...");
          if (left[i] <= right[j]) arr[k++] = left[i++];
          else { arr[k++] = right[j++]; swaps++; }
          pushStep(arr, [], [k-1], null, "Placing merged element.");
        }
        while (i < left.length) { arr[k++] = left[i++]; pushStep(arr, [], [k-1], null, "Cleanup merge..."); }
        while (j < right.length) { arr[k++] = right[j++]; pushStep(arr, [], [k-1], null, "Cleanup merge..."); }
      };
      m(0, arr.length - 1);
    }
    else if (algoKey === 'heap') {
      const heapify = (n, i) => {
        let largest = i, l = 2*i+1, r = 2*i+2;
        pushStep(arr, [i], [], null, "Heapifying subtree...");
        if (l < n) {
          comparisons++;
          if (arr[l] > arr[largest]) largest = l;
        }
        if (r < n) {
          comparisons++;
          if (arr[r] > arr[largest]) largest = r;
        }
        if (largest !== i) {
          swaps++;
          [arr[i], arr[largest]] = [arr[largest], arr[i]];
          pushStep(arr, [], [i, largest], null, "Swapping for max-heap property.");
          heapify(n, largest);
        }
      };
      for (let i = Math.floor(arr.length/2)-1; i >= 0; i--) heapify(arr.length, i);
      for (let i = arr.length-1; i > 0; i--) {
        swaps++;
        [arr[0], arr[i]] = [arr[i], arr[0]];
        pushStep(arr, [], [0, i], null, "Moving root to sorted portion.");
        heapify(i, 0);
      }
    }
    else if (algoKey === 'counting') {
      let maxVal = Math.max(...arr), minVal = Math.min(...arr);
      let count = new Array(maxVal - minVal + 1).fill(0);
      arr.forEach(x => { count[x - minVal]++; comparisons++; pushStep(arr, [arr.indexOf(x)], [], null, "Counting frequencies..."); });
      let outputIdx = 0;
      for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
          arr[outputIdx] = i + minVal;
          swaps++;
          pushStep(arr, [], [outputIdx], null, `Placing value ${i + minVal} from count map.`);
          count[i]--;
          outputIdx++;
        }
      }
    }

    pushStep(arr, [], [], null, "Sorting complete!");
    return steps;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- Playback Control ---
  useEffect(() => {
    if (isPlaying) {
      playIntervalRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          const maxSteps = currentView === 'comparator' 
            ? (Object.values(compHistories).length > 0 ? Math.max(...Object.values(compHistories).map(h => h.length)) : 1)
            : (history.length > 0 ? history.length : 1);
          if (prev < maxSteps - 1) return prev + 1;
          setIsPlaying(false); return prev;
        });
      }, 1000 - (speed * 9.6));
    } else {
      if (playIntervalRef.current) clearInterval(playIntervalRef.current);
    }
    return () => clearInterval(playIntervalRef.current);
  }, [isPlaying, history, compHistories, speed, currentView]);

  const stepForward = () => {
    const maxSteps = currentView === 'comparator' 
      ? (Object.values(compHistories).length > 0 ? Math.max(...Object.values(compHistories).map(h => h.length)) : 1)
      : (history.length > 0 ? history.length : 1);
    if (currentStep < maxSteps - 1) setCurrentStep(currentStep + 1);
  };

  const stepBackward = () => currentStep > 0 && setCurrentStep(currentStep - 1);

  const handleStartSort = () => { 
    if (isSorting) {
      setIsPlaying(!isPlaying);
      return;
    }
    if (currentView === 'comparator') {
      const raceHistories = {};
      selectedAlgos.forEach(key => raceHistories[key] = runSort(key, array));
      setCompHistories(raceHistories);
    } else {
      setHistory(runSort(currentView, array));
    }
    setIsSorting(true); setIsPlaying(true); 
  };

  const currentSnapshot = history[currentStep] || { array, comparing: [], swapping: [], pivot: null, stats: { comparisons: 0, swaps: 0 }, description: "Initialized" };
  const maxValInCurrentArray = useMemo(() => currentSnapshot.array.length === 0 ? 1 : Math.max(...currentSnapshot.array, 1), [currentSnapshot.array]);

  const getBarColor = (idx) => {
    if (currentSnapshot.pivot === idx) return '#8b5cf6'; 
    if (currentSnapshot.swapping.includes(idx)) return '#f43f5e'; 
    if (currentSnapshot.comparing.includes(idx)) return '#facc15'; 
    return 'var(--blue-orange)';
  };

  const HomeView = () => (
    <div style={styles.homeContainer}>
      <header style={styles.homeHeader}>
        <h2 className='home-title' style={styles.homeTitle}>Algorithm Visualizer</h2>
        <p style={styles.homeSubtitle}>Experience logic in motion with interactive step-by-step simulations.</p>
      </header>
      <div className='home-grid' style={styles.homeGrid}>
        {Object.entries(ALGO_DATA).map(([key, data]) => (
          <div key={key} style={styles.algoCard} onClick={() => setCurrentView(key)}>
            <div style={styles.cardHeaderFlex}>
                <div style={styles.initialsIcon}>{data.initials}</div>
                <h3 style={styles.cardTitle}>{data.title}</h3>
            </div>
            <p style={styles.cardDesc}>{data.description.substring(0, 140)}...</p>
            <div style={styles.cardFooter}>
              <button style={styles.cardBtn}>Explore Algorithm →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ComparatorView = () => {
    const historiesExist = Object.keys(compHistories).length > 0;
    const isRaceFinished = isSorting && !isPlaying && currentStep > 0 && historiesExist && selectedAlgos.every(key => {
      const h = compHistories[key] || [];
      return currentStep >= h.length - 1;
    });

    const leaderboard = useMemo(() => {
      if (!isRaceFinished || !historiesExist) return [];
      return selectedAlgos.map(key => {
        const h = compHistories[key] || [];
        const finalSnap = h[h.length - 1] || { stats: { comparisons: 0, swaps: 0 } };
        return {
          key,
          title: ALGO_DATA[key].title,
          totalOps: finalSnap.stats.comparisons + finalSnap.stats.swaps,
          complexity: ALGO_DATA[key].average
        };
      }).sort((a, b) => a.totalOps - b.totalOps);
    }, [isRaceFinished, selectedAlgos, compHistories, historiesExist]);

    return (
      <div style={styles.visualizerPage}>
        <div className='viz-header' style={styles.vizHeader}>
          <div>
            <h2 style={styles.vizTitle}>Algorithm Race</h2>
            <div style={styles.vizMeta}>Comparing operations on a shared dataset.</div>
          </div>
          <div style={styles.vizActions}>
            <div style={styles.modeToggleGroup}>
               <button style={{ ...styles.modeBtn, backgroundColor: inputMode === 'random' ? 'var(--nav-key-wholebg)' : 'transparent', color: inputMode === 'random' ? 'var(--blue-black)' : '#64748b' }} onClick={() => setInputMode('random')}>Random</button>
               <button style={{ ...styles.modeBtn, backgroundColor: inputMode === 'manual' ? 'var(--nav-key-wholebg)' : 'transparent', color: inputMode === 'manual' ? 'var(--blue-orange)' : '#64748b' }} onClick={() => setInputMode('manual')}>Manual</button>
            </div>
            {inputMode === 'random' ? (
              <>
                <div style={styles.controlGroupInline}>
                   <label style={styles.sliderLabelMini}>Size: {arraySize}</label>
                   <input type="range" min="5" max="60" value={arraySize} disabled={isSorting && isPlaying} onChange={(e) => setArraySize(Number(e.target.value))} style={{ width: '80px' }} />
                </div>
                <button style={styles.btnRandom} onClick={() => generateRandomArray(arraySize)} disabled={isSorting && isPlaying}>Shuffle</button>
              </>
            ) : (
              <div style={styles.manualInputWrapper}>
                <div style={{ ...styles.inputGroup, ...(inputError ? { animation: 'shake 0.3s ease-in-out', borderColor: '#f43f5e' } : {}) }}>
                  <input type="number" placeholder="0-400" style={styles.manualInput} value={manualInputValue} disabled={isSorting && isPlaying} onChange={(e) => setManualInputValue(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addManualValue()} />
                  <button style={styles.btnAdd} onClick={addManualValue} disabled={isSorting && isPlaying}>Add</button>
                </div>
                {inputError && <span style={styles.errorMessage}>{inputError}</span>}
              </div>
            )}
            <button style={styles.btnClear} onClick={clearArray} disabled={isSorting && isPlaying}>Clear</button>
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <p style={styles.sliderLabel}>Pick up to 4 Contestants:</p>
          <div style={styles.algoPickerWrapper}>
            {Object.keys(ALGO_DATA).map(key => (
              <label key={key} style={{...styles.pickerLabel, color: selectedAlgos.includes(key) ? 'var(--blue-orange)' : 'var(--text-secondary)'}}>
                <input type="checkbox" checked={selectedAlgos.includes(key)} onChange={() => {
                  if(selectedAlgos.includes(key)) setSelectedAlgos(selectedAlgos.filter(k => k !== key));
                  else if(selectedAlgos.length < 4) setSelectedAlgos([...selectedAlgos, key]);
                  resetSortingState();
                }} /> {ALGO_DATA[key].title}
              </label>
            ))}
          </div>
        </div>

        <div className="comp-grid" style={styles.compGrid}>
          {selectedAlgos.map(algoKey => {
            const h = compHistories[algoKey] || [];
            const snap = h[currentStep] || (h.length > 0 ? h[h.length - 1] : { array, comparing: [], swapping: [], stats: {comparisons:0, swaps:0}, description: "Ready" });
            const maxV = Math.max(...snap.array, 1);
            return (
              <div key={algoKey} style={styles.compTile}>
                <div style={styles.compTileHeader}>
                  <span style={styles.compAlgoTitle}>{ALGO_DATA[algoKey].title}</span>
                  <span style={styles.compComplexity}>{ALGO_DATA[algoKey].average}</span>
                </div>
                <div style={styles.miniViz}>
                  {snap.array.map((v, i) => (
                    <div key={i} style={{
                      height: `${(v/maxV)*100}%`, width: `${100/snap.array.length}%`,
                      backgroundColor: snap.swapping.includes(i) ? '#f43f5e' : snap.comparing.includes(i) ? '#facc15' : 'var(--blue-orange)',
                      borderRadius: '2px 2px 0 0', transition: 'height 0.2s ease'
                    }} />
                  ))}
                </div>
                <div style={styles.compStatsRow}>
                  <div style={styles.miniStat}>Comps: <b>{snap.stats.comparisons}</b></div>
                  <div style={styles.miniStat}>Swaps: <b>{snap.stats.swaps}</b></div>
                  <div style={styles.miniStat}><span style={{color: 'var(--blue-orange)', fontWeight: 'bold'}}>{snap.description || "Ready"}</span></div>
                </div>
              </div>
            );
          })}
        </div>

        {isRaceFinished && leaderboard.length > 0 && (
          <div style={{...styles.compTile, marginTop: '24px', animation: 'shake 0.4s ease-out', borderColor: 'var(--blue-orange)'}}>
            <h3 style={{...styles.sectionHeader, marginBottom: '16px'}}>Race Results Summary</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              {leaderboard.map((result, index) => (
                <div key={result.key} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px', backgroundColor: index === 0 ? 'var(--nav-key-wholebg)' : 'transparent', borderRadius: '8px'}}>
                  <span style={{fontWeight: '700'}}>#{index + 1} {result.title} <small style={{fontWeight: '400', color: 'var(--text-secondary)'}}>({result.complexity})</small></span>
                  <span style={{fontWeight: '800', color: index === 0 ? 'var(--blue-orange)' : 'var(--text-primary)'}}>{result.totalOps} Operations</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className='control-bar' style={styles.controlBar}>
          <div style={styles.playbackGroup}>
            <button style={styles.stepBtn} onClick={stepBackward} disabled={!isSorting || isPlaying || currentStep === 0}>Backward</button>
            <button style={styles.playBtn} onClick={handleStartSort} disabled={array.length === 0}>{isPlaying ? 'PAUSE' : isSorting ? 'RESUME' : 'START RACE'}</button>
            <button style={styles.stepBtn} onClick={stepForward} disabled={!isSorting || isPlaying || (historiesExist && currentStep >= (Math.max(...Object.values(compHistories).map(h => h.length)) - 1))}>Forward</button>
          </div>
          <div className='slider-group' style={styles.sliderGroup}>
            <label style={styles.sliderLabel}>Animation Speed: {speed}%</label>
            <input type="range" min="1" max="100" value={speed} onChange={(e) => setSpeed(e.target.value)} style={styles.slider} />
          </div>
          <div style={styles.statsGroup}>
            <div style={styles.statBox}><small style={styles.statLabel}>GLOBAL STEP</small><span style={styles.statNumber}>{currentStep}</span></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.layout}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Inter:wght@100..900&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { width: 100%; height: 100%; font-family: 'Inter', sans-serif; overflow-x: hidden; background-color: var(--bg-main); color: var(--text-primary); }
        :root {
          --bg-main: #FDFBF7; --surface: #FFFFFF; --surface-muted: #F0EDE4; --border-subtle: #CFD8DC;
          --text-primary: #263238; --text-secondary: #08090a; --accent-primary: #E07A3F;
          --accent-primary-soft: #F6E3D5; --accent-secondary: #4A90A4; --accent-highlight: #F4C430;
          --blue-orange: #fa7c15; --blue-lorange: #f99747; --white-black: #f8fafc;
          --white-orange: #fa7c15; --blue-black: black; --nav-nokey-color: #f8fafc;
          --nav-key-wholebg: #F0EDE4; --nav-key-bgcolor: #fa7c15; --nav-nokey-bgcolor: #334155;
          --nav-key-color: #f8fafc; --nav-text-color: #fa7c15; --text-small: #263238;
        }
        html[data-theme="dark"] {
          --bg-main: #020617; --surface: #0f172a; --surface-muted: #020617; --border-subtle: #1e293b;
          --text-primary: #f8fafc; --text-secondary: #94a3b8; --accent-primary: #38bdf8;
          --accent-primary-soft: #0c4a6e; --accent-secondary: #38bdf8; --accent-highlight: #facc15;
          --blue-orange: #38bdf8; --blue-lorange: #38bdf8; --blue-black: #38bdf8;
          --white-black: #1e293b; --white-orange: #f8fafc; --nav-key-bgcolor: #38bdf8;
          --nav-nokey-bgcolor: #334155; --nav-nokey-color: #f8fafc; --nav-key-wholebg: #1e293b;
          --nav-text-color: #38bdf8; --nav-key-color: #0f172a; --text-small: #c8d0dc;
        }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: var(--bg-main); }
        ::-webkit-scrollbar-thumb { background: var(--border-subtle); border-radius: 4px; border: 2px solid var(--bg-main); }
        h1, h2, h3, .initials-font { font-family: 'Bricolage Grotesque', sans-serif; }
        input[type=range] { cursor: pointer; accent-color: var(--blue-orange); height: 4px; }
        .bar-transition { transition: height 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s ease; }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }
        .comp-grid { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; margin-top: 20px !important; }
        @media (max-width: 1024px) { .app-content { padding: 24px !important; } .viz-header { flex-direction: column; align-items: flex-start; gap: 20px; } .control-bar { flex-wrap: wrap; gap: 20px; } .details-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) { .sidebar { position: fixed !important; left: 0; top: 0; height: 100vh; z-index: 200; } .viz-canvas { height: 320px !important; padding: 16px !important; } .home-title { font-size: 36px !important; } .home-grid { grid-template-columns: 1fr !important; } .control-bar { flex-direction: column; align-items: stretch; .comp-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      <aside className='sidebar' style={{ ...styles.sidebar, width: isSidebarOpen ? '260px' : '80px' }}>
        <div style={{ ...styles.sidebarHeader, justifyContent: isSidebarOpen ? 'flex-start' : 'center' }} onClick={() => setCurrentView('home')}>
          <div style={styles.logoBox}>V</div>
          {isSidebarOpen && <span style={styles.logoText}>Visualizer</span>}
          <button onClick={(e) => { e.stopPropagation(); setTheme(theme === 'light' ? 'dark' : 'light'); }} style={{ marginLeft: isSidebarOpen ? 'auto' : '0', width: '34px', height: '34px', borderRadius: '8px', border: 'none', background: 'var(--surface)', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
        <div style={styles.sidebarNav}>
          <div style={styles.navList}>
            {Object.entries(ALGO_DATA).map(([key, data]) => (
              <div key={key} style={{ ...styles.navItem, backgroundColor: currentView === key ? 'var(--nav-key-wholebg)' : 'transparent', color: currentView === key ? '#38bdf8' : '#94a3b8', justifyContent: isSidebarOpen ? 'flex-start' : 'center' }} onClick={() => setCurrentView(key)}>
                <div style={{ ...styles.navInitials, backgroundColor: currentView === key ? 'var(--nav-key-bgcolor)' : 'var(--nav-nokey-bgcolor)', color: currentView === key ? 'var(--nav-key-color)' : 'var(--nav-nokey-color)' }}>{data.initials}</div>
                {isSidebarOpen && <span style={styles.navLabel}>{data.title}</span>}
              </div>
            ))}
            <div style={{ ...styles.navItem, marginTop: '8px', borderTop: '1px solid var(--border-subtle)', backgroundColor: currentView === 'comparator' ? 'var(--nav-key-wholebg)' : 'transparent', justifyContent: isSidebarOpen ? 'flex-start' : 'center' }} onClick={() => setCurrentView('comparator')}>
              <div style={{ ...styles.navInitials, backgroundColor: '#facc15', color: 'black' }}>🏁</div>
              {isSidebarOpen && <span style={styles.navLabel}>Comparator</span>}
            </div>
          </div>
        </div>
        <button style={styles.collapseBtn} onClick={() => setSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? '← Collapse' : '→ Expand'}
        </button>
      </aside>

      <main className='app-content' style={styles.content}>
        {currentView === 'home' ? <HomeView /> : currentView === 'comparator' ? <ComparatorView /> : (
          <div style={styles.visualizerPage}>
            <div className='viz-header' style={styles.vizHeader}>
              <div>
                <h2 style={styles.vizTitle}>{ALGO_DATA[currentView].title}</h2>
                <div style={styles.vizMeta}>Time: <b style={{color: 'var(--blue-orange)'}}>{ALGO_DATA[currentView].average}</b> | Space: <b style={{color: 'var(--blue-orange)'}}>{ALGO_DATA[currentView].space}</b></div>
              </div>
              <div style={styles.vizActions}>
                <div style={styles.modeToggleGroup}>
                   <button style={{ ...styles.modeBtn, backgroundColor: inputMode === 'random' ? 'var(--nav-key-wholebg)' : 'transparent', color: inputMode === 'random' ? 'var(--blue-black)' : '#64748b' }} onClick={() => setInputMode('random')}>Random</button>
                   <button style={{ ...styles.modeBtn, backgroundColor: inputMode === 'manual' ? 'var(--nav-key-wholebg)' : 'transparent', color: inputMode === 'manual' ? 'var(--blue-orange)' : '#64748b' }} onClick={() => setInputMode('manual')}>Manual</button>
                </div>
                {inputMode === 'random' ? (
                  <>
                    <div style={styles.controlGroupInline}>
                       <label style={styles.sliderLabelMini}>Size: {arraySize}</label>
                       <input type="range" min="5" max="60" value={arraySize} disabled={isSorting && isPlaying} onChange={(e) => setArraySize(Number(e.target.value))} style={{ width: '80px' }} />
                    </div>
                    <button style={styles.btnRandom} onClick={() => generateRandomArray(arraySize)} disabled={isSorting && isPlaying}>Shuffle</button>
                  </>
                ) : (
                  <div style={styles.manualInputWrapper}>
                    <div style={{ ...styles.inputGroup, ...(inputError ? { animation: 'shake 0.3s ease-in-out', borderColor: '#f43f5e' } : {}) }}>
                      <input type="number" placeholder="0-400" style={styles.manualInput} value={manualInputValue} disabled={isSorting && isPlaying} onChange={(e) => setManualInputValue(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addManualValue()} />
                      <button style={styles.btnAdd} onClick={addManualValue} disabled={isSorting && isPlaying}>Add</button>
                    </div>
                    {inputError && <span style={styles.errorMessage}>{inputError}</span>}
                  </div>
                )}
                <button style={styles.btnClear} onClick={clearArray} disabled={isSorting && isPlaying}>Clear</button>
              </div>
            </div>

            <div className='viz-canvas' style={styles.vizCanvas}>
              {array.length === 0 ? <div style={styles.emptyState}>No data to sort. Add values or use Random mode.</div> : (
                <div style={styles.barWrapper}>
                  {currentSnapshot.array.map((val, idx) => {
                    const active = currentSnapshot.comparing.includes(idx) || currentSnapshot.swapping.includes(idx) || currentSnapshot.pivot === idx;
                    const h = (val / maxValInCurrentArray) * 95;
                    return (
                      <div key={idx} className="bar-transition" style={{ ...styles.bar, height: `${h}%`, backgroundColor: getBarColor(idx), width: `${100/currentSnapshot.array.length}%`, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                        {active && <span style={styles.barValueLabel}>{val}</span>}
                      </div>
                    );
                  })}
                </div>
              )}
              {array.length > 0 && <div style={styles.descriptionOverlay}><span style={styles.stepCounter}>STEP {currentStep}</span>{currentSnapshot.description}</div>}
            </div>

            <div className='control-bar' style={styles.controlBar}>
              <div style={styles.playbackGroup}>
                <button style={styles.stepBtn} onClick={stepBackward} disabled={!isSorting || isPlaying || currentStep === 0}>Backward</button>
                <button style={styles.playBtn} onClick={handleStartSort} disabled={array.length === 0}>{isPlaying ? 'PAUSE' : isSorting ? 'RESUME' : 'START SIMULATION'}</button>
                <button style={styles.stepBtn} onClick={stepForward} disabled={!isSorting || isPlaying || currentStep >= history.length - 1}>Forward</button>
              </div>
              <div className='slider-group' style={styles.sliderGroup}>
                <label style={styles.sliderLabel}>Animation Speed: {speed}%</label>
                <input type="range" min="1" max="100" value={speed} onChange={(e) => setSpeed(e.target.value)} style={styles.slider} />
              </div>
              <div style={styles.statsGroup}>
                <div style={styles.statBox}><small style={styles.statLabel}>COMPARISONS</small><span style={styles.statNumber}>{currentSnapshot.stats.comparisons}</span></div>
                <div style={styles.statBox}><small style={styles.statLabel}>SWAPS</small><span style={styles.statNumber}>{currentSnapshot.stats.swaps}</span></div>
              </div>
            </div>

            <div className='details-grid' style={styles.detailsGrid}>
              <div style={styles.infoCol}>
                <h3 style={styles.sectionHeader}>Algorithm Technical Analysis</h3>
                <p style={styles.infoText}>{ALGO_DATA[currentView].description}</p>
                <div style={styles.compStatsGrid}>
                  <div style={styles.compCard}><small>Best Case</small> <h4>{ALGO_DATA[currentView].best}</h4></div>
                  <div style={styles.compCard}><small>Average</small> <h4>{ALGO_DATA[currentView].average}</h4></div>
                  <div style={styles.compCard}><small>Worst Case</small> <h4>{ALGO_DATA[currentView].worst}</h4></div>
                  <div style={styles.compCard}><small>Space</small> <h4>{ALGO_DATA[currentView].space}</h4></div>
                </div>
              </div>
              <div style={styles.codeCol}>
                <div style={styles.codeHeader}>
                   <h3 style={styles.sectionHeader}>Implementation</h3>
                   <div style={styles.codeActions}>
                     <select style={styles.langSelect} value={lang} onChange={(e) => setLang(e.target.value)}>
                       <option value="js">JavaScript</option><option value="python">Python</option><option value="java">Java</option><option value="cpp">C++</option><option value="c">C</option>
                     </select>
                     <button className="copy-btn" style={styles.btnCopy} onClick={copyToClipboard} title="Copy to clipboard">
                       {copied ? (
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                       ) : (
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                       )}
                     </button>
                   </div>
                </div>
                <div style={styles.codeWrapper}>
                  <pre style={styles.codeContainer}><code style={styles.codeText}>{ALGO_DATA[currentView].code[lang]}</code></pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

const styles = {
  // layout: { display: 'flex', minHeight: '100vh', width: '100vw', backgroundColor: '#020617', color: '#f8fafc' },
  layout: {
    display: 'flex',
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: 'var(--bg-main)',
    color: 'var(--text-primary)'
  },

  sidebar: { 
    backgroundColor: 'var(--surface)',
    borderRight: '1px solid var(--border-subtle)', 
    display: 'flex', 
    flexDirection: 'column', 
    transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)', 
    position: 'sticky', 
    top: 0, 
    height: '100vh', 
    zIndex: 100 
  },
  sidebarHeader: { 
    padding: '32px 20px', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '16px', 
    cursor: 'pointer' 
  },
  logoBox: { 
    width: '32px', 
    height: '32px', 
    backgroundColor: 'var(--blue-orange)', 
    borderRadius: '8px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    fontWeight: '900', 
    color: 'var(--white-black)', 
    fontSize: '18px', 
    flexShrink: 0 
  },
  logoText: { 
    fontWeight: '800', 
    fontSize: '18px', 
    color: 'var(--white-orange)'
  },
  sidebarNav: { 
    flex: 1, 
    padding: '0 12px' 
  },
  navList: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '8px' 
  },
  navItem: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '14px', 
    padding: '12px', 
    borderRadius: '12px', 
    cursor: 'pointer', 
    transition: 'all 0.2s ease' 
  },
  navInitials: { 
    width: '34px', 
    height: '34px', 
    borderRadius: '8px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    fontSize: '12px', 
    fontWeight: '800', 
    flexShrink: 0 
  },
  navLabel: { 
    fontSize: '14px', 
    fontWeight: '600', 
    whiteSpace: 'nowrap',
    color: 'var(--blue-black)' 
  },
  collapseBtn: { 
    padding: '20px', 
    background: 'none', 
    border: 'none', 
    color: 'var(--text-secondary)', 
    fontSize: '11px', 
    fontWeight: 'bold', 
    cursor: 'pointer', 
    textAlign: 'center', 
    borderTop: '1px solid var(--border-subtle)' 
  },
  content: { 
    flex: 1, 
    overflowY: 'auto', 
    padding: '40px',
    color: 'var(--text-primary)' 
  },
  homeContainer: { 
    maxWidth: '1100px', 
    margin: '0 auto' 
  },
  homeHeader: { 
    marginBottom: '60px' 
  },
  homeTitle: { 
    fontSize: '56px', 
    fontWeight: '800', 
    letterSpacing: '-2px', 
    color: 'var(--text-primary)' 
  },
  homeSubtitle: { 
    color: 'var(--text-small)', 
    fontSize: '20px', 
    maxWidth: '600px', 
    marginTop: '10px' 
  },
  homeGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
    gap: '30px' 
  },
  algoCard: { 
    backgroundColor: 'var(--surface)', 
    border: '1px solid var(--border-subtle)', 
    borderRadius: '24px', 
    padding: '32px', 
    cursor: 'pointer', 
    transition: 'all 0.3s ease' 
  },
  cardHeaderFlex: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '16px', 
    marginBottom: '20px' 
  },
  initialsIcon: { 
    width: '48px', 
    height: '48px', 
    borderRadius: '12px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    fontSize: '18px', 
    fontWeight: '800', 
    // color: '#38bdf8', 
    backgroundColor: 'var(--surface-muted)', 
    color: 'var(--blue-orange)', 
    border: '1px solid var(--surface-muted)' 
  },
  cardTitle: { 
    margin: 0, 
    fontSize: '24px', 
    fontWeight: '700' 
  },
  cardDesc: { 
    color: 'var(--text-secondary)', 
    fontSize: '15px', 
    lineHeight: '1.6', 
    marginBottom: '24px', 
    height: '72px', 
    overflow: 'hidden' 
  },
  cardFooter: { 
    borderTop: '1px solid var(--border-subtle)', 
    paddingTop: '20px' 
  },
  cardBtn: { 
    background: 'none', 
    border: 'none', 
    color: 'var(--blue-orange)', 
    fontWeight: '700', 
    fontSize: '14px', 
    cursor: 'pointer' 
  },
  visualizerPage: { 
    maxWidth: '1200px', 
    margin: '0 auto' 
  },
  vizHeader: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'flex-end', 
    marginBottom: '32px' 
  },
  vizTitle: { 
    fontSize: '40px', 
    fontWeight: '800',
    margin: 0 
  },
  vizMeta: { 
    fontSize: '14px', 
    color: 'var(--text-small)', 
    marginTop: '8px' 
  },
  vizActions: { 
    display: 'flex', 
    gap: '12px', 
    alignItems: 'center' 
  },
  modeToggleGroup: { 
    display: 'flex', 
    backgroundColor: '1px solid var(--border-subtle)', 
    border: '1px solid var(--border-subtle)', 
    borderRadius: '12px', 
    padding: '2px' 
  },
  modeBtn: { 
    border: 'none', 
    padding: '8px 16px', 
    borderRadius: '10px', 
    fontSize: '14px', 
    fontWeight: '700', 
    cursor: 'pointer' 
  },
  controlGroupInline: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '8px', 
    backgroundColor: 'var(--surface-muted)', 
    padding: '8px 12px', 
    borderRadius: '12px', 
    border: '1px solid var(--border-subtle)' 
  },
  sliderLabelMini: { 
    fontSize: '11px', 
    fontWeight: '700', 
    color: 'var(--text-small)' 
  },
  manualInputWrapper: { 
    position: 'relative' 
  },
  inputGroup: { 
    display: 'flex', 
    backgroundColor: 'var(--surface)', 
    border: '1px solid var(--border-subtle)', 
    borderRadius: '12px', 
    overflow: 'hidden' 
  },
  manualInput: { 
    background: 'none', 
    border: 'none', 
    padding: '8px 16px', 
    color: 'var(--text-primary)', 
    width: '110px', 
    fontSize: '14px', 
    outline: 'none' 
  },
  btnAdd: { 
    background: 'var(--blue-orange)', 
    border: 'none', 
    color: 'var(--white-black)', 
    padding: '0 16px', 
    cursor: 'pointer', 
    fontWeight: '800' 
  },
  errorMessage: { 
    position: 'absolute', 
    top: '110%', 
    left: '0', 
    color: '#f43f5e', 
    fontSize: '10px', 
    fontWeight: '600' 
  },
  btnRandom: { 
    padding: '10px 16px', 
    borderRadius: '12px', 
    border: '1px solid var(--border-subtle)', 
    background: 'var(--nav-nokey-bgcolor)', 
    color: 'white', 
    cursor: 'pointer', 
    fontSize: '13px',
    fontWeight: '600'  
  },
  btnClear: { 
    padding: '10px 16px', 
    borderRadius: '12px', 
    border: '1px solid #f43f5e', 
    background: 'transparent', 
    color: '#f43f5e', 
    cursor: 'pointer', 
    fontSize: '13px',
    fontWeight: '600' 
  },
  vizCanvas: { 
    marginTop: '90px',
    backgroundColor: 'var(--surface)', 
    border: '1px solid var(--border-subtle)', 
    borderRadius: '24px', 
    height: '480px', 
    position: 'relative', 
    display: 'flex', 
    alignItems: 'flex-end', 
    padding: '32px', 
    boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.05)', 
    justifyContent: 'center' 
  },
  emptyState: { 
    alignSelf: 'center', 
    color: 'var(--text-secondary)', 
    fontSize: '14px' 
  },
  barWrapper: { 
    display: 'flex', 
    alignItems: 'flex-end', 
    width: '100%', 
    height: '100%', 
    gap: '3px' 
  },
  bar: { 
    borderRadius: '6px 6px 0 0' 
  },
  barValueLabel: { 
    position: 'absolute', 
    top: '-25px', 
    color: 'var(--blue-orange)', 
    fontSize: '11px', 
    fontWeight: '800' 
  },
  descriptionOverlay: { 
    position: 'absolute', 
    top: '-60px', 
    left: '16px', 
    backgroundColor: 'var(--surface)', 
    padding: '12px 24px', 
    borderRadius: '12px', 
    fontSize: '14px', 
    border: '1px solid var(--border-subtle)',
    display: 'flex',
    alignItems: 'center', 
    gap: '15px', 
    color: 'var(--text-primary)' 
  },
  stepCounter: { 
    fontWeight: '900', 
    color: 'var(--blue-orange)', 
    fontSize: '14px', 
    backgroundColor: 'var(--nav-key-wholebg)', 
    padding: '4px 8px', 
    borderRadius: '4px' 
  },
  controlBar: { 
    backgroundColor: 'var(--surface-muted)', 
    border: '1px solid var(--border-subtle)', 
    borderRadius: '24px', 
    padding: '24px 40px', 
    marginTop: '32px', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  playbackGroup: { 
    display: 'flex', 
    gap: '12px' 
  },
  stepBtn: { 
    background: 'var(--nav-nokey-bgcolor)', 
    border: '1px solid var(--border-subtle)', 
    color: '#f1f5f9', 
    padding: '10px 16px', 
    borderRadius: '12px', 
    cursor: 'pointer', 
    fontWeight: '700' 
  },
  playBtn: { 
    backgroundColor: 'var(--blue-lorange)', 
    border: 'none', 
    color: 'var(--white-black)', 
    padding: '0 32px', 
    height: '44px', 
    borderRadius: '12px', 
    fontWeight: '800', 
    cursor: 'pointer' 
  },
  sliderGroup: { 
    display: 'flex', 
    flexDirection: 'column', 
    width: '220px' 
  },
  sliderLabel: { 
    fontSize: '11px', 
    textTransform: 'uppercase', 
    color: 'var(--text-small)', 
    fontWeight: '800', 
    marginBottom: '12px' 
  },
  slider: { 
    width: '100%' 
  },
  statsGroup: { 
    display: 'flex', 
    gap: '24px' 
  },
  statBox: { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    padding: '8px 16px', 
    backgroundColor: 'var(--surface)', 
    border: '1px solid var(--border-subtle)', 
    borderRadius: '12px', 
    minWidth: '100px' 
  },
  statLabel: { 
    fontSize: '10px', 
    fontWeight: '800', 
    color: 'var(--text-small)', 
    marginBottom: '4px' 
  },
  statNumber: { 
    fontSize: '16px', 
    fontWeight: '800', 
    color: 'var(--blue-orange)' 
  },
  detailsGrid: { 
    display: 'grid', 
    gridTemplateColumns: '1fr 1fr', 
    gap: '40px', 
    marginTop: '60px' 
  },
  infoCol: { 
    minWidth: 0 
  }, 
  sectionHeader: { 
    fontSize: '22px', 
    fontWeight: '800', 
    marginBottom: '24px' 
  },
  infoText: { 
    color: 'var(--text-small)', 
    lineHeight: '1.8', 
    fontSize: '16px', 
    whiteSpace: 'pre-line' 
  },
  compStatsGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(2, 1fr)', 
    gap: '16px', 
    marginTop: '32px' 
  },
  compCard: { 
    backgroundColor: 'var(--surface)', 
    padding: '20px', 
    borderRadius: '16px', 
    border: '1px solid var(--border-subtle)' 
  },
  codeCol: { 
    backgroundColor: 'var(--surface)', 
    borderRadius: '20px', 
    border: '1px solid var(--border-subtle)', 
    padding: '32px', 
    position: 'relative', 
    minWidth: 0 
  },
  codeHeader: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: '20px' 
  },
  codeActions: { 
    display: 'flex', 
    gap: '10px', 
    alignItems: 'center' 
  },
  langSelect: { 
    backgroundColor: 'var(--nav-key-wholebg)', 
    border: '1px solid var(--border-subtle)', 
    color: 'var(--blue-black)', 
    padding: '6px 14px', 
    borderRadius: '8px', 
    fontSize: '13px', 
    fontWeight: '700' 
  },
  btnCopy: { 
    backgroundColor: 'var(--nav-nokey-bgcolor)', 
    border: '1px solid var(--border-subtle)', 
    color: '#f1f5f9', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '32px', 
    height: '32px', 
    borderRadius: '8px', 
    cursor: 'pointer', 
    transition: 'all 0.2s' 
  },
  codeWrapper: { 
    position: 'relative' 
  },
  codeContainer: { 
    margin: 0, 
    padding: '24px',
    backgroundColor: 'var(--surface-muted)', 
    borderRadius: '16px', 
    overflow: 'auto', 
    border: '1px solid var(--border-subtle)', 
    maxHeight: '500px' 
  },
  codeText: { 
    fontSize: '14px', 
    fontWeight: '550',
    color: 'var(--text-secondary)', 
    lineHeight: '1.6', 
    fontFamily: 'monospace', 
    whiteSpace: 'pre' 
  },
  compGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
    marginTop: '20px'
  },
  compTile: {
    backgroundColor: 'var(--surface)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '24px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column'
  },
  compTileHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  },
  compAlgoTitle: {
    fontSize: '18px',
    fontWeight: '800',
    fontFamily: 'Bricolage Grotesque'
  },
  compComplexity: {
    fontSize: '12px',
    fontWeight: '700',
    color: 'var(--blue-orange)',
    backgroundColor: 'var(--nav-key-wholebg)',
    padding: '4px 8px',
    borderRadius: '6px'
  },
  miniViz: {
    height: '140px',
    backgroundColor: 'var(--surface-muted)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '12px',
    gap: '2px',
    marginBottom: '16px'
  },
  compStatsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '1px solid var(--border-subtle)',
    paddingTop: '12px'
  },
  miniStat: {
    fontSize: '12px',
    color: 'var(--text-secondary)'
  },
  algoPickerWrapper: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    backgroundColor: 'var(--surface-muted)',
    padding: '8px 12px',
    borderRadius: '12px',
    border: '1px solid var(--border-subtle)'
  },
  pickerLabel: {
    fontSize: '11px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    cursor: 'pointer'
  }
};

export default App;