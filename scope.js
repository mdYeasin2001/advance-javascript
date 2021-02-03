const num = 3; // global scope
function callNum(){
    var sum = num; // local scope
    return num;
}
console.log(callNum());
console.log(sum);

for(var i = 0; i < 10; i++){
    var x = 3;
    // console.log(i);
}
for(var i = 0; i < 10; i++){
    let x = 3;
    if(num > 0){
        var y = "positive number"
    }
    // console.log(i);
}
for(var i = 0; i < 10; i++){
    let x = 3;
    if(num > 0){
        let y = "positive number"
    }
    console.log(y);
    // console.log(i);
}
// console.log(i);
// console.log(x);
