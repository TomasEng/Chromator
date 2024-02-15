import { floor, modulo, round } from './utils';

export class Scale {
  private maxValue: number;
  private precision: number;
  private floor: boolean;
  private circular: boolean;

  constructor(
    maxValue: number,
    precision: number = 0,
    floor: boolean = false,
    circular: boolean = false,
  ) {
    this.maxValue = maxValue;
    this.precision = precision;
    this.floor = floor;
    this.circular = circular;
  }

  public fromNormalized(value: number): number {
    const intervalTop = this.floor ? this.maxValue + Math.pow(10, -this.precision) : this.maxValue;
    const exactValue = value * intervalTop;
    const roundFunction = this.floor ? floor : round;
    const roundedValue = exactValue === intervalTop ? this.maxValue : roundFunction(exactValue, this.precision);
    return this.circular ? modulo(value, this.maxValue) : roundedValue;
  }

  public toNormalized(value: number): number {
    return value / this.maxValue;
  }
}

const percentScale = new Scale(1, 2);
const wheelScale = new Scale(360, 0, false, true);
const eightBitScale = new Scale(255, 0, true);