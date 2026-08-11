import { Link } from "@tanstack/react-router";
import kecLogo from "@/assets/kec-logo.png.asset.json";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-[72px] border-b border-[#e5dfcf] bg-[#f7f3e8]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-[46px] items-center justify-center rounded-lg bg-card px-3 shadow-soft ring-1 ring-[#e5dfcf]">
            <img
              src={kecLogo.url}
              alt="Kongu Engineering College"
              className="h-7 w-auto object-contain"
              width={90}
              height={28}
            />
          </span>
          <span className="hidden sm:block">
            <span className="font-display block text-lg font-black tracking-tight text-primary">
              ONAM 2K26
            </span>
            <span className="font-ui block text-[9px] font-bold tracking-[0.22em] text-accent uppercase">
              Cultural Club
            </span>
          </span>
        </Link>

        <Link
          to="/register"
          className="font-ui rounded-full bg-primary px-5 py-2.5 text-[11px] font-bold tracking-[0.16em] text-primary-foreground uppercase shadow-soft transition-all hover:shadow-lift hover:brightness-110 active:scale-[0.98] md:px-6 md:text-xs"
        >
          Register
        </Link>
      </nav>
    </header>
  );
}
