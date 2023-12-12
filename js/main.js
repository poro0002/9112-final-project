// step 1

function getDaysUntilChristmas(para) {
    let christmas = new Date(2023, 11, 25)
    let current = new Date();

    let daysTill = christmas - current;
    let convert = daysTill / (1000 * 60 * 24 * 60);
    let decimal = parseInt(convert)
    console.log(`There are ${decimal} days till christmas`)
}

getDaysUntilChristmas() ;

// step 2

let arr = [34, 45, 5, 74, 23, 95, 23];
let sum = 0;


for(let i = 0; i < arr.length; i++){
    let current = arr[i];
    
    sum += current ;
}

let average = sum / arr.length;
let decimalAverage = parseInt(average)
console.log(decimalAverage)