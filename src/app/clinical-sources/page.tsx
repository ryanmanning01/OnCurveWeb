import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Data & Sources — ONCurve",
  description: "Published clinical trial sources used for ONCurve's progress comparisons.",
  robots: { index: false, follow: true },
};

// Trial identifiers and citations match the Release 1 app's bundled source records.
const sources = [
  { medication: "Wegovy", trial: "STEP 1", id: "NCT03548935", citation: "Wilding JPH, et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity. New England Journal of Medicine. 2021.", publication: "https://doi.org/10.1056/NEJMoa2032183" },
  { medication: "Zepbound", trial: "SURMOUNT-1", id: "NCT04184622", citation: "Jastreboff AM, et al. Tirzepatide Once Weekly for the Treatment of Obesity. New England Journal of Medicine. 2022.", publication: "https://doi.org/10.1056/NEJMoa2206038" },
  { medication: "Mounjaro", trial: "SURPASS-2", id: "NCT03987919", citation: "Frías JP, et al. Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes. New England Journal of Medicine. 2021;385:503–515.", publication: "https://doi.org/10.1056/NEJMoa2107519" },
  { medication: "Saxenda", trial: "SCALE Obesity and Prediabetes / NN8022-1839", id: "NCT01272219", citation: "Pi-Sunyer X, et al. A Randomized, Controlled Trial of 3.0 mg of Liraglutide in Weight Management. New England Journal of Medicine. 2015;373:11–22.", publication: "https://doi.org/10.1056/NEJMoa1411892" },
  { medication: "Ozempic", trial: "SUSTAIN 1", id: "NCT02054897", citation: "Sorli C, et al. Efficacy and safety of once-weekly semaglutide monotherapy versus placebo in patients with type 2 diabetes (SUSTAIN 1). Lancet Diabetes & Endocrinology. 2017.", publication: "https://pubmed.ncbi.nlm.nih.gov/28110911/" },
];

export default function ClinicalSourcesPage() {
  return (
    <main className="information-page" id="main-content">
      <section className="product-hero" aria-labelledby="clinical-sources-heading">
        <div className="page-width">
          <h1 id="clinical-sources-heading">Clinical Data &amp; Sources<br /><span>Research behind the reference.</span></h1>
          <p className="product-intro">Published clinical trial sources used for ONCurve’s progress comparisons.</p>
        </div>
      </section>
      <div className="info-page page-width">
        <p className="info-notice">These references match the studies listed in ONCurve&apos;s Release 1 source catalog. ClinicalTrials.gov records are hosted by the U.S. National Library of Medicine. Publications and regulatory reviews are identified separately below.</p>
        <section aria-labelledby="clinical-comparison-heading">
          <h2 id="clinical-comparison-heading">Putting progress in context</h2>
          <p>ONCurve compares weight-loss progress against published clinical trial results for GLP-1 medications, helping users see their journey in context.</p>
        </section>
        <section aria-labelledby="study-sources-heading">
          <h2 id="study-sources-heading">Study sources</h2>
          <div className="clinical-source-list">
            {sources.map(source => (
              <article className="clinical-source" key={source.id} aria-labelledby={`source-${source.id}`}>
                <h3 id={`source-${source.id}`}>{source.medication} — {source.trial}</h3>
                <p>{source.citation}</p>
                <ul className="clinical-source-links">
                  <li><a href={`https://clinicaltrials.gov/study/${source.id}`}>ClinicalTrials.gov study record — {source.id}</a></li>
                  <li><a href={source.publication}>{source.medication === "Ozempic" ? "Published study on PubMed (National Library of Medicine)" : "Published study (journal / DOI)"}</a></li>
                  {source.medication === "Ozempic" && <li><a href="https://www.accessdata.fda.gov/drugsatfda_docs/nda/2017/209637Orig1s000MedR.pdf">FDA Ozempic clinical review — NDA 209637 (PDF)</a></li>}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section aria-labelledby="methodology-heading">
          <h2 id="methodology-heading">How ONCurve uses these sources</h2>
          <p>The Trial Curve uses percentage body-weight changes for the selected study and trial arm, applied to your starting weight. Stored checkpoints may be published values, digitized estimates, derived values, or baseline anchors. Between checkpoints, ONCurve uses straight-line interpolation within the observed trial range.</p>
          <p>The Trial Reference is a separate ONCurve calculation that continues the comparison from your recorded weight using subsequent changes in the Trial Curve. Your Weight shows measurements from manual entries or Apple Health.</p>
          <p>Study populations, treatment arms, and analysis methods differ. These comparisons are not personalized predictions, treatment targets, or treatment recommendations. Individual results vary.</p>
        </section>
      </div>
    </main>
  );
}
