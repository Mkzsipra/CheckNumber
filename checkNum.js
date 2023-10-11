function checkNumber(num) {
    if (num > 1) {
        console.log(`Your Number is Positive ${num}` );
    }else if(num < 1){
        console.log(`Your number is negative ${num}`);
    }else{
        console.log(`Your number is 0`);
    }
}
console.log(checkNumber(-2));