interface Link {
  label: string;
  to: string;
}

export interface IFooter {
  title: string;
  mobileOnly?: boolean;
  links: Link[];
}
