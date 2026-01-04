export interface BankLink {
  name: string;
  url: string;
  logo: string;
}

export interface FlatTermsProps {
  title: string;
  description: string;
  image?: string;
  banks: BankLink[];
}
