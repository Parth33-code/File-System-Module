const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var fs = require("fs");

var createdirWizard = () => {
    fs.mkdir("test", (err) => {
        if (err) {
            console.log("error");
        } else {
            console.log("\ncreate dictionary\n");
        }
        repeat();
    });
};


var writeFileWizard = () => {
    fs.writeFile("test/write.txt", "hello world ", (err) => {
        if (err) {
            console.log("error");
        } else {
            console.log("\nwrite in file succesfull\n");
        }
        repeat();
    });
};


var updateFileWizard = () => {
    fs.writeFile("test/write.txt", "This is my new file ", "utf8", (err) => {
        if (err) {
            console.log("error");
        } else {
            console.log("\ndata replace succesfull\n");
        }
        repeat();
    });
};


var appendFileWizard = () => {
    fs.appendFile("test/write.txt", "hii", "utf8", (err) => {
        if (err) {
            console.log("error");
        } else {
            console.log("\ndata append succesfull\n");
        }
        repeat();
    });
};


var readFileWizard = () => {
    fs.readFile("test/write.txt", "utf8", (err, data) => {
        if (err) {
            console.log("error");
        } else {
            console.log("\n",
                data, "\n");
        }
        repeat();
    });
};

var renameFileWizard = () => {
    fs.rename("test/write.txt", "test/write1.txt", (err) => {
        if (err) {
            console.log("error");
        } else {
            console.log("\nfile rename succesfull\n");
        }
        repeat();
    });
};

var deleteFileWizard = () => {
    fs.unlink("test/write1.txt", (err) => {
        if (err) {
            console.log("error");
        } else {
            console.log("\nfile deleted succesfull\n");
        }
        repeat();
    });
};


var instructions = () => {
    console.log("1 Create directory");
    console.log("2 Write in file");
    console.log("3 Data update in file");
    console.log("4 Append in file");
    console.log("5 Read file");
    console.log("6 Rename file");
    console.log("7 Delete file");
};


var start = () => {
    rl.question("Eenter your choice : ", (ans) => {
        if (ans === "1") {
            createdirWizard();
        } else if (ans === "2") {
            writeFileWizard();
        } else if (ans === "3") {
            updateFileWizard();
        } else if (ans === "4") {
            appendFileWizard();
        } else if (ans === "5") {
            readFileWizard();
        } else if (ans === "6") {
            renameFileWizard();
        } else if (ans === "7") {
            deleteFileWizard();
        } else if (ans === "0") {
            rl.close();
        } else {
            console.log("Wrong choice, please try again");
            start();
        }
    });
};

var repeat = () => {
    instructions();
    start();
};

console.log("file system");
repeat();