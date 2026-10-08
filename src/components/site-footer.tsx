import Image from "next/image";
import Link from "next/link";
import { ONCURVE_CONTACT_EMAIL } from "@/config/site";
import CopyrightYear from "@/components/copyright-year";

function EmailLink({ children, subject }: { children: React.ReactNode; subject: string }) {
  const email = ONCURVE_CONTACT_EMAIL.trim();

  return email ? (
    <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}>{children}</a>
  ) : (
    <span className="footer-link-unavailable" aria-disabled="true" title="Email contact details coming soon">
      {children}<span className="sr-only"> — email contact details coming soon</span>
    </span>
  );
}

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-layout page-width">
        <div className="footer-branding">
          <Link className="footer-brand" href="/" aria-label="ONCurve home">
            <Image className="footer-logo" src="/OnCurveLogo.svg" alt="ONCurve" width={4120} height={826} unoptimized />
          </Link>
          <p className="footer-tagline">Real Progress. Real Perspective.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <EmailLink subject="ONCurve App Feedback">Send Feedback</EmailLink>
          <EmailLink subject="ONCurve Inquiry">Contact Us</EmailLink>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/clinical-sources">Clinical Data &amp; Sources</Link>
        </nav>
        <p className="footer-copyright">© <CopyrightYear initialYear={year} /> FLOW UX Design LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
