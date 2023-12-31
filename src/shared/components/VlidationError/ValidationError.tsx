import Image from "next/image";

type Props = {
  errorMessage: string;
  className?: string;
};

const ValidationError = ({ errorMessage, className }: Props) => {
  return (
    <div className={`flex justify-end items-center gap-1 ${className}`}>
      <Image
        alt="cross"
        src="/images/svg/shared/validation-error.svg"
        width="9"
        height="9"
      />
      <p className="text-error-color font-extralight text-xs/6 tracking-[0.2em]">
        {errorMessage}
      </p>
    </div>
  );
};

export default ValidationError;
