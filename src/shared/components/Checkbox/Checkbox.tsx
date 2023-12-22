import { forwardRef } from "react";
import { nanoid } from "nanoid";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  isChecked: boolean;
  label?: string;
};

const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ isChecked, label, ...inputAttributes }, ref) => {
    const finalSpanClassName = isChecked
      ? "block bg-primary-text-color w-4 h-4"
      : "block bg-input-bg-color w-4 h-4";

    const id = nanoid();
    return (
      <div className="flex items-center gap-2">
        <label
          className="flex shrink-0 items-center justify-center border border-primary-text-color w-6 h-6"
          htmlFor={id}
        >
          <span className={finalSpanClassName} />
        </label>
        {label && (
          <label className="font-extralight text-xs/6" htmlFor={id}>
            {label}
          </label>
        )}

        <input
          className="hidden"
          type="checkbox"
          {...inputAttributes}
          ref={ref}
          id={id}
        />
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
