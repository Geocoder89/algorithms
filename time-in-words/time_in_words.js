'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the timeInWords function below.
function timeInWords(h, m) {
   var nums = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
        'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
        'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five',
        'twenty six', 'twenty seven', 'twenty eight', 'twenty nine']
    if (m == 0) {
        return nums[h] + " o' clock"
    }

    if (m == 30) {
        return "half past " + nums[h]
    }

    if (m < 30) {
        if (m == 1) {
            return nums[m] + " minute past " + nums[h]
        }
        if (m == 15) {
            return "quarter past " + nums[h]
        }
        return nums[m] + " minutes past " + nums[h]
    }

    if (m > 30) {
        if (m == 45) {
            return "quarter to " + nums[h + 1]
        }
        return nums[60 - m] + " minutes to " + nums[h + 1]
    }

    return ""
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = parseInt(readLine(), 10);

    const m = parseInt(readLine(), 10);

    let result = timeInWords(h, m);

    ws.write(result + "\n");

    ws.end();
}
