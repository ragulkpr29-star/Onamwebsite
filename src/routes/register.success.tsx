import { createFileRoute, Link } from "@tanstack/react-router";
import registerBg from "@/assets/register-bg.png";
import { SuccessStep } from "@/components/registration/SuccessStep";
import { STEP_ORDER, ProgressIndicator } from "@/components/registration/ProgressIndicator";

export const Route = createFileRoute("/register/success")({
  component: SuccessPage,
});

function SuccessPage() {
  const steps = STEP_ORDER.filter((id) => id !== "category"); // Simplify step indicator
  const currentIndex = steps.indexOf("success");

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-[#0b0f0c]">
      <img
        src={registerBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-45 blur-[2px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_10%,rgba(6,20,12,0.55),rgba(4,8,6,0.94))]"
      />

      <div className="relative z-10 flex h-full flex-col">
        <header className="flex items-center justify-between gap-4 px-5 py-4 md:px-10">
          <Link
            to="/"
            className="font-display text-base font-black tracking-tight text-white md:text-lg"
          >
            ONAM <span className="text-[#e2b93b]">2K26</span>
          </Link>
          <ProgressIndicator steps={steps} current={currentIndex} />
        </header>

        <div className="relative flex-1 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden px-5 pb-6 md:px-10">
            <div className="mx-auto h-full w-full max-w-3xl">
              <SuccessStep />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
