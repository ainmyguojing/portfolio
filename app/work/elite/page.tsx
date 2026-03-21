import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata = {
  title: "Elite Ecosystem — Jing Guo",
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

function TwoCol({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <div className="rounded-xl border border-neutral-200 p-5">{left}</div>
      <div className="rounded-xl border border-neutral-200 p-5">{right}</div>
    </div>
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
  { id: "problem", title: "The System Problem", divider: "divider-problem" },
  {
    id: "solution", title: "The Solution: A Coherent Funnel", divider: "divider-solution",
    subsections: [
      { id: "awareness", title: "Awareness: Right People, Right Moment" },
      { id: "consideration", title: "Consideration: A Page That Converts" },
      { id: "conversion", title: "Conversion: Turning Rejection into Re-engagement" },
    ],
  },
  { id: "system", title: "The Funnel as Design System", divider: "divider-system" },
  { id: "outcome", title: "Outcomes & Reflections", divider: "divider-outcome" },
];

export default function Elite() {
  return (
    <CaseStudyLayout
      title="Elite Ecosystem Experiences"
      subtitle="Yelp Elite is our top contributor tier, but the path to get there was broken: few high-potential users knew it existed, the landing page underperformed, and 80% of nominations were rejected without explanation. I led the redesign from awareness to conversion."
      role="Lead Designer"
      team="1 PM · Engineers · Community Management · PMM"
      year="2024–2026"
      tags={["Ecosystem Design", "Community", "Contributor Retention", "Growth"]}
      sections={SECTIONS}
    >
      <p>
        Elite contributors anchor our community with more reviews and higher engagement. This work
        was a system-level redesign: three interventions fixing distinct, connected stages of a
        leaky pipeline.
      </p>

      <SectionDivider id="divider-problem" />

      <h2 id="problem">01 — The System Problem</h2>
      <p>
        The Elite program lost candidates at every step. Each stage had unique issues, and patching
        only one wouldn&apos;t fix the funnel.
      </p>

      <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        {[
          {
            stage: "Discovery",
            problem: "Awareness depended on manual outreach; most valuable reviewers never heard of Elite.",
          },
          {
            stage: "Consideration",
            problem: "The Elite landing page was text-heavy and didn't convert; it lacked clarity and appeal.",
          },
          {
            stage: "Conversion",
            problem: "80%+ of nominations were auto-rejected, with generic feedback and no next step.",
          },
        ].map(({ stage, problem }) => (
          <div key={stage} className="rounded-xl border border-neutral-200 p-5">
            <p className="text-xs text-neutral-400 mb-2 uppercase tracking-widest">{stage}</p>
            <p className="text-sm text-neutral-600">{problem}</p>
          </div>
        ))}
      </div>
      <p>
        I approached every design choice with the full user journey in mind, aiming for a seamless
        experience rather than just isolated improvements.
      </p>

      <SectionDivider id="divider-solution" />

      <h2 id="solution">02 — The Solution: A Coherent Funnel</h2>
      <p>
        Systemic issues required holistic fixes. This chapter breaks down the coordinated
        interventions that repaired the pipeline, each working in concert.
      </p>

      <Card id="awareness">
        <Label>2.1 — Awareness: Right People, Right Moment</Label>
        <p className="text-sm text-neutral-700 mb-6">
          Interest wasn&apos;t lacking — visibility was. The challenge was surfacing Elite at the
          right time, without interruptive tactics.
        </p>

        <Label>Design: Post-Review Modal</Label>
        <p className="text-sm text-neutral-600 mb-6">
          A modal appears to eligible contributors immediately after submitting a review, right when
          users feel accomplished and open to next steps. The modal simply introduces Elite and links
          to the landing page, intentionally avoiding a pushy call-to-action at this early stage.
        </p>

        <Label>Eligibility Criteria</Label>
        <BulletList className="mb-6" items={[
          "2+ reviews in last 30 days",
          "6+ lifetime reviews",
          "Not already Elite, ineligible, or recently nominated",
        ]} />

        <Label>Impact</Label>
        <p className="text-sm text-neutral-600">
          ~880K eligible users per year, projecting 1K–5.8K incremental Elites and 10K–58K more
          reviews annually.
        </p>
      </Card>

      <Card id="consideration">
        <Label>2.2 — Consideration: A Page That Converts</Label>
        <p className="text-sm text-neutral-700 mb-6">
          Curious but uncommitted users hit a wall with the old landing page: it was wordy, dated,
          and hard to act on. Without new assets, I focused on three principles.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { principle: "Engaging", detail: "Added bold visuals; reduced text." },
            { principle: "Clear Narrative", detail: "Eight sections, each with a focused purpose: from community value to events to support." },
            { principle: "Convenient", detail: "Persistent sticky CTA for seamless nomination; one tap from anywhere on the page." },
          ].map(({ principle, detail }) => (
            <div key={principle} className="rounded-xl border border-neutral-200 p-5">
              <p className="text-sm font-semibold text-neutral-700 mb-2">{principle}</p>
              <p className="text-sm text-neutral-500">{detail}</p>
            </div>
          ))}
        </div>

        <Label>Copy Choices</Label>
        <p className="text-sm text-neutral-600 mb-6">
          The &ldquo;how to join&rdquo; section stayed non-specific by design. Legal and community
          reasons require keeping eligibility mysterious, emphasizing effort and character over numbers.
        </p>

        <Label>Results Target</Label>
        <p className="text-sm text-neutral-600">
          A 2% bump in nominations: 175 more Elites and about 3,500 extra reviews each month.
        </p>
      </Card>

      <Card id="conversion">
        <Label>2.3 — Conversion: Turning Rejection into Re-engagement</Label>
        <p className="text-sm text-neutral-700 mb-6">
          Fixing the funnel top wasn&apos;t enough. Rejection was the biggest drop-off. Generic,
          instant rejection wasn&apos;t just unhelpful; it hurt motivation.
        </p>

        <Label>Design: Loading and Rejection Screens</Label>
        <p className="text-sm text-neutral-600 mb-6">
          Nominations now display a loading state (&ldquo;Analyzing your profile...&rdquo;) to show
          serious review. On rejection, users see clear, specific reasons and actionable feedback
          for improvement, each mapped to the actual eligibility roadblock, plus a nudge to write
          another review. The outcome feels credible and constructive.
        </p>

        <TwoCol
          left={
            <>
              <Label>Rejection Page: Top Half</Label>
              <p className="text-sm text-neutral-600">
                Specific reason for rejection and exactly what to do about it. Each of the five
                rejection reasons has its own copy. Specific feedback makes the rejection credible
                and actionable.
              </p>
            </>
          }
          right={
            <>
              <Label>Rejection Page: Bottom Half</Label>
              <p className="text-sm text-neutral-600">
                A YNRA section nudging the user toward their next review. The rejection screen
                becomes a contribution prompt. The user leaves with something to do, not just a
                door closed in their face.
              </p>
            </>
          }
        />

        <Label>Small Fix, Big Win: Location Confirmation</Label>
        <p className="text-sm text-neutral-600 mb-6">
          Letting users confirm or correct their primary location eliminated many false rejections
          from stale location data.
        </p>

        <Label>Impact</Label>
        <p className="text-sm text-neutral-600">
          Raising valid nominations from 20% to 25% = ~5K more Elites and 65K additional reviews
          annually.
        </p>
      </Card>

      <SectionDivider id="divider-system" />

      <h2 id="system">03 — The Funnel as Design System</h2>
      <p>
        No single fix worked in isolation.
      </p>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-100">
                <th className="text-left font-semibold text-neutral-700 pb-3 pr-6 w-32">Funnel stage</th>
                <th className="text-left font-semibold text-neutral-700 pb-3 pr-6">Problem</th>
                <th className="text-left font-semibold text-neutral-700 pb-3">Design response</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {[
                {
                  stage: "Discovery",
                  problem: "Unaware the program exists",
                  response: "Modal for immediate, relevant awareness",
                },
                {
                  stage: "Consideration",
                  problem: "Landing page doesn't convert curious users",
                  response: "Revamped landing page with sticky CTA",
                },
                {
                  stage: "Conversion",
                  problem: "Rejection kills momentum",
                  response: "New rejection flow with feedback and motivation",
                },
              ].map(({ stage, problem, response }) => (
                <tr key={stage}>
                  <td className="py-3 pr-6 font-semibold text-neutral-500">{stage}</td>
                  <td className="py-3 pr-6 text-neutral-700">{problem}</td>
                  <td className="py-3 text-neutral-500">{response}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-100">
          <Label>Visual Language Across the Funnel</Label>
          <p className="text-sm text-neutral-600">
            Visuals were carefully chosen for each step: a red envelope for invitation, a hero image
            immersing users in Elite energy, and a nearly-complete circle on rejection to signal
            progress, not failure. The journey tells a consistent story: you&apos;re welcome,
            you&apos;re close.
          </p>
        </div>
      </Card>

      <SectionDivider id="divider-outcome" />

      <h2 id="outcome">04 — Outcomes &amp; Reflections</h2>
      <ol>
        <li>
          <strong>Elite page revamp (April 2024):</strong> projected 2% lift in nominations.
        </li>
        <li>
          <strong>Awareness modal:</strong> reaches ~880K contributors, up to 5.8K new Elites per year.
        </li>
        <li>
          <strong>Rejection redesign:</strong> projects 65K more reviews per year.
        </li>
      </ol>

      <ol>
        <li>
          <strong>Real change meant fixing the whole pipeline, not just pieces.</strong> Each piece
          looked like a standalone task. The design thinking was recognizing they were all symptoms
          of the same broken pipeline.
        </li>
        <li>
          <strong>The rejection experience was the highest-leverage fix.</strong> Turning a dead end
          into an actionable next step reshapes the entire journey.
        </li>
        <li>
          <strong>Copy mattered as much as layout.</strong> Every word in the loading, rejection,
          and eligibility messaging had to inform and motivate, all without stating clear criteria.
        </li>
      </ol>
    </CaseStudyLayout>
  );
}
