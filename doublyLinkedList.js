// doublyLinkedList.js

function createDoublyLinkedList() {
  let head = null;

  function insertAt(value) {
    const newNode = { value, prev: null, next: null };
    if (!head) {
      head = newNode;
    } else {
      let current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      newNode.prev = current;
    }
  }

  function reverseList(startNode) {
    let current = startNode;
    let last = null;

    while (current) {
      const temp = current.next;
      current.next = current.prev;
      current.prev = temp;
      last = current;
      current = temp;
    }

    return last;
  }

  function getHead() {
    return head;
  }

  function printList(startNode) {
    let current = startNode;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  return { insertAt, reverseList, getHead, printList };
}

// Prueba
const list = createDoublyLinkedList();
list.insertAt(42);
let head = list.getHead();
console.log("Lista original:");
list.printList(head);

const reversedHead = list.reverseList(head);
console.log("Lista después de invertir:");
list.printList(reversedHead); // Debería imprimir lo mismo si solo hay un nodo
