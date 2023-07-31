"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const LinkList_1 = require("./LinkList");
// const numbersCollection = new NumbersCollection([ 50, 10, 3, -5, 0, 15])
// const sorter = new Sorter(numbersCollection);
// sorter.sort()
// console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection('XaayBasric');
// const sorter = new Sorter(charactersCollection);
// sorter.sort()
// console.log(charactersCollection.data);
const linkedList = new LinkList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(34);
linkedList.add(42);
const sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
