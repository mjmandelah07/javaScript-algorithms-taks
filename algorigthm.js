// Sum All Numbers in a Range 1,2,3,4 in [1,4]

function sumAll(arr) {
    let sumBetween = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sumBetween += i;
        console.log(sumBetween);
    }
    return sumBetween;
}

sumAll([1, 4]);


// diff between two arrays
function diffArray(arr1, arr2) {
    const difference = new Set(arr1);
    arr2.forEach((ele) =>
        difference.has(ele) ? difference.delete(ele) : difference.add(ele)
    );
    return Array.from(difference);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// seek and destroy
function destroyer(arr) {
    const valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(function (val) {
        return !valsToRemove.includes(val);
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Wherefore art thou
function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source);

    return collection
        .filter(obj => sourceKeys
            .every(key => obj.hasOwnProperty(key) &&
                obj[key] === source[key]));
}


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


// put hypen btw words and change to lower case
function spinalCase(str) {
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return str
        .toLowerCase()
        .split(/(?:_| )+/)
        .join("-")
}

spinalCase('This Is Spinal Tap');

// pig latin
function translatePigLatin(str) {
    if (str.match(/^[aeiou]/)) return str + "way";

    const consonantCluster = str.match(/^[^aeiou]+/)[0];
    return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

translatePigLatin("consonant");
translatePigLatin("Eunoia");

// Search and Replace
function myReplace(str, before, after) {
    const strArr = str.split(" ");
    const [wordToReplace] = strArr.filter(item => item === before);
    const replacement = wordToReplace[0] === wordToReplace[0].toUpperCase()
        ? after[0].toUpperCase() + after.slice(1)
        : after[0].toLowerCase() + after.slice(1);
    return strArr.map(item => (item === before ? replacement : item)).join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// DNA Pairing
