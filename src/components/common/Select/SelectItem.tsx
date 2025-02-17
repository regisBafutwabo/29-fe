import { Label } from "../Label/Label";

type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

type SelectItemProps = {
  option: Option;
  onClick: (option: Option) => void;
  selected: boolean;
};

export const SelectItem = ({ option, onClick, selected }: SelectItemProps) => {
  return (
    <li
      key={option.value}
      className={`
                  p-[6px] cursor-pointer
                  ${option.disabled ? "cursor-not-allowed " : ""} ${
                    selected ? "bg-line" : ""
                  }
                `}
      onClick={() => onClick(option)}
      onKeyUp={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick(option);
        }
      }}
    >
      <Label
        text={option.label}
        className={`${option.disabled ? "text-soldout" : ""} `}
      />
    </li>
  );
};
