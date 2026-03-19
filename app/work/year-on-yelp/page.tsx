import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata = {
  title: "Year on Yelp — Jing Guo",
};

export default function YearOnYelp() {
  return (
    <CaseStudyLayout
      title="Year on Yelp"
      subtitle="Reflection-driven experiences that reinforce user identity and long-term engagement through personalized annual summaries."
      role="Lead Designer"
      team="Yelp Community Team"
      year="2024"
      tags={["Identity", "Engagement", "Personalization"]}
    >
      <h2>Overview</h2>
      <p>
        Year on Yelp is a personalized annual reflection experience — a look back at a user&apos;s
        contributions, discoveries, and community impact over the past year. Think Spotify Wrapped,
        designed for a community of local contributors.
      </p>

      <h2>The Opportunity</h2>
      <p>
        Contribution on Yelp is ongoing and diffuse — users write reviews, answer questions, upload
        photos, and attend events across months and years. But there&apos;s rarely a moment where all
        of that activity gets reflected back in a meaningful way.
      </p>
      <p>
        Year on Yelp creates that moment. It celebrates what users have done, tells them who they&apos;ve
        helped, and reinforces their identity as a valued member of the Yelp community.
      </p>

      <h2>Design Goals</h2>
      <ul>
        <li>Make contribution feel meaningful and cumulative, not transactional</li>
        <li>Reinforce identity — &quot;you are someone who helps people find great places&quot;</li>
        <li>Create a shareable, celebratory artifact that drives organic awareness</li>
        <li>Deepen long-term retention by making users feel seen</li>
      </ul>

      <h2>Design Approach</h2>
      <p>
        The experience was designed as a narrative journey through the year — starting with a
        high-level summary and progressively revealing specific moments, stats, and community impact.
        Each screen was designed to feel personal, not generic.
      </p>
      <p>
        We invested heavily in the emotional arc: the experience should feel like recognition, not
        a data dump. Copy, animation timing, and reveal mechanics all served that goal.
      </p>

      <h2>Outcome</h2>
      <p>
        Year on Yelp reinforced long-term engagement among active contributors and created a
        shareable moment that extended Yelp&apos;s community narrative beyond the app.
      </p>

      <p className="text-neutral-400 italic text-sm mt-8">
        Full case study details available on request — contains confidential product metrics.
      </p>
    </CaseStudyLayout>
  );
}
