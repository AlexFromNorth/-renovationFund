import { ButtonRed } from "@/shared/ui/components/Button";

interface Props {
  on3DTour?: string;
}

export const FlatActions = ({ on3DTour }: Props) => (
  <div className="mt-4 flex flex-col gap-2">
    {on3DTour && (
      <ButtonRed>
        <a href={on3DTour} target="_blank">
          3D тур 360
        </a>
      </ButtonRed>
    )}
    <ButtonRed>
      <span>Выбрать условия по ипотеке</span>
    </ButtonRed>
    <ButtonRed>
      <span>Забронировано</span>
    </ButtonRed>
  </div>
);
