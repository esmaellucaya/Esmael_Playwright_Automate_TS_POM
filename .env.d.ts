declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    API_KEY: string;
    BASE_URL: string;
    NODE_ENV: 'development' | 'production' | 'test';
  }
}