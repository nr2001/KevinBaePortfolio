"use client";

type Props = {
  src: string;
  className?: string;
  alt?: string;
};

export default function FadeInImage({ src, className, alt }: Props) {
  return (
    <img
      src={src}
      alt={alt || ""}
      loading="eager"
      className={className}
    />
  );
}
