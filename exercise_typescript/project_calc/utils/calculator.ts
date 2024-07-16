import { add, subtract, multiply, divide } from './math';
import { triangleArea, RectangleArea } from './geometry';

export class Calculator {
  add<T extends number>(a: T, b: T): T {
    return add(a, b);
  }

  subtract<T extends number>(a: T, b: T): T {
    return subtract(a, b);
  }

  multiply<T extends number>(a: T, b: T): T {
    return multiply(a, b);
  }

  divide<T extends number>(a: T, b: T): T {
    return divide(a, b);
  }

  triangleArea<T extends number>(base: T, height: T): T {
    return triangleArea(base, height);
  }

  RectangleArea<T extends number>(width: T, height: T): T {
    return RectangleArea(width, height);
  }
}

