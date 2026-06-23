import type { LucideIcon } from "lucide-react";
import {
  Square,
  Link2,
  LayoutGrid,
  TextCursorInput,
  PanelsTopLeft,
  FolderTree,
  ToggleLeft,
  Tag,
  ChevronDownCircle,
  ListChecks,
  Radio,
  BellRing,
} from "lucide-react";

/* ---------------------------------------------------------------
   COLOR TOKENS — the actual Teracle palette, surfaced as data
   --------------------------------------------------------------- */
export type ColorToken = {
  token: string;
  value: string;
  role: string;
  onSurface: "base" | "muted";
};

export const colorTokens: ColorToken[] = [
  { token: "color.text.primary", value: "#ffffff", role: "Primary text on base surface", onSurface: "base" },
  { token: "color.text.secondary", value: "#0a0a0a", role: "Primary text on muted surface", onSurface: "muted" },
  { token: "color.text.tertiary", value: "#0000ee", role: "Links & accent actions", onSurface: "muted" },
  { token: "color.text.inverse", value: "#6c6c6c", role: "Muted / inverse labels", onSurface: "muted" },
  { token: "color.surface.base", value: "#000000", role: "App background (default mode)", onSurface: "base" },
  { token: "color.surface.muted", value: "#fef9f3", role: "Cards, panels, inverted mode bg", onSurface: "muted" },
];

/* ---------------------------------------------------------------
   TYPOGRAPHY SCALE
   --------------------------------------------------------------- */
export type TypeToken = {
  name: string;
  token: string;
  size: string;
  weight: number;
  lineHeight: string;
  usage: string;
  className: string;
};

export const typeScale: TypeToken[] = [
  { name: "Display 2XL", token: "font.size.2xl", size: "200px", weight: 700, lineHeight: "0.9", usage: "Wordmark / hero moment", className: "text-[64px] sm:text-[110px] lg:text-[150px] xl:text-[200px]" },
  { name: "Display XL", token: "font.size.xl", size: "150px", weight: 700, lineHeight: "0.92", usage: "Section headlines", className: "text-[56px] sm:text-[90px] lg:text-[120px] xl:text-[150px]" },
  { name: "Display LG", token: "font.size.lg", size: "40px", weight: 700, lineHeight: "1.05", usage: "Sub-headlines, card titles", className: "text-[28px] sm:text-[36px] lg:text-[40px]" },
  { name: "Display MD", token: "font.size.md", size: "24px", weight: 700, lineHeight: "1.15", usage: "Lead paragraphs", className: "text-[20px] sm:text-[24px]" },
  { name: "Display SM", token: "font.size.sm", size: "18px", weight: 700, lineHeight: "1.2", usage: "UI labels, nav", className: "text-[16px] sm:text-[18px]" },
  { name: "Base", token: "font.size.base", size: "16px", weight: 700, lineHeight: "1.0", usage: "Body, controls", className: "text-[16px]" },
];

/* ---------------------------------------------------------------
   SPACING + SHAPE + MOTION
   --------------------------------------------------------------- */
export const spacingTokens = [
  { token: "space.1", value: "32px", usage: "Inline / stack gap" },
  { token: "space.2", value: "40px", usage: "Section padding" },
  { token: "space.3", value: "60px", usage: "Block separation" },
];

export const shapeTokens = [
  { token: "radius.sm", value: "0px", usage: "Inputs, chips" },
  { token: "radius.md", value: "2px", usage: "Cards, popovers" },
  { token: "radius.lg", value: "4px", usage: "Large surfaces" },
];

export const motionTokens = [
  { token: "motion.fast", value: "120ms ease", usage: "Hover, focus feedback" },
  { token: "motion.base", value: "200ms ease", usage: "Toggle, expand" },
  { token: "motion.slow", value: "320ms cubic-bezier(.2,.8,.2,1)", usage: "Dialog, page transitions" },
];

/* ---------------------------------------------------------------
   COMPONENT FAMILIES — 12 cards (matches page density)
   --------------------------------------------------------------- */
export type ComponentFamily = {
  id: string;
  name: string;
  icon: LucideIcon;
  summary: string;
  states: string[];
  variants: number;
};

export const componentFamilies: ComponentFamily[] = [
  { id: "button", name: "Button", icon: Square, summary: "Primary action trigger with seven explicit states.", states: ["default", "hover", "focus-visible", "active", "disabled", "loading", "error"], variants: 4 },
  { id: "link", name: "Link", icon: Link2, summary: "Inline navigation with branded underline and visited state.", states: ["default", "hover", "focus-visible", "active", "visited", "disabled"], variants: 3 },
  { id: "card", name: "Card", icon: LayoutGrid, summary: "Grouped content surface on the muted token.", states: ["default", "hover", "focus-within", "active", "loading", "error"], variants: 3 },
  { id: "input", name: "Input", icon: TextCursorInput, summary: "Text entry with label, helper, and error slots.", states: ["default", "focus-visible", "filled", "disabled", "error", "loading"], variants: 4 },
  { id: "dialog", name: "Dialog", icon: PanelsTopLeft, summary: "Modal focus trap with Escape and scroll lock.", states: ["default", "open", "loading", "error", "disabled"], variants: 2 },
  { id: "tabs", name: "Tabs", icon: FolderTree, summary: "ARIA tablist with roving keyboard focus.", states: ["default", "hover", "focus-visible", "active", "disabled", "loading"], variants: 2 },
  { id: "switch", name: "Switch", icon: ToggleLeft, summary: "Binary toggle with accessible checked state.", states: ["default", "hover", "focus-visible", "active", "disabled", "loading", "error"], variants: 2 },
  { id: "badge", name: "Badge", icon: Tag, summary: "Status and count labels, square corners.", states: ["default", "hover", "active", "disabled"], variants: 5 },
  { id: "accordion", name: "Accordion", icon: ChevronDownCircle, summary: "Disclosure with single or multi open.", states: ["default", "hover", "focus-visible", "active", "disabled", "loading"], variants: 2 },
  { id: "select", name: "Select", icon: ListChecks, summary: "Listbox with keyboard type-ahead.", states: ["default", "hover", "focus-visible", "active", "disabled", "loading", "error"], variants: 2 },
  { id: "radio", name: "Radio Group", icon: Radio, summary: "Single-choice group with roving tabindex.", states: ["default", "hover", "focus-visible", "active", "disabled", "error"], variants: 2 },
  { id: "toast", name: "Toast", icon: BellRing, summary: "Transient feedback with role=status and dismiss.", states: ["default", "enter", "leave", "loading", "error", "disabled"], variants: 4 },
];

