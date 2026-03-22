import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata = { title: "Xiggit — Jing Guo" };

export default function Xiggit() {
  return (
    <CaseStudyLayout
      title="Xiggit"
      subtitle="Redesigning onboarding for a fintech app targeting low-income users — building trust, reducing friction, and increasing enrollment."
      role="UX/UI Designer"
      team="Academic Project"
      year="2021"
      tags={["Mobile", "Fintech", "Onboarding", "UX Research"]}
      currentHref="/other-work/xiggit"
    >
      <h2>Goal</h2>
      <p>
        Create an engaging onboarding experience that earns trust from new users and increases
        enrollment rates for a financial management app targeting low-income individuals.
      </p>

      <h2>User Research</h2>
      <p>
        Sensitive interviews with low-income target users uncovered their financial realities:
        essential spending dominates budgets, impulsive spending and inconsistent income are major
        obstacles, and trust in financial apps is fragile.
      </p>
      <p>
        <strong>How Might We questions:</strong>
      </p>
      <ul>
        <li>Engage users meaningfully during onboarding?</li>
        <li>Gain user trust quickly?</li>
        <li>Reveal product strengths without overwhelming?</li>
      </ul>

      <h2>Design Audit</h2>
      <p>The existing onboarding had clear problems:</p>
      <ul>
        <li>Excessive text per page</li>
        <li>Scattered user info collection</li>
        <li>Hidden fee information</li>
        <li>Unclear bank account linking benefits</li>
        <li>No feature highlights before commitment</li>
      </ul>
      <p>
        Competitive analysis of Mint, Digit, and Acorn informed a design direction:
        <strong> Professional, Clean, Sophisticated, Elegant.</strong>
      </p>

      <h2>Key Design Improvements</h2>
      <ul>
        <li>Separate account creation from full signup — reduce upfront commitment</li>
        <li>Add milestone pages for satisfaction and momentum</li>
        <li>Allow feature reviews before bank linking — build value before asking for trust</li>
        <li>Separate fee information for full visibility</li>
      </ul>

      <h2>Final Flow</h2>
      <p>Eight-screen onboarding sequence:</p>
      <ol>
        <li>Landing Page</li>
        <li>Splash Page</li>
        <li>Create Account</li>
        <li>App Highlights</li>
        <li>Link Bank Account</li>
        <li>Complete User Info</li>
        <li>Fees &amp; Clauses</li>
        <li>Home Screen</li>
      </ol>

      <h2>Reflections</h2>
      <ul>
        <li>UI design is critical for financial apps — visual polish directly affects perceived trustworthiness.</li>
        <li>Cross-functional communication is essential for understanding technical and legal boundaries.</li>
      </ul>
    </CaseStudyLayout>
  );
}
