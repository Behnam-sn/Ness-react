# TDD with OOP in TypeScript - Quick Reference

## Available Scripts

- `pnpm test` - Run Vitest in watch mode
- `pnpm test:run` - Run all tests once
- `pnpm test:ui` - Open Vitest UI in browser
- `pnpm test:coverage` - Generate test coverage report

## Project Structure

```
src/
├── lib/
│   ├── Calculator.ts          # Example OOP class with interface
│   ├── Shape.ts              # Example with inheritance, polymorphism
│   └── __tests__/
│       ├── Calculator.test.ts # Tests for Calculator
│       └── Shape.test.ts     # Tests for Shape classes
├── test/
│   └── setup.ts              # Test setup file
└── ...
```

## TDD Best Practices Used

1. **Red-Green-Refactor Cycle**:
   - Write a failing test first
   - Make it pass with minimal implementation
   - Refactor while keeping tests passing

2. **OOP Principles**:
   - Encapsulation: Private fields and methods
   - Abstraction: Abstract classes and interfaces
   - Inheritance: Extending base classes
   - Polymorphism: Different implementations of same interface

3. **Test Organization**:
   - Describe blocks for logical grouping
   - beforeEach/afterEach for setup/cleanup
   - Clear, descriptive test names

## Running Tests

To run tests in watch mode (recommended for TDD):
```bash
pnpm test
```

To run tests once with coverage:
```bash
pnpm test:coverage
```

## Adding New Tests

1. Create your TypeScript class in `src/lib/`
2. Create corresponding test file in `src/lib/__tests__/`
3. Follow the naming convention `*.test.ts`
4. Use the same directory structure as the source files

Example test structure:
```typescript
import { describe, it, expect, beforeEach } from 'vitest';

describe('ClassName', () => {
  beforeEach(() => {
    // Setup code here
  });

  it('should do something', () => {
    // Test implementation
    expect(result).toBe(expected);
  });
});
```