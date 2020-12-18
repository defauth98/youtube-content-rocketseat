import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex justify-center md:justify-betwen py-2 md:py-4 items-center">
      <Image src="/img/logo.svg" alt="logo" width={150} height={33} />

      <nav className="hidden md:block space-x-8">
        <a className="tracking-wide hover:text-gray:300" href="/next">
          Next.js
        </a>
        <a>Tailwind</a>
        <a>Framer Motion</a>
      </nav>
    </header>
  );
};

export default Header;
