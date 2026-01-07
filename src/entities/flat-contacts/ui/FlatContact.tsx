import Link from "next/link";
import { FlatContactProps } from "../model/types";

export const FlatContact = ({ text, phone }: FlatContactProps) => {
  return (
    <div className="py-[100px] bg-white">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-center">{text}</h2>
        <Link
          href={`tel:${phone.replace(/\s|\(|\)/g, "")}`}
          className="text-[var(--secondary_red)] font-semibold transition-colors !text-[36px]"
        >
          {phone}
        </Link>
      </div>
    </div>
  );
};
