import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as events } from "./events-BQRCYOYu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CDYsfGT8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_boat_default = "/assets/hero-boat-BepmbDb0.jpg";
var kec_logo_default = "/assets/kec-logo-CP7k41Cp.png";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative isolate min-h-[100dvh] overflow-hidden bg-[#f7f3e8]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 -z-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_boat_default,
					alt: "",
					"aria-hidden": "true",
					className: "h-full w-full object-cover object-center"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[#f7f3e8]/[0.38]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-r from-[#f7f3e8]/95 via-[#f7f3e8]/80 to-[#f7f3e8]/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto flex min-h-[100dvh] max-w-7xl items-center px-6 py-16 md:px-10 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "animate-rise mb-8 flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-[68px] items-center justify-center rounded-xl bg-card px-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-[#e5dfcf]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: kec_logo_default,
										alt: "Kongu Engineering College",
										className: "h-11 w-auto object-contain",
										width: 140,
										height: 44
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-l border-[#c9b98a] pl-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-ui text-[10px] font-bold tracking-[0.22em] text-[#075b42] uppercase",
										children: "Cultural Club"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-ui mt-1 text-[9px] font-semibold tracking-[0.28em] text-[#c69214] uppercase",
										children: "Presents"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display animate-rise text-lg font-medium text-[#5f735f] italic md:text-xl",
								style: { animationDelay: "80ms" },
								children: "Celebrate the spirit of"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display animate-rise-blur mt-2 text-6xl leading-[0.95] font-black tracking-[-0.045em] text-[#075b42] sm:text-7xl md:text-8xl lg:text-[7.2rem]",
								style: { animationDelay: "160ms" },
								children: ["ONAM", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative ml-3 inline-block text-[#075b42]",
									children: ["2026", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										className: "absolute -top-2 -right-5 text-3xl text-[#d4a72c] md:-top-3 md:-right-7 md:text-4xl",
										children: "✦"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-ui animate-rise mt-5 text-sm font-bold tracking-[0.18em] text-[#c99419] uppercase md:text-base",
								style: { animationDelay: "260ms" },
								children: "Tradition. Togetherness. Triumph."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "animate-slide-right flex justify-center lg:justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center lg:text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-ui text-[11px] font-bold tracking-[0.2em] text-[#075b42] uppercase",
								children: "Deadline"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-ui mt-2 text-lg font-bold text-red-600 md:text-xl",
								children: "23 August 2026"
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute right-0 bottom-0 left-0 h-20 bg-gradient-to-t from-[#f7f3e8] to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "animate-pop pointer-events-none absolute bottom-8 left-8 hidden text-3xl text-[#c99419]/70 md:block",
				children: "✦"
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative z-10 bg-[#003D27] px-6 py-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display mt-5 text-2xl font-bold tracking-wide text-[#d4a72c]",
				children: "ONAM 2K26"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-ui mt-2 text-[10px] font-bold tracking-[0.2em] text-white/85 uppercase",
				children: "Cultural Club"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-ui mt-1 text-[10px] tracking-[0.16em] text-white/60 uppercase",
				children: "Kongu Engineering College"
			})
		]
	});
}
function EventCard({ event, selected, full = false, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		disabled: full,
		"aria-pressed": selected,
		onClick: () => onSelect(event.id),
		className: [
			"group relative w-full rounded-2xl border p-4 text-left transition-all md:p-5",
			full ? "cursor-not-allowed border-border bg-muted/60 opacity-60" : "hover:-translate-y-0.5 hover:shadow-lift",
			selected ? "border-accent bg-card shadow-lift ring-2 ring-accent/40" : "border-border bg-card/85 shadow-soft"
		].join(" "),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display block text-lg font-bold text-primary md:text-xl",
					children: event.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-ui mt-1.5 block text-[10px] font-semibold tracking-[0.16em] text-muted-foreground uppercase",
					children: [
						event.solo ? "Solo" : `${event.maxMembers} Members`,
						" · ",
						event.maxTeams,
						" Teams"
					]
				}),
				event.categories ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-ui mt-1 block text-[10px] tracking-[0.14em] text-accent uppercase",
					children: event.categories.join(" · ")
				}) : null
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: ["mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] transition-colors", selected ? "border-accent bg-accent text-accent-foreground" : "border-[#c9b98a] text-transparent"].join(" "),
				children: "✓"
			})]
		}), full ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-ui mt-3 inline-block rounded-full bg-destructive/10 px-2.5 py-1 text-[9px] font-bold tracking-[0.16em] text-destructive uppercase",
			children: "Event Full"
		}) : null]
	});
}
function EventSelector({ counts }) {
	const [selected, setSelected] = (0, import_react.useState)(null);
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "register",
		className: "scroll-mt-8 bg-background pt-16 pb-20 md:pt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-6 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-ui text-[10px] font-bold tracking-[0.24em] text-accent uppercase",
						children: "Available Events"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl",
						children: "Select Event"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2 md:gap-4",
					children: events.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, {
						event,
						selected: selected === event.id,
						full: (counts[event.id] ?? 0) >= event.maxTeams,
						onSelect: setSelected
					}, event.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: !selected,
						onClick: () => navigate({
							to: "/register",
							search: { event: selected ?? void 0 }
						}),
						className: "font-ui rounded-full bg-primary px-8 py-3.5 text-xs font-bold tracking-[0.18em] text-primary-foreground uppercase shadow-lift transition-all hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none",
						children: "Continue to Registration →"
					})
				})
			]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventSelector, { counts: {
			pookkolam: 0,
			"fashion-parade": 0,
			"tug-of-war": 0,
			editing: 0,
			"dual-dance": 0
		} })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})]
	});
}
//#endregion
export { Index as component };
