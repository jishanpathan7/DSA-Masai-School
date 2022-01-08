function fibonacci(n) {
    if (n == 0 || n == 1)
        return n
    else
        return fibonacci(n - 1) + fibonacci(n - 2);

}

function runProgram(input) {
    let num = Number(input);
    console.log(fibonacci(num));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4`);
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