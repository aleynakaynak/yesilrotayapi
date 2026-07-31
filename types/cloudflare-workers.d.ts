declare module 'cloudflare:workers' {
  // runtime binding map — values can be strings or runtime bindings (DB, Fetcher, etc.)
  export const env: { [key: string]: any };
  const _default: typeof env;
  export default _default;
}

// Minimal declarations for Cloudflare-specific runtime types used in the project
interface Fetcher {
  fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
}

interface D1Database {
  prepare(query: string): {
    all(...args: any[]): Promise<any[]>;
    run(...args: any[]): Promise<any>;
    first(...args: any[]): Promise<any>;
  };
}

