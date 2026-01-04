import Link from "next/link";
import { FlatContactProps } from "../model/types";

export const FlatContact = ({ text, phone }: FlatContactProps) => {
  return (
    <div className="py-[100px] bg-white">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-lg font-medium">{text}</h2>
        <Link
          href={`tel:${phone.replace(/\s|\(|\)/g, "")}`}
          className="text-red-600 font-semibold transition-colors"
        >
          {phone}
        </Link>
      </div>
    </div>
  );
};
