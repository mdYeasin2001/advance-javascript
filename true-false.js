// falsy:
// 0
// ""
// undefined
// null
// false
// NaN
// ===================

// truthy:
// " ", "0", [], {}, "false" and others value


// const age = 0;
let name = [];
// console.log(name);
if( name ){
    console.log("condition is true");
}else{
    console.log('condition is false');
}