export type Locale = 'ca-ES' | 'en-US' | 'en-GB' | 'de-DE' | 'es-AR' | 'es-CO' | 'es-EC' | 'es-ES' | 'es-MX' | 'es-PE' | 'es-UY' | 'eu-ES' | 'gl-ES' | 'pt-BR';
declare const SUPPORTED_LANGUAGES: readonly ["en", "es", "pt", "de"];
export type Language = (typeof SUPPORTED_LANGUAGES)[number];
export declare const localeToLanguage: (locale: Locale) => Language;
export {};
