// 1. Crie um namespace `Util` que contenha uma função para calcular a área de um círculo.
namespace Util {
  export function calculateCircleArea(radius: number): number {
    return Math.PI * (radius ** 2);
  }
}

console.log(`A área do círculo é ${Util.calculateCircleArea(4).toFixed(2)}`);

// 2. Separe um projeto em múltiplos módulos, onde cada módulo exporta uma função ou classe
// diferente. Utilize `import` e `export` para conectar os módulos.

//Path: exercise_typescript/project_calc
