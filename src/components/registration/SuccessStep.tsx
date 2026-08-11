export function SuccessStep() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center px-6">
      {/* Success Icon */}
      <span className="animate-pop flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#e2b93b] bg-[#e2b93b]/15">
        <svg
          viewBox="0 0 40 40"
          className="h-10 w-10"
          aria-hidden="true"
        >
          <path
            d="M10 21l7 7 14-16"
            fill="none"
            stroke="#e2b93b"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="40"
            strokeDashoffset="40"
            style={{
              animation:
                "draw-check 0.6s ease-out 0.25s forwards",
            }}
          />
        </svg>
      </span>

      {/* Title */}
      <h1 className="font-display mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl">
        Registration Successful
      </h1>

      {/* Message */}
      <p className="mt-2 text-sm text-white/70">
        Thank you for registering for ONAM 2K26.
      </p>

      {/* WhatsApp */}
      <a
        href="https://chat.whatsapp.com/InoOsDaLTThLm71VXgmB1E"
        target="_blank"
        rel="noopener noreferrer"
        className="font-ui mt-7 rounded-full bg-[#e2b93b] px-8 py-3.5 text-xs font-bold tracking-[0.18em] text-[#1a1408] uppercase transition-all hover:brightness-110 active:scale-[0.98]"
      >
        Join WhatsApp Group
      </a>
    </div>
  );
}