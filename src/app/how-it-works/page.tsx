import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ONCURVE_BASE_PATH } from "@/config/site";

export const metadata: Metadata = {
  title: "How It Works — ONCurve",
  description: "Explore your Snapshot, follow your weight progress, compare supported trial curves, and personalize ONCurve around your journey.",
};

const screenshots = {
  snapshot: { file: "IphoneHeaderCenterSmall.png", width: 1216, height: 2434, alt: "John’s ONCurve Snapshot with a personal weight curve, trial reference curve, goal line, and current progress summary" },
  chart: { file: "IphoneHeadeRightWhiteSmall.png", width: 1499, height: 2449, alt: "ONCurve Snapshot in light appearance, showing weight progress over time and a goal-weight reference line" },
  welcome: { file: "IphoneHeaderLeftSmall.png", width: 1479, height: 2443, alt: "ONCurve welcome screen introducing personal setup and progress comparisons" },
  health: { file: "IphoneHeaderRightSmall.png", width: 1495, height: 2453, alt: "ONCurve’s Connect your weight data screen offering read-only Apple Health access or manual weight entry" },
};

function ProductScreenshot({ kind, caption, priority = false }: { kind: keyof typeof screenshots; caption?: string; priority?: boolean }) {
  const screen = screenshots[kind];
  return (
    <figure className={`product-screenshot product-screenshot-${kind}`}>
      <Image src={`${ONCURVE_BASE_PATH}/${screen.file}`} alt={screen.alt} width={screen.width} height={screen.height} priority={priority} sizes="(max-width: 750px) 280px, 340px" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

function Highlights({ items }: { items: string[] }) {
  return <ul className="product-highlights">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

export default function HowItWorksPage() {
  return (
    <main id="main-content" className="product-page">
      <section className="product-hero" aria-labelledby="product-heading">
        <div className="page-width product-hero-layout">
          <div>
            <p className="product-eyebrow">How ONCurve works</p>
            <h1 id="product-heading">Your progress.<br /><span>A clearer perspective.</span></h1>
            <p className="product-intro">ONCurve brings your weight-loss journey into focus by showing your progress alongside published GLP-1 clinical trial results. Track your changes, explore comparisons, and personalize the experience around what matters to you.</p>
            <a className="product-text-link" href="#see-your-progress">Explore your Snapshot <span aria-hidden="true">↓</span></a>
          </div>
          <ProductScreenshot kind="snapshot" priority />
        </div>
      </section>

      <div className="page-width product-details">
        <section id="see-your-progress" className="product-feature" aria-labelledby="progress-heading">
          <ProductScreenshot kind="chart" caption="Your Snapshot, in light appearance." />
          <div className="product-feature-copy">
            <p className="product-eyebrow">See your progress</p>
            <h2 id="progress-heading">See how far you&apos;ve come.</h2>
            <p>Your progress is more than a number on the scale. ONCurve gives you a visual view of your weight-loss journey, helping you understand how your weight has changed since you started.</p>
            <Highlights items={["View your weight history over time.", "See your starting weight and latest progress.", "Follow your progress on an interactive chart.", "Track your progress toward your goal."]} />
          </div>
        </section>

        <section className="product-feature product-feature-reverse" aria-labelledby="comparison-heading">
          <ProductScreenshot kind="snapshot" caption="Your personal curve alongside a trial reference." />
          <div className="product-feature-copy">
            <p className="product-eyebrow">Put your progress in perspective</p>
            <h2 id="comparison-heading">Your journey, alongside clinical trial results.</h2>
            <p>ONCurve lets you compare your actual weight-loss progress with published results from GLP-1 clinical trials. Explore how your personal journey compares with the average results reported in research.</p>
            <Highlights items={["View your personal weight-loss curve.", "Compare against supported clinical trial curves.", "Explore different supported medications and studies.", "Understand progress in terms of percentage weight change."]} />
            <p className="product-note">Clinical trial results represent study populations, not predictions of individual outcomes.</p>
            <Link className="product-text-link" href="/clinical-sources/">Clinical Data &amp; Sources <span aria-hidden="true">→</span></Link>
          </div>
        </section>

        <section className="product-preferences" aria-labelledby="chart-heading">
          <div>
            <p className="product-eyebrow">Make the chart yours</p>
            <h2 id="chart-heading">Focus on what matters to you.</h2>
            <p>Your progress chart should work the way you do. ONCurve provides display preferences that let you personalize what appears on the chart and how you experience it.</p>
          </div>
          <Highlights items={["Show or hide your goal-weight reference line.", "Choose whether to display 10%, 15%, and 20% weight-loss reference lines.", "Adjust chart animation preferences.", "Explore the chart with the information most relevant to you."]} />
        </section>

        <section className="product-feature" aria-labelledby="profile-heading">
          <ProductScreenshot kind="welcome" caption="The Welcome screen introduces your personal setup." />
          <div className="product-feature-copy">
            <p className="product-eyebrow">Your profile, your journey</p>
            <h2 id="profile-heading">Set up your personal starting point.</h2>
            <p>ONCurve uses your personal profile to give context to your progress. Set up the information that matters to your journey and update it as things change.</p>
            <Highlights items={["Configure your supported GLP-1 medication.", "Manage your personal profile information.", "Add or update your profile photo.", "Set or update your weight goal."]} />
          </div>
        </section>

        <section className="product-feature product-feature-reverse" aria-labelledby="health-heading">
          <ProductScreenshot kind="health" caption="Choose Apple Health or enter weight manually." />
          <div className="product-feature-copy">
            <p className="product-eyebrow">Apple Health integration</p>
            <h2 id="health-heading">Your weight data, connected.</h2>
            <p>ONCurve can use weight information from Apple Health to help you see your progress without having to enter every measurement manually.</p>
            <Highlights items={["Connect supported Apple Health weight data.", "Use existing weight measurements in your progress experience.", "Manage Apple Health permissions in iOS Settings.", "ONCurve requests read-only access to body-weight measurements."]} />
            <p className="product-note">ONCurve does not write to Apple Health or delete its source measurements. Manual weight entry remains available.</p>
          </div>
        </section>

        <div className="product-control-grid">
          <section aria-labelledby="preferences-heading">
            <p className="product-eyebrow">Personalize your experience</p>
            <h2 id="preferences-heading">Designed to work your way.</h2>
            <p>ONCurve includes simple preferences to help you create a comfortable, focused experience.</p>
            <Highlights items={["Choose System, Light, or Dark appearance.", "Enable or disable chart animations.", "Customize chart reference-line visibility.", "Reset preferences to their defaults without resetting your weight history or profile."]} />
          </section>
          <section aria-labelledby="control-heading">
            <p className="product-eyebrow">Privacy and control</p>
            <h2 id="control-heading">Your journey stays yours.</h2>
            <p>ONCurve is designed with privacy in mind. Your personal information is stored locally on your device, and you remain in control of your app data.</p>
            <Highlights items={["No ONCurve account required.", "Local-first personal data storage.", "Read-only Apple Health access.", "In-app data management and local deletion controls."]} />
            <Link className="product-text-link" href="/privacy/">Privacy Policy <span aria-hidden="true">→</span></Link>
          </section>
        </div>
      </div>

      <section className="product-final" aria-labelledby="product-final-heading">
        <div className="page-width">
          <p className="product-eyebrow">Progress and perspective</p>
          <h2 id="product-final-heading">A better way to see your progress.</h2>
          <p>See your journey clearly, understand your comparisons, and make the experience your own.</p>
          <Image className="product-download-badge" src={`${ONCURVE_BASE_PATH}/app-store-badge.svg`} alt="Download on the App Store" width={119.66407} height={40} unoptimized />
        </div>
      </section>
    </main>
  );
}
