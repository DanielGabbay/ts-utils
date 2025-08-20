# @ts-utils/generic-utils

A modular collection of TypeScript utilities for enhanced developer productivity.

## Installation

```bash
npm install @ts-utils/generic-utils
```

## Quick Start

```typescript
import { EnumLike, TypeFrom } from '@ts-utils/generic-utils';

// Create type-safe constants
const Status = EnumLike(['pending', 'completed', 'failed'] as const);
type Status = TypeFrom<typeof Status>;

// Use with full type safety
function updateStatus(newStatus: Status) {
  console.log(`Status: ${newStatus}`);
}

updateStatus(Status.pending); // ✅ Works
updateStatus('invalid');      // ❌ TypeScript error
```

## Documentation

For complete documentation and examples, see the [main repository](../../).

## Building

Run `nx build generic-utils` to build the library.

## Running unit tests

Run `nx test generic-utils` to execute the unit tests via [Jest](https://jestjs.io).

## License

MIT
