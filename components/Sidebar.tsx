"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 flex flex-col justify-between bg-foreground h-screen w-fit top-0 p-6 pt-28 text-white max-sm:hidden lg:w-64">
      <section className="flex flex-col flex-1 gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(link.route);

          return (
            <Link
              href={link.route}
              key={link.name}
              className={cn(
                "flex items-center gap-4 p-4 rounded-lg justify-start",
                {
                  "bg-primary": isActive,
                }
              )}
            >
              <Image src={link.imgUrl} alt={link.name} width={24} height={24} />
              <p className="text-lg font-semibold max-lg:hidden">{link.name}</p>
            </Link>
          );
        })}
      </section>
    </section>
  );
};

export default Sidebar;
