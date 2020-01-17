let str = 'Once upon a time, there was a brave princess who...';

let str1 = `It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...`;

let str2 = `It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...`;

function repeatedWord(str) {
    // Error handling to ensure that the input is a string
    if (!str || str.constructor.name !== 'String') {
        return -1;
    }
      
    const wordsArr = [];
    const finalArr = [];
    let entry = '';
    for (let i = 0; i < str.length; i++) {
        if (/(\w|'’)/.test(str[i])) {
            entry += str[i];
        }
        if (/\W/.test(str[i])) {
            wordsArr.push(entry);
            entry = '';
        }
    }

    if (entry.length) {
        wordsArr.push(entry);
        entry = '';
    }


    for (let j = 0; j < wordsArr.length; j++) {
        if (/\w+/.test(wordsArr[j])) {
            finalArr.push(wordsArr[j]);
        }
    }

    let matchesObj = {};

    // loop over array and check i against i+1 ot see if there is a match
    for (let i = 0; i < finalArr.length; i++) {
        // if matchesObj[index] exists on obj, return arr[index]
        let index = finalArr[i].toUpperCase();
        if (matchesObj[index]) {
            return finalArr[i];
        }
        matchesObj[index] = 1;
     
    }
    return -1;
}

module.exports = repeatedWord;

let foo = repeatedWord(str);
let bar = repeatedWord(str1);
let baz = repeatedWord(str2);

console.log(foo);
console.log(bar);
console.log(baz);