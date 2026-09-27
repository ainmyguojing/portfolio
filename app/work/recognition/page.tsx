import CaseStudyLayout from "@/components/CaseStudyLayout";
import Image from "next/image";

export const metadata = {
  title: "Recognition & Rewards — Jing Guo",
};

function SectionDivider({ id }: { id?: string }) {
  return <div id={id} style={{ height: 3, background: "var(--accent)", borderRadius: 2, margin: "3rem 0" }} />;
}

function Card({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <div id={id} className="not-prose bg-white rounded-2xl border border-neutral-200 p-5 sm:p-10 my-6">
      {children}
    </div>
  );
}

function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "#FF258E" }}>
      {children}
    </p>
  );
}

function BulletList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-1.5 ${className ?? ""}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm text-neutral-600">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function FullWidthImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="not-prose my-6">
      <Image src={src} alt={alt} width={1600} height={900} className="w-full rounded-xl" style={{ objectFit: "contain" }} />
      <figcaption className="text-xs text-neutral-500 text-center mt-2">{caption}</figcaption>
    </figure>
  );
}

const SECTIONS = [
  { id: "opportunity", title: "The Opportunity", divider: "divider-opportunity" },
  { id: "challenge", title: "The Design Challenge", divider: "divider-challenge" },
  {
    id: "building", title: "Building the Experience", divider: "divider-building",
    subsections: [
      { id: "build-home", title: "Permanent Home" },
      { id: "build-reader", title: "Reading Experience" },
      { id: "build-expiration", title: "Expiration Design" },
    ],
  },
  { id: "outcome", title: "Outcome", divider: "divider-outcome" },
  { id: "next", title: "The Next Evolution", divider: "divider-next" },
  { id: "reflection", title: "Reflection", divider: "divider-reflection" },
];

