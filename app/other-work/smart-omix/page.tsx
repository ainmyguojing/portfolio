import CaseStudyLayout from "@/components/CaseStudyLayout";
import VideoPlayer from "@/components/VideoPlayer";

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
  {
    id: "challenges", title: "Key Challenges & Strategic Solutions", divider: "divider-challenges",
    subsections: [
      { id: "challenge-1", title: "Platform for Complexity" },
      { id: "challenge-2", title: "Nonlinear Life Cycles" },
      { id: "challenge-3", title: "Data-Rich Research" },
      { id: "challenge-4", title: "Accessibility" },
      { id: "challenge-5", title: "Transparency & Trust" },
    ],
  },
  { id: "execution", title: "Execution & Results", divider: "divider-execution" },
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

      <div className="not-prose my-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Smart%20Omix/cover-image.png" alt="Smart Omix cover" className="w-full rounded-xl" />
      </div>

      <SectionDivider id="divider-responsibilities" />

      <h2 id="responsibilities">02 — My Responsibilities</h2>
      <p>
        I defined user stories and product features, mapped site architecture and flows, iterated
        designs, facilitated reviews, delivered specs to engineering, ran usability tests, and produced
        marketing assets.
      </p>

      <SectionDivider id="divider-challenges" />

      <h2 id="challenges">03 — Key Challenges &amp; Strategic Solutions</h2>

      <Card id="challenge-1">
        <Label>1. Platform for Complexity and Scale</Label>
        <p className="text-sm font-semibold text-neutral-700 mb-1 mt-2">Problem</p>
        <p className="text-sm text-neutral-600 mb-4">Researchers&apos; needs ranged widely: some simple studies could be managed by a single person, while complex studies often required whole teams. Each member with distinct roles, responsibilities, and goals. We needed a flexible structure that could accommodate both ends of this spectrum and everything in between.</p>
        <div className="flex flex-col gap-8 mb-6 mx-auto w-full sm:w-[90%]">
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Smart%20Omix/01-problem-taget-user-types.svg" alt="Target user types" className="w-full" />
            <figcaption className="text-xs text-neutral-400 text-center mt-2">Simgle study - individual researcher vs. Complex study - a research team</figcaption>
          </figure>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Smart%20Omix/01-problem-task-at-phases.svg" alt="Tasks at phases" className="w-full" />
            <figcaption className="text-xs text-neutral-400 text-center mt-2">Researcher roles required for each study phase and their tasks</figcaption>
          </figure>
        </div>
        <p className="text-sm font-semibold text-neutral-700 mb-1">Solution</p>
        <BulletList items={[
          "I designed a phase-based navigation: Design, Launch, Manage, Analyze, mirroring research stages.",
          "Organized studies in \"organizations\" with layered permissions, making access and roles scalable.",
          "Built modular components for each phase: simple for new users, flexible for complex teams.",
        ]} />
        <div className="flex flex-col gap-8 mt-6 mx-auto w-full sm:w-[90%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Smart%20Omix/01-solution-homescreen.svg" alt="Solution homescreen" className="w-full img-bordered" />
            <figcaption className="text-xs text-neutral-400 text-center mt-2">4 stages at the study level</figcaption>
          </figure>
          <figure>
            <VideoPlayer src="/images/Smart%20Omix/01-solution-organization.mp4" className="w-full rounded-lg img-bordered" />
            <figcaption className="text-xs text-neutral-400 text-center mt-2">Manage organizations and role access</figcaption>
          </figure>
        </div>
      </Card>

      <Card id="challenge-2">
        <Label>2. Managing Nonlinear Study Life Cycles</Label>
        <p className="text-sm font-semibold text-neutral-700 mb-1 mt-2">Problem</p>
        <p className="text-sm text-neutral-600 mb-4">Studies rarely follow a straight line; phases often overlap. For example, while a study might be locked for IRB review or launched, researchers inevitably discover changes they need to make, even after locking. We needed a nuanced system that allowed users to lock and unlock studies as needed, while automatically managing all downstream workflow adjustments to keep everything in sync and error-free.</p>
        <p className="text-sm font-semibold text-neutral-700 mb-1">Solution</p>
        <BulletList items={[
          "Built a flexible state machine to switch easily between phases",
          "Clarified allowed actions at each stage to minimize confusion",
        ]} />
        <div className="flex flex-col gap-8 mt-6 mx-auto w-full sm:w-[90%]">
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Smart%20Omix/02-solution-state-machine.svg" alt="State machine diagram" className="w-full img-bordered" />
            <figcaption className="text-xs text-neutral-400 text-center mt-2">State machine diagram - study transition between different states</figcaption>
          </figure>
          <figure>
            <VideoPlayer src="/images/Smart%20Omix/02-solution-state-machine-video.mp4" className="w-full rounded-lg img-bordered" />
            <figcaption className="text-xs text-neutral-400 text-center mt-2">Lauch a study in multiple steps, lock and unlock a study as needed</figcaption>
          </figure>
        </div>
      </Card>

      <Card id="challenge-3">
        <Label>3. Supporting New, Data-Rich Research</Label>
        <p className="text-sm font-semibold text-neutral-700 mb-1 mt-2">Problem</p>
        <p className="text-sm text-neutral-600 mb-4">Switching to digital introduced new data types and uncertainty.</p>
        <div className="flex flex-col gap-8 mb-6 mx-auto w-full sm:w-[90%]">
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Smart%20Omix/03-problems-novel-study.svg" alt="Novel study data types" className="w-full" />
          </figure>
        </div>
        <p className="text-sm font-semibold text-neutral-700 mb-1">Solution</p>
        <BulletList items={[
          "Designed the platform to educate and encourage adoption of novel data through customizable study settings",
          "Used a layered information architecture: summarizing at a high level, with details available on demand",
          "Enabled researchers to preview the participant interface, so they could visualize what participants would see and better tailor the study design",
        ]} />
        <div className="flex flex-col gap-8 mt-6 mx-auto w-full sm:w-[90%]">
          <figure>
            <VideoPlayer src="/images/Smart%20Omix/03-solution-novel-study.mp4" className="w-full rounded-lg img-bordered" />
            <figcaption className="text-xs text-neutral-400 text-center mt-2">Allow researchers to study a data type in depth. Each data type will show Available Data Source, Data Sample, and Paricipant Screen</figcaption>
          </figure>
        </div>
      </Card>

      <Card id="challenge-4">
        <Label>4. Accessibility, Despite Complexity</Label>
        <p className="text-sm font-semibold text-neutral-700 mb-1 mt-2">Problem</p>
        <p className="text-sm text-neutral-600 mb-4">Clinical research is inherently complex, but we wanted Smart Omix to be approachable for all researchers—regardless of their experience level. Our goal was to support both novices and experts by designing an intuitive, streamlined flow. We built in educational tools and context-sensitive guidance to help those who needed it, but ensured these resources were non-intrusive and wouldn&apos;t disrupt the workflow of experienced users.</p>
        <p className="text-sm font-semibold text-neutral-700 mb-1">Solution</p>
        <ul className="space-y-6">
          {[
            { bold: "Layered Informational UI", rest: ": Added an informational layer on top of the core UI, revealing helpful content and tips through context-sensitive triggers to support users when needed.", video: "/images/Smart%20Omix/4-soluton-information-card.mp4", caption: "Floating information window triggered by hover" },
            { bold: "Step-by-Step Mini Tasks", rest: ": Broke complex study creation into mini tasks with stepped guidance at key moments, providing structure and direction while preventing users from getting overwhelmed.", video: "/images/Smart%20Omix/04-soluton-create-ePRO.mp4", caption: "Steps of creating an ePRO" },
            { bold: "Ghosting Future Actions", rest: ": Used ghosted previews of upcoming steps and options so users could stay focused on what's next, while building awareness of the overall process.", video: "/images/Smart%20Omix/04-soluton-ghosted content.mp4", caption: "Choose which content to ghoast based on which step user is at, to help them build expectation without being overwhelming" },
          ].map(({ bold, rest, video, caption }) => (
            <li key={bold} className="flex flex-col gap-3 text-sm text-neutral-600">
              <div className="flex gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
                <span><strong className="text-neutral-700">{bold}</strong>{rest}</span>
              </div>
              <figure className="mx-auto w-full sm:w-[90%]">
                <VideoPlayer src={video} className="w-full rounded-lg img-bordered" />
                <figcaption className="text-xs text-neutral-400 text-center mt-2">{caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Card>

      <Card id="challenge-5">
        <Label>5. Building Transparency and Trust</Label>
        <p className="text-sm font-semibold text-neutral-700 mb-1 mt-2">Problem</p>
        <p className="text-sm text-neutral-600 mb-4">Digital platforms can feel impersonal, so we focused on keeping researchers and participants connected. Traditionally, in-flight studies often behave like a black box: researchers have limited visibility and control once a study is underway. We wanted to change that by ensuring researchers could easily review progress and make necessary adjustments at any point, as well as reach out to participants if needed.</p>
        <p className="text-sm font-semibold text-neutral-700 mb-1">Solution</p>
        <ul className="space-y-6">
          {[
            { text: "Built in notifications and alerts so researchers could track progress and participant needs", video: "/images/Smart%20Omix/05-solution-participants-status.mp4" },
            { text: "Created dashboards for actionable insight across participant groups", video: "/images/Smart%20Omix/05-solution-data-dashboard.mp4" },
          ].map(({ text, video }) => (
            <li key={text} className="flex flex-col gap-3 text-sm text-neutral-600">
              <div className="flex gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
                <span>{text}</span>
              </div>
              <div className="mx-auto w-full sm:w-[90%]">
                <VideoPlayer src={video} className="w-full rounded-lg img-bordered" />
              </div>
            </li>
          ))}
        </ul>
      </Card>

      <SectionDivider id="divider-execution" />

      <h2 id="execution">04 — Execution &amp; Results</h2>
      <Card>
        <Label>Execution Principles</Label>
        <p className="text-sm text-neutral-600 mt-2 mb-4">
          Strong early product architecture, a cohesive vision, and disciplined synthesis of stakeholder input were key to scaling Smart Omix.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
        <div className="mt-6 pt-6 border-t border-neutral-100">
          <Label>Results</Label>
          <p className="text-sm text-neutral-600 mt-2">
            Smart Omix expanded access to clinical research, enabling greater complexity, rapid iteration,
            and real engagement on a platform built for scale from day one.
          </p>
        </div>
      </Card>

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
