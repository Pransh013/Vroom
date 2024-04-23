import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center fixed z-50 w-full bg-foreground px-6 lg:px-10 h-16 sm:h-20">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={"/icons/logo.svg"}
          width={30}
          height={30}
          alt="logo"
          className="max-sm:size-10"
        />
        <p className="text-lg text-secondary font-bold uppercase max-sm:hidden">
          Vroom
        </p>
      </Link>
      <div className="flex justify-between items-center gap-5">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
