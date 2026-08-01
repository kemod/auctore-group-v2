interface JourneyItemProps {
  year: string;
  title: string;
  description: string;
}

export default function JourneyItem({
  year,
  title,
  description,
}: JourneyItemProps) {
  return (
    <div className="relative flex gap-8">
      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white font-semibold">
        •
      </div>

      <div className="pb-2">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
          {year}
        </p>

        <h3 className="mt-3 font-playfair text-3xl font-semibold text-neutral-900">
          {title}
        </h3>

        <p className="mt-4 max-w-2xl leading-8 text-neutral-600">
          {description}
        </p>
      </div>
    </div>
  );
}