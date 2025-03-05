function preorder(nodes: number[], idx: number): string {
  if (idx < nodes.length) {
    let ret = `${nodes[idx]} `;
    ret += preorder(nodes, idx * 2 + 1);
    ret += preorder(nodes, idx * 2 + 2);
    return ret;
  }
  return "";
}

function inorder(nodes: number[], idx: number): string {
  if (idx < nodes.length) {
    let ret = inorder(nodes, idx * 2 + 1);
    ret += `${nodes[idx]} `;
    ret += inorder(nodes, idx * 2 + 2);
    return ret;
  }
  return "";
}

function postorder(nodes: number[], idx: number): string {
  if (idx < nodes.length) {
    let ret = postorder(nodes, idx * 2 + 1);
    ret += postorder(nodes, idx * 2 + 2);
    ret += `${nodes[idx]} `;
    return ret;
  }
  return "";
}

export function solution(nodes: number[]): string[] {
  return [
    preorder(nodes, 0).slice(0, -1),
    inorder(nodes, 0).slice(0, -1),
    postorder(nodes, 0).slice(0, -1),
  ];
}

