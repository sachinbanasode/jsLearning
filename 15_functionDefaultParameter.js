function show(arg1, ...arg) {
    console.log(arg1);
    console.log(arg);
}
show(100, 200, 300);

function showw(arg1, arg) {
    console.log(arg1/0);
    console.log(arg);
}
showw(100, 200);

function shows(arg1, arg2=2) {
    console.log(arg1/arg2);
    
}
shows(100);
shows(100, 101);//arg2 value is given but it takes default value
