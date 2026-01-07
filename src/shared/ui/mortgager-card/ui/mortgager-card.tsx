import Image from "next/image";
import { Bank } from "../model/types";
import { ButtonRed } from "../../components/Button";

interface MortgageCardProps {
  banks: Bank[];
  title?: string;
  className?: string;
  disclaimer?: string;
}

export const MortgageCard = ({
  banks,
  title = "Рассчитать ипотеку",
  className = "",
  disclaimer = "Сервис расчета ипотечных продуктов предоставляется на платформах банков-партнеров. Результаты расчетов не являются офертой и носят информационный характер.",
}: MortgageCardProps) => {
  return (
    <div className={`space-y-2 bg-red-600 text-white rounded-md p-12 w-[400px] ${className}`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="">
        {banks.map((bank) => (
          <ButtonRed className="w-[100%] m-1">
            <a key={bank.name} href={bank.url} target="_blank" className="block w-[191px] h-12 relative m-auto">
              <Image src={bank.logo} alt={bank.name} fill className="object-contain" />
            </a>
          </ButtonRed>
        ))}
      </div>
      <p className="text-sm">{disclaimer}</p>
    </div>
  );
};
