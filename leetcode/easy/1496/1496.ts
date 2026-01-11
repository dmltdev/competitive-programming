/* 
1496. Path Crossing

Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

 

Example 1:


Input: path = "NES"
Output: false 
Explanation: Notice that the path doesn't cross any point more than once.
Example 2:


Input: path = "NESWW"
Output: true
Explanation: Notice that the path visits the origin twice.
*/

function isPathCrossing(path: string): boolean {
  const crossed = new Set<string>();
  crossed.add('0,0');

  let [x, y] = [0, 0];

  for (const dir of path) {
    switch (dir) {
      case 'N':
        y++;
        break;
      case 'S':
        y--;
        break;
      case 'W':
        x--;
        break;
      case 'E':
        x++;
        break;
    }

    const coords = `${x},${y}`;

    if (crossed.has(coords)) {
      return true;
    }
    crossed.add(coords);
  }

  return false;
}

isPathCrossing('NESWW');
