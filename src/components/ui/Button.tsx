type Props = {
  Input: string;
};

const Button = ({ Input }: Props) => {
  return (
    <button className={`bg-black  rounded-sm w-full h-11 cursor-pointer`}>
      <p className={`text-white text-base font-serif font-medium`}>{Input}</p>
    </button>
  );
};

export default Button;
