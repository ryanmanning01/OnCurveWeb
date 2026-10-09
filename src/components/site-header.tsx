"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ONCURVE_BASE_PATH } from "@/config/site";

const navigation = [
  { label: "How It Works", href: "/how-it-works/" },
  { label: "Clinical Data", href: "/clinical-sources/" },
  { label: "Privacy", href: "/privacy/" },
  { label: "Support" },
  { label: "About" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const releaseScroll = useRef<(() => void) | null>(null);

  function closeMenu() {
    releaseScroll.current?.();
    dialog.current?.close();
    setOpen(false);
    trigger.current?.focus({ preventScroll: true });
  }

  useEffect(() => {
    if (!open) return;
    const menu = dialog.current;
    if (!menu) return;
    const { scrollX, scrollY } = window;
    const original = document.body.getAttribute("style");
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = `-${scrollX}px`;
    document.body.style.width = "100%";
    document.body.style.paddingRight = `${scrollbar}px`;
    releaseScroll.current = () => {
      if (original === null) document.body.removeAttribute("style");
      else document.body.setAttribute("style", original);
      window.scrollTo({ left: scrollX, top: scrollY, behavior: "instant" });
      releaseScroll.current = null;
    };
    menu.showModal();
    const desktop = window.matchMedia("(min-width: 751px)");
    const onResize = () => {
      if (desktop.matches) {
        releaseScroll.current?.();
        menu.close();
        setOpen(false);
      }
    };
    desktop.addEventListener("change", onResize);
    onResize();
    return () => {
      desktop.removeEventListener("change", onResize);
      releaseScroll.current?.();
      menu.close();
    };
  }, [open]);

  function links(inDrawer: boolean) {
    return navigation.map(({ label, href }) => href ? (
      <Link
        key={label}
        href={href}
        aria-current={pathname?.replace(/\/$/, "") === href.replace(/\/$/, "") ? "page" : undefined}
        onClick={inDrawer ? closeMenu : undefined}
      >{label}</Link>
    ) : (
      <span key={label} className="nav-unavailable" aria-disabled="true" title={`${label} — coming soon`}>
        {label}{inDrawer && <small>Coming soon</small>}
      </span>
    ));
  }

  return (
    <div className="header-background">
      <header className="site-header page-width">
        <button ref={trigger} className="menu-trigger" type="button" aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)}>
          <span aria-hidden="true"><i /><i /><i /></span>
        </button>
        <Link className="brand" href="/" aria-label="ONCurve home">
          <Image className="brand-logo" src={`${ONCURVE_BASE_PATH}/OnCurveLogo.svg`} alt="ONCurve" width={4120} height={826} unoptimized />
          <span className="brand-tagline">Real Progress. Real Perspective.</span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">{links(false)}</nav>
        <div className="header-cta">
          <Image className="app-store-badge" src={`${ONCURVE_BASE_PATH}/app-store-badge.svg`} alt="Download on the App Store" width={119.66407} height={40} unoptimized />
        </div>
      </header>
      <dialog ref={dialog} id="mobile-navigation" className="navigation-dialog" aria-label="Main navigation" onCancel={(event) => { event.preventDefault(); closeMenu(); }} onClose={() => { releaseScroll.current?.(); setOpen(false); }} onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const controls = event.currentTarget.querySelectorAll<HTMLElement>('.navigation-panel button:not(:disabled), .navigation-panel a[href]');
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}>
        <button className="menu-backdrop" type="button" tabIndex={-1} aria-label="Close navigation" onClick={closeMenu} />
        <div className="navigation-panel">
          <button className="menu-close" type="button" aria-label="Close navigation" onClick={closeMenu} autoFocus><span aria-hidden="true">×</span></button>
          <nav className="drawer-nav" aria-label="Mobile navigation">{links(true)}</nav>
        </div>
      </dialog>
    </div>
  );
}
