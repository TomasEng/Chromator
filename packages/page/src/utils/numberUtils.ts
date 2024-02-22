import { PolarCoords } from '../types/PolarCoords';
import { CartesianCoords } from '../types/CartesianCoords';
import { ScreenCoords } from '../types/ScreenCoords';

export const numberToPercentage = (value: number): string => `${Math.round(value * 100)}%`;

export const polarDegreeCoordsToScreenCoords = (polarCoords: PolarCoords): ScreenCoords => {
  const cartesianCoords = polarDegreesToCartesian(polarCoords);
  return standardCoordsToScreenCoords(cartesianCoords);
};

export const polarDegreesToCartesian = (polarCoords: PolarCoords): CartesianCoords => {
  const angle = degreesToRadians(polarCoords.angle);
  return polarToCartesian({ ...polarCoords, angle });
};

export const degreesToRadians = (degrees: number): number => degrees * (Math.PI / 180);

export const polarToCartesian = (polarCoords: PolarCoords): CartesianCoords => ({
  x: polarCoords.radius * Math.cos(polarCoords.angle),
  y: polarCoords.radius * Math.sin(polarCoords.angle)
});

export const standardCoordsToScreenCoords = (coords: CartesianCoords): ScreenCoords => ({
  left: (coords.x + 1)/2,
  top: 1 - (coords.y + 1)/2
});