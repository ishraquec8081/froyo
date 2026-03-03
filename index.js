function countFlavorFrequencies(flavorsArray) {
//LOGIC

    let flavorCounts = {};

    for (let i = 0; i < flavorsArray.length; i++) {
        let flavor = flavorsArray[i];

        if (flavorCounts[flavor]) {
            flavorCounts[flavor]++;
        } else {
            flavorCounts[flavor] = 1;
        }
    }

    return flavorCounts;
}

//
let userInput = prompt("Enter flavors and make sure to seperate by commas (ex. vanilla,vanilla,vanilla,strawberry,coffee,coffee):");
let flavorsArray = userInput.split(",");
let flavorCounts = countFlavorFrequencies(flavorsArray);

for (let flavor in flavorCounts) {
    console.log(flavor + ": " + flavorCounts[flavor]);
}
