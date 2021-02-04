function count(){
    let num = 0;
    return function(){
        num++
        return num;
    }

}
const count1 = count();
console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());
const count2 = count();
console.log(count2());
console.log(count2());
console.log(count1());