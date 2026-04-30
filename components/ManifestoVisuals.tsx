import Image from "next/image";
import { PUBLIC_IMAGES } from "@/lib/site-media";

const frame =
  "relative overflow-hidden rounded-xl border border-neon/20 bg-mist/30 shadow-[0_0_0_1px_rgba(57,255,136,0.06)_inset]";

export function ManifestoVisuals() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <figure className="space-y-3">
        <figcaption className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-neon">
          Nano Banana
        </figcaption>
        <div className={`${frame} aspect-[4/3]`}>
          <Image
            src={PUBLIC_IMAGES.nanoBanana.src}
            alt={PUBLIC_IMAGES.nanoBanana.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      </figure>

      <figure className="space-y-3">
        <figcaption className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-neon">
          Higgsfield
        </figcaption>
        <div className={`${frame} aspect-[4/3]`}>
          <Image
            src={PUBLIC_IMAGES.higgsfield.src}
            alt={PUBLIC_IMAGES.higgsfield.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      </figure>
    </div>
  );
}
