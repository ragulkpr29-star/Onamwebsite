import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as register_bg_default, n as STEP_ORDER, r as SuccessStep, t as ProgressIndicator } from "./ProgressIndicator-DXrfEzI8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register.success-nYOVkBbT.js
var import_jsx_runtime = require_jsx_runtime();
function SuccessPage() {
	const steps = STEP_ORDER.filter((id) => id !== "category");
	const currentIndex = steps.indexOf("success");
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
						children: ["ONAM ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#e2b93b]",
							children: "2K26"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressIndicator, {
						steps,
						current: currentIndex
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex-1 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 overflow-hidden px-5 pb-6 md:px-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto h-full w-full max-w-3xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessStep, {})
						})
					})
				})]
			})
		]
	});
}
//#endregion
export { SuccessPage as component };
