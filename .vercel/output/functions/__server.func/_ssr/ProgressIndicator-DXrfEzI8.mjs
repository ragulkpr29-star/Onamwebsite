import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProgressIndicator-DXrfEzI8.js
var import_jsx_runtime = require_jsx_runtime();
var register_bg_default = "/assets/register-bg-BJXf928u.png";
function SuccessStep() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full w-full flex-col items-center justify-center text-center px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "animate-pop flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#e2b93b] bg-[#e2b93b]/15",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 40 40",
					className: "h-10 w-10",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M10 21l7 7 14-16",
						fill: "none",
						stroke: "#e2b93b",
						strokeWidth: "3.5",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeDasharray: "40",
						strokeDashoffset: "40",
						style: { animation: "draw-check 0.6s ease-out 0.25s forwards" }
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl",
				children: "Registration Successful"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-white/70",
				children: "Thank you for registering for ONAM 2K26."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://chat.whatsapp.com/InoOsDaLTThLm71VXgmB1E",
				target: "_blank",
				rel: "noopener noreferrer",
				className: "font-ui mt-7 rounded-full bg-[#e2b93b] px-8 py-3.5 text-xs font-bold tracking-[0.18em] text-[#1a1408] uppercase transition-all hover:brightness-110 active:scale-[0.98]",
				children: "Join WhatsApp Group"
			})
		]
	});
}
var STEP_ORDER = [
	"rules",
	"category",
	"team",
	"success"
];
var LABELS = {
	rules: "Rules",
	category: "Category",
	team: "Team",
	success: "Done"
};
function ProgressIndicator({ steps, current }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "flex items-center gap-2",
		"aria-label": "Registration progress",
		children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-current": index === current ? "step" : void 0,
				className: ["font-ui text-[9px] font-bold tracking-[0.18em] uppercase transition-colors sm:text-[10px]", index === current ? "text-[#e2b93b]" : index < current ? "text-white/70" : "text-white/30"].join(" "),
				children: LABELS[step]
			}), index < steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: ["h-px w-4 sm:w-6", index < current ? "bg-[#e2b93b]/70" : "bg-white/20"].join(" ")
			}) : null]
		}, step))
	});
}
//#endregion
export { register_bg_default as i, STEP_ORDER as n, SuccessStep as r, ProgressIndicator as t };
