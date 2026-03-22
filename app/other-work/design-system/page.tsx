import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata = { title: "Design System — Jing Guo" };

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
  { id: "resources", title: "Resources & Guidelines", divider: "divider-resources" },
  { id: "structure", title: "System Structure", divider: "divider-structure" },
  { id: "principles", title: "Design Principles", divider: "divider-principles" },
  { id: "applying", title: "Applying the System", divider: "divider-applying" },
  { id: "implementation", title: "Implementation & Handoff", divider: "divider-implementation" },
  { id: "action", title: "Design System in Action", divider: "divider-action" },
  { id: "reflections", title: "Reflections", divider: "divider-reflections" },
];

export default function DesignSystem() {
  return (
    <CaseStudyLayout
      title="Design System for SaaS Web Products"
      subtitle="Created and actively maintained a design system to drive high consistency, best practices, and efficiency across SaaS web products."
      role="Design System Lead"
      team="Product Design Team"
      year="2022–2023"
      tags={["Design System", "Material UI", "Storybook"]}
      sections={SECTIONS}
      currentHref="/other-work/design-system"
    >
      <SectionDivider id="divider-resources" />

      <h2 id="resources">01 — Resources &amp; Guidelines</h2>
      <p>A robust system starts with two pillars:</p>
      <Card>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-neutral-200 p-5">
            <p className="text-sm font-semibold text-neutral-700 mb-2">Material UI</p>
            <p className="text-sm text-neutral-600">Provided a comprehensive library of elements, variants, behaviors, and ready-to-use code.</p>
          </div>
          <div className="rounded-xl border border-neutral-200 p-5">
            <p className="text-sm font-semibold text-neutral-700 mb-2">Branding</p>
            <p className="text-sm text-neutral-600">Adapted Material UI to reflect our company&apos;s unique voice through style, font, and color so every product feels truly ours.</p>
          </div>
        </div>
      </Card>

      <SectionDivider id="divider-structure" />

      <h2 id="structure">02 — System Structure</h2>
      <p>The design system follows a pyramid structure:</p>
      <Card>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Foundation", detail: "Establishes brand identity and ensures accessibility." },
            { label: "SaaS Functional Requirements", detail: "Accommodates complex, multi-layered product needs." },
            { label: "UI Elements", detail: "Responsive, interactive, with variants for every state." },
            { label: "Layout Templates", detail: "Guide how elements combine into components, modals, and pages." },
          ].map(({ label, detail }) => (
            <div key={label} className="rounded-xl border border-neutral-200 p-5">
              <p className="text-sm font-semibold text-neutral-700 mb-2">{label}</p>
              <p className="text-sm text-neutral-500">{detail}</p>
            </div>
          ))}
        </div>
      </Card>

      <SectionDivider id="divider-principles" />

      <h2 id="principles">03 — Design Principles</h2>
      <p>
        Consistent, compatible, and flexible are the top 3 principles that guided each layer, ensuring
        every element and template was consistent, usable, and on-brand.
      </p>
      <Card>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Consistent", detail: "Same patterns across all surfaces and products." },
            { label: "Compatible", detail: "Works with the existing tech stack and workflows." },
            { label: "Flexible", detail: "Extensible and adaptable for future product needs." },
          ].map(({ label, detail }) => (
            <div key={label} className="rounded-xl border border-neutral-200 p-5">
              <p className="text-sm font-semibold text-neutral-700 mb-2">{label}</p>
              <p className="text-sm text-neutral-500">{detail}</p>
            </div>
          ))}
        </div>
      </Card>

      <SectionDivider id="divider-applying" />

      <h2 id="applying">04 — Applying the System</h2>
      <p>
        It is important to follow a procedure to apply the design system, otherwise design work might
        get lost or overwritten. It is also important to collect feedback from designers to improve or
        fix any compatibility or responsive issues. Most importantly, the design system is a living
        system which needs to interact with real application cases and evolve constantly to fit the
        organization&apos;s needs.
      </p>

      <SectionDivider id="divider-implementation" />

      <h2 id="implementation">05 — Implementation &amp; Handoff</h2>
      <p>
        The design system served not just designers, but also engineers — evolving into an SDK for
        easier implementation.
      </p>
      <Card>
        <BulletList items={[
          "Used tools like Chromatic and Storybook for reviewing style and interactions.",
          "Maintained strict version control to track changes and support smooth handoffs.",
        ]} />
      </Card>

      <SectionDivider id="divider-action" />

      <h2 id="action">06 — Design System in Action</h2>
      <p>
        Core elements included: Buttons, Dropdown Lists, Layout Templates, and Kanban Boards — for
        consistent UI across products.
      </p>

      <SectionDivider id="divider-reflections" />

      <h2 id="reflections">Reflections</h2>
      <ol>
        <li>
          <strong>The Real Work Begins with Adoption:</strong> True stability and value emerge only
          after the system is put to use. Only then do gaps, missing variants, or compatibility issues
          surface — and are resolved based on real feedback.
        </li>
        <li>
          <strong>Right Workflow = Sustainable Growth:</strong> Streamlining edit and review processes
          is vital. From ad hoc requests to structured Figma branching and scheduled reviews, a
          dedicated gatekeeper ensures quality and coherence as the system evolves.
        </li>
        <li>
          <strong>Tailor Best Practices to Your Team:</strong> There&apos;s no one-size-fits-all
          approach. Explore different philosophies, adapt your process, and build the system that
          serves your team&apos;s reality best.
        </li>
        <li>
          <strong>Always Test Before Launch:</strong> Even established design systems can surprise
          you. When in doubt, create test files and check the impact of changes before updating the
          main products.
        </li>
      </ol>
    </CaseStudyLayout>
  );
}
