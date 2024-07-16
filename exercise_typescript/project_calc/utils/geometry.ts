import { multiply } from './math'

export function triangleArea<T extends number>(base: T, height: T): T {
  return multiply(base, height) / 2 as T
};

export function RectangleArea<T extends number>(width: T, height: T): T {
  return multiply(width, height);
};


