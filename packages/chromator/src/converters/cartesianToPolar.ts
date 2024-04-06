import { type CartesianCoordinates } from '../types/CartesianCoordinates';
import { type PolarCoordinates } from '../types/PolarCoordinates';
import { modulo } from '../utils';

export const cartesianToPolar = ({ x, y }: CartesianCoordinates): PolarCoordinates => ({
  radius: Math.sqrt(x ** 2 + y ** 2),
  angle: modulo(Math.atan2(y, x), 2 * Math.PI)
});

export const cartesianToPolarInDegrees = ({ x, y }: CartesianCoordinates): PolarCoordinates => {
  const { radius, angle } = cartesianToPolar({ x, y });
  return { radius, angle: angle * (180 / Math.PI) };
};
