export default function generateIntermediatePoints(
  min: number,
  max: number,
  numPoints: number
): number[] {
  const intermediateXPoints: number[] = [min];

  for (let i = 1; i < numPoints - 1; i++) {
    const t = i / (numPoints - 1);
    const x = min + (max - min) * t;
    intermediateXPoints.push(x);
  }

  intermediateXPoints.push(max);

  return intermediateXPoints;
}