export default function Recognition() {
  return (
    <CaseStudyLayout
      title="Recognition & Rewards"
      subtitle="Building a system that turns contribution into lasting engagement"
      role="Lead Product Designer"
      scope="Product experience, information architecture, contributor motivation, credibility signals, and reward strategy"
      team="Contributions, Growth, Data Science, Engineering, Content Design, and Design Systems"
      year="2023–present"
      tags={["Engagement", "Retention", "Systems Design"]}
      sections={SECTIONS}
      currentHref="/work/recognition"
      introContent={
        <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
          I led the evolution of Yelp&apos;s Recognition experience from a temporary reward moment into
          a lasting part of the product. I designed where achievements live, how they build contributor
          pride, and how they help readers evaluate credibility. That work became a foundation for a
          broader reward strategy that now includes Streaks.
        </p>
      }
    >
      {/* ──────────── Impact ──────────── */}
      <h3>Impact at a Glance</h3>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {[
          { stat: "~5K", detail: "additional reviews per month on iOS after contextual Recognition launched" },
          { stat: "+1.7%", detail: "increase in sessions where users visited another contributor’s profile" },
        ].map(({ stat, detail }) => (
          <div key={stat} className="rounded-xl border border-neutral-100 bg-neutral-50 p-5">
            <p className="text-lg font-semibold text-neutral-800 mb-1">{stat}</p>
            <p className="text-sm text-neutral-500">{detail}</p>
          </div>
        ))}
      </div>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {[
          { stat: "✓", detail: "A permanent home for Recognitions across mobile and web" },
          { stat: "✓", detail: "A reusable foundation for Yelp’s evolving contributor reward system" },
        ].map(({ stat, detail }) => (
          <div key={detail} className="rounded-xl border border-neutral-100 bg-neutral-50 p-5">
            <p className="text-lg font-semibold text-neutral-800 mb-1">{stat}</p>
            <p className="text-sm text-neutral-500">{detail}</p>
          </div>
        ))}
      </div>

      {/* ══════════════ The Opportunity ══════════════ */}
      <SectionDivider id="divider-opportunity" />
      <h2 id="opportunity">The Opportunity</h2>

      <h3>Contribution often ended without a meaningful return</h3>
      <p>
        People invest time sharing experiences on Yelp, but the product did not consistently show what
        that effort added up to. Feedback appeared through disconnected moments such as reactions,
        compliments, badges, or status. Some disappeared quickly. Others lacked enough context to feel
        meaningful.
      </p>
      <p>
        This left two gaps. Contributors could not easily revisit what they had accomplished, while
        readers had few signals for understanding a reviewer&apos;s experience in a particular category.
      </p>
      <p>
        The larger opportunity was to build a reward system that helps contributors understand what
        they added, why it mattered, and what their work is becoming over time.
      </p>

      <h3>Starting from a validated idea</h3>
      <p>
        Before I joined the project, another designer created an experiment that rewarded people for
        writing multiple reviews in a category. The experiment showed that Recognition could motivate
        contribution:
      </p>
      <BulletList items={[
        "Review contribution increased approximately 6–8% compared with the control",
        "About 20% of people who received the Recognition message earned one",
        "Reviews written toward Recognition showed stronger quality signals",
      ]} />
      <p className="mt-4">
        The test proved the motivational value, but the experience ended after the reward moment.
        Contributors could not return to their Recognitions, and readers never saw them in the context
        of a review.
      </p>
      <p>
        I inherited the project at that point and led the next phase: turning a successful experiment
        into a coherent, lasting product experience.
      </p>

      {/* Placeholder */}
      <FullWidthImage src="/images/Recognition/Earning-recogntion-1.png" alt="Inherited experiment success moment" caption="The inherited experiment: a success moment that disappeared after earning — placeholder" />

      {/* ══════════════ The Design Challenge ══════════════ */}
      <SectionDivider id="divider-challenge" />
      <h2 id="challenge">The Design Challenge</h2>

      <h3>One system had to serve contributors and readers</h3>
      <p>
        Recognition needed to create value for two audiences with different needs.
      </p>
      <p>
        For contributors, it had to feel like meaningful acknowledgment rather than a decorative badge.
        People needed a place to revisit their achievements, understand what they represented, and
        connect them to the reviews that earned them.
      </p>
      <p>
        For readers, Recognition needed to work as a fast credibility signal without adding noise to
        an already dense review surface. Readers also needed a way to verify the signal by exploring
        the contributor&apos;s related reviews.
      </p>
      <p>
        This dual-audience tension shaped the sequence of the work. We first established a permanent
        home for contributors. We then brought Recognition into the reading experience once it had
        enough context to feel credible.
      </p>

      {/* ══════════════ Building the Experience ══════════════ */}
      <SectionDivider id="divider-building" />
      <h2 id="building">Building the Recognition Experience</h2>

      <Card id="build-home">
        <CardLabel>Milestone 1</CardLabel>
        <h3 className="text-base font-semibold text-neutral-800 mt-2 mb-1">Give Achievements a Permanent Home</h3>
        <p className="text-sm text-neutral-600 mb-4">
          The first milestone placed Recognition in Me Tab, where contributors manage their identity
          and activity on Yelp. The existing page already separated measurable impact, such as views
          and reactions, from achievements such as Elite status and legacy badges.
        </p>
        <p className="text-sm text-neutral-600 mb-6">
          I explored placing Recognition inside the Impact section, but that blurred two different ideas.
          Impact described what happened because of a contribution. Recognition represented an achievement
          earned through a body of work.
        </p>
        <p className="text-sm text-neutral-600 mb-6">
          I kept Recognition within Achievements, positioned it directly below Yelp Elite, and moved
          the section higher on the page for better discovery. The Recognition details experience showed
          when each achievement was earned, how many related reviews the contributor had written, and the
          reviews connected to it.
        </p>
        <p className="text-sm font-medium text-neutral-800 mb-6">
          Why it mattered: Recognition became durable. Contributors could return to their achievements
          and see how individual reviews accumulated into visible interests and experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 mt-2">
          <figure className="not-prose">
            <Image src="/images/Recognition/Me-tab-discarded-design-1-1.png" alt="Rejected: Impact section placement" width={800} height={600} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
            <figcaption className="text-xs text-neutral-500 text-center mt-2">Rejected: Recognition inside the Impact section</figcaption>
          </figure>
          <figure className="not-prose">
            <Image src="/images/Recognition/Me-tab-discarded-design-1-2.png" alt="Rejected: Collapsed Achievements" width={800} height={600} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
            <figcaption className="text-xs text-neutral-500 text-center mt-2">Rejected: Expandable collapsed Achievements block</figcaption>
          </figure>
        </div>
        <figure className="not-prose mx-auto w-full sm:w-[70%]">
          <Image src="/images/Recognition/Me-tab-final-design.png" alt="Final Me Tab placement" width={800} height={600} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
          <figcaption className="text-xs text-neutral-500 text-center mt-2">Final design: Recognition placed within Achievements on Me Tab</figcaption>
        </figure>
      </Card>

      <Card id="build-reader">
        <CardLabel>Milestone 2</CardLabel>
        <h3 className="text-base font-semibold text-neutral-800 mt-2 mb-1">Make Recognition Useful in the Reading Experience</h3>
        <p className="text-sm text-neutral-600 mb-4">
          Once contributors had a permanent home for Recognition, the next step was to show it where
          readers evaluate reviews.
        </p>
        <p className="text-sm text-neutral-600 mb-4">
          The business-page user passport had limited space and already contained identity, status, and
          contribution information. I explored placing Recognition beside the username and combining it
          with the existing statistics. Both directions created too much competition and made the signal
          difficult to interpret.
        </p>
        <p className="text-sm text-neutral-600 mb-6">
          The final design replaced the statistics row when a contributor had a Recognition relevant to
          that business. It showed the category and the number of reviews behind it. On web, readers
          could open the contributor&apos;s related reviews and evaluate the experience supporting the
          Recognition.
        </p>
        <p className="text-sm font-medium text-neutral-800 mb-6">
          Why it mattered: The design connected acknowledgment with evidence. Recognition rewarded
          contributors while giving readers a relevant signal at the moment they were deciding whether
          to trust a review.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 mt-2">
          <figure className="not-prose">
            <Image src="/images/Recognition/bizpage-discarded-design-1-1.png" alt="Rejected: Next to username" width={800} height={600} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
            <figcaption className="text-xs text-neutral-500 text-center mt-2">Rejected: Next to the username</figcaption>
          </figure>
          <figure className="not-prose">
            <Image src="/images/Recognition/bizpage-discarded-design-1-2.png" alt="Rejected: Combined with stats" width={800} height={600} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
            <figcaption className="text-xs text-neutral-500 text-center mt-2">Rejected: Combined with existing stats</figcaption>
          </figure>
          <figure className="not-prose">
            <Image src="/images/Recognition/bizpage-discarded-design-1-3.png" alt="Rejected: Name only" width={800} height={600} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
            <figcaption className="text-xs text-neutral-500 text-center mt-2">Rejected: Recognition name only, no review count</figcaption>
          </figure>
        </div>
        <figure className="not-prose mx-auto w-full sm:w-[70%]">
          <Image src="/images/Recognition/bizpage-final-design.png" alt="Final biz page design" width={800} height={600} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
          <figcaption className="text-xs text-neutral-500 text-center mt-2">Final design: Recognition replaces stats row with category and review count</figcaption>
        </figure>
      </Card>

      <Card id="build-expiration">
        <CardLabel>System Design</CardLabel>
        <h3 className="text-base font-semibold text-neutral-800 mt-2 mb-1">Keep the System Motivating Without Making It Punitive</h3>
        <p className="text-sm text-neutral-600 mb-4">
          Recognitions reflected recent activity and could become inactive when someone stopped reviewing
          within a category. A blunt expiration message risked turning an achievement into a loss.
        </p>
        <p className="text-sm text-neutral-600 mb-6">
          I reframed the experience around keeping a Recognition active. Contributors could still see
          what they had earned, while writing another relevant review restored its public visibility.
          This preserved the integrity of the reader-facing signal without erasing the contributor&apos;s
          history.
        </p>
        <p className="text-sm font-medium text-neutral-800">
          Why it mattered: The system could encourage renewed contribution while respecting work people
          had already completed.
        </p>
      </Card>

      {/* ══════════════ Outcome ══════════════ */}
      <SectionDivider id="divider-outcome" />
      <h2 id="outcome">Outcome</h2>

      <h3>Recognition created value beyond the reward moment</h3>
      <p>
        The Me Tab experience gave contributors a permanent record of their Recognitions across mobile
        and web. Showing relevant Recognitions alongside reviews then connected those achievements to
        the reading experience.
      </p>
      <p>
        In a large global experiment, the business-page experience produced measurable results on iOS:
      </p>
      <BulletList items={[
        "Approximately 5K additional reviews per month at full rollout",
        "A 1.7% increase in sessions where users visited another contributor’s profile",
      ]} />
      <p className="mt-4">
        Web contribution remained flat, and the test did not provide enough evidence to determine
        whether Recognition affected reactions. The profile-visit increase suggests that contextual
        Recognition encouraged readers to learn more about contributors, though the experiment did not
        directly measure their reasons for doing so.
      </p>
      <p>
        The larger lesson was that rewards can create value for more than the person receiving them.
        When grounded in visible evidence, Recognition can support motivation, contributor identity,
        and reader trust within the same system.
      </p>

      {/* ══════════════ The Next Evolution ══════════════ */}
      <SectionDivider id="divider-next" />
      <h2 id="next">The Next Evolution</h2>

      <h3>From recognizing achievements to supporting consistency</h3>
      <p>
        Recognition became one expression of a broader contributor reward strategy. I later joined the
        cross-functional work to define how Yelp could move from disconnected reward features toward a
        more coherent relationship with contributors.
      </p>
      <p>The emerging system distinguishes several jobs that a reward can perform:</p>
      <BulletList items={[
        "Recognition explains why a contribution mattered",
        "Reward gives something back in response",
        "Status communicates what a body of work says about the contributor",
        "Incentive helps shape the next meaningful action",
      ]} />
      <p className="mt-4">
        I now lead the design of <strong>Monthly Review Streaks</strong>, an ongoing initiative that
        makes consistency visible over time. Streaks extend the system from reflecting past
        accomplishments toward helping contributors maintain a healthy contribution rhythm.
      </p>
      <p>
        The current design work focuses on three moments: introducing a streak after repeated activity,
        helping someone extend it, and celebrating continued progress. It also requires careful decisions
        about missed months, repair mechanisms, and milestones so that motivation does not become pressure.
      </p>

      {/* ══════════════ Reflection ══════════════ */}
      <SectionDivider id="divider-reflection" />
      <h2 id="reflection">Reflection</h2>

      <h3>Productizing an idea required a different kind of design leadership</h3>
      <p>
        The initial experiment had already proven that Recognition could influence behavior. My role
        was to determine how that moment should live within the larger product and become useful to
        people beyond the person receiving it.
      </p>
      <p>
        Sequencing became a design decision. Establishing the contributor&apos;s permanent record first
        gave the reader-facing signal somewhere credible to lead. Designing for contributors and readers
        separately also kept each surface focused on the value it needed to provide.
      </p>
      <p>
        The work changed how I think about motivation systems. A reward can generate a short-term
        response, but a coherent system must help people understand their progress without reducing
        contribution to points or pressure. Recognition established the foundation. Streaks now explore
        how the system can support consistency over time.
      </p>
    </CaseStudyLayout>
  );
}
