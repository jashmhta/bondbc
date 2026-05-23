import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[var(--bg)] py-32">
      <div className="container-wide max-w-2xl text-center">
        <p className="num-display text-[clamp(96px,18vw,240px)] text-[var(--accent)] leading-none">
          404
        </p>
        <h1 className="mt-4 text-[clamp(28px,4vw,48px)] tracking-[-0.025em] leading-[1.1]">
          This page <em>matured.</em>
        </h1>
        <p className="mt-5 text-[16px] text-[var(--ink-muted)] max-w-md mx-auto">
          Or it never existed. Either way, you've found the end of the road. Let's get you
          back to something productive.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/">
            <Button variant="primary" size="lg">
              Back to home
            </Button>
          </Link>
          <Link href="https://bondbc.manus.space/bonds">
            <Button variant="outline" size="lg">
              Browse bonds
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
