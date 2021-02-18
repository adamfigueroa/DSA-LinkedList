// Question 9 Doubly linked list

// Implement a doubly linked list. The primary functions of the doubly linked list would be insert (First, Last, Before, After, and At), remove, and find. Write a function mainDLL, and within it create the doubly linked list DLL and add the following items to it: Aquaria, Caprica, Gemenon, Picon, Sagittaron.

// Add Tauron to the list
// Remove Picon from the list

// Question 10 Reverse a DLL

// Given the doubly linked list above, write a program that reverses the doubly linked list. How is this implementation different than reversing the singly linked list?

class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DLL {
  constructor() {
    this.head = null;
  }

  display() {
    let currentNode = this.head;

    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  insertFirst(item) {
    if (this.head === null) {
      this.head = new Node(item, null);
    } else {
      let node = this.head;
      this.head.previous = new Node(item, this.head);
      this.head = node.previous;
    }
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }

      tempNode.next = new Node(item, null, tempNode);
    }
  }

  insertBefore(insertItem, value) {
    let currentNode = this.head;

    while (value !== currentNode.next.value) {
      currentNode = currentNode.next;
    }
    let findValue = this.find(value);

    currentNode.next = new Node(insertItem, findValue, currentNode);
  }

  insertAfter(insertItem, value) {
    let findValue = this.find(value);
    let tempNext = findValue.next;
    findValue.next = new Node(insertItem, tempNext, findValue);
  }

  insertAt(insertItem, position) {
    let currentNode = this.head;
    let count = 0;

    while (currentNode.next !== null) {
      count++;

      if (count === position) {
        this.insertBefore(insertItem, currentNode.value);
      }
      currentNode = currentNode.next;
    }
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      this.head.previous = null;
      return;
    }

    let currentNode = this.head;
    let previousNode = this.head;

    while (currentNode !== null && currentNode.value !== item) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      console.log('Item not found');
      return;
    }

    previousNode.next = currentNode.next;
    currentNode.next.previous = previousNode;
  }

  find(item) {
    let currentNode = this.head;

    if (!this.head) {
      return null;
    }

    while (currentNode.value !== item) {
      if (currentNode.next === null) {
        return null;
      } else {
        currentNode = currentNode.next;
      }
    }

    return currentNode;
  }

  reverse(node) {
    let prevNode = node.previous;
    let nextNode = node.next;

    if (node.next !== null) {
      this.reverse(nextNode);
      node.next = prevNode;
      node.prev = null;
      this.head = node;
    }
  }
}

function mainDLL() {
  let doublyLinkedList = new DLL();
  doublyLinkedList.insertFirst('Aquaria');
  doublyLinkedList.insertLast('Caprica');
  doublyLinkedList.insertLast('Gemenon');
  doublyLinkedList.insertLast('Picon');
  doublyLinkedList.insertLast('Tauron');
  doublyLinkedList.remove('Picon');
  doublyLinkedList.reverse(doublyLinkedList.head)

  return doublyLinkedList;
}
mainDLL();
