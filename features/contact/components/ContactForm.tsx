import { Container, Heading, Section } from "@/components/common";

export default function ContactForm() {
  return (
    <Section background="stone">
      <Container>
        <Heading
          eyebrow="Send Message"
          title={
            <>
              We'd Love
              <br />
              To Hear From You.
            </>
          }
          description="Have a question, partnership opportunity, or business inquiry? Fill out the form below and we'll get back to you."
        />

        <form
          id="contact-form"
          className="mx-auto mt-20 max-w-3xl rounded-[36px] border border-neutral-200 bg-white p-10 shadow-sm"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <label className="mb-3 block text-sm font-medium text-neutral-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="h-14 w-full rounded-2xl border border-neutral-300 px-5 outline-none transition focus:border-black"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm font-medium text-neutral-700">
                Email
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="h-14 w-full rounded-2xl border border-neutral-300 px-5 outline-none transition focus:border-black"
              />
            </div>
          </div>

          <div className="mt-8">
            <label className="mb-3 block text-sm font-medium text-neutral-700">
              Subject
            </label>

            <input
              type="text"
              placeholder="Business Inquiry"
              className="h-14 w-full rounded-2xl border border-neutral-300 px-5 outline-none transition focus:border-black"
            />
          </div>

          <div className="mt-8">
            <label className="mb-3 block text-sm font-medium text-neutral-700">
              Message
            </label>

            <textarea
              rows={7}
              placeholder="Write your message..."
              className="w-full rounded-2xl border border-neutral-300 px-5 py-4 outline-none transition focus:border-black"
            />
          </div>

          <button
            type="submit"
            className="mt-10 inline-flex h-14 items-center rounded-full bg-black px-8 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Send Message
          </button>
        </form>
      </Container>
    </Section>
  );
}