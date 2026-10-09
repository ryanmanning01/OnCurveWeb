import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — ONCurve",
  description: "ONCurve helps people see their weight journey alongside published clinical trial results, understand their progress, and gain perspective along the way.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="product-page about-page">
      <section className="product-hero" aria-labelledby="about-heading">
        <div className="page-width">
          <h1 id="about-heading">Your journey.<br /><span>More perspective.</span></h1>
          <p className="product-intro">ONCurve helps you see your weight-loss journey alongside published GLP-1 clinical trial results, giving you a clearer view of your progress and context for the changes you see along the way.</p>
        </div>
      </section>

      <div className="page-width about-content">
        <section className="about-purpose" aria-labelledby="purpose-heading">
          <h2 id="purpose-heading">Progress deserves context.</h2>
          <div>
            <p>A weigh-in tells you where you are today. Seeing your measurements over time tells a fuller story: where you started, how your weight has changed, and how far you&apos;ve come.</p>
            <p>ONCurve was created to make that story easier to see. By bringing your own weight history and published trial results into one view, it helps you explore your progress with more context than a single number can provide.</p>
          </div>
        </section>

        <section className="about-principles" aria-label="What guides ONCurve">
          <article>
            <h2>See the journey.</h2>
            <p>Your progress is personal. ONCurve keeps your recorded weight history at the center of the experience, so you can follow the changes from your starting point and see how they unfold over time.</p>
          </article>
          <article>
            <h2>Explore the context.</h2>
            <p>Published clinical trial results offer another point of reference. Viewing them alongside your own curve helps you explore similarities and differences, rather than treating research results as a promise about your future.</p>
          </article>
          <article>
            <h2>Gain perspective.</h2>
            <p>A clearer view can help you notice patterns, ask better questions, and reflect on your progress. The goal is to give you useful context throughout your journey, not a score to chase or a standard you have to meet.</p>
          </article>
        </section>

        <section className="about-context" aria-labelledby="context-heading">
          <h2 id="context-heading">A reference, not a prediction.</h2>
          <p>Every weight-loss journey is different. Clinical trials describe results in study populations, under specific study conditions. Your experience may follow a different path.</p>
          <p>ONCurve provides a way to view and compare progress. It does not predict your weight loss, provide medical advice, or recommend treatment. Questions about medication, treatment, or your health belong in a conversation with your healthcare professional.</p>
          <Link className="product-text-link" href="/clinical-sources/">Explore Clinical Data &amp; Sources <span aria-hidden="true">→</span></Link>
        </section>

        <section className="about-control" aria-labelledby="ownership-heading">
          <h2 id="ownership-heading">Your progress. Your perspective.</h2>
          <p>Choose the chart details that matter to you, bring in supported weight measurements from Apple Health or enter them manually, and keep your personal information locally on your device. ONCurve is designed to let you explore your journey without requiring an account.</p>
          <p>Developed by FLOW UX Design LLC, ONCurve brings together a clear product experience and transparent research references to help people understand their progress.</p>
          <nav className="about-resource-links" aria-label="Learn more about ONCurve">
            <Link className="product-text-link" href="/how-it-works/">See How It Works <span aria-hidden="true">→</span></Link>
            <Link className="product-text-link" href="/privacy/">Privacy Policy <span aria-hidden="true">→</span></Link>
            <Link className="product-text-link" href="/support/">Get Support <span aria-hidden="true">→</span></Link>
          </nav>
        </section>
      </div>
    </main>
  );
}
