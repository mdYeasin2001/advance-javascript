const numbers = [3, 5, 8, 10, -2, 12, -15, 13];
// for(let i = 0; i < numbers.length; i++){
//     let element = numbers[i];
//     if(element > 0){
//         console.log(element);
        
//     }else{
//         break;
//     }
    
// }
for(let i = 0; i < numbers.length; i++){
    let element = numbers[i];
    if(element % 2 == 0){
        console.log(element);
        
    }else{
        continue;
    }
    
}