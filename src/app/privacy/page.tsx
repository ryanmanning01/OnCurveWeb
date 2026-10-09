import type { Metadata } from "next";
import Link from "next/link";
import { ONCURVE_CONTACT_EMAIL } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy — ONCurve",
  description: "Learn how ONCurve handles personal information, local storage, Apple Health permissions, and data deletion, and how to contact us about privacy.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="information-page" id="main-content">
      <section className="product-hero" aria-labelledby="privacy-heading">
        <div className="page-width">
          <h1 id="privacy-heading">Privacy Policy<br /><span>Your data. Your control.</span></h1>
          <p className="product-intro">Understand what information ONCurve uses, how it stays on your device, and the choices you have over your data.</p>
        </div>
      </section>
      <div className="info-page page-width">
        <p>ONCurve is developed by FLOW UX Design LLC. This policy describes personal information used by the ONCurve iOS app, your interactions with this website, and information you choose to share when contacting us.</p>
        <section aria-labelledby="information-heading">
          <h2 id="information-heading">Information you use in ONCurve</h2>
          <p>ONCurve uses the weight measurements and dates you enter manually or allow it to read from Apple Health to display your weight history and progress. Profile information, your goal weight, and your chart and appearance preferences help personalize the experience.</p>
          <p>Published clinical trial results provide context for your progress charts. These research references are separate from your personal weight history; comparing your progress with a study does not submit your information to that study.</p>
        </section>
        <section aria-labelledby="local-storage-heading">
          <h2 id="local-storage-heading">Local-first storage</h2>
          <p>Your personal app information is stored locally on your device. ONCurve uses that information to build your progress charts and remember your preferences. You do not need to send your weight history to us to use these features.</p>
          <p>Device-level backups are separate from ONCurve&apos;s local storage. Whether app information is included in a device backup depends on your device settings and backup service. Review those settings when deciding how to protect or remove copies of your information.</p>
        </section>
        <section aria-labelledby="accounts-heading">
          <h2 id="accounts-heading">No account requirement</h2>
          <p>ONCurve is designed to let you track your progress without creating an account.</p>
          <p>You do not need to provide an email address or create a login to record your weight and view your progress. Contacting support is optional and separate from using the app.</p>
        </section>
        <section aria-labelledby="health-access-heading">
          <h2 id="health-access-heading">Read-only Apple Health access</h2>
          <p>Connecting Apple Health is optional. With your permission, ONCurve can read supported weight measurements as an alternative to manually logging weight. Its access is read-only: ONCurve does not write or delete records in Apple Health.</p>
          <p>You choose whether to grant access through Apple&apos;s permission controls and can review or revoke that access in Apple Health or your device settings. You can continue to enter measurements manually without connecting Apple Health.</p>
          <p>Revoking permission controls future access. To remove information already stored locally by ONCurve, use the app&apos;s data deletion controls described below.</p>
        </section>
        <section aria-labelledby="deletion-heading">
          <h2 id="deletion-heading">Managing and deleting your data</h2>
          <p>You can review your weight entries and preferences in the app. To clear ONCurve&apos;s local data, open Settings and choose <strong>Delete All ONCurve Data</strong>. The app&apos;s <strong>Privacy &amp; Data</strong> section explains what this action removes.</p>
          <p>Deleting ONCurve data does not delete the original measurements in Apple Health. Manage those records separately in Apple Health. Copies held in device backups or information you have shared outside the app also need to be managed separately.</p>
        </section>
        <section aria-labelledby="website-heading">
          <h2 id="website-heading">Using this website and external links</h2>
          <p>Browsing this website does not give it access to the weight history stored in your ONCurve app or to your Apple Health records. This website does not include analytics or advertising tracking scripts.</p>
          <p>Like other websites, requests to load pages and assets include technical information such as an IP address and browser request details. The hosting provider may process this information to deliver the website and operate its service.</p>
          <p>Links to the App Store, clinical research, and other external resources take you to services operated by others. Their privacy policies apply when you visit or use those services.</p>
        </section>
        <section aria-labelledby="support-privacy-heading">
          <h2 id="support-privacy-heading">Information you share with support</h2>
          <p>If you email us, you share your email address and the contents of your message, including any attachments you choose to send. We use that information to respond to your question or investigate the issue you report. Email is handled separately from the personal information stored locally in the app.</p>
          <p>Please include only the details needed to explain your question. Avoid sending medical records, sensitive health information, or screenshots that reveal information you do not want to share. You can ask about removing your support correspondence by contacting us at the address below.</p>
        </section>
        <section aria-labelledby="policy-changes-heading">
          <h2 id="policy-changes-heading">Changes to this policy</h2>
          <p>We may update this policy as ONCurve&apos;s features or information-handling practices change. Updates will appear on this page. If you have questions about how a change affects your use of ONCurve, contact us.</p>
        </section>
        <section aria-labelledby="privacy-contact-heading">
          <h2 id="privacy-contact-heading">Contact us about privacy</h2>
          <p>For questions about this policy or information you have shared with FLOW UX Design LLC, email <a href={`mailto:${ONCURVE_CONTACT_EMAIL}?subject=ONCurve%20Privacy`}>{ONCURVE_CONTACT_EMAIL}</a>.</p>
          <p>For help with Apple Health permissions or deleting local app data, visit our <Link href="/support/">Support page</Link>.</p>
        </section>
      </div>
    </main>
  );
}
