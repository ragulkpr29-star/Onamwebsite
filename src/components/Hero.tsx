import heroBoat from "@/assets/hero-boat.jpg";
import kecLogo from "@/assets/kec-logo.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[100dvh] overflow-hidden bg-[#f7f3e8]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroBoat}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Soft background overlay */}
      <div className="absolute inset-0 -z-10 bg-[#f7f3e8]/[0.38]" />

      {/* Left-to-right readability gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f7f3e8]/95 via-[#f7f3e8]/80 to-[#f7f3e8]/60" />

      {/* Main Hero Content */}
      <div className="relative mx-auto flex min-h-[100dvh] max-w-7xl items-center px-6 py-16 md:px-10 lg:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

          {/* Left Content */}
          <div className="max-w-2xl">

            {/* KEC Logo + Cultural Club */}
            <div className="animate-rise mb-8 flex items-center gap-4">
              <div className="flex h-[68px] items-center justify-center rounded-xl bg-card px-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-[#e5dfcf]">
                <img
                  src={kecLogo}
                  alt="Kongu Engineering College"
                  className="h-11 w-auto object-contain"
                  width={140}
                  height={44}
                />
              </div>

              <div className="border-l border-[#c9b98a] pl-4">
                <p className="font-ui text-[10px] font-bold tracking-[0.22em] text-[#075b42] uppercase">
                  Cultural Club
                </p>

                <p className="font-ui mt-1 text-[9px] font-semibold tracking-[0.28em] text-[#c69214] uppercase">
                  Presents
                </p>
              </div>
            </div>

            {/* Subtitle */}
            <p
              className="font-display animate-rise text-lg font-medium text-[#5f735f] italic md:text-xl"
              style={{ animationDelay: "80ms" }}
            >
              Celebrate the spirit of
            </p>

            {/* ONAM 2026 */}
            <h1
              className="font-display animate-rise-blur mt-2 text-6xl leading-[0.95] font-black tracking-[-0.045em] text-[#075b42] sm:text-7xl md:text-8xl lg:text-[7.2rem]"
              style={{ animationDelay: "160ms" }}
            >
              ONAM

              <span className="relative ml-3 inline-block text-[#075b42]">
                2026

                <span
                  aria-hidden="true"
                  className="absolute -top-2 -right-5 text-3xl text-[#d4a72c] md:-top-3 md:-right-7 md:text-4xl"
                >
                  ✦
                </span>
              </span>
            </h1>

            {/* Tagline */}
            <p
              className="font-ui animate-rise mt-5 text-sm font-bold tracking-[0.18em] text-[#c99419] uppercase md:text-base"
              style={{ animationDelay: "260ms" }}
            >
              Tradition. Togetherness. Triumph.
            </p>
          </div>

          {/* Deadline */}
          <div className="animate-slide-right flex justify-center lg:justify-end">
            <div className="text-center lg:text-right">
              <p className="font-ui text-[11px] font-bold tracking-[0.2em] text-[#075b42] uppercase">
                Deadline
              </p>

              <p className="font-ui mt-2 text-lg font-bold text-red-600 md:text-xl">
                23 August 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-20 bg-gradient-to-t from-[#f7f3e8] to-transparent" />

      {/* Decorative Star */}
      <div
        aria-hidden="true"
        className="animate-pop pointer-events-none absolute bottom-8 left-8 hidden text-3xl text-[#c99419]/70 md:block"
      >
        ✦
      </div>
    </section>
  );
}