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
  { id: "awareness", title: "Awareness: Getting the Right People In", divider: "divider-awareness" },
  { id: "consideration", title: "Consideration: A Page That Converts", divider: "divider-consideration" },
  { id: "conversion", title: "Conversion: Rejection as Re-engagement", divider: "divider-conversion" },
  { id: "system", title: "The Funnel as a Design System", divider: "divider-system" },
  { id: "outcome", title: "Outcome & Impact", divider: "divider-outcome" },
  { id: "reflections", title: "Reflections", divider: "divider-reflections" },
];

export default function Elite() {
  return (
    <CaseStudyLayout
      title="Elite Ecosystem Experiences"
      subtitle="Yelp Elite is the top tier of the contributor community, but the pipeline was broken at every stage: most high-potential users had never heard of the program, the landing page was not converting, and 80% of nominations were rejected with no explanation. I redesigned the full funnel from awareness to conversion."
      role="Lead Designer"
      team="1 PM · Engineers · Community Management · PMM"
      year="2024–2026"
      tags={["Ecosystem Design", "Community", "Contributor Retention", "Growth"]}
      sections={SECTIONS}
    >
      <p>
        Elite contributors are disproportionately valuable: they write more reviews, attend events,
        and anchor the community. The design work here wasn&apos;t a single project — it was three
        interventions at different points in the same broken pipeline, designed to work together.
      </p>

      <SectionDivider id="divider-problem" />

      <h2 id="problem">01 — The System Problem</h2>
      <p>
        The Elite program had a leaky pipeline at every stage. Each layer had its own failure mode,
        and fixing one without the others would have left the funnel broken.
      </p>

      <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        {[
          {
            stage: "Discovery",
            problem: "Awareness relied entirely on manual Community Manager outreach. Most high-potential contributors never learned the program existed.",
          },
          {
            stage: "Consideration",
            problem: "Users who found the Elite page encountered outdated, text-heavy content that didn't communicate the program's value or make nomination feel approachable.",
          },
          {
            stage: "Conversion",
            problem: "80%+ of nominations were auto-rejected via a generic system modal with no explanation and no path forward.",
          },
        ].map(({ stage, problem }) => (
          <div key={stage} className="rounded-xl border border-neutral-200 p-5">
            <p className="text-xs text-neutral-400 mb-2 uppercase tracking-widest">{stage}</p>
            <p className="text-sm text-neutral-600">{problem}</p>
          </div>
        ))}
      </div>
      <p>
        Each design decision was made with the full funnel in mind. The goal wasn&apos;t three better
        features — it was one coherent pipeline.
      </p>

      <SectionDivider id="divider-awareness" />

      <h2 id="awareness">02 — Awareness: Getting the Right People In</h2>
      <p>
        The problem wasn&apos;t that users weren&apos;t interested in Elite — it was that they never
        found out it existed. The design challenge was surfacing the program at the right moment,
        to the right people, without feeling like an interruption.
      </p>

      <Card>
        <Label>Design Decision: Surface on the Post-Review Screen</Label>
        <p className="text-sm text-neutral-700 mb-6">
          A modal shown to eligible contributors immediately after they submit a review. The post-review
          screen captures a moment of completion — the user just contributed something and feels good
          about it. That&apos;s the right moment to introduce an aspirational next step, not a cold
          interruption mid-session.
        </p>

        <Label>Eligibility Targeting</Label>
        <BulletList className="mb-6" items={[
          "2+ reviews in the last 30 days",
          "6+ lifetime reviews",
          "Not currently Elite, not ineligible, not nominated in the last 3 months",
        ]} />

        <Label>Design Constraints</Label>
        <BulletList className="mb-6" items={[
          "Must not interfere with other high-priority modals in the same flow",
          "Frequency cap: shown once per 180 days per user",
          "Targeted only, not a broadcast to all users",
        ]} />

        <Label>Why the Modal Doesn&apos;t Ask for Anything</Label>
        <p className="text-sm text-neutral-600">
          The modal introduces the program and links to the Elite page. It does not ask the user to
          nominate themselves immediately. Keeping this step lightweight was intentional — an
          over-eager CTA at the awareness stage would feel transactional, not inspiring. The ask
          comes after the user has had a chance to learn more.
        </p>
      </Card>

      <p>
        Opportunity sizing: ~880K eligible reviewers annually, with projected 1K–5.8K incremental
        new Elites per year and 10K–58K additional reviews at projected CTR.
      </p>

      <SectionDivider id="divider-consideration" />

      <h2 id="consideration">03 — Consideration: A Landing Page That Converts</h2>
      <p>
        Users arriving at the Elite page were curious but not yet committed. The existing page
        was text-heavy, visually outdated, and required two taps to start a nomination. The design
        constraint made this harder: no new marketing assets were available.
      </p>

      <Card>
        <Label>Design Principles</Label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 mt-2">
          {[
            { principle: "Engaging", detail: "Bold visuals and more visual content. Less text. The existing page read like a brochure." },
            { principle: "Clear narrative", detail: "Eight sections each with a single job: hero, community value, video, perks, how to join, events, CM support, sticky CTA." },
            { principle: "Convenient", detail: "Sticky footer CTA always visible. One tap to start the nomination from anywhere on the page." },
          ].map(({ principle, detail }) => (
            <div key={principle} className="rounded-xl border border-neutral-200 p-5">
              <p className="text-sm font-semibold text-neutral-700 mb-2">{principle}</p>
              <p className="text-sm text-neutral-500">{detail}</p>
            </div>
          ))}
        </div>

        <Label>Key Decision: Sticky CTA</Label>
        <p className="text-sm text-neutral-600 mb-6">
          The status quo required users to scroll to the bottom of the page and then tap a CTA — two
          steps to begin something they were already motivated to do. The sticky footer replaced that
          with a persistent CTA visible at all times. The friction was in the interaction pattern,
          not the motivation.
        </p>

        <Label>Key Decision: Eligibility Copy</Label>
        <p className="text-sm text-neutral-600">
          The &ldquo;how to join&rdquo; section was deliberately non-specific about criteria. Legal constraints
          prevent publishing explicit requirements, and Elite members themselves report valuing the
          mystery of the program as part of its appeal. The copy communicates effort and character
          without setting a measurable bar: &ldquo;Share your experiences through thoughtful reviews&rdquo;
          rather than &ldquo;write X reviews per month.&rdquo; The design had to feel informative without
          over-promising.
        </p>
      </Card>

      <p>
        Target: a 2% increase in nominations = 175 more Elites = approximately 3,500 additional
        reviews per month.
      </p>

      <SectionDivider id="divider-conversion" />

      <h2 id="conversion">04 — Conversion: Turning Rejection into Re-engagement</h2>
      <p>
        With 80%+ of nominations auto-rejected, fixing the top of the funnel alone would not have
        moved the needle. The highest-leverage design work was here: converting a dead-end rejection
        into a specific, actionable nudge.
      </p>

      <Card>
        <Label>The Core Design Challenge</Label>
        <p className="text-sm text-neutral-700 mb-6">
          The user just made an effort to nominate themselves. A generic rejection at that moment
          doesn&apos;t just fail to help — it actively damages motivation. The design question was
          how to turn rejection into a starting line rather than a wall.
        </p>

        <Label>Five Rejection Reasons</Label>
        <BulletList className="mb-6" items={[
          "Velocity: no recent reviews",
          "Quality: review character count too low",
          "Account too new",
          "No profile photo",
          "Already nominated",
        ]} />

        <Label>Key Decision: The Loading Screen</Label>
        <p className="text-sm text-neutral-600 mb-6">
          Before showing a result, users see a loading state that simulates a real review of their
          account: &ldquo;Analyzing your profile... Checking your contributions... Verifying your
          eligibility.&rdquo; This does two things. It signals the nomination is being taken seriously,
          not instantly dismissed. And it makes the outcome feel legitimate whether accepted or
          rejected. A result that arrives instantly feels arbitrary; one that arrives after a visible
          process feels earned.
        </p>

        <TwoCol
          left={
            <>
              <Label>Rejection Page: Top Half</Label>
              <p className="text-sm text-neutral-600">
                Specific reason for rejection and exactly what to do about it. Each of the five
                rejection reasons has its own copy — generic feedback would have felt dismissive.
                Specific feedback makes the rejection credible and actionable.
              </p>
            </>
          }
          right={
            <>
              <Label>Rejection Page: Bottom Half</Label>
              <p className="text-sm text-neutral-600">
                A YNRA (You Might Want to Review Again) section with contextual copy nudging the
                user toward their next review. The rejection screen becomes a contribution prompt.
                The user leaves with something to do, not just a door closed in their face.
              </p>
            </>
          }
        />

        <Label>Small Fix, Big Impact: Location Confirmation</Label>
        <p className="text-sm text-neutral-600">
          Some users had stale locations from recent moves, causing false rejections that had nothing
          to do with their contribution quality. Adding the ability to confirm or correct primary
          location in the nomination modal removed an entire category of preventable rejections.
        </p>
      </Card>

      <p>
        Opportunity: improving the valid nomination rate from 20% to 25% across 100K expected
        nominations = ~5K additional Elites = estimated 65K incremental reviews per year.
      </p>

      <SectionDivider id="divider-system" />

      <h2 id="system">05 — The Funnel as a Design System</h2>
      <p>
        The three interventions form a coherent pipeline. None of them works in isolation.
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
                  response: "Post-review awareness modal targeting eligible contributors",
                },
                {
                  stage: "Consideration",
                  problem: "Landing page doesn't convert curious users",
                  response: "Elite page revamp with clear narrative, bold visuals, and sticky CTA",
                },
                {
                  stage: "Conversion",
                  problem: "Rejection kills momentum",
                  response: "Auto-rejection flow with specific feedback and contribution nudge",
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
        <p className="text-sm text-neutral-500 mt-6">
          The awareness modal drives users to the revamped page. The revamped page drives nominations.
          The rejection flow keeps rejected nominees contributing and re-nominating. Improving any one
          stage without the others would have left the pipeline leaking somewhere else.
        </p>
      </Card>

      <SectionDivider id="divider-outcome" />

      <h2 id="outcome">06 — Outcome &amp; Impact</h2>
      <ol>
        <li>
          <strong>Elite page revamp</strong> launched April 2024, ahead of May awareness campaigns,
          targeting a 2% lift in nominations.
        </li>
        <li>
          <strong>Awareness modal</strong> reaching ~880K eligible contributors per year, with
          projected 1K–5.8K incremental new Elites annually.
        </li>
        <li>
          <strong>Auto-rejection flow</strong> projected at 65K incremental reviews per year by
          converting rejection moments into specific, actionable re-engagement nudges.
        </li>
      </ol>

      <SectionDivider id="divider-reflections" />

      <h2 id="reflections">Reflections</h2>
      <ol>
        <li>
          <strong>Treating symptoms separately would have missed the point.</strong> Each piece of
          work looked like a standalone task. The design thinking was recognizing they were all
          symptoms of the same broken pipeline and making sure the solutions reinforced each other.
        </li>
        <li>
          <strong>The rejection flow was the highest-leverage work.</strong> With 80% of nominations
          rejected, the most impactful fix wasn&apos;t more top-of-funnel volume — it was stopping
          the bottom from hemorrhaging. One well-designed rejection screen changes the entire
          emotional arc of the experience.
        </li>
        <li>
          <strong>Copy is load-bearing.</strong> The Elite program deliberately withholds specific
          eligibility criteria. Designing within that constraint meant writing copy that felt
          informative and motivating without being explicit. The loading screen, the rejection
          messages, the &ldquo;how to join&rdquo; section — all required language decisions that carried as
          much design intent as the layouts themselves.
        </li>
      </ol>
    </CaseStudyLayout>
  );
}
