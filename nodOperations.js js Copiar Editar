// nodOperations.js

function createLinkedListFromArray(array) {
  if (!array.length) return null;

  const head = { value: array[0], next: null };
  let current = head;

  for (let i = 1; i < array.length; i++) {
    const newNode = { value: array[i], next: null };
    current.next = newNode;
    current = newNode;
  }

  return head;
}

function printNodes(node) {
  let current = node;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

function countNodesRecursively(node) {
  if (!node) return 0;
  return 1 + countNodesRecursively(node.next);
}

// Prueba
const values = [10, 20, 30, 40, 50];
const head = createLinkedListFromArray(values);

console.log("Recorriendo nodos:");
printNodes(head);

console.time("Conteo de nodos");
const count = countNodesRecursively(head);
console.timeEnd("Conteo de nodos");
console.log("Total de nodos:", count);

// Prueba con lista vacía
const empty = createLinkedListFromArray([]);
console.time("Conteo lista vacía");
console.log("Nodos en lista vacía:", countNodesRecursively(empty));
console.timeEnd("Conteo lista vacía");
