"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([50, 10, 3, -5, 0, 15]);
numbersCollection.sort();
console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection('XaayBasric');
// const sorter = new Sorter(charactersCollection);
// sorter.sort()
// console.log(charactersCollection.data);
// const linkedList = new LinkedList()
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(34);
// linkedList.add(42);
// const sorter = new Sorter(linkedList);
// sorter.sort()
// linkedList.print();
