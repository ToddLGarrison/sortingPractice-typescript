"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([ 50, 10, 3, -5, 0, 15])
// const sorter = new Sorter(numbersCollection);
// sorter.sort()
// console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection('XaayBasric');
const sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
