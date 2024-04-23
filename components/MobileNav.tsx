"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full max-w-64">
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            width={36}
            height={36}
            alt="hamburger"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-primary ">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <Image
              src={"/icons/logo.svg"}
              width={30}
              height={30}
              alt="logo"
              className="max-sm:size-10"
            />
            <p className="text-lg text-secondary font-bold uppercase">Vroom</p>
          </Link>
          <section className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-hidden">
            <SheetClose asChild>
              <section className="flex h-full flex-col pt-16 pl-4 gap-6 text-white">
                {sidebarLinks.map((link) => {
                  const isActive = pathname === link.route;

                  return (
                    <SheetClose asChild key={link.name}>
                      <Link
                        href={link.route}
                        className={cn(
                          "flex items-center gap-4 p-4 rounded-lg w-full max-w-60",
                          {
                            "bg-foreground": isActive,
                          }
                        )}
                      >
                        <Image
                          src={link.imgUrl}
                          alt={link.name}
                          width={20}
                          height={20}
                        />
                        <p className="font-semibold">{link.name}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </section>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
