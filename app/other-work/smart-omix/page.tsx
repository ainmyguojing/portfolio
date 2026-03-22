import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata = { title: "Smart Omix — Jing Guo" };

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
  { id: "context", title: "Context & Opportunity", divider: "divider-context" },
  { id: "responsibilities", title: "My Responsibilities", divider: "divider-responsibilities" },
  { id: "challenges", title: "Key Challenges & Strategic Solutions", divider: "divider-challenges" },
  { id: "execution", title: "Execution & Learning", divider: "divider-execution" },
  { id: "results", title: "Results", divider: "divider-results" },
  { id: "reflections", title: "Reflections", divider: "divider-reflections" },
];

export default function SmartOmix() {
  return (
    <CaseStudyLayout
      title="Smart Omix – End-to-End Digital Clinical Research"
      subtitle="Enabling real-world, end-to-end digital clinical research for independent and institutional teams: from study design to participant engagement to data analysis."
      role="Product Designer (Sole)"
      team="Startup team"
      year="Sep 2021 – Jul 2022"
      tags={["SaaS", "B2B", "Healthcare", "Web App"]}
      sections={SECTIONS}
      currentHref="/other-work/smart-omix"
    >
      <SectionDivider id="divider-context" />

      <h2 id="context">01 — Context &amp; Opportunity</h2>
      <p>
        Clinical research typically means in-person studies, which are resource-heavy and inaccessible
        for many. Digital platforms offer more flexibility, but can make researcher-participant
        relationships harder to build. Smart Omix set out to change this: enabling real-world,
        end-to-end digital research for independent and institutional teams.
      </p>
      <p>
        The platform has two sides: a researcher web app for designing studies, managing participants,
        and viewing data, and a participant mobile app for enrollment, data entry, and rewards. I joined
        as the sole designer in September 2021, leading up to the July 2022 launch, and continued
        with V2.
      </p>

      <SectionDivider id="divider-responsibilities" />

      <h2 id="responsibilities">02 — My Responsibilities</h2>
      <p>
        I defined user stories and product features, mapped site architecture and flows, iterated
        designs, facilitated reviews, delivered specs to engineering, ran usability tests, and produced
        marketing assets.
      </p>

      <SectionDivider id="divider-challenges" />

      <h2 id="challenges">03 — Key Challenges &amp; Strategic Solutions</h2>

      <Card>
        <Label>1. Platform for Complexity and Scale</Label>
        <p className="text-sm font-semibold text-neutral-700 mb-1 mt-2">Problem</p>
        <p className="text-sm text-neutral-600 mb-4">Researchers&apos; needs spanned from simple to highly complex studies.</p>
        <p className="text-sm font-semibold text-neutral-700 mb-1">Solution</p>
        <BulletList items={[
          "Introduced a phase-based navigation: Design, Launch, Manage, Analyze",
          "Organized studies by \"organizations\" with granular, role-based access",
          "Ensured components in each phase were independent but easy to cross-reference, balancing simplicity for novices and flexibility for experts",
        ]} />
      </Card>

      <Card>
        <Label>2. Managing Nonlinear Study Life Cycles</Label>
        <p className="text-sm font-semibold text-neutral-700 mb-1 mt-2">Problem</p>
        <p className="text-sm text-neutral-600 mb-4">Studies rarely follow a straight line; phases overlap.</p>
        <p className="text-sm font-semibold text-neutral-700 mb-1">Solution</p>
        <BulletList items={[
          "Built a flexible state machine to switch easily between phases",
          "Clarified allowed actions at each stage to minimize confusion",
        ]} />
      </Card>

      <Card>
        <Label>3. Supporting New, Data-Rich Research</Label>
        <p className="text-sm font-semibold text-neutral-700 mb-1 mt-2">Problem</p>
        <p className="text-sm text-neutral-600 mb-4">Switching to digital introduced new data types and uncertainty.</p>
        <p className="text-sm font-semibold text-neutral-700 mb-1">Solution</p>
        <BulletList items={[
          "Designed the platform to educate and encourage use of novel data through customizable settings",
          "Used layered information architecture to surface details on demand",
        ]} />
      </Card>

      <Card>
        <Label>4. Accessibility, Despite Complexity</Label>
        <p className="text-sm font-semibold text-neutral-700 mb-1 mt-2">Problem</p>
        <p className="text-sm text-neutral-600 mb-4">Needed an interface both novices and experts could navigate.</p>
        <p className="text-sm font-semibold text-neutral-700 mb-1">Solution</p>
        <BulletList items={[
          "Added in-context info layers and step-by-step breakdowns to help users progress smoothly",
          "Used ghosting for future actions, keeping users focused but aware of upcoming tasks",
        ]} />
      </Card>

      <Card>
        <Label>5. Building Transparency and Trust</Label>
        <p className="text-sm font-semibold text-neutral-700 mb-1 mt-2">Problem</p>
        <p className="text-sm text-neutral-600 mb-4">Digital can feel impersonal; we wanted researchers and participants connected.</p>
        <p className="text-sm font-semibold text-neutral-700 mb-1">Solution</p>
        <BulletList items={[
          "Built in notifications and alerts so researchers could track progress and participant needs",
          "Created dashboards for actionable insight across participant groups",
        ]} />
      </Card>

      <SectionDivider id="divider-execution" />

      <h2 id="execution">04 — Execution &amp; Learning</h2>
      <Card>
        <Label>Execution Principles</Label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {[
            { label: "Designed for edge cases", detail: "Built flows for critical scenarios from the start" },
            { label: "Full-cycle ownership", detail: "Led usability testing and iteration, drove roadmap alignment" },
            { label: "Consistency over novelty", detail: "Prioritized predictable patterns to reduce learning curve and support needs" },
          ].map(({ label, detail }) => (
            <div key={label} className="rounded-xl border border-neutral-200 p-5">
              <p className="text-sm font-semibold text-neutral-700 mb-2">{label}</p>
              <p className="text-sm text-neutral-500">{detail}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-neutral-600 mt-6">
          <strong className="text-neutral-700">Reflection:</strong> Strong early product architecture,
          a cohesive vision, and disciplined synthesis of stakeholder input were key to scaling Smart Omix.
        </p>
      </Card>

      <SectionDivider id="divider-results" />

      <h2 id="results">05 — Results</h2>
      <p>
        Smart Omix expanded access to clinical research, enabling greater complexity, rapid iteration,
        and real engagement on a platform built for scale from day one.
      </p>

      <SectionDivider id="divider-reflections" />

      <h2 id="reflections">Reflections</h2>
      <ol>
        <li>
          <strong>Set up for scale:</strong> A big-picture, scalable structure from the outset saves
          major headaches down the line and ensures smooth transitions as the product grows.
        </li>
        <li>
          <strong>Go beyond UI/UX:</strong> True product design means understanding domain, user pain
          points, compliance, engineering costs, and feasibility.
        </li>
        <li>
          <strong>Own the design:</strong> Stakeholder feedback is critical, but the designer must
          synthesize and make the final call with confidence.
        </li>
        <li>
          <strong>Prioritize consistency:</strong> Design consistency across both broad concepts and
          the smallest details matters most, especially in complex or phased products.
        </li>
      </ol>
    </CaseStudyLayout>
  );
}
