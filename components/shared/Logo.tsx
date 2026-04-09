import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={`font-inter font-medium text-xl leading-[150%] ${className}`}
    >
      <h1>Flow Edit</h1>
    </Link>
  );
};

export default Logo;
