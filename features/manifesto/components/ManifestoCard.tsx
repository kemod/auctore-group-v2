interface ManifestoCardProps {
  title: string;
  description: string;
}

export default function ManifestoCard({
  title,
  description,
}: ManifestoCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[32px] border border-neutral-200 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:border-neutral-300 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
      {/* Background Glow */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-stone-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100 text-xl font-bold text-neutral-900 transition-all duration-500 group-hover:scale-110 group-hover:bg-black group-hover:text-white">
        {title.charAt(0)}
      </div>

      {/* Title */}
      <h3 className="relative mt-8 font-playfair text-3xl font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-black">
        {title}
      </h3>

      {/* Description */}
      <p className="relative mt-6 leading-8 text-neutral-600">
        {description}
      </p>

      {/* Bottom Line */}
      <div className="relative mt-8 h-px w-0 bg-black transition-all duration-500 group-hover:w-20" />
    </article>
  );
}