/* ---------------------------------------------------------------
   BUTTON MATRIX — variants × states (drives button density)
   --------------------------------------------------------------- */
export const buttonVariants = ["Primary", "Secondary", "Outline", "Ghost"] as const;
export const buttonStates = ["default", "hover", "focus-visible", "active", "disabled", "loading", "error"] as const;

/* ---------------------------------------------------------------
   ACCESSIBILITY — testable acceptance criteria (WCAG 2.2 AA)
   --------------------------------------------------------------- */
export type Criterion = {
  id: string;
  title: string;
  level: string;
  check: string;
};

export const accessibilityCriteria: Criterion[] = [
  { id: "1.4.3", title: "Contrast (Minimum)", level: "AA", check: "Text ≥ 4.5:1, large text ≥ 3:1 against its surface token." },
  { id: "2.4.7", title: "Focus Visible", level: "AA", check: "Every interactive element shows a 2px focus ring on keyboard focus." },
  { id: "2.1.1", title: "Keyboard", level: "A", check: "All actions reachable and operable with Tab, Arrow, Enter, Space, Escape." },
  { id: "2.1.2", title: "No Keyboard Trap", level: "A", check: "Focus can leave any component using Tab/Shift+Tab or Escape." },
  { id: "2.5.8", title: "Target Size (Minimum)", level: "AA", check: "Touch targets ≥ 24×24 CSS px, recommended 44×44 on mobile." },
  { id: "4.1.2", title: "Name, Role, Value", level: "A", check: "Every control exposes semantic role, accessible name, and current state." },
  { id: "1.4.11", title: "Non-text Contrast", level: "AA", check: "Borders, icons, and focus indicators ≥ 3:1 against adjacent colors." },
  { id: "3.3.2", title: "Labels or Instructions", level: "A", check: "Inputs have persistent visible labels, never placeholder-only." },
];

/* ---------------------------------------------------------------
   RESOURCES — 31 links organized into columns
   --------------------------------------------------------------- */
export type ResourceLink = { label: string; href: string; note?: string };
export type ResourceGroup = { title: string; links: ResourceLink[] };

export const resourceGroups: ResourceGroup[] = [
  {
    title: "Documentation",
    links: [
      { label: "Getting started", href: "#getting-started" },
      { label: "Installation", href: "#usage" },
      { label: "Design tokens", href: "#foundations" },
      { label: "Theme modes", href: "#foundations" },
      { label: "Component states", href: "#components" },
      { label: "Accessibility", href: "#accessibility" },
      { label: "Migration guide", href: "#resources" },
    ],
  },
  {
    title: "Components",
    links: [
      { label: "Button", href: "#components" },
      { label: "Link", href: "#components" },
      { label: "Card", href: "#components" },
      { label: "Input", href: "#components" },
      { label: "Dialog", href: "#components" },
      { label: "Tabs", href: "#components" },
      { label: "Switch", href: "#components" },
    ],
  },
  {
    title: "Patterns",
    links: [
      { label: "Forms & validation", href: "#components" },
      { label: "Empty states", href: "#components" },
      { label: "Loading states", href: "#button-lab" },
      { label: "Error states", href: "#button-lab" },
      { label: "Long content", href: "#accessibility" },
      { label: "Overflow handling", href: "#accessibility" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Token JSON", href: "#foundations" },
      { label: "Figma library", href: "#resources" },
      { label: "Icon set", href: "#resources" },
      { label: "Changelog", href: "#resources" },
      { label: "Roadmap", href: "#resources" },
      { label: "GitHub", href: "#resources" },
      { label: "Discussions", href: "#resources" },
      { label: "Support", href: "#resources" },
      { label: "Status page", href: "#resources" },
      { label: "Brand kit", href: "#resources" },
      { label: "License", href: "#resources" },
    ],
  },
];

/* ---------------------------------------------------------------
   NAV
   --------------------------------------------------------------- */
export const primaryNav = [
  { label: "Docs", href: "#getting-started" },
  { label: "Foundations", href: "#foundations" },
  { label: "Components", href: "#components" },
  { label: "States", href: "#button-lab" },
  { label: "Accessibility", href: "#accessibility" },
  { label: "Resources", href: "#resources" },
];

export const heroStats = [
  { value: "42", label: "Design tokens" },
  { value: "12", label: "Component families" },
  { value: "AA", label: "WCAG 2.2 target" },
  { value: "7", label: "States per control" },
];
