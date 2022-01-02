import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: Record<string, string>;
  }
}
