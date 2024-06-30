class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.nextNode = node;
    }
    this.tail = node;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.tail = node;
    } else {
      node.nextNode = this.head;
    }
    this.head = node;
  }

  size() {
    let temp = this.head;
    let size = 0;
    while (temp !== null) {
      size++;
      temp = temp.nextNode;
    }
    return size;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.nextNode;
    }
    return temp;
  }

  pop() {
    let temp = this.head;
    while (temp !== null && temp.nextNode !== this.tail) {
      temp = temp.nextNode;
    }
    return temp;
  }

  contains(value) {
    let temp = this.head;
    while (temp !== null && temp.value !== value) {
      temp = temp.nextNode;
    }
    return temp !== null;
  }

  find(value) {
    let temp = this.head;
    let index = 0;
    while (temp !== null && temp.value !== value) {
      temp = temp.nextNode;
      index++;
    }
    if (temp === null) {
      index = null;
    }
    return index;
  }

  toString() {
    let string = "";
    let temp = this.head;
    while (temp !== null) {
      string += `( ${temp.value} ) -> `;
      temp = temp.nextNode;
    }
    string += "null";
    return string;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

// Test

const list = new LinkedList();
console.log("Empty list size: " + list.size());

list.append(1);
list.append(2);
list.append(3);
console.log("Size of 3: " + list.size());
console.log("Second element should be 2: " + list.at(1).value);
console.log(list.toString());

