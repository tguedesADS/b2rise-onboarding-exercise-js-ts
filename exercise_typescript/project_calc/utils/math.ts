export function add<T extends number>(a: T, b: T): T {
  return a + b as T
}

export function subtract<T extends number>(a: T, b: T): T {
  return a - b as T
}

export function multiply<T extends number>(a: T, b: T): T {
  return a * b as T
}

export function divide<T extends number>(a: T, b: T): T {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b as T
}
