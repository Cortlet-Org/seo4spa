import { MetaTag } from "../../src/index.js";

// Test Property() method
MetaTag.Property({
    prop: "title",
    content: "Test Title"
});

MetaTag.Property({
    prop: "image",
    content: "https://example.com/test.png"
});

// Test Name() method
MetaTag.Name({
    name: "description",
    content: "This is a test description"
});

MetaTag.Name({
    name: "keywords",
    content: "seo, spa, test"
});

// Log results
console.log("OG Title:", document.querySelector('meta[property="og:title"]')?.content);
console.log("OG Image:", document.querySelector('meta[property="og:image"]')?.content);
console.log("Description:", document.querySelector('meta[name="description"]')?.content);
console.log("Keywords:", document.querySelector('meta[name="keywords"]')?.content);

// Visual confirmation
document.body.innerHTML = `
  <h1>seo4spa Test</h1>
  <p>Open DevTools → Elements → Head → Check meta tags</p>
`;
