import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata = {
  title: "Recognition & Motivation System — Jing Guo",
};

function SectionDivider({ id }: { id?: string }) {
  return <div id={id} style={{ height: 3, background: "var(--accent)", borderRadius: 2, margin: "3rem 0" }} />;
}

function Card({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <div id={id} className="not-prose bg-white rounded-2xl border border-neutral-200 p-10 my-6">
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-neutral-900 uppercase tracking-widest mb-2 relative inline-block">
      <span
        className="absolute left-0 right-0 bottom-0 rounded-sm"
        style={{ height: "33%", background: "var(--accent)", zIndex: 0 }}
      />
      <span className="relative" style={{ zIndex: 1 }}>{children}</span>
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

const SECTIONS = [
  { id: "foundation", title: "Foundation: The MVP Experiment", divider: "divider-foundation" },
  { id: "problem", title: "My Work: The Design Problem", divider: "divider-problem" },
  { id: "sequencing", title: "Sequencing as Strategy", divider: "divider-sequencing" },
  {
    id: "decisions", title: "Key Design Decisions", divider: "divider-decisions",
    subsections: [
      { id: "decision-metab", title: "MeTab: Where Recognitions Live" },
      { id: "decision-bizpage", title: "Biz Page: Credibility in Context" },
      { id: "decision-expiration", title: "Expiration: Re-engagement, Not Punishment" },
    ],
  },
  { id: "outcome", title: "Outcome & Impact", divider: "divider-outcome" },
  { id: "reflections", title: "Reflections", divider: "divider-reflections" },
];

export default function Recognition() {
  return (
    <CaseStudyLayout
      title="Recognition & Motivation System"
      subtitle="The expert recognition system began as a simple hypothesis: could recognitions nudge reviewers to contribute more? My focus was on the next phase: transforming in-the-moment badges into a permanent, meaningful presence within the app."
      role="Lead Designer (Surfacing in App)"
      team="1 PM · 3 Engineers · 1 PMM"
      year="2023–2024"
      tags={["Contributor Retention", "Motivation Systems", "Mobile"]}
      sections={SECTIONS}
    >
      <p>
        This case study covers two connected phases: the initial MVP experiment, and my work surfacing
        recognitions more permanently across the app.
      </p>

      <SectionDivider id="divider-foundation" />

      <h2 id="foundation">01 — Foundation: The MVP Experiment <span className="text-neutral-400 font-normal text-base">(not my work)</span></h2>
      <p>
        The MVP aimed to validate whether recognitions could actually motivate more contributions.
        After a user&apos;s 2nd review in a category (Tacos, for example), they&apos;d get a nudge
        to write one more review to earn a badge. After the 3rd, a success screen and a badge, but
        this disappeared immediately, with no lasting record.
      </p>

      <Card>

        <Label>What the Experiment Proved</Label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
          {[
            { stat: "+5.5–7.8%", detail: "lift in reviews written vs. status quo (~20–29K additional reviews/month at 100%)" },
            { stat: "20%", detail: "of nudged users actually earned a badge, far exceeding push CTR benchmarks of 2–8%" },
            { stat: "+6–8%", detail: "higher Yelp Sort score for badge-motivated reviews; users wrote more carefully about topics they cared about" },
          ].map(({ stat, detail }) => (
            <div key={stat} className="rounded-xl border border-neutral-100 bg-neutral-50 p-5">
              <p className="text-2xl font-semibold text-neutral-800 mb-1">{stat}</p>
              <p className="text-sm text-neutral-500">{detail}</p>
            </div>
          ))}
        </div>
      </Card>

      <p>
        The experiment confirmed that recognition worked: it drove more and better reviews. But it
        also surfaced a glaring issue: badges only existed for a fleeting moment. Users couldn&apos;t
        revisit them, and readers got no benefit.
      </p>

      <SectionDivider id="divider-problem" />

      <h2 id="problem">02 — My Work: The Design Problem</h2>
      <p>
        Technically, the recognition system existed. But without a home in the app, contributors
        couldn&apos;t revisit their achievements, and readers couldn&apos;t tell who was an expert.
        The core challenge: how do you make a credibility signal feel earned and valuable for both
        contributors and readers?
      </p>

      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {[
          {
            audience: "For contributors",
            need: "Recognitions must feel like real acknowledgment: a reflection of real expertise, not a hollow badge for showing up.",
          },
          {
            audience: "For readers",
            need: "Recognitions must signal trust quickly, without adding noise to an already information-dense surface.",
          },
        ].map(({ audience, need }) => (
          <div key={audience} className="rounded-xl border border-neutral-200 p-5">
            <p className="text-sm font-semibold text-neutral-700 mb-2">{audience}</p>
            <p className="text-sm text-neutral-600">{need}</p>
          </div>
        ))}
      </div>
      <p>
        Every design decision throughout this project was filtered through that dual-audience tension.
      </p>

      <SectionDivider id="divider-sequencing" />

      <h2 id="sequencing">03 — Sequencing as a Design Strategy</h2>
      <p>
        The first critical move wasn&apos;t just UI: it was choosing when to build what. Design
        participated in finalizing the phased rollout around one single idea: every step must build
        credibility for the next.
      </p>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-100">
                <th className="text-left font-semibold text-neutral-700 pb-3 pr-6 w-24">Phase</th>
                <th className="text-left font-semibold text-neutral-700 pb-3 pr-6">Focus</th>
                <th className="text-left font-semibold text-neutral-700 pb-3">Why this order</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {[
                {
                  phase: "M1",
                  focus: "Surface recognitions in the user's profile (MeTab)",
                  why: "Establish a permanent home before surfacing recognitions anywhere else. Without this, the whole system lacks credibility.",
                },
                {
                  phase: "M2",
                  focus: "Backfill recognitions + push notification for eligible users",
                  why: "Reward loyal contributors who predate the system. Skipping them would undermine trust. This is part of the earning context, not a separate design problem.",
                },
                {
                  phase: "M3",
                  focus: "Show recognitions next to reviews on biz pages",
                  why: "Only credible once users have a permanent home to tap through to. Reader-facing surfaces come last.",
                },
              ].map(({ phase, focus, why }) => (
                <tr key={phase}>
                  <td className="py-3 pr-6 font-semibold text-neutral-500">{phase}</td>
                  <td className="py-3 pr-6 text-neutral-700">{focus}</td>
                  <td className="py-3 text-neutral-500">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <p>
        This sequence wasn&apos;t just project management: it was fundamental design logic for
        coherence and credibility.
      </p>

      <SectionDivider id="divider-decisions" />

      <h2 id="decisions">04 — Key Design Decisions</h2>
      <p>
        Each milestone introduced a distinct design problem. Here&apos;s where the most meaningful
        decisions were made, and why.
      </p>

      <Card id="decision-metab">
        <Label>M1 · Contributor Surface</Label>
        <h3 className="text-base font-semibold text-neutral-900 mt-2 mb-1">MeTab: Where Do Recognitions Belong?</h3>
        <p className="text-sm text-neutral-500 mb-6">
          Existing Achievements were buried and cluttered. I aimed for minimal disruption with
          maximum visibility.
        </p>

        <Label>Explored &amp; Rejected</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 mt-2">
          {[
            {
              direction: "Recognitions inside the Impact section",
              reason: "Conflated two distinct concepts. Users understood Impact as metrics (reaction counts, view counts), not milestones or achievements. Mixing them created confusion about what the recognition was measuring.",
            },
            {
              direction: "Expandable / collapsed Achievements block",
              reason: "Added interaction cost without adding delight. The problem was findability, not space. A collapsed pattern would have made recognitions harder to discover, not easier.",
            },
          ].map(({ direction, reason }) => (
            <div key={direction} className="rounded-xl border border-neutral-200 p-5">
              <p className="text-sm font-semibold text-neutral-700 mb-2">
                <span className="text-neutral-400 mr-1.5">✕</span>{direction}
              </p>
              <p className="text-sm text-neutral-500">{reason}</p>
            </div>
          ))}
        </div>

        <Label>Final Approach</Label>
        <BulletList className="mb-6" items={[
          "Added \"Recognitions\" directly below Yelp Elite in Achievements",
          "Moved Achievements higher in MeTab for better discoverability",
        ]} />
      </Card>

      <Card id="decision-bizpage">
        <Label>M3 · Reader Surface</Label>
        <h3 className="text-base font-semibold text-neutral-900 mt-2 mb-1">Biz Page: What Does a Recognition Look Like in Context?</h3>
        <p className="text-sm text-neutral-500 mb-6">
          This was high-stakes: readers needed instant clarity.
        </p>

        <Label>Explored &amp; Rejected</Label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 mt-2">
          {[
            {
              direction: "Next to the username",
              reason: "Too crowded, especially for Elite users who already have an Elite badge. Recognition risked reading as a sub-category of Elite rather than its own credential.",
            },
            {
              direction: "Combined with existing user passport stats",
              reason: "Cognitively overloaded. Mixed formats (numeric stats alongside badge names) felt inconsistent, and users couldn't parse why some people had different stat combinations.",
            },
            {
              direction: "Recognition name only, no review count",
              reason: "Stripped the signal of meaning. Nothing differentiated a user who just earned a recognition from one with 30 reviews in that category, which is the whole point of the credential.",
            },
          ].map(({ direction, reason }) => (
            <div key={direction} className="rounded-xl border border-neutral-200 p-5">
              <p className="text-sm font-semibold text-neutral-700 mb-2">
                <span className="text-neutral-400 mr-1.5">✕</span>{direction}
              </p>
              <p className="text-sm text-neutral-500">{reason}</p>
            </div>
          ))}
        </div>

        <Label>Final Approach</Label>
        <p className="text-sm text-neutral-600 mb-3">
          Replace the user passport row entirely for eligible users. Show recognition name + review
          count for that category. Clean, scannable, immediately meaningful. Tapping through leads to
          the reviewer&apos;s category-specific review list, closing the loop for readers who want
          to verify.
        </p>
        <BulletList items={[
          "One piece of information, clearly formatted with no competing elements",
          "Review count provides the depth signal that makes the recognition credible",
          "Tap-through to the review list lets skeptical readers verify for themselves",
        ]} />
      </Card>

      <Card id="decision-expiration">
        <Label>System Design</Label>
        <h3 className="text-base font-semibold text-neutral-900 mt-2 mb-1">Expiration: Re-engagement, Not Punishment</h3>
        <p className="text-sm text-neutral-500 mb-6">
          Recognitions expire if users stop reviewing in a category for a year. The tricky part:
          make this feel motivating, not punitive.
        </p>

        <Label>How It Works</Label>
        <BulletList className="mb-4" items={[
          "Instead of \"your recognition expired,\" the message is \"keep your recognition active\"",
          "Contributors always see their earned recognitions; only readers lose the view if a recognizer goes dormant",
          "Writing just one more review reactivates the badge, framed as an invitation, not a penalty",
        ]} />
      </Card>

      <SectionDivider id="divider-outcome" />

      <h2 id="outcome">05 — Outcome &amp; Impact</h2>
      <p>
        The recognition system evolved from a technically existing but invisible feature into a
        fully surfaced, end-to-end experience across iOS, Android, and Web.
      </p>
      <ol>
        <li>
          <strong>MeTab launch</strong> gave contributors a permanent, findable home for their
          recognitions, the foundational piece the rest of the system depended on.
        </li>
        <li>
          <strong>Biz page launch (Dec 2023)</strong> gave readers a credibility signal at the exact
          moment they&apos;re evaluating whether to trust a review, completing the reader half of
          the dual-audience design challenge.
        </li>
        <li>
          <strong>Backfill</strong> ensured loyal contributors who predate the system were recognized
          retroactively, protecting trust in the feature from day one.
        </li>
      </ol>

      <SectionDivider id="divider-reflections" />

      <h2 id="reflections">Reflections</h2>
      <p>
        Building on top of a validated experiment is a different challenge than starting from zero.
        The proof of concept existed, but the design work of making it coherent, permanent, and
        trustworthy was still entirely ahead.
      </p>

      <ol>
        <li>
          <strong>Sequencing is a design decision, not just a roadmap.</strong> The order of
          milestones determined what was possible. Building the permanent home first meant every
          subsequent surface had somewhere credible to point to.
        </li>
        <li>
          <strong>Two-audience problems require explicit tradeoffs.</strong> Contributors needed
          pride; readers needed trust. Being deliberate about which need each surface was optimizing
          for, rather than trying to serve both equally everywhere, is what kept the design coherent.
        </li>
        <li>
          <strong>Framing matters as much as the interface.</strong> The expiration system is
          technically identical regardless of how it&apos;s described. But &ldquo;keep your
          recognition active&rdquo; versus &ldquo;your recognition expired&rdquo; changes how
          contributors experience the entire system. Sometimes the most important design work
          isn&apos;t the UI.
        </li>
      </ol>
    </CaseStudyLayout>
  );
}
