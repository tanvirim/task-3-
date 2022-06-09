// task:1
// program to convert decimal to binary
let x = 1231 ;
console.log(x.toString(2));
// program to convert binary to decimal
let y = '101010';
console.log(parseInt(y, 2)) ;


// task 2
// program to find out maximum number from any nested array
let flattenedArr = [2,3,[5,6,[7,8],9]].toString().split(",").map(Number);
console.log(Math.max.apply( null, flattenedArr ));

// task 3
let sentense = "A Creative team working with ambitious tech companies around the world. Every day, we are developing tech solutions that help our partners stand out, connect with customers and grow faster."
let count = 0 ;
for (i = 0 ; i < sentense.length ; i++){
    let char = sentense[i];
    if(char == " " || char == "." ){
        count++
    }
}
console.log(count) ;