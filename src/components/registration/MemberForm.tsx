import { deriveMember } from "@/lib/roll";

export type MemberDraft = {
  name: string;
  rollNo: string;
  email?: string;
  phone?: string;
};

export function MemberForm({
  index,
  member,
  onChange,
}: {
  index: number;
  member: MemberDraft;
  onChange: (index: number, patch: Partial<MemberDraft>) => void;
}) {
  const derived = deriveMember(member.rollNo);
  const isFirst = index === 0;

  const nameId = `member-${index}-name`;
  const rollId = `member-${index}-roll`;

  /*
   * Clean input style:
   * - No large outer box
   * - Comfortable height on mobile
   * - Clear borders
   * - Good text visibility
   */
  const inputClass =
    "mt-2 h-12 w-full rounded-lg border border-white/20 bg-black/25 px-4 text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-[#e2b93b] focus:bg-black/35";

  const readOnlyClass =
    "mt-2 h-12 w-full rounded-lg border border-white/10 bg-black/20 px-4 text-sm text-white/70 outline-none";

  const labelClass =
    "font-ui text-[10px] font-semibold tracking-[0.14em] text-white/65 uppercase";

  return (
    <fieldset className="space-y-4">
      {/* Member title */}
      <legend className="font-ui mb-4 text-[10px] font-bold tracking-[0.2em] text-[#e2b93b] uppercase">
        Member {index + 1}
      </legend>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label htmlFor={nameId} className={labelClass}>
            Full Name
          </label>

          <input
            id={nameId}
            type="text"
            value={member.name}
            maxLength={80}
            autoComplete="off"
            onChange={(e) =>
              onChange(index, {
                name: e.target.value,
              })
            }
            className={inputClass}
            placeholder="Enter full name"
          />
        </div>

        {/* Roll Number */}
        <div>
          <label htmlFor={rollId} className={labelClass}>
            Roll Number
          </label>

          <input
            id={rollId}
            type="text"
            value={member.rollNo}
            maxLength={12}
            autoComplete="off"
            onChange={(e) =>
              onChange(index, {
                rollNo: e.target.value.toUpperCase(),
              })
            }
            className={`${inputClass} tracking-wide uppercase`}
            placeholder="25CSR123"
          />
        </div>

        {/* Member 1 additional details */}
        {isFirst ? (
          <>
            {/* Department */}
            <div>
              <label
                htmlFor={`member-${index}-dept`}
                className={labelClass}
              >
                Department
              </label>

              <input
                id={`member-${index}-dept`}
                type="text"
                readOnly
                value={derived.department}
                placeholder="—"
                className={readOnlyClass}
              />
            </div>

            {/* Year */}
            <div>
              <label
                htmlFor={`member-${index}-year`}
                className={labelClass}
              >
                Year
              </label>

              <input
                id={`member-${index}-year`}
                type="text"
                readOnly
                value={derived.year}
                placeholder="—"
                className={readOnlyClass}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor={`member-${index}-email`}
                className={labelClass}
              >
                Mail ID
              </label>

              <input
                id={`member-${index}-email`}
                type="email"
                value={member.email ?? ""}
                maxLength={120}
                autoComplete="off"
                onChange={(e) =>
                  onChange(index, {
                    email: e.target.value,
                  })
                }
                className={inputClass}
                placeholder="name@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor={`member-${index}-phone`}
                className={labelClass}
              >
                Phone Number
              </label>

              <input
                id={`member-${index}-phone`}
                type="tel"
                inputMode="numeric"
                value={member.phone ?? ""}
                maxLength={10}
                autoComplete="off"
                onChange={(e) =>
                  onChange(index, {
                    phone: e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10),
                  })
                }
                className={inputClass}
                placeholder="10-digit mobile number"
              />
            </div>
          </>
        ) : null}
      </div>
    </fieldset>
  );
}