# Type vs Interface in TypeScript

## Introduction

In TypeScript, type aliases and interface are two ways to define the structure of data. Both help developers describe the shape of objects and improve type safety. Although they look similar, they have some important differences. Understanding these differences helps us choose the right one for different situations.

## Detailed Explanation

### 1. Type Alias

A type alias allows us to create a custom name for any type, including objects, primitive values, unions, and intersections.

```typescript
type User = {
  name: string;
  age: number;
};

type ID = string | number;
```

Here, `User` defines an object structure, while `ID` can be either a string or a number.

### 2. Interface

An `interface` is mainly used to define the structure of objects and classes.

```typescript
interface User {
  name: string;
  age: number;
}
```

An interface can also be extended using the `extends` keyword.

```typescript
interface Admin extends User {
  role: string;
}
```

### 3. Core Differences

The main difference is that `type` supports more than just object structures, while `interface` is primarily designed for object shapes.

- **Union Types:** `type` supports unions (`|`), but interfaces do not directly support them.
- **Extension:** Both support extension, but `interface` uses `extends`, while `type` commonly uses intersections (`&`).
- **Declaration Merging:** Interfaces can be declared multiple times, and TypeScript automatically combines them. Type aliases cannot be redeclared with the same name.
- **Flexibility:** Type aliases are more flexible because they can represent primitives, unions, tuples, and other types.

## Conclusion

Both `type` and `interface` are useful in TypeScript. I prefer using `interface` when defining object structures, especially when working with classes or extending objects. On the other hand, I choose `type` when working with unions, intersections, primitives, or more complex type definitions. Ultimately, both are good choices, and consistency within a project is important.