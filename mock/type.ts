export interface MockParams {
  url: string;
  type: string;
  response(): Record<string, unknown>;
}
