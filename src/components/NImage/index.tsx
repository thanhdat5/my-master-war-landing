import React from 'react';

interface Props {
  src: string;
  width?: string;
  height?: string;
  className?: string;
  alt?: string;
}

function NImage({ src, width, height, className, alt }: Props) {
  const internal = src.indexOf('http') === -1;
  return (
    <img
      src={internal ? `${process.env.PUBLIC_URL}/media/images/${src}` : src}
      width={width}
      height={height}
      className={className}
      alt={alt}
    />
  );
}

export default NImage;
