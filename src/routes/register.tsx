import { useMemo, useState } from "react";
import {
  createFileRoute,
  Link,
  Navigate,
} from "@tanstack/react-router";

import registerBg from "@/assets/register-bg.png";

import { getEvent } from "@/data/events";

import {
  isValidRollNo,
  isValidEmail,
  isValidPhone,
  normalizeRollNo,
} from "@/lib/roll";

import {
  ProgressIndicator,
  STEP_ORDER,
  type StepId,
} from "@/components/registration/ProgressIndicator";

import { RulesStep } from "@/components/registration/RulesStep";
import { CategoryStep } from "@/components/registration/CategoryStep";
import { TeamStep } from "@/components/registration/TeamStep";
import { SuccessStep } from "@/components/registration/SuccessStep";

import type { MemberDraft } from "@/components/registration/MemberForm";

type Search = {
  event?: string | undefined;
};

export const Route = createFileRoute("/register")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    event:
      typeof search["event"] === "string"
        ? search["event"]
        : undefined,
  }),

  head: () => ({
    meta: [
      {
        title: "Register — ONAM 2K26 | Kongu Engineering College",
      },
      {
        name: "description",
        content:
          "Register your team for ONAM 2K26 at Kongu Engineering College — Pookkolam, Fashion Parade, Tug of War, Editing and Dual Dance.",
      },
      {
        property: "og:title",
        content: "Register — ONAM 2K26",
      },
      {
        property: "og:description",
        content:
          "Step-by-step team registration for ONAM 2K26 celebrations at KEC.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),

  component: RegisterPage,
});

const emptyMembers = (count: number): MemberDraft[] =>
  Array.from(
    { length: count },
    () => ({
      name: "",
      rollNo: "",
      email: "",
      phone: "",
    }),
  );

function RegisterPage() {
  const { event: presetEvent } = Route.useSearch();

  /*
   * We are NOT navigating to a separate success route.
   * The success screen is rendered inside this same page.
   */
  const validPreset =
    presetEvent && getEvent(presetEvent)
      ? presetEvent
      : null;

  const [step, setStep] = useState<StepId>("rules");

  const [direction, setDirection] =
    useState<1 | -1>(1);

  const [accepted, setAccepted] =
    useState(false);

  const [eventId, setEventId] =
    useState<string | null>(validPreset);

  const [category, setCategory] =
    useState<string | null>(null);

  const [members, setMembers] =
    useState<MemberDraft[]>(
      emptyMembers(
        getEvent(validPreset ?? "")?.maxMembers ?? 1,
      ),
    );

  const [error, setError] =
    useState<string | null>(null);

  const [submitting, setSubmitting] =
    useState(false);

  const [registrationComplete, setRegistrationComplete] =
    useState(false);

  const activeEvent = eventId
    ? getEvent(eventId)
    : undefined;

  const hasCategory = Boolean(
    activeEvent?.categories?.length,
  );

  const steps = useMemo<StepId[]>(
    () =>
      STEP_ORDER.filter(
        (id) =>
          id !== "category" ||
          hasCategory,
      ),
    [hasCategory],
  );

  const currentIndex = Math.max(
    0,
    steps.indexOf(step),
  );

  const go = (
    next: StepId,
    dir: 1 | -1,
  ) => {
    setDirection(dir);
    setStep(next);
    setError(null);

    /*
     * When changing registration steps,
     * return the page to the top.
     */
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleMemberChange = (
    index: number,
    patch: Partial<MemberDraft>,
  ) => {
    setMembers((prev) =>
      prev.map((member, i) =>
        i === index
          ? {
            ...member,
            ...patch,
          }
          : member,
      ),
    );

    setError(null);
  };

  /*
   * TEMPORARY FRONTEND-ONLY SUBMISSION
   */
  const handleSubmit = async () => {
    if (!activeEvent || submitting) {
      return;
    }

    /*
     * Validate members
     */
    for (const [
      index,
      member,
    ] of members.entries()) {
      if (member.name.trim().length < 2) {
        setError(
          `Please enter a valid name for member ${index + 1
          }.`,
        );

        /*
         * Scroll to the error
         */
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });

        return;
      }

      if (!isValidRollNo(member.rollNo)) {
        setError(
          `Member ${index + 1
          }: please enter a valid roll number.`,
        );

        return;
      }
    }

    /*
     * Member 1 email
     */
    if (
      !isValidEmail(
        members[0]?.email ?? "",
      )
    ) {
      setError(
        "Please enter a valid email address for Member 1.",
      );

      return;
    }

    /*
     * Member 1 phone
     */
    if (
      !isValidPhone(
        members[0]?.phone ?? "",
      )
    ) {
      setError(
        "Please enter a valid 10-digit phone number for Member 1.",
      );

      return;
    }

    /*
     * Duplicate roll numbers
     */
    const rolls = members.map((member) =>
      normalizeRollNo(member.rollNo),
    );

    if (
      new Set(rolls).size !==
      rolls.length
    ) {
      setError(
        "This student is already included in this team.",
      );

      return;
    }

    /*
     * Submit
     */
    setSubmitting(true);
    setError(null);

    try {
      /*
       * Temporary frontend-only delay
       */
      await new Promise<void>(
        (resolve) =>
          setTimeout(resolve, 700),
      );

      setRegistrationComplete(true);

      /*
       * Return to top after success
       */
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch {
      setError(
        "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  /*
   * Invalid event
   */
  if (!validPreset) {
    return <Navigate to="/" />;
  }

  /*
   * ==========================================
   * SUCCESS SCREEN
   * ==========================================
   */
  if (registrationComplete) {
    return (
      <main className="relative min-h-screen w-full overflow-x-hidden bg-[#0b0f0c]">

        {/* Fixed Background */}
        <img
          src={registerBg}
          alt=""
          aria-hidden="true"
          className="fixed inset-0 h-full w-full scale-105 object-cover opacity-45 blur-[2px]"
        />

        {/* Fixed Dark Overlay */}
        <div
          aria-hidden="true"
          className="fixed inset-0 bg-[radial-gradient(120%_90%_at_50%_10%,rgba(6,20,12,0.55),rgba(4,8,6,0.94))]"
        />

        {/* Scrollable Content */}
        <div className="relative z-10 min-h-screen">

          {/* Header */}
          <header className="flex items-center justify-between gap-4 px-5 py-4 md:px-10">
            <Link
              to="/"
              className="font-display text-base font-black tracking-tight text-white md:text-lg"
            >
              ONAM{" "}
              <span className="text-[#e2b93b]">
                2K26
              </span>
            </Link>

            <ProgressIndicator
              steps={steps}
              current={currentIndex}
            />
          </header>

          {/* Success Content */}
          <div className="px-5 pb-12 md:px-10 md:pb-16">
            <div className="mx-auto w-full max-w-3xl">
              <div className="w-full">
                <SuccessStep />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  /*
   * ==========================================
   * NORMAL REGISTRATION UI
   * ==========================================
   */

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#0b0f0c]">

      {/* ======================================
          BACKGROUND
          ====================================== */}

      <img
        src={registerBg}
        alt=""
        aria-hidden="true"
        className="fixed inset-0 h-full w-full scale-105 object-cover opacity-45 blur-[2px]"
      />

      {/* Dark Overlay */}
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-[radial-gradient(120%_90%_at_50%_10%,rgba(6,20,12,0.55),rgba(4,8,6,0.94))]"
      />

      {/* ======================================
          PAGE CONTENT
          ====================================== */}

      <div className="relative z-10 min-h-screen">

        {/* ====================================
            HEADER
            ==================================== */}

        <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-white/5 bg-[#07100b]/70 px-5 py-4 backdrop-blur-md md:px-10">

          {/* Logo */}
          <Link
            to="/"
            className="font-display text-base font-black tracking-tight text-white md:text-lg"
          >
            ONAM{" "}
            <span className="text-[#e2b93b]">
              2K26
            </span>
          </Link>

          {/* Progress */}
          <ProgressIndicator
            steps={steps}
            current={currentIndex}
          />
        </header>

        {/* ====================================
            MAIN REGISTRATION CONTENT
            ==================================== */}

        <div className="px-5 pb-16 pt-4 md:px-10 md:pb-20 md:pt-8">

          <div className="mx-auto w-full max-w-3xl">

            <div
              key={step}
              className="w-full"
              style={{
                animation: `${direction === 1
                    ? "slide-in-right"
                    : "slide-in-left"
                  } 0.45s cubic-bezier(0.22,1,0.36,1) both`,
              }}
            >

              {/* ==================================
                  RULES
                  ================================== */}

              {step === "rules" ? (
                <RulesStep
                  accepted={accepted}
                  onToggle={setAccepted}
                  onBack={() =>
                    window.history.back()
                  }
                  onContinue={() =>
                    go(
                      hasCategory
                        ? "category"
                        : "team",
                      1,
                    )
                  }
                />
              ) : null}

              {/* ==================================
                  CATEGORY
                  ================================== */}

              {step === "category" &&
                activeEvent?.categories ? (
                <CategoryStep
                  categories={
                    activeEvent.categories
                  }
                  category={category}
                  onSelect={setCategory}
                  onBack={() =>
                    go("rules", -1)
                  }
                  onContinue={() =>
                    go("team", 1)
                  }
                />
              ) : null}

              {/* ==================================
                  TEAM
                  ================================== */}

              {step === "team" &&
                activeEvent ? (
                <TeamStep
                  event={activeEvent}
                  category={category}
                  members={members}
                  error={error}
                  submitting={submitting}
                  onChange={
                    handleMemberChange
                  }
                  onBack={() =>
                    go(
                      hasCategory
                        ? "category"
                        : "rules",
                      -1,
                    )
                  }
                  onSubmit={handleSubmit}
                />
              ) : null}

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}