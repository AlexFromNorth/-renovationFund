import { PrintButton } from "@/shared/ui/print-button";

interface FlatHeaderProps {
  title: string;
}

export const FlatHeader = ({ title }: FlatHeaderProps) => {
  return (
    <div className="flex justify-between items-start text-primary my-2">
      <h3 className="font-bold">{title}</h3>
      <PrintButton pdfUrl="/moskov_kvartal.pdf" fileName="plan.pdf" size="md" />
    </div>
  );
};
