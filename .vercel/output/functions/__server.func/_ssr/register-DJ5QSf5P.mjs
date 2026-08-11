import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Navigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route$1 } from "./router-DMlQUwPC.mjs";
import { r as getEvent, t as RULES } from "./events-BQRCYOYu.mjs";
import { i as register_bg_default, n as STEP_ORDER, r as SuccessStep, t as ProgressIndicator } from "./ProgressIndicator-DXrfEzI8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-DJ5QSf5P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Single source of truth for KEC roll-number department codes. */
var departmentCodes = {
	CHR: "Chemical Engineering",
	MTR: "Mechatronics Engineering",
	FTR: "Food Technology",
	ALR: "Artificial Intelligence and Machine Learning (AIML)",
	ADR: "Artificial Intelligence and Data Science (AIDS)",
	ADS: "Artificial Intelligence and Data Science / Machine Learning",
	AUR: "Automobile Engineering",
	BIR: "Computer Technology - UG",
	BSR: "Computer Technology - UG",
	BCR: "Computer Technology - UG",
	ISR: "Computer Technology - PG",
	CDR: "Computer Science and Design",
	CSR: "Computer Science and Engineering",
	CER: "Chemical Engineering",
	MER: "Mechanical Engineering",
	EER: "Electrical and Electronics Engineering",
	ECR: "Electronics and Communication Engineering",
	EIR: "Electronics and Instrumentation Engineering",
	ITR: "Information Technology"
};
/** Single source of truth for year prefixes. */
var yearPrefixes = {
	"22": "5th Year",
	"23": "4th Year",
	"24": "3rd Year",
	"25": "2nd Year",
	"26": "1st Year"
};
var normalizeRollNo = (rollNo) => rollNo.trim().toUpperCase().replace(/\s+/g, "");
var getDepartmentFromRollNo = (rollNo) => {
	const match = normalizeRollNo(rollNo).match(/[A-Z]{3}/);
	if (!match) return "";
	return departmentCodes[match[0]] ?? "";
};
var getYearFromRollNo = (rollNo) => {
	const roll = normalizeRollNo(rollNo);
	if (!roll || roll.length < 2) return "";
	return yearPrefixes[roll.substring(0, 2)] ?? "";
};
/** A valid roll number looks like 25CSR123 — 2-digit year, 3-letter dept code, digits. */
var isValidRollNo = (rollNo) => {
	const roll = normalizeRollNo(rollNo);
	if (!/^\d{2}[A-Z]{3}\d{1,5}$/.test(roll)) return false;
	if (!yearPrefixes[roll.substring(0, 2)]) return false;
	return Boolean(departmentCodes[roll.substring(2, 5)]);
};
var deriveMember = (rollNo) => ({
	department: getDepartmentFromRollNo(rollNo),
	year: getYearFromRollNo(rollNo)
});
var isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
var isValidPhone = (phone) => /^\d{10}$/.test(phone.trim());
function RulesStep({ accepted, onToggle, onBack, onContinue }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col justify-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-ui text-[10px] font-bold tracking-[0.24em] text-[#e2b93b] uppercase",
				children: "Step 2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl",
				children: "Rules & Regulations"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-3",
				children: RULES.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 text-sm leading-relaxed text-white/85 md:text-base",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "mt-1 text-[#e2b93b]",
						children: "✦"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: rule })]
				}, rule))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-7 flex cursor-pointer items-start gap-3 rounded-xl border border-white/20 bg-white/5 p-4 text-sm text-white/90 transition-colors hover:bg-white/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: accepted,
					onChange: (e) => onToggle(e.target.checked),
					className: "mt-0.5 h-5 w-5 shrink-0 accent-[#e2b93b]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I confirm that I have read and agree to follow the above rules and regulations." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onBack,
					className: "font-ui rounded-full border border-white/25 px-6 py-3.5 text-xs font-bold tracking-[0.18em] text-white/80 uppercase transition-colors hover:bg-white/10",
					children: "← Back"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: !accepted,
					onClick: onContinue,
					className: "font-ui rounded-full bg-[#e2b93b] px-8 py-3.5 text-xs font-bold tracking-[0.18em] text-[#1a1408] uppercase transition-all hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-35",
					children: "Continue →"
				})]
			})
		]
	});
}
function CategoryStep({ categories, category, onSelect, onBack, onContinue }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col justify-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-ui text-[10px] font-bold tracking-[0.24em] text-[#e2b93b] uppercase",
				children: "Step 3 · Tug of War"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl",
				children: "Select Category"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-7 grid max-w-md gap-3 sm:grid-cols-2",
				children: categories.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": category === option,
					onClick: () => onSelect(option),
					className: ["font-ui rounded-xl border py-6 text-sm font-bold tracking-[0.2em] uppercase transition-all", category === option ? "border-[#e2b93b] bg-[#e2b93b]/20 text-white ring-1 ring-[#e2b93b]/50" : "border-white/20 bg-white/5 text-white/80 hover:bg-white/10"].join(" "),
					children: option
				}, option))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onBack,
					className: "font-ui rounded-full border border-white/25 px-6 py-3.5 text-xs font-bold tracking-[0.18em] text-white/80 uppercase transition-colors hover:bg-white/10",
					children: "← Back"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: !category,
					onClick: onContinue,
					className: "font-ui rounded-full bg-[#e2b93b] px-8 py-3.5 text-xs font-bold tracking-[0.18em] text-[#1a1408] uppercase transition-all hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-35",
					children: "Continue →"
				})]
			})
		]
	});
}
function MemberForm({ index, member, onChange }) {
	const derived = deriveMember(member.rollNo);
	const isFirst = index === 0;
	const nameId = `member-${index}-name`;
	const rollId = `member-${index}-roll`;
	const inputClass = "mt-1 h-11 w-full rounded-lg border border-white/20 bg-black/30 px-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#e2b93b]";
	const labelClass = "font-ui text-[10px] tracking-[0.14em] text-white/60 uppercase";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
		className: "rounded-xl border border-white/15 bg-white/5 p-3.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
			className: "font-ui px-2 text-[10px] font-bold tracking-[0.2em] text-[#e2b93b] uppercase",
			children: ["Member ", index + 1]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-2.5 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: nameId,
					className: labelClass,
					children: "Full Name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: nameId,
					value: member.name,
					maxLength: 80,
					autoComplete: "off",
					onChange: (e) => onChange(index, { name: e.target.value }),
					className: inputClass,
					placeholder: "Enter full name"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: rollId,
					className: labelClass,
					children: "Roll Number"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: rollId,
					value: member.rollNo,
					maxLength: 12,
					autoComplete: "off",
					onChange: (e) => onChange(index, { rollNo: e.target.value.toUpperCase() }),
					className: `${inputClass} tracking-wide uppercase`,
					placeholder: "25CSR123"
				})] }),
				isFirst ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: `member-${index}-dept`,
						className: labelClass,
						children: "Department"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: `member-${index}-dept`,
						readOnly: true,
						value: derived.department,
						placeholder: "—",
						className: "mt-1 h-11 w-full rounded-lg border border-white/10 bg-black/20 px-3 text-sm text-white/70 outline-none"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: `member-${index}-year`,
						className: labelClass,
						children: "Year"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: `member-${index}-year`,
						readOnly: true,
						value: derived.year,
						placeholder: "—",
						className: "mt-1 h-11 w-full rounded-lg border border-white/10 bg-black/20 px-3 text-sm text-white/70 outline-none"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: `member-${index}-email`,
						className: labelClass,
						children: "Mail ID"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: `member-${index}-email`,
						type: "email",
						value: member.email ?? "",
						maxLength: 120,
						autoComplete: "off",
						onChange: (e) => onChange(index, { email: e.target.value }),
						className: inputClass,
						placeholder: "name@example.com"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: `member-${index}-phone`,
						className: labelClass,
						children: "Phone Number"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: `member-${index}-phone`,
						type: "tel",
						inputMode: "numeric",
						value: member.phone ?? "",
						maxLength: 10,
						autoComplete: "off",
						onChange: (e) => onChange(index, { phone: e.target.value.replace(/\D/g, "").slice(0, 10) }),
						className: inputClass,
						placeholder: "10-digit mobile number"
					})] })
				] }) : null
			]
		})]
	});
}
function TeamStep({ event, category, members, error, submitting, onChange, onBack, onSubmit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col justify-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-ui text-[10px] font-bold tracking-[0.24em] text-[#e2b93b] uppercase",
				children: [event.name, category ? ` · ${category}` : ""]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl",
				children: "Team Details"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-ui mt-1.5 text-xs tracking-[0.12em] text-white/55 uppercase",
				children: [
					event.maxMembers,
					" member",
					event.maxMembers > 1 ? "s" : "",
					" required"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 max-h-[42dvh] space-y-2.5 overflow-y-auto pr-1",
				children: members.map((member, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberForm, {
					index,
					member,
					onChange
				}, index))
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "mt-3 rounded-lg bg-red-500/15 px-3 py-2 text-sm text-red-200",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onBack,
					disabled: submitting,
					className: "font-ui rounded-full border border-white/25 px-6 py-3.5 text-xs font-bold tracking-[0.18em] text-white/80 uppercase transition-colors hover:bg-white/10 disabled:opacity-40",
					children: "← Back"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onSubmit,
					disabled: submitting,
					className: "font-ui rounded-full bg-[#e2b93b] px-8 py-3.5 text-xs font-bold tracking-[0.18em] text-[#1a1408] uppercase transition-all hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50",
					children: submitting ? "Registering…" : "Submit Registration"
				})]
			})
		]
	});
}
var emptyMembers = (count) => Array.from({ length: count }, () => ({
	name: "",
	rollNo: "",
	email: "",
	phone: ""
}));
function RegisterPage() {
	const { event: presetEvent } = Route$1.useSearch();
	const validPreset = presetEvent && getEvent(presetEvent) ? presetEvent : null;
	const [step, setStep] = (0, import_react.useState)("rules");
	const [direction, setDirection] = (0, import_react.useState)(1);
	const [accepted, setAccepted] = (0, import_react.useState)(false);
	const [eventId, setEventId] = (0, import_react.useState)(validPreset);
	const [category, setCategory] = (0, import_react.useState)(null);
	const [members, setMembers] = (0, import_react.useState)(emptyMembers(getEvent(validPreset ?? "")?.maxMembers ?? 1));
	const [error, setError] = (0, import_react.useState)(null);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [registrationComplete, setRegistrationComplete] = (0, import_react.useState)(false);
	const activeEvent = eventId ? getEvent(eventId) : void 0;
	const hasCategory = Boolean(activeEvent?.categories?.length);
	const steps = (0, import_react.useMemo)(() => STEP_ORDER.filter((id) => id !== "category" || hasCategory), [hasCategory]);
	const currentIndex = Math.max(0, steps.indexOf(step));
	const go = (next, dir) => {
		setDirection(dir);
		setStep(next);
		setError(null);
	};
	const handleMemberChange = (index, patch) => {
		setMembers((prev) => prev.map((member, i) => i === index ? {
			...member,
			...patch
		} : member));
		setError(null);
	};
	const handleSubmit = async () => {
		if (!activeEvent || submitting) return;
		for (const [index, member] of members.entries()) {
			if (member.name.trim().length < 2) {
				setError(`Please enter a valid name for member ${index + 1}.`);
				return;
			}
			if (!isValidRollNo(member.rollNo)) {
				setError(`Member ${index + 1}: please enter a valid roll number.`);
				return;
			}
		}
		if (!isValidEmail(members[0]?.email ?? "")) {
			setError("Please enter a valid email address for Member 1.");
			return;
		}
		if (!isValidPhone(members[0]?.phone ?? "")) {
			setError("Please enter a valid 10-digit phone number for Member 1.");
			return;
		}
		const rolls = members.map((member) => normalizeRollNo(member.rollNo));
		if (new Set(rolls).size !== rolls.length) {
			setError("This student is already included in this team.");
			return;
		}
		setSubmitting(true);
		setError(null);
		try {
			await new Promise((resolve) => setTimeout(resolve, 700));
			setRegistrationComplete(true);
		} catch {
			setError("Something went wrong. Please try again.");
		} finally {
			setSubmitting(false);
		}
	};
	if (!validPreset) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/" });
	if (registrationComplete) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative h-dvh w-full overflow-hidden bg-[#0b0f0c]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: register_bg_default,
				alt: "",
				"aria-hidden": "true",
				className: "absolute inset-0 h-full w-full scale-105 object-cover opacity-45 blur-[2px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_10%,rgba(6,20,12,0.55),rgba(4,8,6,0.94))]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex h-full flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
					className: "flex items-center justify-between gap-4 px-5 py-4 md:px-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "font-display text-base font-black tracking-tight text-white md:text-lg",
						children: [
							"ONAM",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#e2b93b]",
								children: "2K26"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex-1 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 flex items-center justify-center px-5 pb-10 md:px-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full w-full max-w-3xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessStep, {})
						})
					})
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative h-dvh w-full overflow-hidden bg-[#0b0f0c]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: register_bg_default,
				alt: "",
				"aria-hidden": "true",
				className: "absolute inset-0 h-full w-full scale-105 object-cover opacity-45 blur-[2px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_10%,rgba(6,20,12,0.55),rgba(4,8,6,0.94))]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex h-full flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center justify-between gap-4 px-5 py-4 md:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "font-display text-base font-black tracking-tight text-white md:text-lg",
						children: [
							"ONAM",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#e2b93b]",
								children: "2K26"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressIndicator, {
						steps,
						current: currentIndex
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex-1 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 overflow-hidden px-5 pb-6 md:px-10",
						style: { animation: `${direction === 1 ? "slide-in-right" : "slide-in-left"} 0.45s cubic-bezier(0.22,1,0.36,1) both` },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto h-full w-full max-w-3xl",
							children: [
								step === "rules" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RulesStep, {
									accepted,
									onToggle: setAccepted,
									onBack: () => window.history.back(),
									onContinue: () => go(hasCategory ? "category" : "team", 1)
								}) : null,
								step === "category" && activeEvent?.categories ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryStep, {
									categories: activeEvent.categories,
									category,
									onSelect: setCategory,
									onBack: () => go("rules", -1),
									onContinue: () => go("team", 1)
								}) : null,
								step === "team" && activeEvent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamStep, {
									event: activeEvent,
									category,
									members,
									error,
									submitting,
									onChange: handleMemberChange,
									onBack: () => go(hasCategory ? "category" : "rules", -1),
									onSubmit: handleSubmit
								}) : null
							]
						})
					}, step)
				})]
			})
		]
	});
}
//#endregion
export { RegisterPage as component };
