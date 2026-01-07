export interface Bank {
  name: string;
  logo: string;
  url: string;
}

export interface MortgageCardProps {
  banks: Bank[];
  title?: string;
  className?: string;
  disclaimer?: string;
}