export default function generatePointsByLine(
  n: number,
  linePoint1: Coordinates,
  linePoint2: Coordinates,
  spacing: number,
  minDistance: number
): { pointsLeft: Coordinates[]; pointsRight: Coordinates[] } {
  const pointsLeft: Coordinates[] = [];
  const pointsRight: Coordinates[] = [];

  for (let i = 0; i < n; i++) {
    const x = Math.random() * 10; // Altere isso conforme necessário
    const y = Math.random() * 10; // Altere isso conforme necessário
    const point: Coordinates = { x, y };

    // Verificar se o ponto está à esquerda ou à direita da linha
    const isLeftOfLine =
      (linePoint2.x - linePoint1.x) * (point.y - linePoint1.y) -
        (linePoint2.y - linePoint1.y) * (point.x - linePoint1.x) >
      0;

    // Verificar se o ponto atende ao espaçamento mínimo e à distância mínima
    let canAddPoint = true;
    if (isLeftOfLine) {
      const distanceToLine =
        Math.abs(
          (linePoint2.x - linePoint1.x) * (linePoint1.y - point.y) -
            (linePoint1.x - point.x) * (linePoint2.y - linePoint1.y)
        ) /
        Math.sqrt(
          Math.pow(linePoint2.x - linePoint1.x, 2) +
            Math.pow(linePoint2.y - linePoint1.y, 2)
        );

      if (distanceToLine < spacing) {
        canAddPoint = false;
      }
    } else {
      const distanceToLine =
        Math.abs(
          (linePoint2.x - linePoint1.x) * (linePoint1.y - point.y) -
            (linePoint1.x - point.x) * (linePoint2.y - linePoint1.y)
        ) /
        Math.sqrt(
          Math.pow(linePoint2.x - linePoint1.x, 2) +
            Math.pow(linePoint2.y - linePoint1.y, 2)
        );

      if (distanceToLine < spacing) {
        canAddPoint = false;
      }
    }

    // Verificar a distância mínima em relação a pontos já existentes
    if (canAddPoint) {
      const isTooCloseToLeft = pointsLeft.some(
        (existingPoint) =>
          Math.sqrt(
            Math.pow(existingPoint.x - point.x, 2) +
              Math.pow(existingPoint.y - point.y, 2)
          ) < minDistance
      );
      const isTooCloseToRight = pointsRight.some(
        (existingPoint) =>
          Math.sqrt(
            Math.pow(existingPoint.x - point.x, 2) +
              Math.pow(existingPoint.y - point.y, 2)
          ) < minDistance
      );

      if (isTooCloseToLeft || isTooCloseToRight) {
        canAddPoint = false;
      }
    }

    if (canAddPoint) {
      if (isLeftOfLine) {
        pointsLeft.push(point);
      } else {
        pointsRight.push(point);
      }
    }
  }

  return { pointsLeft, pointsRight };
}
