/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REACT_APP_MAPBOX_TOKEN: string;
  readonly REACT_APP_STRIPE_PUBLISH_KEY: string;
  readonly REACT_APP_PRE_URL: string;
  readonly REACT_APP_PRO_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
