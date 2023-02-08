/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REACT_APP_MAPBOX_TOKEN: string;
  readonly REACT_APP_STRIPE_PUBLISH_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
