
var fruitsData = [
  ["apple", "orange", "cherry"],
  [1.2, 2.0, 3.5],
];

// TASK: log in console each fruit and its price

// the non-efective (stupid) way:
// console.log( fruitsData[0][0] +'='+ fruitsData[1][0]);
// console.log( fruitsData[0][1] +'='+ fruitsData[1][1]);
// console.log( fruitsData[0][2] +'='+ fruitsData[1][2]);


// the cleaver way:
// >>>>>>>>>>>> your code here >>>>>>>>>>>>
let fruitName;
let fruitPrice;

for(let i=0;i<fruitsData[0].length;i++){
    
    console.log(`${fruitsData[0][i]} = ${fruitsData[1][i]}`);
        
}


//HINT: you have to loop over fruitsData "columns"

// EXPECTED OUTPUT:
// apple = 1.2,
// orange = 2.0,
// cherry = 3.5


