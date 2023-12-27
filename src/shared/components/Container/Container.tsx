import css from "./Conatiner.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  const finalClassName = className
    ? `${css.container} ${className}`
    : css.container;

  return <div className={finalClassName}>{children}</div>;
};

export default Container;
