// seo4spa v1 - MetaTag engine

export class MetaTag {

    static Property(options = {}) {
        const prop = options.prop;
        const value = options.content || "";

        if (!prop) return;

        // Look for <meta property="og:prop">
        let tag = document.querySelector(`meta[property="og:${prop}"]`);
        if (!tag) {
            tag = document.createElement("meta");
            tag.setAttribute("property", `og:${prop}`);
            document.head.appendChild(tag);
        }

        tag.setAttribute("content", value);
    }

    static Name(options = {}) {
        const name = options.name;
        const value = options.content || "";

        if (!name) return;

        // Look for <meta name="whatever">
        let tag = document.querySelector(`meta[name="${name}"]`);
        if (!tag) {
            tag = document.createElement("meta");
            tag.setAttribute("name", name);
            document.head.appendChild(tag);
        }

        tag.setAttribute("content", value);
    }
}
