/// <reference types="vite/client" />
/// <reference types="@welldone-software/why-did-you-render" />

interface ImportMetaEnv {
  readonly VITE_MAPBOX_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
