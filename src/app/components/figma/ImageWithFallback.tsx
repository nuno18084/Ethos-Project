import { useState } from "react";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fetchPriority?: "high" | "low" | "auto";
  webpSrcSet?: string;
};

export function ImageWithFallback({
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  webpSrcSet,
  sizes,
  src,
  alt,
  style,
  className,
  ...rest
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);

  const imgProps = {
    src,
    alt,
    style,
    className,
    loading,
    decoding,
    fetchPriority,
    sizes,
    ...rest,
    onError: () => setDidError(true),
  };

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={ERROR_IMG_SRC}
            alt="Error loading image"
            {...rest}
            data-original-url={src}
          />
        </div>
      </div>
    );
  }

  if (webpSrcSet) {
    return (
      <picture className="block w-full h-full">
        <source srcSet={webpSrcSet} sizes={sizes} type="image/webp" />
        <img {...imgProps} className={className} />
      </picture>
    );
  }

  return <img {...imgProps} />;
}
