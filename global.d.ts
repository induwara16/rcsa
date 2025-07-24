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
      text: string;
      link: string;
      newtab: boolean;
    };
    button2: {
      text: string;
      link: string;
      newtab: boolean;
    };
  };
}

interface SocialAttributes {
  facebook: string;
  x: string;
  youtube: string;
  instagram: string;
  whatsapp: string;
}

interface ImageInfo {
  src: string;
  width: number;
  height: number;
}

interface BoardAttributes {
  year: number;
  group_pic: string | ImageInfo;
  board: {
    name: string;
    position: string;
    photo: string | ImageInfo;
  }[];
}

interface GalleryAttributes {
  piclist: {
    src: string | ImageInfo;
    title: string;
    home?: boolean;
  }[];
}

type ShortTextField = {
  type: "textedit";
  label: string;
  required?: boolean;
  placeholder?: string;
  regex?: string;
};

type LongTextField = {
  type: "textarea";
  label: string;
  required?: boolean;
  placeholder?: string;
  max_letters?: number;
};

type MCQField = {
  type: "mcq";
  label: string;
  required?: boolean;
  varient: "radio" | "checkbox" | "dropdown";
  options: string[];
};

type FormField = ShortTextField | LongTextField | MCQField;

interface FormAttributes {
  form_name: string;
  g_spreadsheet: string;
  fields: FormField[];
}

interface FormConfigAttributes {
  signup_form: string;
  service_acc_email: string;
  private_key: string;
}

interface ProjectAttributes {
  title: string;
  year: string;
  committee: {
    chairman: string;
    secretary: string;
    treasurer: string;
  };
  image: string | ImageInfo;
  gallery: (string | ImageInfo)[];
}
