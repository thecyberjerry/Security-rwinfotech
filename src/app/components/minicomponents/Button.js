import Link from "next/link";
import React from "react";

export default function Button({ btn }) {
  return (
    <>
      {btn?.url && btn?.title && (
        <Link href={btn?.url}>
          <button
            className={btn?.blackBackground ? "btn__black" : "btn__default"}
          >
            {btn?.title}
          </button>
        </Link>
      )}
    </>
  );
}
