import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata = {
  title: "Community Q&A — Jing Guo",
};

export default function CommunityQA() {
  return (
    <CaseStudyLayout
      title="Community Q&A"
      subtitle="Designing and scaling a 0→1 community-driven contribution model across multiple product surfaces at Yelp."
      role="Lead Designer (Sole)"
      team="1 PM · 6 Engineers · 1 Data Scientist"
      year="2023–2026"
      tags={["0→1 Product", "Community", "Contribution Systems", "Scale"]}
    >
      <h2>Context</h2>
      <p>
        Yelp&apos;s contribution model was built almost entirely around reviews. But reviews couldn&apos;t
        answer everything — and review volume was plateauing. We needed new participation pathways
        that lowered the barrier to contribution while complementing (not competing with) existing features.
      </p>
      <p>
        I led design end-to-end as the sole designer, shaping product strategy, conducting research,
        and owning all design decisions from concept through launch.
      </p>

      <h2>Three-Stage Development</h2>

      <h3>Stage 1 — Vision Work</h3>
      <p>
        We started by establishing Q&amp;A as a complementary layer to reviews — not a competitor. I mapped
        asker and answerer journeys, identified search as the primary entry point, and established
        foundational questions about integration, participation patterns, and user intent transformation.
      </p>

      <h3>Stage 2 — Pilot & PMF Test</h3>
      <p>
        The pilot phase was the most important investment in the project. We validated whether users
        naturally adopted Q&amp;A behavior by establishing consistent interaction models, testing across
        key surfaces (SERP, Home, Review screens), and prioritizing familiarity over customization.
      </p>

      <h3>Stage 3 — Scale</h3>
      <p>
        Once genuine demand was confirmed, we addressed growth challenges: reducing friction, expanding
        channels, and building ecosystem depth. Scale surfaces unanticipated challenges — this phase
        required sustained post-launch design attention.
      </p>

      <h2>Key Design Initiatives</h2>

      <h3>01 — Search Query to Question Conversion</h3>
      <p>
        <strong>Challenge:</strong> High friction prevented users from transforming search queries into
        community questions.
      </p>
      <p>
        <strong>Approach:</strong> Keep question creation lightweight and contextual. Recognize
        question-like searches automatically. Use progressive prompting only when intent is unclear.
        Emphasize human answers as distinct from search results or AI.
      </p>
      <p>
        <strong>Outcome:</strong> Increased question submission rates and quality while converting
        passive browsing into active participation.
      </p>

      <h3>02 — Community Q&A Hub</h3>
      <p>
        <strong>Challenge:</strong> Scattered Q&amp;A content felt fragmented, making discovery and
        revisitation difficult.
      </p>
      <p>
        <strong>Approach:</strong> Built a dedicated hub for browsing, revisiting, and engaging with all
        Q&amp;A content — with geo-based question organization and entry points across Home, Yelp Assistant,
        and business pages.
      </p>
      <p>
        <strong>Outcome:</strong> Increased visibility, higher engagement, improved retention, and a
        scalable structural foundation.
      </p>

      <h3>03 — Business Tagging & Prompting</h3>
      <p>
        <strong>Challenge:</strong> Questions and replies often lacked clear business connections,
        reducing navigability and decision-making utility.
      </p>
      <p>
        <strong>Key decisions:</strong> Show prompts upfront for education. Trigger tagging based on
        reply content signals. Use inline tagging over attachment-style approaches. Display business
        chips only before tagging occurs.
      </p>
      <p>
        <strong>Outcome:</strong> Improved reply quality and relevance; strengthened Q&amp;A-to-business
        connections; enhanced reader navigation.
      </p>

      <h3>04 — Reply Reactions (&ldquo;Love&rdquo;)</h3>
      <p>
        A lightweight engagement mechanism to close the feedback loop for contributors. We evaluated
        two placement models — expandable interaction row (future-ready but visually sparse) versus
        inline placement (optimized for current state). We chose inline, prioritizing the current
        experience over speculative future needs.
      </p>
      <p>
        <strong>Outcome:</strong> Lightweight participation reinforcement; closed the feedback loop
        for contributors.
      </p>

      <h2>Outcome & Impact</h2>
      <ul>
        <li>Q&amp;A volume reached <strong>10% of Yelp&apos;s review volume</strong> by Q1 2026</li>
        <li>Unlocked new contributor behaviors among users who had never written a review</li>
        <li>
          Generated reusable interaction patterns — progressive tagging, inline prompting, question
          thread design — added to Yelp&apos;s design system
        </li>
      </ul>

      <h2>Reflections</h2>
      <p>
        The pilot phase was the most critical investment — it turned belief into evidence. Designing
        for an existing ecosystem benefits from restraint: fitting into established language accelerates
        adoption far more than custom-built novelty. And scale always surfaces challenges that
        prototypes don&apos;t reveal — sustained post-launch design ownership matters.
      </p>
    </CaseStudyLayout>
  );
}
