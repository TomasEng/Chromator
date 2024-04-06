import { type PolarCoordinates } from '../types/PolarCoordinates';
import { type CartesianCoordinates } from '../types/CartesianCoordinates';

export const polarToCartesian = ({ radius, angle }: PolarCoordinates): CartesianCoordinates => ({
  x: radius * Math.cos(angle),
  y: radius * Math.sin(angle)
});

export const polarInDegreesToCartesian = ({ radius, angle }: PolarCoordinates): CartesianCoordinates => ({
  x: radius * Math.cos(angle * (Math.PI / 180)),
  y: radius * Math.sin(angle * (Math.PI / 180))
});
