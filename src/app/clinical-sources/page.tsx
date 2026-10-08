import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clinical Data & Sources — ONCurve",
  description: "Published clinical trial sources used for ONCurve's progress comparisons.",
  robots: { index: false, follow: true },
};

export default function ClinicalSourcesPage() {
  return (
    <main className="info-page page-width" id="main-content">
      <Link className="info-back-link" href="/">← Back to ONCurve</Link>
      <h1>Clinical Data &amp; Sources</h1>
      <p className="info-notice"><strong>Source details required before publication.</strong> This page is a placeholder until ONCurve&apos;s study references and comparison methodology have been verified.</p>
      <section aria-labelledby="clinical-comparison-heading">
        <h2 id="clinical-comparison-heading">Putting progress in context</h2>
        <p>ONCurve compares weight-loss progress against published clinical trial results for GLP-1 medications, helping users see their journey in context.</p>
      </section>
      <section aria-labelledby="source-details-heading">
        <h2 id="source-details-heading">References and methodology to add</h2>
        <p>For each comparison available in the app, provide the study title, publication, source link, medication and dose, participant population, follow-up period, and the outcome used. Document how the app derives its comparison curves and handles differences between studies.</p>
        <p>No study citations or clinical values are listed here until those details are supplied and verified.</p>
      </section>
    </main>
  );
}
