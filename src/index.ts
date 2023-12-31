import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkList";

const numbersCollection = new NumbersCollection([ 50, 10, 3, -5, 0, 15])
numbersCollection.sort()
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('XaayBasric');
charactersCollection.sort()
console.log(charactersCollection.data);

const linkedList = new LinkedList()
linkedList.add(500);
linkedList.add(-10);
linkedList.add(34);
linkedList.add(42);

linkedList.sort();
linkedList.print();