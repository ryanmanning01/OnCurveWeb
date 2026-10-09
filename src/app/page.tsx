import { ONCURVE_BASE_PATH } from "@/config/site";
import Image from "next/image";

const howSteps = [
  "Track your weight (manually or with Apple Health)",
  "Choose your GLP-1 medication",
  "See how your progress compares to clinical trials",
  "Get a clearer view of what to expect",
];

const howCards = [
  {
    icon: "health",
    title: "Works with Apple Health",
    description: "Import your weight data securely and automatically, or log manually. Your data stays on your device.",
  },
  {
    icon: "chart",
    title: "Trusted clinical data",
    description: "Compare your progress to published clinical trial results for Wegovy, Zepbound, Ozempic, Mounjaro, and Saxenda.",
  },
  {
    icon: "lock",
    title: "Your data. Your device.",
    description: "ONCurve is local-first. No accounts, no tracking, no data leaves your device.",
  },
] as const;

function HowCardIcon({ kind }: { kind: (typeof howCards)[number]["icon"] }) {
  if (kind === "health") {
    return (
      <svg className="how-card-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="how-health-gradient" x1="8" y1="4" x2="32" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ff7988" />
            <stop offset=".45" stopColor="#e55392" />
            <stop offset=".75" stopColor="#a064d6" />
            <stop offset="1" stopColor="#4b94ec" />
          </linearGradient>
        </defs>
        <path d="M20 35 6.2 21.6C-3 12.7 10.1-.7 20 9.4 29.9-.7 43 12.7 33.8 21.6L20 35Z" fill="url(#how-health-gradient)" />
      </svg>
    );
  }

  return (
    <svg className="how-card-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {kind === "chart" ? (
        <>
          <path d="M5 5v30h30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <rect x="11" y="23" width="5" height="7" rx="1.5" fill="currentColor" opacity=".5" />
          <rect x="20" y="16" width="5" height="14" rx="1.5" fill="currentColor" opacity=".75" />
          <rect x="29" y="7" width="5" height="23" rx="1.5" fill="currentColor" />
        </>
      ) : (
        <>
          <path d="M12 18v-7a8 8 0 0 1 16 0v7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="7" y="17" width="26" height="20" rx="5" fill="currentColor" opacity=".12" />
          <rect x="7" y="17" width="26" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
          <path d="M20 25v5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works" aria-labelledby="how-heading">
      <div className="how-main">
        <div className="how-layout page-width">
          <div className="how-copy">
            <div className="how-content">
              <h2 id="how-heading">Your progress.<br /><span>Real context.</span></h2>
              <p className="how-description">ONCurve compares your actual weight loss to published clinical trial data, so you can see how your journey lines up with real-world results.</p>
              <ol className="how-steps">
                {howSteps.map((step, index) => (
                  <li key={step}>
                    <span className="how-step-number" aria-hidden="true">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="how-cards">
              {howCards.map((card) => (
                <article className="how-card" key={card.title}>
                  <HowCardIcon kind={card.icon} />
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="how-product-art">
            <Image
              className="how-phone-image"
              src={`${ONCURVE_BASE_PATH}/IphoneHeadeRightWhiteSmall.png`}
              alt="ONCurve clinical trial comparison chart with weight progress, trial reference lines, and current weight, total loss, and below-trial statistics"
              width={1499}
              height={2449}
              sizes="(max-width: 316px) 80vw, (max-width: 1425px) calc(20vw + 190px), 475px"
            />
          </div>
        </div>
        <svg className="how-curves" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-40 38C220 12 360 168 655 139S1110 23 1480 75" stroke="#52bcb8" strokeOpacity=".3" strokeWidth="1.3" vectorEffect="non-scaling-stroke" />
          <path d="M-40 89C240 50 380 204 680 176S1120 80 1480 125" stroke="#4289de" strokeOpacity=".24" strokeWidth="1.3" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </section>
  );
}

function HeroProductArt() {
  return (
    <div className="hero-product-art">
      <Image
        className="hero-phone hero-phone-left"
        src={`${ONCURVE_BASE_PATH}/IphoneHeaderLeftSmall.png`}
        alt="ONCurve welcome screen on an iPhone"
        width={1479}
        height={2443}
        sizes="(max-width: 700px) 39vw, 20vw"
      />
      <Image
        className="hero-phone hero-phone-right"
        src={`${ONCURVE_BASE_PATH}/IphoneHeaderRightSmall.png`}
        alt="Connect your weight data screen on an iPhone"
        width={1495}
        height={2453}
        sizes="(max-width: 700px) 39vw, 20vw"
      />
      <Image
        className="hero-phone hero-phone-center"
        src={`${ONCURVE_BASE_PATH}/IphoneHeaderCenterSmall.png`}
        alt="John’s Snapshot showing weight progress and clinical trial comparisons on an iPhone"
        width={1216}
        height={2434}
        sizes="(max-width: 700px) 40vw, 21vw"
        preload
      />
    </div>
  );
}

function HeroCurves() {
  return (
    <svg className="hero-curves" viewBox="0 0 1440 360" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="curve-fill" x1="720" y1="80" x2="720" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#145b61" stopOpacity=".33" />
          <stop offset="1" stopColor="#145b61" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="curve-teal" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#48d5cb" stopOpacity=".2" />
          <stop offset=".5" stopColor="#5bdcd6" />
          <stop offset="1" stopColor="#54cfe1" stopOpacity=".6" />
        </linearGradient>
      </defs>
      <path d="M-40 68 C220 42 330 225 630 218 S1080 66 1480 134 L1480 360 H-40 Z" fill="url(#curve-fill)" />
      <path d="M-40 68 C220 42 330 225 630 218 S1080 66 1480 134" stroke="url(#curve-teal)" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      <path d="M-40 142 C240 100 350 299 660 274 S1120 145 1480 193" stroke="#458ee2" strokeOpacity=".65" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <div className="dark-section">
        <main id="main-content">
          <section className="hero" aria-labelledby="hero-heading">
            <div className="hero-layout page-width">
              <div className="hero-copy">
                <h1 id="hero-heading">
                  <span>Real<br />Progress.</span>
                  <span className="accent-heading">Real<br />Perspective.</span>
                </h1>
                <p className="hero-description">ONCurve helps you see your weight loss journey in context by comparing your progress to published clinical trial data for GLP-1 medications.</p>
                <ul className="hero-features">
                  <li><span className="feature-icon icon-track" aria-hidden="true" /><span>Track<br />your progress</span></li>
                  <li><span className="feature-icon icon-compare" aria-hidden="true" /><span>Compare to<br />clinical trials</span></li>
                  <li><span className="feature-icon icon-perspective" aria-hidden="true" /><span>Get perspective<br />on the bigger picture</span></li>
                </ul>
              </div>
              <HeroProductArt />
            </div>
            <HeroCurves />
          </section>
          <HowItWorks />
        </main>
      </div>
    </>
  );
}
