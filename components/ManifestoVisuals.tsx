import Image from "next/image";
import { MANIFESTO_IMAGES } from "@/lib/site-media";

const frame =
  "relative overflow-hidden rounded-xl border border-neon/20 bg-mist/30 shadow-[0_0_0_1px_rgba(57,255,136,0.06)_inset]";

export function ManifestoVisuals() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {MANIFESTO_IMAGES.map((item) => (
        <figure key={item.src} className="space-y-3">
          <figcaption className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-neon">
            {item.label}
          </figcaption>
          <div className={`${frame} aspect-[4/3]`}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </figure>
      ))}
    </div>
  );
}
