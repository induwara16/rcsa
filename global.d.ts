declare module "*.md" {
  const attributes: unknown;
  const html: string;
  const raw: string;
  export { attributes, html, raw };
  export default html;
}

declare module "*.mdx" {
  const attributes: unknown;
  const html: string;
  const raw: string;
  export { attributes, html, raw };
  export default html;
}

interface Banner1Attributes {
  title: string;
  subtitle: string;
  background: string;
  image: string;
  show: boolean;
  text: string;
  button: {
    text: string;
    link: string;
    newtab: boolean;
  };
}

interface Banner2Attributes {
  text: string;
  background: string;
  show: boolean;
  buttons: {
    button1: {
      show: boolean;
      text: string;
      link: string;
      newtab: boolean;
    };
    button2: {
      show: boolean;
      text: string;
      link: string;
      newtab: boolean;
    };
  };
}
