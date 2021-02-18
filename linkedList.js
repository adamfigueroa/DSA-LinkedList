// Question 1 Create a linked list class

// Walk through the linked list code in the curriculum and understand it well. Then write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch.

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, value) {
    let currNode = this.head;

    if (!currNode) {
      return null;
    }

    if (currNode === value) {
      this.insertFirst(item);
      return;
    }

    while ((currNode.next.value !== value) & (currNode.next.next !== null)) {
      currNode = currNode.next;
    }

    if (currNode.next.value === value) {
      let nodeHolder = new _Node(item, currNode.next);
      currNode.next = nodeHolder;
    } else {
      console.log('Before item not found');
      return;
    }
  }

  insertAfter(item, value) {
    let currNode = this.head;

    if (!currNode) {
      return null;
    }

    while ((currNode.value !== value) & (currNode.next !== null)) {
      currNode = currNode.next;
    }

    if (currNode.value === value && currNode.next === null) {
      this.insertLast(item);
      return;
    }

    if (currNode.value === value) {
      let nodeHolder = new _Node(item, currNode.next);
      currNode.next = nodeHolder;
    } else {
      console.log('After item not found');
      return;
    }
  }

  insertAt(index, item) {
    if (!this.head) {
      console.log('Indexed item not found');
      return;
    }

    if (index === 0) {
      this.insertFirst(item);
      return;
    }

    let count = 0;
    let currNode = this.head;

    while (count !== index && currNode.next !== null) {
      currNode = currNode.next;
      count++;
    }

    if (count === index) {
      this.insertBefore(item, currNode.value);
      return;
    } else {
      console.log('Indexed item not found');
      return;
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Remove failed, Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

// Question 2 Create a singly linked list

// Write a function main. Within the function, using the linked list class above, create a linked list with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.

// Add Tauhida to the list.

// Remove squirrel from the list.

// Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.

// Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.

// Implement a function called insertAt() that inserts an item at a specific position in the linked list.

// Add Athena before Boomer using your insertBefore() function.

// Add Hotdog after Helo using the insertAfter() method.

// Using the insertAt() method insert Kat in the 3rd position of the list.

// Remove Tauhida from the list.

function main() {
  let SLL = new LinkedList();
  let arr = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];

  arr.map((item) => SLL.insertFirst(item));

  SLL.insertFirst('Tauhida');
  SLL.remove('squirrel');
  SLL.insertBefore('Venti', 'Starbuck');
  SLL.insertAfter('Ono', 'Apollo');
  // console.dir(SLL);
}
main();

// Question 3 Supplemental functions for a linked list

// Implement the following functions that operate on your linked list class. Note that these should be free functions instead of methods of the linked list class, so implement them outside the linked list class. Test each function using the list created in exercise 1.

// display: displays the linked list
function display(list) {
  let currNode = list.head;
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

// size: returns the size of the linked list
function size(list) {
  let currNode = list.head;
  let counter = 0;
  while (currNode !== null) {
    counter++;
    currNode = currNode.next;
  }
  console.log('List size: ', counter);
  return counter;
}

// isEmpty: finds if the list is empty or not (without using the size() function)
function isEmpty(list) {
  let currNode = list.head;
  if (currNode === null) {
    return true;
  }
  return false;
}

// findPrevious: finds the node before the item you are looking for
function findPrevious(list) {
  let currNode = list.head;
  while (item !== currNode.next.value) {
    currNode = currNode.next;
  }
  return currNode.value;
}

// findLast: returns the last node in the linked list
function findLast(list) {
  let currNode = list.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode.value;
}

// Question 4 Mystery program

// Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the time complexity of this algorithm?

function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      } else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

// I'm not fully sure but it looks like this is a function that skips duplicates. My guess of the time complexity is O(n2)

// Question 5 Reverse a list

// Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.

function reverseAList(head) {
  if (!head || !head.next) {
    return head;
  }
  let temp = reverseAList(head.next);
  head.next.next = head;
  head.next = undefined;
  return temp;
}

// Question 6 3rd from the end

// Write an algorithm to find the 3rd element from the end of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you.
function LL() {
  let list = new LinkedList();
  let arr = [32, 29, 27, 25, 23, 22, 15, 12, 11];
  arr.map((item) => list.insertFirst(item));
  return list;
}

const listy = LL();

function thirdFromEnd(list) {
  let currNode = list.head;
  while (currNode.next.next.next !== null) {
    currNode = currNode.next;
  }
  return currNode.value;
}
// console.log(thirdFromEnd(listy), 'third should be 27');

// Question 7 Middle of a list

// Write an algorithm to find the middle element of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you. Also, finding the size of the linked list using the size() function and dividing it by half will not find the correct middle of the linked list. So, don't use either of these approaches.

function middle(list) {
  let slowNode = list.head;
  let fastNode = list.head;

  while (fastNode !== null) {
    if (fastNode.next == null) {
      return slowNode.value;
    } else {
      fastNode = fastNode.next.next;
      slowNode = slowNode.next;
    }
  }
  return slowNode.value;
}
// console.log(middle(listy), 'should be 23');

// Question 8 Cycle in a list

// Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its next value pointing to an earlier node in the list). For this exercise, create a linked list with the name CycleList. Be sure to insert nodes in the list so that it has a cycle. Then test your program with a cycleList function.

const Cyclelist = new LinkedList();
Cyclelist.insertFirst('A');
Cyclelist.insertLast('B');
Cyclelist.insertLast('C');
Cyclelist.insertLast('D');
Cyclelist.insertLast('E');

const unCycleList = new LinkedList();
unCycleList.insertFirst('A');
unCycleList.insertLast('B');
unCycleList.insertLast('C');
unCycleList.insertLast('D');
unCycleList.insertLast('E');

function makeCycle(list) {
  let currNode = list.head;

  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  currNode.next = list.head;
  return list;
}

function cycleList(list) {
  const listHead = list.head;
  let currNode = list.head.next;

  while (currNode.next !== null && currNode.next !== listHead) {
    currNode = currNode.next;
  }
  if (currNode.next === listHead) {
    return true;
  } else {
    return false;
  }
}

const cycledList = makeCycle(Cyclelist)
console.log(cycleList(cycledList), 'true')
console.log(cycleList(unCycleList), 'false')