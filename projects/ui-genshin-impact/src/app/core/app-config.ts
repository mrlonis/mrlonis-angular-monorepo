export interface AppConfig {
  apiUrl: string;
}

console.log(window);
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
export const config: AppConfig = (window as any).config as AppConfig;
