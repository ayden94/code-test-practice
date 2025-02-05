const wayMap = new Map([
  ["U", ([x, y]: [number, number]): [number, number] => { return [x, y + 1] }],
  ["D", ([x, y]: [number, number]): [number, number] => { return [x, y - 1] }],
  ["R", ([x, y]: [number, number]): [number, number] => { return [x + 1, y] }],
  ["L", ([x, y]: [number, number]): [number, number] => { return [x - 1, y] }],
])

const isOut = (location: [number, number]): boolean => {
  if (location[0] < -5 || location[0] >= 5 || location[1] < -5 || location[1] >= 5) {
    return true;
  } else {
    return false
  }
}

export function solution(path: string) {
  const parsedPath = path.split('');
  const trail = new Set<string>();

  let location: [number, number] = [0, 0];

  for (const [index, char] of parsedPath.entries()) {
    const fn = wayMap.get(char);

    if (fn) {
      const newLocation = fn(location);

      if (!isOut(newLocation)) {
          trail.add(`${location[0]}${location[1]}${newLocation[0]}${newLocation[1]}`)

          location = newLocation;
      }
    }
  }

  return trail.size
}

