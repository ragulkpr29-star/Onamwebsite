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
  const inputClass =
    "mt-1 h-11 w-full rounded-lg border border-white/20 bg-black/30 px-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#e2b93b]";
  const labelClass = "font-ui text-[10px] tracking-[0.14em] text-white/60 uppercase";

  return (
    <fieldset className="rounded-xl border border-white/15 bg-white/5 p-3.5">
      <legend className="font-ui px-2 text-[10px] font-bold tracking-[0.2em] text-[#e2b93b] uppercase">
        Member {index + 1}
      </legend>
      <div className="grid gap-2.5 sm:grid-cols-2">
        <div>
          <label htmlFor={nameId} className={labelClass}>
            Full Name
          </label>
          <input
            id={nameId}
            value={member.name}
            maxLength={80}
            autoComplete="off"
            onChange={(e) => onChange(index, { name: e.target.value })}
            className={inputClass}
            placeholder="Enter full name"
          />
        </div>
        <div>
          <label htmlFor={rollId} className={labelClass}>
            Roll Number
          </label>
          <input
            id={rollId}
            value={member.rollNo}
            maxLength={12}
            autoComplete="off"
            onChange={(e) => onChange(index, { rollNo: e.target.value.toUpperCase() })}
            className={`${inputClass} tracking-wide uppercase`}
            placeholder="25CSR123"
          />
        </div>

        {isFirst ? (
          <>
            <div>
              <label htmlFor={`member-${index}-dept`} className={labelClass}>
                Department
              </label>
              <input
                id={`member-${index}-dept`}
                readOnly
                value={derived.department}
                placeholder="—"
                className="mt-1 h-11 w-full rounded-lg border border-white/10 bg-black/20 px-3 text-sm text-white/70 outline-none"
              />
            </div>
            <div>
              <label htmlFor={`member-${index}-year`} className={labelClass}>
                Year
              </label>
              <input
                id={`member-${index}-year`}
                readOnly
                value={derived.year}
                placeholder="—"
                className="mt-1 h-11 w-full rounded-lg border border-white/10 bg-black/20 px-3 text-sm text-white/70 outline-none"
              />
            </div>
            <div>
              <label htmlFor={`member-${index}-email`} className={labelClass}>
                Mail ID
              </label>
              <input
                id={`member-${index}-email`}
                type="email"
                value={member.email ?? ""}
                maxLength={120}
                autoComplete="off"
                onChange={(e) => onChange(index, { email: e.target.value })}
                className={inputClass}
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label htmlFor={`member-${index}-phone`} className={labelClass}>
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
                  onChange(index, { phone: e.target.value.replace(/\D/g, "").slice(0, 10) })
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
