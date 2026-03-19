import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata = {
  title: "Elite Ecosystem — Jing Guo",
};

export default function Elite() {
  return (
    <CaseStudyLayout
      title="Elite Ecosystem Experiences"
      subtitle="Building awareness campaigns, nomination flows, and ecosystem experiences for Yelp's Elite community — reinforcing belonging and long-term retention."
      role="Lead Designer"
      team="Yelp Community Team"
      year="2023–2025"
      tags={["Community", "Campaigns", "Retention", "Elite"]}
    >
      <h2>Overview</h2>
      <p>
        Yelp Elite is the top tier of the contributor community — a status that carries real social
        meaning for members. This project spanned the full Elite ecosystem: how users discover Elite,
        how they get nominated, how they celebrate their status, and how Yelp deepens that relationship
        over time.
      </p>

      <h2>The Challenge</h2>
      <p>
        Elite status existed, but the experience around it was fragmented. Nomination flows were
        confusing. Awareness of Elite among eligible non-members was low. And for existing Elite
        members, there weren&apos;t enough touchpoints reinforcing why Elite membership was meaningful
        beyond an annual badge.
      </p>

      <h2>What We Designed</h2>

      <h3>Awareness & Discovery</h3>
      <p>
        Surfaces across Yelp where high-quality contributors could learn about Elite — contextual
        nudges that felt like recognition rather than recruitment. The goal was to make eligible users
        feel seen before they even applied.
      </p>

      <h3>Nomination Flow</h3>
      <p>
        Redesigned the end-to-end nomination experience — both self-nomination and peer nomination.
        Reduced friction, clarified criteria, and made the submission feel like an intentional,
        meaningful act rather than a form.
      </p>

      <h3>Elite Campaign Experiences</h3>
      <p>
        Designed campaign moments tied to the Elite calendar — annual renewals, event invitations,
        milestone celebrations. Each touchpoint was designed to reinforce the narrative: Elite is a
        community, not just a badge.
      </p>

      <h2>Outcome</h2>
      <p>
        Nomination volume increased. Elite member engagement with community features deepened.
        The ecosystem now has a coherent arc — from first awareness to long-term belonging.
      </p>

      <p className="text-neutral-400 italic text-sm mt-8">
        Full case study details available on request — contains confidential product metrics.
      </p>
    </CaseStudyLayout>
  );
}
