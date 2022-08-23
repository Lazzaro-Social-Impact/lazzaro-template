/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENV: 'development' | 'production' | 'staging';
  readonly VITE_MAPBOX_TOKEN: string;
  readonly VITE_GOOGLE_MAP_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
