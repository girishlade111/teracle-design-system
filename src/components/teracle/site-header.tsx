"use client";

import { useEffect, useState } from "react";
import { Menu, Search, X, Github, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { primaryNav, componentFamilies } from "./data";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

function Wordmark() {
  return (
    <a
      href="#top"
      className="group inline-flex items-center gap-2.5"
      aria-label="Teracle home"
    >
      <span
        aria-hidden
        className="inline-block h-6 w-6 bg-ink-primary transition-transform duration-150 group-hover:rotate-90"
        style={{ borderRadius: "2px" }}
      />
      <span className="text-wordmark text-[20px] tracking-tight text-ink-primary">
        TERACLE
      </span>
    </a>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-hairline backdrop-blur-md transition-colors duration-200 ${
        scrolled ? "bg-surface-base/85" : "bg-surface-base/60"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-8">
          <Wordmark />
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {primaryNav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="inline-flex h-10 items-center px-3 text-[14px] text-ink-primary/80 transition-colors duration-150 hover:text-ink-primary focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <SearchCommand />
          <a
            href="#resources"
            aria-label="GitHub repository"
            className="hidden h-10 w-10 items-center justify-center border border-hairline text-ink-primary transition-colors duration-150 hover:bg-surface-muted hover:text-ink-secondary sm:inline-flex focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <Github className="h-4 w-4" aria-hidden />
          </a>
          <ThemeToggle />
          <a
            href="#getting-started"
            className="hidden h-10 items-center gap-1.5 bg-ink-primary px-4 text-[14px] text-surface-base transition-opacity duration-150 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 md:inline-flex"
          >
            Get started
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>

          {/* Mobile nav */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="inline-flex h-10 w-10 items-center justify-center border border-hairline text-ink-primary focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden"
              >
                <Menu className="h-4 w-4" aria-hidden />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[88vw] max-w-sm border-hairline bg-surface-base p-0 text-ink-primary"
            >
              <SheetHeader className="border-b border-hairline px-5 py-4">
                <SheetTitle className="text-wordmark text-left text-[20px] text-ink-primary">
                  TERACLE
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="px-3 py-4">
                <ul className="flex flex-col">
                  {primaryNav.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex h-12 items-center justify-between px-2 text-[18px] text-ink-primary/90 hover:bg-surface-muted hover:text-ink-secondary focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        {item.label}
                        <ArrowUpRight className="h-4 w-4 opacity-50" aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="#getting-started"
                  onClick={() => setOpen(false)}
                  className="mt-4 flex h-12 items-center justify-center gap-2 bg-ink-primary text-[16px] text-surface-base focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Get started
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function SearchCommand() {
  const [open, setOpen] = useState(false);

  // Global ⌘K / Ctrl+K shortcut — keyboard-first, per the Teracle a11y spec.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label="Search documentation"
          className="inline-flex h-10 items-center gap-2 border border-hairline px-3 text-[13px] text-ink-primary/60 transition-colors duration-150 hover:text-ink-primary focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <Search className="h-3.5 w-3.5" aria-hidden />
          <span className="hidden sm:inline">Search docs</span>
          <kbd className="ml-1 hidden border border-hairline px-1.5 py-0.5 text-[10px] text-ink-primary/60 sm:inline">
            ⌘K
          </kbd>
        </button>
      </DialogTrigger>
      <DialogContent className="border-hairline bg-surface-base p-0 text-ink-primary sm:max-w-[560px]">
        <DialogHeader className="sr-only">
          <DialogTitle>Search Teracle documentation</DialogTitle>
        </DialogHeader>
        <Command className="bg-transparent">
          <CommandInput placeholder="Search tokens, components, patterns…" />
          <CommandList className="teracle-scroll max-h-[340px]">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Foundations">
              <CommandItem onSelect={() => setOpen(false)} asChild>
                <a href="#foundations" className="cursor-pointer">
                  <Search className="mr-2 h-3.5 w-3.5 opacity-50" aria-hidden /> Design tokens
                </a>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)} asChild>
                <a href="#foundations" className="cursor-pointer">
                  <Search className="mr-2 h-3.5 w-3.5 opacity-50" aria-hidden /> Typography scale
                </a>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)} asChild>
                <a href="#foundations" className="cursor-pointer">
                  <Search className="mr-2 h-3.5 w-3.5 opacity-50" aria-hidden /> Spacing & shape
                </a>
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Components">
              {componentFamilies.slice(0, 6).map((c) => (
                <CommandItem key={c.id} onSelect={() => setOpen(false)} asChild>
                  <a href="#components" className="cursor-pointer">
                    <c.icon className="mr-2 h-3.5 w-3.5 opacity-50" aria-hidden /> {c.name}
                  </a>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="Patterns">
              <CommandItem onSelect={() => setOpen(false)} asChild>
                <a href="#button-lab" className="cursor-pointer">
                  <Search className="mr-2 h-3.5 w-3.5 opacity-50" aria-hidden /> Button states lab
                </a>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)} asChild>
                <a href="#accessibility" className="cursor-pointer">
                  <Search className="mr-2 h-3.5 w-3.5 opacity-50" aria-hidden /> Accessibility criteria
                </a>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)} asChild>
                <a href="#usage" className="cursor-pointer">
                  <Search className="mr-2 h-3.5 w-3.5 opacity-50" aria-hidden /> Installation & usage
                </a>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
