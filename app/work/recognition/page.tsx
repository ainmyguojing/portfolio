import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata = {
  title: "Recognition & Motivation — Jing Guo",
};

export default function Recognition() {
  return (
    <CaseStudyLayout
      title="Recognition & Motivation System"
      subtitle="Designing reward and feedback systems that form contribution and engagement behaviors for Yelp's most active community members."
      role="Lead Designer"
      team="Yelp Community Team"
      year="2023–2024"
      tags={["Engagement", "Behavioral Systems", "Community"]}
    >
      <h2>Overview</h2>
      <p>
        Contribution behaviors are fragile — without the right feedback loops, even motivated users
        disengage. This project focused on designing a recognition and motivation system that closes
        the loop between action and identity, reinforcing participation across Yelp&apos;s contribution
        ecosystem.
      </p>

      <h2>The Challenge</h2>
      <p>
        Yelp had existing mechanisms for recognizing contributors — badges, Elite status — but they
        lacked coherence. Users didn&apos;t have a clear picture of their impact, progress felt opaque,
        and the connection between contribution and community belonging was weak.
      </p>

      <h2>Design Direction</h2>
      <p>
        The system needed to do three things simultaneously: acknowledge effort immediately (micro
        feedback), signal progress over time (milestone recognition), and reinforce identity within
        the broader community (social belonging).
      </p>
      <ul>
        <li>
          <strong>Immediate feedback:</strong> Reactions, reply counts, and in-context signals that
          tell contributors their content is seen and valued.
        </li>
        <li>
          <strong>Progress signals:</strong> Streaks, contribution summaries, and milestone
          moments that make progress legible without being gamified in a hollow way.
        </li>
        <li>
          <strong>Identity reinforcement:</strong> Badges and status markers that connect individual
          contributions to community standing.
        </li>
      </ul>

      <h2>Key Design Principles</h2>
      <p>
        Reward systems can easily feel manipulative or cheap. Our guiding principle was that every
        recognition moment should feel <em>earned and meaningful</em> — not a participation trophy.
        We designed for intrinsic motivation first, extrinsic second.
      </p>

      <h2>Outcome</h2>
      <p>
        The system formed a coherent feedback loop across Yelp&apos;s contribution surfaces — from Q&amp;A
        replies to reviews to photos. Contributors who received recognition showed measurably higher
        return rates and deeper engagement across multiple contribution types.
      </p>

      <p className="text-neutral-400 italic text-sm mt-8">
        Full case study details available on request — contains confidential product metrics.
      </p>
    </CaseStudyLayout>
  );
}
