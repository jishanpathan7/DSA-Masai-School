function solve(n, m) {
    let resultOdd = "+";
    let resultEven = "+";

    for (let i = 1; i <= m; i++) {
        resultOdd += "/\\";
        resultEven += "\\/";
    }

    resultOdd += "+";
    resultEven += "+";

    for (let i = 1; i <= n * 2; i++) {
        if (i % 2 !== 0) console.log(resultOdd);
        else console.log(resultEven);
    }
}

function runProgram(input) {
    let [n, m] = input.trim().split(" ").map(Number);
    solve(n, m);
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3 4`);
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
