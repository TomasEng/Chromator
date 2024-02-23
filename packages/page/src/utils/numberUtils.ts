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

export const degreesToRadians = (degrees: number): number => degrees * Math.PI / 180;

export const polarToCartesian = (polarCoords: PolarCoords): CartesianCoords => ({
  x: polarCoords.radius * Math.cos(polarCoords.angle),
  y: polarCoords.radius * Math.sin(polarCoords.angle)
});

export const standardCoordsToScreenCoords = (coords: CartesianCoords): ScreenCoords => ({
  left: (coords.x + 1)/2,
  top: 1 - (coords.y + 1)/2
});

export const screenCoordsToPolarDegreeCoords = (screenCoords: ScreenCoords): PolarCoords => {
  const standardCoords = screenCoordsToStandardCoords(screenCoords);
  return cartesianToPolarDegrees(standardCoords);
};

export const screenCoordsToStandardCoords = (coords: ScreenCoords): CartesianCoords => ({
  x: coords.left * 2 - 1,
  y: 1 - coords.top * 2
});

export const cartesianToPolarDegrees = (cartesianCoords: CartesianCoords): PolarCoords => {
  const polarCoords = cartesianToPolar(cartesianCoords);
  return {
    angle: radiansToDegrees(polarCoords.angle),
    radius: polarCoords.radius
  };
}

export const radiansToDegrees = (radians: number): number => radians * 180 / Math.PI;

export const cartesianToPolar = (cartesianCoords: CartesianCoords): PolarCoords => ({
  angle: modulo(Math.atan2(cartesianCoords.y, cartesianCoords.x), 2 * Math.PI),
  radius: Math.sqrt(cartesianCoords.x ** 2 + cartesianCoords.y ** 2)
});

export const modulo = (dividend: number, divisor: number): number => ((dividend % divisor) + divisor) % divisor; // This should be used in favor of the % operator when dealing with negative numbers, since the % operator does not handle negative numbers correctly.