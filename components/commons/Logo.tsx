import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

function Logo({ isMobile }: { isMobile?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      {!isMobile ? (
        <ShoppingBag className="stroke h-8 w-8 stroke-indigo-500 stroke-[1.5]" />
      ) : null}
      <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-2xl font-bold leading-tight tracking-tighter text-transparent">
        Sol Marketplace
      </p>
    </Link>
  );
}

export default Logo;
