import { SiteHeader } from "@/components/teracle/site-header";
import { AnnouncementBar, Hero } from "@/components/teracle/hero";
import { Foundations } from "@/components/teracle/foundations";
import { ComponentCards } from "@/components/teracle/component-cards";
import { ButtonLab } from "@/components/teracle/button-lab";
import { Accessibility } from "@/components/teracle/accessibility";
import { Usage } from "@/components/teracle/usage";
import { Resources, CtaBand } from "@/components/teracle/resources";
import { SiteFooter } from "@/components/teracle/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-surface-base text-ink-primary">
      <AnnouncementBar />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Foundations />
        <ComponentCards />
        <ButtonLab />
        <Accessibility />
        <Usage />
        <Resources />
        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
