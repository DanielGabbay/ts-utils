# TypeScript Utils Collection

A modular collection of TypeScript utilities designed to enhance developer productivity with type-safe, lightweight solutions.

## 🚀 Why This Library?

This library provides carefully crafted utilities that enhance TypeScript development:

- **🎯 Type Safety First** - Full TypeScript support with compile-time guarantees
- **🪶 Lightweight** - Tree-shakeable, minimal runtime footprint
- **🔧 Modular Design** - Use only what you need
- **📚 Well Documented** - Clear examples and use cases
- **🚀 Growing Collection** - Actively expanding with new utilities

## 📦 Installation

```bash
npm install @ts-utils/generic-utils
# or
yarn add @ts-utils/generic-utils
# or
pnpm add @ts-utils/generic-utils
```

## 🗂️ Available Utilities

<details>
<summary><strong>🏷️ Type Utilities</strong> - Advanced TypeScript type manipulation</summary>

### EnumLike & TypeFrom

Create type-safe enum-like objects with full TypeScript support.

**📂 Source:** [`generic-utils/src/lib/type-utils/`](./generic-utils/src/lib/type-utils/)

```typescript
import { EnumLike, TypeFrom } from '@ts-utils/generic-utils';

// Create enum-like object
export const MyEnum = EnumLike(['A', 'B', 'C'] as const);
// Result: { A: 'A', B: 'B', C: 'C' }

// Extract union type
export type MyEnum = TypeFrom<typeof MyEnum>;
// Result: 'A' | 'B' | 'C'
```

**🎯 Use Cases:**
- API endpoint definitions
- State management constants
- Configuration options
- Event type definitions

**📖 More Examples:**

<details>
<summary>State Management Example</summary>

```typescript
export const LoadingStates = EnumLike([
  'idle', 'loading', 'success', 'error'
] as const);

export type LoadingState = TypeFrom<typeof LoadingStates>;

interface AppState {
  status: LoadingState;
  data?: any;
  error?: string;
}
```
</details>

<details>
<summary>API Client Example</summary>

```typescript
export const ApiEndpoints = EnumLike([
  'users', 'posts', 'comments'
] as const);

export type ApiEndpoint = TypeFrom<typeof ApiEndpoints>;

class ApiClient {
  async get(endpoint: ApiEndpoint) {
    return fetch(`/api/${endpoint}`);
  }
}
```
</details>

</details>

<details>
<summary><strong>📋 Array Utilities</strong> - Array manipulation helpers</summary>

**📂 Source:** [`generic-utils/src/lib/array-utils/`](./generic-utils/src/lib/array-utils/)

*🚧 Coming Soon:*
- `unique()` - Remove duplicates
- `chunk()` - Split arrays into chunks
- `groupBy()` - Group array elements
- `flatten()` - Flatten nested arrays

```typescript
// Preview of upcoming utilities
import { unique, chunk, groupBy } from '@ts-utils/generic-utils';

const numbers = [1, 2, 2, 3, 3, 4];
const uniqueNumbers = unique(numbers); // [1, 2, 3, 4]

const chunked = chunk([1, 2, 3, 4, 5, 6], 2); // [[1, 2], [3, 4], [5, 6]]
```

</details>

<details>
<summary><strong>🎯 Object Utilities</strong> - Object manipulation helpers</summary>

**📂 Source:** [`generic-utils/src/lib/object-utils/`](./generic-utils/src/lib/object-utils/)

*🚧 Coming Soon:*
- `pick()` - Select specific properties
- `omit()` - Exclude specific properties
- `deepMerge()` - Deep merge objects
- `deepEqual()` - Deep equality check

```typescript
// Preview of upcoming utilities
import { pick, omit, deepMerge } from '@ts-utils/generic-utils';

const user = { id: 1, name: 'John', email: 'john@example.com', password: 'secret' };
const publicUser = omit(user, ['password']); // { id: 1, name: 'John', email: 'john@example.com' }
```

</details>

<details>
<summary><strong>🔤 String Utilities</strong> - String manipulation helpers</summary>

**📂 Source:** [`generic-utils/src/lib/string-utils/`](./generic-utils/src/lib/string-utils/)

*🚧 Coming Soon:*
- `camelCase()` - Convert to camelCase
- `kebabCase()` - Convert to kebab-case
- `capitalize()` - Capitalize first letter
- `truncate()` - Truncate with ellipsis

```typescript
// Preview of upcoming utilities
import { camelCase, kebabCase, capitalize } from '@ts-utils/generic-utils';

const text = 'hello world';
const camelCased = camelCase(text); // 'helloWorld'
const kebabCased = kebabCase(text); // 'hello-world'
```

</details>

## �️ Development

<details>
<summary><strong>🏗️ Development Commands</strong></summary>

```bash
# Install dependencies
npm install

# Run tests
npx nx test generic-utils

# Build the library
npx nx build generic-utils

# Lint the code
npx nx lint generic-utils

# Run all tests in watch mode
npx nx test generic-utils --watch
```

</details>

<details>
<summary><strong>📁 Project Structure</strong></summary>

