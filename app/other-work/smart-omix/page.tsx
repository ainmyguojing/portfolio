import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata = { title: "Smart Omix — Jing Guo" };

export default function SmartOmix() {
  return (
    <CaseStudyLayout
      title="Smart Omix"
      subtitle="The leading technology platform for decentralized, real-world clinical research."
      role="Product Designer"
      team="Startup team"
      year="Sep 2021 – Jul 2022"
      tags={["SaaS", "B2B", "Healthcare", "Web App"]}
    >
      <h2>Context</h2>
      <p>
        Clinical research is the process of collecting answers from participants about clinical-related
        questions at specified frequencies. Digital platforms increase accessibility — no time or
        location constraints — but create new challenges in researcher-participant relationship building.
      </p>
      <p>
        Smart Omix is a two-sided platform: a researcher-facing web app for study drafting,
        participant management, and data access; and a participant-facing mobile app for enrollment,
        data submission, and rewards. I joined as the sole designer from September 2021 through the
        July 2022 launch, and continued work on V2.
      </p>

      <h2>My Responsibilities</h2>
      <p>
        Defining user stories and product features, facilitating product specifications, constructing
        site architecture and user flows, iterating design options, conducting stakeholder reviews,
        delivering designs to engineering, running usability testing, and producing marketing materials.
      </p>

      <h2>Key Challenges & Solutions</h2>

      <h3>01 — Building a Robust, Flexible, Scalable System</h3>
      <p>
        Research has four phases: Design, Launch, Manage, Analyze. Users range from individual
        researchers to large teams with very different needs per phase.
      </p>
      <p>
        <strong>Solution:</strong> Study-level navigation organized around research phases.
        Organization-based study storage with role-based permission controls that scaled from solo
        researchers to enterprise teams.
      </p>

      <h3>02 — Handling Complex State Changes</h3>
      <p>
        Research lifecycles aren&apos;t linear — studies switch between states in complex, non-sequential
        ways.
      </p>
      <p>
        <strong>Solution:</strong> A state machine supporting all lifecycle transitions and behaviors,
        designed to be legible to both researchers and the engineering team.
      </p>

      <h3>03 — Safe Environment for Novel Data Collection</h3>
      <p>
        New data collection methods bring both opportunities and risks. Users needed to feel confident
        and informed.
      </p>
      <p>
        <strong>Solution:</strong> A dual-goal experience — educate and encourage simultaneously.
        Layered/nested information structure with hierarchy. Dedicated spaces for different data types.
      </p>

      <h3>04 — Accessibility for Diverse Users</h3>
      <p>
        Product complexity required serving researchers with vastly different backgrounds and levels
        of technical expertise.
      </p>
      <p>
        <strong>Solution:</strong> Informational overlay layer on top of functional UI. Mini tasks
        with stepped guidance. Ghosted downstream content to focus users on the current task.
      </p>

      <h3>05 — Increasing Transparency</h3>
      <p>
        The researcher-participant bond is weaker in digital settings. Participants needed visibility
        into study progress; researchers needed dashboards that surfaced meaningful signals.
      </p>
      <p>
        <strong>Solution:</strong> Notification system for progress tracking. Highly customizable data
        dashboards with filtering capabilities.
      </p>

      <h2>Reflections</h2>
      <ul>
        <li>Scalable structure must be established from project initiation — retrofitting is costly.</li>
        <li>
          Designer responsibility extends beyond UX/UI into domain knowledge and compliance — you
          can&apos;t design healthcare products without understanding the domain.
        </li>
        <li>Balancing stakeholder feedback while owning final design decisions is a constant tension.</li>
        <li>Consistency across product levels and detail matters more than any single screen.</li>
      </ul>
    </CaseStudyLayout>
  );
}
