import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-reconciliation.jpg";
import logoAsset from "@/assets/revvigil-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RevVigil — Detect. Reconcile. Reclaim." },
      {
        name: "description",
        content:
          "RevVigil reconciles critical data across your systems so you can detect revenue leaks, reconcile discrepancies, and reclaim earned revenue.",
      },
      { property: "og:title", content: "RevVigil — Detect. Reconcile. Reclaim." },
      {
        property: "og:description",
        content:
          "RevVigil reconciles critical data across your systems so you can detect revenue leaks, reconcile discrepancies, and reclaim earned revenue.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-brand/10">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full h-[100px] content-center bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src={logoAsset.url}
              alt="RevVigil"
              className="h-8 w-auto"
            />
          </a>
          <div className="flex items-center gap-6">
            <a
              href="#platform"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Platform
            </a>
            <a
              href="#solutions"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Solutions
            </a>
            <button className="h-9 px-4 bg-foreground text-background text-sm font-medium rounded-md ring-1 ring-foreground hover:bg-foreground/90 transition-transform">
              Book a Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-[620px] lg:min-h-[760px] flex items-center justify-center overflow-hidden">
        {/* Full-width background image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroImage}
            alt="RevVigil reconciliation dashboard showing CRM, ERP, and Billing system data alignment"
            width={1200}
            height={675}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70"></div>
        </div>

        {/* Radar ping overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="w-[30rem] h-[30rem] border border-brand/40 rounded-full animate-radar-ping opacity-25"></div>
          <div className="w-[22rem] h-[22rem] border border-brand/30 rounded-full absolute animate-radar-ping-slow opacity-25"></div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center flex flex-col items-center">
          <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-white/90 mb-6 drop-shadow">
            Detect. Reconcile. Reclaim.
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white mb-8 text-balance max-w-[30ch] drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            When your systems disagree, which data do you trust?
          </h1>
          <p className="text-lg text-white/90 mb-12 text-pretty max-w-[56ch] drop-shadow-md">
            Revvigil reconciles critical data across your systems so you can see what’s consistent,
            what’s missing, and what needs attention.
          </p>
          <div className="flex items-center gap-4">
            <button className="h-10 px-6 bg-brand text-brand-foreground text-sm font-medium rounded-md ring-1 ring-brand hover:brightness-110 transition-transform">
              Find Your Revenue Gaps
            </button>
          </div>
        </div>

        {/* Bottom caption */}
        <div className="absolute bottom-8 left-0 right-0 z-10 text-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white drop-shadow">
            Don’t Leave Earned Revenue on the Table
          </span>
        </div>
      </section>

      {/* Problem Section */}
      <section id="platform" className="py-24 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-medium leading-tight text-foreground mb-6 text-balance max-w-[40ch]">
                Your business runs on data. You should be able to trust it.
              </h2>
              <p className="text-muted-foreground max-w-[48ch] text-pretty">
                Fragmented architecture leads to hidden leakages that compounds monthly. Manual reviews
                are no longer sufficient for the speed of modern subscription billing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              <div className="flex flex-col gap-3">
                <div className="size-8 rounded-lg bg-secondary ring-1 ring-border flex items-center justify-center">
                  <span className="text-brand font-mono text-xs">01</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground">Uncaptured Usages</h3>
                <p className="text-sm text-muted-foreground">
                  Consumption data that never makes it from your product to your billing engine.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="size-8 rounded-lg bg-secondary ring-1 ring-border flex items-center justify-center">
                  <span className="text-brand font-mono text-xs">02</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground">Pricing Drifts</h3>
                <p className="text-sm text-muted-foreground">
                  Inconsistencies between signed contracts and the SKU values active in production.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="size-8 rounded-lg bg-secondary ring-1 ring-border flex items-center justify-center">
                  <span className="text-brand font-mono text-xs">03</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground">Unexpired Discounts</h3>
                <p className="text-sm text-muted-foreground">
                  Promotional periods that fail to sunset, draining margin month over month.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="size-8 rounded-lg bg-secondary ring-1 ring-border flex items-center justify-center">
                  <span className="text-brand font-mono text-xs">04</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground">Manual Fatigue</h3>
                <p className="text-sm text-muted-foreground">
                  Still relying on spreadsheets and manual fixes? That's where errors hide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Logic Section */}
      <section id="solutions" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-foreground rounded-2xl p-12 lg:p-20 text-background relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-medium leading-tight mb-6 text-balance max-w-[35ch]">
                One view of what your systems say—and where they disagree.
              </h2>
              <p className="text-background/60 text-lg mb-10 text-pretty">
                Automated reconciliation that surfaces the 4-10% of revenue typically lost to
                operational complexity.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-medium">
                <div className="size-1.5 rounded-full bg-brand"></div>
                Active Monitoring
              </div>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-brand/10 to-transparent hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Statistic/Quote */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-snug mb-8">
              "Subscription businesses leave <span className="text-brand">4-10% of earned revenue</span>{" "}
              on the table, due to operational complexities."
            </blockquote>
            <div className="h-px w-12 bg-border mx-auto mb-6"></div>
            <cite className="not-italic text-sm font-mono text-muted-foreground uppercase tracking-widest">
              Industry Benchmark Analysis
            </cite>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-foreground mb-8">Stop the leakage today.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="h-10 px-8 bg-foreground text-background text-sm font-medium rounded-md ring-1 ring-foreground hover:bg-foreground/90 transition-transform">
              Find Your Revenue Gaps
            </button>
            <button className="h-10 px-8 bg-transparent text-muted-foreground text-sm font-medium rounded-md ring-1 ring-border hover:bg-secondary transition-transform">
              Read Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-50">
            <span className="text-sm font-semibold tracking-tight text-foreground">RevVigil</span>
          </div>
          <div className="flex gap-8">
            <span className="text-xs text-muted-foreground">© 2026 RevVigil Solutions</span>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-brand transition-colors"
            >
              Security
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-brand transition-colors"
            >
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

