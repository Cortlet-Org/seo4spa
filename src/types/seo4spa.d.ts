export interface PropertyOptions {
    prop: string;
    content?: string;
}

export interface NameOptions {
    name: string;
    content?: string;
}

export declare class MetaTag {
    /**
     * Create or update a meta tag using a "property"
     * Example: <meta property="og:title" content="Hello" />
     */
    static Property(options: PropertyOptions): void;

    /**
     * Create or update a meta tag using "name"
     * Example: <meta name="description" content="Hello" />
     */
    static Name(options: NameOptions): void;
}
