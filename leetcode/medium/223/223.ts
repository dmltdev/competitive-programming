export function computeArea(
  ax1: number,
  ay1: number,
  ax2: number,
  ay2: number,
  bx1: number,
  by1: number,
  bx2: number,
  by2: number,
): number {
  const area1 = (ax2 - ax1) * (ay2 - ay1);
  const area2 = (bx2 - bx1) * (by2 - by1);
  const intersection =
    Math.max(0, Math.min(ax2, bx2) - Math.max(ax1, bx1)) *
    Math.max(0, Math.min(ay2, by2) - Math.max(ay1, by1));

  return area1 + area2 - intersection;
  //   const getArea = (ax: number, ay: number, bx: number, by: number) => {
  //     const width = bx - ax;
  //     const height = by - ay;

  //     return width * height;
  //   };

  //   const getIntersectionArea = () => {
  //     const leftXEdge = Math.max(ax1, bx1);
  //     const rightXEdge = Math.min(ax2, bx2);
  //     const xOverlap = Math.max(0, rightXEdge - leftXEdge);

  //     const bottomYEdge = Math.max(ay1, by1);
  //     const topYEdge = Math.min(ay2, by2);
  //     const yOverlap = Math.max(0, topYEdge - bottomYEdge);

  //     return xOverlap * yOverlap;
  //   };

  //   const area1 = getArea(ax1, ay1, ax2, ay2);
  //   const area2 = getArea(bx1, by1, bx2, by2);
  //   const intersectionArea = getIntersectionArea();

  //   return area1 + area2 - intersectionArea;
}
