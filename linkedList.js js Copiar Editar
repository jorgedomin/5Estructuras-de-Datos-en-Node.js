// linkedList.js

function createLinkedList() {
  let head = null;

  function addNode(value) {
    const newNode = { value, next: null };
    if (!head) {
      head = newNode;
      return;
    }
    let current = head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  function deleteNode(value) {
    if (!head) {
      console.log("La lista está vacía.");
      return;
    }
    if (head.value === value) {
      head = head.next;
      return;
    }
    let current = head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    } else {
      console.log("Nodo no encontrado.");
    }
  }

  function printList() {
    let current = head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  return { addNode, deleteNode, printList };
}

// Prueba
const list = createLinkedList();
list.deleteNode(10); // Prueba con lista vacía
list.addNode(5);
list.addNode(10);
list.addNode(15);
list.printList();
list.deleteNode(10);
list.printList();
