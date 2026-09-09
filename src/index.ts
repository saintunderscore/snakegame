import fs from 'node:fs';

const greet = (name: string): string => {
  return `Привет, ${name}!`;
};

console.log(greet("TypeScript"));