interface ManifestoCardProps {
  title: string;
  description: string;
}

export default function ManifestoCard({
  title,
  description,
}: ManifestoCardProps) {
  return (
    <article className="group rounded-[32px] border border-neutral-200 bg-white p-10 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100 text-xl font-bold">
        {title.charAt(0)}
      </div>

      <h3 className="mt-8 font-playfair text-3xl font-semibold text-neutral-900">
        {title}
      </h3>

      <p className="mt-6 leading-8 text-neutral-600">
        {description}
      </p>
    </article>
  );
}