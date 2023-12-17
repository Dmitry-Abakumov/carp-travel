import css from "./Conatiner.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  const finalClassName = className ? `pl-5 pr-5 ${className}` : `pl-5 pr-5`;

  return <div className={finalClassName}>{children}</div>;
};

export default Container;
