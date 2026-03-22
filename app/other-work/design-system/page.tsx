import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata = { title: "Design System — Jing Guo" };

export default function DesignSystem() {
  return (
    <CaseStudyLayout
      title="Design System"
      subtitle="Building a scalable design system on Material UI — bringing consistency, compatibility, and flexibility to a growing product team."
      role="Design System Lead"
      team="Product Design Team"
      year="2022–2023"
      tags={["Design System", "Material UI", "Storybook"]}
      currentHref="/other-work/design-system"
    >
      <h2>Overview</h2>
      <p>
        The system combines Material UI with organizational branding to ensure consistency across
        products. Material UI provides comprehensive components and code foundations, while the
        branding layer applies the organization&apos;s unique voice through style, font, and color.
      </p>

      <h2>System Structure</h2>
      <p>A four-tier pyramid hierarchy:</p>
      <ul>
        <li><strong>Foundation</strong> — brand tokens and accessibility standards</li>
        <li><strong>SaaS Functional Requirements</strong> — multi-layered complexity patterns</li>
        <li><strong>UI Elements</strong> — responsive, interactive component variants</li>
        <li><strong>Layout Templates</strong> — component assembly guidelines</li>
      </ul>

      <h2>Design Principles</h2>
      <p>Three core principles guided every decision:</p>
      <ul>
        <li><strong>Consistent</strong> — same patterns across all surfaces</li>
        <li><strong>Compatible</strong> — works with existing tech stack</li>
        <li><strong>Flexible</strong> — extensible for future product needs</li>
      </ul>

      <h2>Implementation</h2>
      <p>
        Used <strong>Chromatic</strong> and <strong>Storybook</strong> for component review and
        visual regression testing. Versioning control tracked changes across releases. SDK development
        facilitated engineer implementation and reduced design-to-code friction.
      </p>
      <p>
        The system required constant evolution through real application interaction — building it once
        and declaring it done would have been a mistake. The maintenance phase is more challenging
        than the initial build.
      </p>

      <h2>Reflections</h2>
      <ul>
        <li>Maintenance and improvement is more challenging than initial building — plan for it.</li>
        <li>Team workflow establishment is foundational — the system only works if people use it.</li>
        <li>Best practices vary by team — adapt the system to how people actually work.</li>
        <li>Testing changes prevents data loss and downstream breakage.</li>
      </ul>
    </CaseStudyLayout>
  );
}
