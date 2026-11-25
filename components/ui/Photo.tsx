// Real photography served from the Unsplash CDN (Unsplash License: free for commercial use,
// no attribution required). The CDN resizes and converts to WebP/AVIF, so pages stay light.

type Props = {
  id: string; // e.g. "1581092334651-ddf26d9a09d0"
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** focal point for crops, e.g. "faces" or "entropy" */
  crop?: "faces" | "entropy" | "center";
};

const WIDTHS = [480, 768, 1080, 1440];

export const photoUrl = (id: string, w: number, crop = "entropy") =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&crop=${crop}&q=70&w=${w}`;

export default function Photo({ id, alt, className = "", sizes = "100vw", priority = false, crop = "entropy" }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photoUrl(id, 1080, crop)}
      srcSet={WIDTHS.map((w) => `${photoUrl(id, w, crop)} ${w}w`).join(", ")}
      sizes={sizes}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={className}
    />
  );
}
