export function solution(list: number[], searchList: number[]): boolean[] {
  const bst = new BST();
  for (const key of list) {
    bst.insert(key);
  }
  
  const result: boolean[] = [];
  for (const searchVal of searchList) {
    if (bst.search(searchVal)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}


class Node {
  left: Node | null;
  right: Node | null;
  val: number;

  constructor(key: number) {
    this.left = null;
    this.right = null;
    this.val = key;
  }
}

class BST {
  root: Node | null;

  constructor() {
    this.root = null;
  }

  insert(key: number): void {
    if (!this.root) {
      this.root = new Node(key);
    } else {
      let curr = this.root;
      while (true) {
        if (key < curr.val) {
          if (curr.left) {
            curr = curr.left;
          } else {
            curr.left = new Node(key);
            break;
          }
        } else {
          if (curr.right) {
            curr = curr.right;
          } else {
            curr.right = new Node(key);
            break;
          }
        }
      }
    }
  }

  search(key: number): Node | null {
    let curr = this.root;
    while (curr && curr.val !== key) {
      if (key < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return curr;
  }
}