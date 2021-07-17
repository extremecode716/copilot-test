// Searching Algorithms
// sequnetial search
// binary search
// red-black tree.


// Sequnetial Search

function sequentialSearch(array, x) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === x) {
            return i;
        }
    }
    return -1;
}

// Binary Search

function binarySearch(array, x) {
    var low = 0,
        high = array.length - 1,
        mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (array[mid] === x) {
            return mid;
        } else if (array[mid] > x) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

// Red-Black Tree.