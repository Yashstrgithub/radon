const date = new Date();

// Current Date
const printDate = function() {

    date1 = new Date().toJSON().slice(0, 10);
    console.log(date1);
}

// Current Month
const printMonth = function() {

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let namefMonth = month[date.getMonth()];
    console.log(namefMonth);
}

//Batch Information
const getBatchInfo = function() {
    console.log(`Radon, W3D3, the topic  for today is Nodejs modules system `);
}

//  functions Exports from here
module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo = getBatchInfo;