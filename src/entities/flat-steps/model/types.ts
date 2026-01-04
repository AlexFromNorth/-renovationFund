export interface MortgageStep {
  id: number;
  title: string;
  comment?: string;
}

export interface BankLink {
  name: string;
  url: string;
  logo: string;
}

export interface flatStepsProps {
  steps: MortgageStep[];
  banks: BankLink[];
  moreLink: string;
}
