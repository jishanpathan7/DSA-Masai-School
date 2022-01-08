function quickSort(arr, low, high) {
    if (low < high) {
        let sortedIndex = partition(arr, low, high); //returns the index of the sorted pivot element
        quickSort(arr, low, sortedIndex - 1);
        quickSort(arr, sortedIndex + 1, high);
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, low, high) {
    let pivot = arr[high]; //pivot is the last element in the array we consider
    let i = low - 1; //i keeps track of all large elements. initially set to -1 index of array

    for (let j = low; j <= high - 1; j++) { //j value searches for elements smaller than pivot to swap with i index
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    quickSort(arr, 0, arr.length - 1);
    console.log(arr.join(" "));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
    3 5 0 9 8`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}