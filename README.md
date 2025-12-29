# seo4spa - Simple SEO utilites for Single Page Applications
![license](https://img.shields.io/badge/license-Apache%202.0-blue)
![npm version](https://img.shields.io/npm/v/seo4spa)
![npm downloads](https://img.shields.io/npm/dt/seo4spa)
![size](https://img.shields.io/bundlephobia/min/seo4spa)
![types](https://img.shields.io/badge/types-included-brightgreen)
![stability](https://img.shields.io/badge/stability-stable-brightgreen)

**seo4spa** is a lightweight JavaScript library that provides 1 simple utility for SPA (Single Page Applications) SEO optimization.

If you are building an SPA and want to improve SEO, this library is for you!

## Features
- MetaTag.Property(): Easily set OpenGraph, and name="" using this function.
- Lightweight: Only 1 utility function with zero dependencies.
- TypeScript Types: Written primarily in JavaScript with TypeScript type definitions included.
- Easy to Use: Simple API for quick integration into your SPA projects.
- Open Source: Licensed under Apache 2.0, free to use and modify.

## Installation
Before installing, make sure you have the latest Node.js version installed.
You can install seo4spa via npm, yarn, pnpm or bun.

NPM:
```bash
npm install seo4spa
```

Yarn:
```bash
yarn add seo4spa
```
PNPM:
```bash
pnpm add seo4spa
```
Bun:
```bash
bun add seo4spa
```

## Usage
You can use this demo code in your SPA:
```javascript
import { MetaTag } from "../../src/index.js";

MetaTag.Property({
    prop: "title",
    content: "Test Title"
});

MetaTag.Property({
    prop: "image",
    content: "https://example.com/test.png"
});

MetaTag.Name({
    name: "description",
    content: "This is a test description"
});

MetaTag.Name({
    name: "keywords",
    content: "seo, spa, test"
});
```

## API Reference
### MetaTag.Property(options)
Sets a meta tag with the specified property and content.
- `options`: An object containing the following properties:
  - `prop` (string): The property name (e.g., "title", "image").
  - `content` (string): The content for the meta tag.
### MetaTag.Name(options)
Sets a meta tag with the specified name and content.
- `options`: An object containing the following properties:
- `name` (string): The name of the meta tag (e.g., "description", "keywords").
  - `content` (string): The content for the meta tag.

## Contributing
See the [CONTRIBUTING](CONTRIBUTING.MD) file for guidelines on how to contribute to this project.

## License
This product is licensed under the Apache 2.0 License. See the [LICENSE](LICENSE) file for details.

## Code of Conduct
This project adheres to the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to abide by its terms.

## Author
Developed and maintained by Cortlet.
Check out our website: [https://cortlet.com](https://cortlet.com)
