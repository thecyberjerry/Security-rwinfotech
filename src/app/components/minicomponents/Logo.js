import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Logo({ logodata }) {
  return (
    <Link href={logodata?.url}>
      <div className="logo">
        {logodata && (
          <>
            <Image
              src={logodata?.logoImg?.src && logodata?.logoImg?.src}
              width={100}
              height={100}
              alt={logodata?.logoImg?.alt && logodata?.logoImg?.alt}
            />
            <h6>{logodata?.title}</h6>
          </>
        )}
      </div>
    </Link>
  );
}
