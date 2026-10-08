import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — ONCurve",
  description: "ONCurve's privacy model and details requiring verification.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="info-page page-width" id="main-content">
      <Link className="info-back-link" href="/">← Back to ONCurve</Link>
      <h1>Privacy Policy</h1>
      <p className="info-notice"><strong>Draft — verification required before publication.</strong> This page summarizes ONCurve&apos;s intended privacy model. Confirm these statements against the released app and complete the details below before publishing a final policy.</p>
      <section aria-labelledby="local-storage-heading">
        <h2 id="local-storage-heading">Local-first storage</h2>
        <p>ONCurve is designed to store your weight and progress information locally on your device. Verify storage locations, backup behavior, exports, and any external services before making definitive data-handling claims.</p>
      </section>
      <section aria-labelledby="accounts-heading">
        <h2 id="accounts-heading">No account requirement</h2>
        <p>The intended app experience does not require an ONCurve account. Confirm that this remains accurate for every feature in the released app.</p>
      </section>
      <section aria-labelledby="health-access-heading">
        <h2 id="health-access-heading">Read-only Apple Health access</h2>
        <p>ONCurve&apos;s intended Apple Health integration is optional and read-only, providing an alternative to manually logging weight. Verify the exact data types requested, permission behavior, and how users can manage access in their device settings.</p>
      </section>
      <section aria-labelledby="privacy-details-heading">
        <h2 id="privacy-details-heading">Details still to confirm</h2>
        <p>Complete the policy&apos;s description of website hosting logs, analytics or other third-party services, email handling, data retention, deletion, and backups where applicable. Add a verified public contact address and the final policy&apos;s effective date.</p>
        <p>This draft does not establish guarantees about security, tracking, or data transfers.</p>
      </section>
    </main>
  );
}