```
ts-utils/
├── 📁 generic-utils/           # Main utility library
│   ├── 📁 src/
│   │   ├── 📁 lib/
│   │   │   ├── 📁 type-utils/     # ✅ Type utilities (EnumLike, TypeFrom)
│   │   │   ├── 📁 array-utils/    # 🚧 Array utilities (planned)
│   │   │   ├── 📁 object-utils/   # 🚧 Object utilities (planned)
│   │   │   └── 📁 string-utils/   # 🚧 String utilities (planned)
│   │   └── 📄 index.ts            # Main export file
│   ├── 📄 package.json
│   └── 📄 README.md
├── 📄 README.md                   # This file
├── 📄 nx.json                     # Nx configuration
└── 📄 package.json               # Workspace package.json
```

**📂 Key Files:**
- **[EnumLike Implementation](./generic-utils/src/lib/type-utils/enum-like/enum-like.ts)** - Core EnumLike function
- **[TypeFrom Implementation](./generic-utils/src/lib/type-utils/type-from/type-from.ts)** - TypeFrom utility type
- **[Main Export](./generic-utils/src/index.ts)** - Library entry point
- **[Tests](./generic-utils/src/lib/type-utils/enum-like/enum-like.spec.ts)** - Test specifications

</details>

## 🚀 Quick Start

```typescript
import { EnumLike, TypeFrom } from '@ts-utils/generic-utils';

// 1. Create type-safe constants
const Status = EnumLike(['pending', 'completed', 'failed'] as const);
type Status = TypeFrom<typeof Status>;

// 2. Use in your functions
function updateStatus(newStatus: Status) {
  console.log(`Status updated to: ${newStatus}`);
}

// 3. Enjoy full type safety
updateStatus(Status.pending); // ✅ Works
updateStatus('invalid');      // ❌ TypeScript error
```

## 🗺️ Roadmap

<details>
<summary><strong>📋 Planned Features</strong></summary>

### Phase 1 - Core Utilities (In Progress)
- [x] **Type Utilities** - `EnumLike`, `TypeFrom`
- [ ] **Array Utilities** - `unique`, `chunk`, `flatten`
- [ ] **Object Utilities** - `pick`, `omit`, `deepMerge`

### Phase 2 - Advanced Features
- [ ] **String Utilities** - `camelCase`, `kebabCase`, `capitalize`
- [ ] **Validation Utilities** - Type guards, runtime validators
- [ ] **Async Utilities** - `retry`, `timeout`, `debounce`

### Phase 3 - Performance & DX
- [ ] **Performance Utilities** - Memoization, caching
- [ ] **Developer Tools** - Debug helpers, type introspection
- [ ] **Documentation** - Interactive examples, API playground

</details>

## 🤝 Contributing

<details>
<summary><strong>How to Contribute</strong></summary>

We welcome contributions! Here's how you can help:

1. **� Report Issues** - Found a bug? [Open an issue](../../issues)
2. **💡 Suggest Features** - Have an idea? Let's discuss it!
3. **🔧 Submit PRs** - Ready to code? Fork and submit a pull request
4. **📖 Improve Docs** - Help make our documentation better

### Adding New Utilities

1. Create your utility in the appropriate directory
2. Add comprehensive tests
3. Update the README with examples
4. Ensure TypeScript types are exported

</details>

---

**Built with ❤️ using [Nx](https://nx.dev) and TypeScript**

📄 **License:** MIT | 🏠 **Repository:** [ts-utils](../../) | 📊 **Version:** 0.0.1

## Versioning and releasing

To version and release the library use

```
npx nx release
```

Pass `--dry-run` to see what would happen without actually releasing the library.

[Learn more about Nx release &raquo;](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Keep TypeScript project references up to date

Nx automatically updates TypeScript [project references](https://www.typescriptlang.org/docs/handbook/project-references.html) in `tsconfig.json` files to ensure they remain accurate based on your project dependencies (`import` or `require` statements). This sync is automatically done when running tasks such as `build` or `typecheck`, which require updated references to function correctly.

To manually trigger the process to sync the project graph dependencies information to the TypeScript project references, run the following command:

```sh
npx nx sync
```

You can enforce that the TypeScript project references are always in the correct state when running in CI by adding a step to your CI job configuration that runs the following command:

```sh
npx nx sync:check
```

[Learn more about nx sync](https://nx.dev/reference/nx-commands#sync)

## Set up CI!

### Step 1

To connect to Nx Cloud, run the following command:

```sh
npx nx connect
```

Connecting to Nx Cloud ensures a [fast and scalable CI](https://nx.dev/ci/intro/why-nx-cloud?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) pipeline. It includes features such as:

- [Remote caching](https://nx.dev/ci/features/remote-cache?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task distribution across multiple machines](https://nx.dev/ci/features/distribute-task-execution?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Automated e2e test splitting](https://nx.dev/ci/features/split-e2e-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task flakiness detection and rerunning](https://nx.dev/ci/features/flaky-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### Step 2

Use the following command to configure a CI workflow for your workspace:

```sh
npx nx g ci-workflow
```

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/nx-api/js?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
