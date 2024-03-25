if(f1() && f2() && f3() && f4()) { // short circuit = קצר
    console.log("Good");
}
else {
    console.log("Bad");
}

function f1() {
    console.log("f1");
    return false;
}

function f2() {
    console.log("f2");
    return true;
}

function f3() {
    console.log("f3");
    return true;
}

function f4() {
    console.log("f4");
    return true;
}

