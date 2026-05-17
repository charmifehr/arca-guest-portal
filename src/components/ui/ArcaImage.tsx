"use client";

import Image from "next/image";
import { useState } from "react";

interface ArcaImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function ArcaImage({
  src,
  alt,
  fill = true,
  className = "object-cover",
  priority = false,
  sizes = "100vw",
}: ArcaImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`${fill ? "absolute inset-0" : ""} bg-gradient-to-br from-ocean-dark via-ocean to-terracotta/40 ${className}`}
        aria-hidden
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      className={className}
      sizes={sizes}
      onError={() => setFailed(true)}
    />
  );
}
