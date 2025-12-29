import { describe, it, expect } from "vitest";
import { MetaTag } from "../../src/index.js";

// Vitest automatically provides JSDOM when using --environment jsdom

describe("seo4spa MetaTag tests", () => {

    it("creates an OG title tag", () => {
        MetaTag.Property({
            prop: "title",
            content: "OG Test Title"
        });

        const tag = document.querySelector('meta[property="og:title"]');
        expect(tag).not.toBeNull();
        expect(tag.getAttribute("content")).toBe("OG Test Title");
    });

    it("creates an OG image tag", () => {
        MetaTag.Property({
            prop: "image",
            content: "https://example.com/test.png"
        });

        const tag = document.querySelector('meta[property="og:image"]');
        expect(tag).not.toBeNull();
        expect(tag.getAttribute("content")).toBe("https://example.com/test.png");
    });

    it("creates a description meta tag", () => {
        MetaTag.Name({
            name: "description",
            content: "Test description"
        });

        const tag = document.querySelector('meta[name="description"]');
        expect(tag).not.toBeNull();
        expect(tag.getAttribute("content")).toBe("Test description");
    });

    it("creates a keywords meta tag", () => {
        MetaTag.Name({
            name: "keywords",
            content: "seo, spa, test"
        });

        const tag = document.querySelector('meta[name="keywords"]');
        expect(tag).not.toBeNull();
        expect(tag.getAttribute("content")).toBe("seo, spa, test");
    });

});
