import type { Metadata } from "next";
import Link from "next/link";
import { ONCURVE_CONTACT_EMAIL } from "@/config/site";

export const metadata: Metadata = {
  title: "Support — ONCurve",
  description: "Get help with ONCurve, find answers about weight tracking and Apple Health, troubleshoot common issues, or contact the developer.",
};

const questions = [
  { question: "What is ONCurve?", answer: "ONCurve is an iOS app that helps you visualize your weight-loss progress alongside published results from GLP-1 clinical trials. It provides a clearer way to understand your personal journey in the context of clinical research." },
  { question: "Does ONCurve predict how much weight I’ll lose?", answer: "No. ONCurve shows published clinical trial results for comparison and context. Those results represent study populations and are not predictions of your individual outcome." },
  { question: "Can ONCurve connect to Apple Health?", answer: "Yes. ONCurve can read supported weight measurements from Apple Health with your permission. ONCurve does not write or delete information in Apple Health." },
  { question: "Can I enter my weight manually?", answer: "Yes. ONCurve supports manual weight entry so you can maintain your weight history even if you don’t use Apple Health." },
  { question: "Can I customize my progress chart?", answer: "Yes. You can choose whether to display your goal-weight line and 10%, 15%, and 20% weight-loss reference lines. ONCurve also offers appearance and chart animation preferences." },
  { question: "Do I need to create an account?", answer: "No. ONCurve is designed to work without requiring an account. Personal app data is stored locally on your device." },
  { question: "How do I delete my ONCurve data?", answer: "Open Settings in ONCurve and use Delete All ONCurve Data to remove the app’s local data. You can review what this removes in Privacy & Data. Deleting information from ONCurve does not delete the original records stored in Apple Health." },
];

const troubleshooting = [
  { title: "Apple Health data isn’t appearing", steps: ["Check that ONCurve has permission to read weight data from Apple Health.", "Confirm that weight measurements exist in Apple Health.", "Close and reopen ONCurve if needed.", "Contact support if the problem continues."] },
  { title: "My weight history looks incorrect", steps: ["Review your weight entries and measurement dates.", "Check the original measurements in Apple Health if connected.", "Verify that your profile information is correct.", "Contact support if the issue persists."] },
  { title: "The app isn’t responding as expected", steps: ["Close and reopen ONCurve.", "Check whether an app update is available.", "Restart your iPhone if necessary.", "If the issue continues, email support with details."] },
];

export default function SupportPage() {
  return (
    <main id="main-content" className="product-page support-page">
      <section className="product-hero" aria-labelledby="support-heading">
        <div className="page-width">
          <h1 id="support-heading">We&apos;re here to help.<br /><span>Support for your journey.</span></h1>
          <p className="product-intro">Have a question about ONCurve? Need help getting started or something isn&apos;t working as expected? Find answers to common questions below or reach out directly.</p>
        </div>
      </section>

      <div className="page-width support-content">
        <div className="support-help-grid">
          <section className="support-contact" aria-labelledby="contact-heading">
            <h2 id="contact-heading">Get in touch.</h2>
            <p>Whether you have a question, found a bug, or want to share feedback, we&apos;d love to hear from you.</p>
            <a className="support-button" href={`mailto:${ONCURVE_CONTACT_EMAIL}?subject=ONCurve%20Support`}>Email Support</a>
            <p className="support-email">{ONCURVE_CONTACT_EMAIL}</p>
          </section>
          <section className="support-faq" aria-labelledby="faq-heading">
            <h2 id="faq-heading">Frequently asked questions.</h2>
            <div className="support-questions">
              {questions.map(({ question, answer }) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <section className="support-troubleshooting" aria-labelledby="troubleshooting-heading">
          <h2 id="troubleshooting-heading">Having trouble?</h2>
          <div className="support-topic-grid">
            {troubleshooting.map(({ title, steps }) => (
              <article className="support-topic" key={title}>
                <h3>{title}</h3>
                <ul>{steps.map(step => <li key={step}>{step}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="support-report" aria-labelledby="report-heading">
          <h2 id="report-heading">Found something that isn&apos;t working?</h2>
          <p>Help us investigate by including a few details in your email:</p>
          <ul>
            <li>What you were trying to do.</li>
            <li>What happened instead.</li>
            <li>Your iPhone model and iOS version.</li>
            <li>Your ONCurve app version, if available.</li>
            <li>A screenshot, if helpful.</li>
          </ul>
          <a className="support-button" href={`mailto:${ONCURVE_CONTACT_EMAIL}?subject=ONCurve%20Bug%20Report`}>Report an Issue</a>
          <p className="support-privacy-note">Please do not send sensitive medical information or personal health records when reporting a problem.</p>
        </section>

        <section className="support-resources" aria-labelledby="resources-heading">
          <h2 id="resources-heading">Additional resources.</h2>
          <nav aria-label="Support resources">
            <Link href="/how-it-works/">How It Works <span aria-hidden="true">→</span></Link>
            <Link href="/clinical-sources/">Clinical Data &amp; Sources <span aria-hidden="true">→</span></Link>
            <Link href="/privacy/">Privacy Policy <span aria-hidden="true">→</span></Link>
          </nav>
        </section>
      </div>
    </main>
  );
}
