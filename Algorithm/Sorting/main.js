// sorting algorithm example
// selection sort
// bubble sort
// quick sort
// insertion sort
// shell sort
// heap sort
// merge sort
// radix sort
// counting sort
// bucket sort
// hybrid sort
// counting sort
// time sort
// shell sort
// cycle sort.

var selectionSort = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
};

var bubbleSort = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
};

var quickSort = function (arr) {
    quickSortHelper(arr, 0, arr.length - 1);
};

var quickSortHelper = function (arr, start, end) {
    if (start < end) {
        var index = partition(arr, start, end);
        quickSortHelper(arr, start, index - 1);
        quickSortHelper(arr, index + 1, end);
    }
};

var partition = function (arr, start, end) {
    var pivot = arr[end];
    var i = start - 1;
    for (var j = start; j < end; j++) {
        if (arr[j] <= pivot) {
            i++;
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    var temp = arr[i + 1];
    arr[i + 1] = arr[end];
    arr[end] = temp;
    return i + 1;
};

var insertionSort = function (arr) {
    for (var i = 1; i < arr.length; i++) {
        var temp = arr[i];
        var j = i - 1;
        while (j >= 0 && temp < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
};

var shellSort = function (arr) {
    var gap = arr.length;
    while (gap > 1) {
        gap = gap / 3 + 1;
        for (var i = gap; i < arr.length; i++) {
            var temp = arr[i];
            var j = i - gap;
            while (j >= 0 && temp < arr[j]) {
                arr[j + gap] = arr[j];
                j -= gap;
            }
            arr[j + gap] = temp;
        }
    }
};

var heapSort = function (arr) {
    buildMaxHeap(arr);
    for (var i = arr.length - 1; i > 0; i--) {
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        maxHeapify(arr, 0, i);
    }
};

var buildMaxHeap = function (arr) {
    for (var i = Math.floor(arr.length / 2); i >= 0; i--) {
        maxHeapify(arr, i, arr.length);
    }
};

var maxHeapify = function (arr, i, n) {
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest]) {
        largest = l;
    }
    if (r < n && arr[r] > arr[largest]) {
        largest = r;
    }
    if (largest !== i) {
        var temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        maxHeapify(arr, largest, n);
    }
}
var mergeSort = function (arr) {
    mergeSortHelper(arr, 0, arr.length - 1);
};

var mergeSortHelper = function (arr, start, end) {
    if (start < end) {
        var index = partition(arr, start, end);
        mergeSortHelper(arr, start, index - 1);
        mergeSortHelper(arr, index + 1, end);
    }
};

var radixSort = function (arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    var exp = 1;
    while (Math.pow(10, exp) <= max) {
        radixSortByDigit(arr, exp);
        exp++;
    }
};

var radixSortByDigit = function (arr, exp) {
    var bucket = {};
    for (var i = 0; i < arr.length; i++) {
        var key = Math.floor(arr[i] / Math.pow(10, exp));
        if (!bucket[key]) {
            bucket[key] = [];
        }
        bucket[key].push(arr[i]);
    }
    var keys = Object.keys(bucket);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        for (var j = 0; j < bucket[key].length; j++) {
            arr[i] = bucket[key][j];
            i++;
        }
    }
};

var countingSort = function (arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    var exp = 1;
    while (Math.pow(10, exp) <= max) {
        countingSortByDigit(arr, exp);
        exp++;
    }
}
var countingSortByDigit = function (arr, exp) {
    var bucket = {};
    for (var i = 0; i < arr.length; i++) {
        var key = Math.floor(arr[i] / Math.pow(10, exp));
        if (!bucket[key]) {
            bucket[key] = 0;
        }
        bucket[key]++;
    }
    var keys = Object.keys(bucket);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        for (var j = 0; j < bucket[key]; j++) {
            arr[i] = key * Math.pow(10, exp);
            i++;
        }
    }
};

var heapSort = function (arr) {
    buildMaxHeap(arr);
    for (var i = arr.length - 1; i > 0; i--) {
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        maxHeapify(arr, 0, i);
    }
};

var mergeSort = function (arr) {
    mergeSortHelper(arr, 0, arr.length - 1);
};

var mergeSortHelper = function (arr, start, end) {
    if (start < end) {
        var index = partition(arr, start, end);
        mergeSortHelper(arr, start, index - 1);
        mergeSortHelper(arr, index + 1, end);
    }
};

var partition = function (arr, start, end) {
    var pivot = arr[end];
    var i = start - 1;
    for (var j = start; j < end; j++) {
        if (arr[j] <= pivot) {
            i++;
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    var temp = arr[i + 1];
    arr[i + 1] = arr[end];
    arr[end] = temp;
    return i + 1;
}

var timeSort = function (arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    var exp = 1;
    while (Math.pow(10, exp) <= max) {
        timeSortByDigit(arr, exp);
        exp++;
    }
};

var timeSortByDigit = function (arr, exp) {
    var bucket = {};
    for (var i = 0; i < arr.length; i++) {
        var key = Math.floor(arr[i] / Math.pow(10, exp));
        if (!bucket[key]) {
            bucket[key] = 0;
        }
        bucket[key]++;
    }
    var keys = Object.keys(bucket);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        for (var j = 0; j < bucket[key]; j++) {
            arr[i] = key * Math.pow(10, exp);
            i++;
        }
    }
};

function shellSort(arr) {
    var h = 1;
    while(h < arr.length / 3) {
        h = 3 * h + 1;
    }
    while(h >= 1) {
        for(var i = h; i < arr.length; i++) {
            var temp = arr[i];
            for(var j = i; j >= h && arr[j - h] > temp; j -= h) {
                arr[j] = arr[j - h];
            }
            arr[j] = temp;
        }
        h = Math.floor(h / 3);
    }
    return arr;
}

var cycleSort = function(arr) {
    var len = arr.length;
    var cycle = [];
    var i;
    for (i = 0; i < len; i++) {
        cycle.push(i);
    }
    var j = 0;
    for (i = 0; i < len; i++) {
        var temp = arr[cycle[j]];
        arr[cycle[j]] = arr[cycle[i]];
        arr[cycle[i]] = temp;
        j = (j + 1) % len;
    }
    return arr;
};