declare module 'cloudflare:workers' {
  export const env: { [key: string]: string | undefined };
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

