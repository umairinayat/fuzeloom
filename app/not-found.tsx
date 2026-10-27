import { Button, Eyebrow, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <Section>
      <Eyebrow>404</Eyebrow>
      <h1 className="h-1 mt-4 text-indigo">This thread leads nowhere.</h1>
      <p className="mt-4 max-w-[52ch] text-[17px]">
        The page you asked for doesn&apos;t exist or was moved. Let&apos;s get
        you back to something useful.
      </p>
      <div className="mt-7 flex flex-wrap gap-4">
        <Button href="/" variant="secondary">
          Back home
        </Button>
        <Button href="/contact" variant="outline-dark">
          Contact us
        </Button>
      </div>
    </Section>
  );
}
