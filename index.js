const fs = require('fs');
const fs_extra = require('fs-extra');

const array_count = 10 // Replace this value with the amount of array elements.
const awsRoute = ' your folder path ' // Replace this with the value of the aws Route.

let count = 0;
let array = [];
let finalOutput = '';

fs_extra.emptyDirSync("./txtResult");

while (count < array_count) {
    
    let count_increment = count + 1;

    const constructorLink = `safeMint(bircleDeployer, ${count_increment}, "https://bircle-sa-east-1-media.s3.sa-east-1.amazonaws.com/${awsRoute}/${count_increment}.json");` // Replace this with your desire string.
    // string = string
    array.push(`\n ${constructorLink}`);
    console.log(`String ${count_increment} added to array.`)

    count++;
}
array.push('\n') // Add one final line break fot facilitate copying the file
finalOutput = array.join(' '); // Removes ','
fs.writeFileSync(`txtResult/constructorParams.txt`, `"${finalOutput}"`)
console.log(`.txt File created successfully`)