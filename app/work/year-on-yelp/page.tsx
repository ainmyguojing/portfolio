import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata = {
  title: "Year on Yelp — Jing Guo",
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
  { id: "what", title: "What Year on Yelp Is", divider: "divider-what" },
  { id: "role", title: "My Role: Design as Creative Direction", divider: "divider-role" },
  { id: "theme", title: "Finding the Theme", divider: "divider-theme" },
  { id: "experience", title: "Designing the Experience", divider: "divider-experience" },
  { id: "visual", title: "Visual Direction", divider: "divider-visual" },
  { id: "outcome", title: "Outcome", divider: "divider-outcome" },
  { id: "reflections", title: "Reflections", divider: "divider-reflections" },
];

export default function YearOnYelp() {
  return (
    <CaseStudyLayout
      title="Year on Yelp"
      subtitle="An annual personalized recap celebrating contributors' impact over the year. My role went beyond design execution: I defined the creative direction, led a cross-functional team through theme selection, and coordinated illustrators, animators, and copywriters to ship a cohesive experience across 14 modules."
      role="Lead Designer & Design PM"
      team="1 PM · 1 PMM · 3 Animators · 1 Illustrator · 1 Copywriter · Engineers"
      year="2023"
      tags={["Campaign Design", "Cross-functional", "Visual Systems", "Contributor Retention"]}
      sections={SECTIONS}
    >
      <p>
        This project required a different kind of design leadership. The brief didn&apos;t arrive
        fully formed — I was responsible for writing it. Every visual, copy line, and animation
        downstream followed from the creative direction I established.
      </p>

      <SectionDivider id="divider-what" />

      <h2 id="what">01 — What Year on Yelp Is</h2>
      <p>
        A yearly personalized reflection sent to Yelp contributors: a card-by-card story of their
        impact over the year. How many people their reviews helped, their most reviewed categories,
        top photos, reactions earned, recognitions, compliments. Part data visualization, part
        celebration, part motivation to keep contributing.
      </p>

      <SectionDivider id="divider-role" />

      <h2 id="role">02 — My Role: Design as Creative Direction</h2>
      <p>
        This wasn&apos;t a project where the brief arrived and I designed to it. I was responsible
        for the brief itself — defining the creative direction that every downstream decision would
        follow. That meant running the theme brainstorming workshop with product, design, content,
        creative, and engineering; developing the evaluation criteria and leading the team to a
        decision; writing the creative brief that went to the illustration and animation teams; and
        coordinating all creative deliverables across a 6-month timeline.
      </p>
      <p>
        The design thinking happened before any visual was made. A team of 10+ contributors — three
        animators, an illustrator, a copywriter, engineers, and a PMM — all needed a clear direction
        to work from. My job was to create that clarity.
      </p>

      <SectionDivider id="divider-theme" />

      <h2 id="theme">03 — Finding the Theme</h2>
      <p>
        The theme isn&apos;t decoration. It&apos;s the lens that gives every visual, every line of
        copy, and every animation a shared meaning. Without a strong theme, 14 modules feel like 14
        separate screens. With one, they tell a single story.
      </p>
      <p>
        The process started with a cross-functional brainstorm generating keywords: connection,
        journey, adventure, novelty, playful. From those came clusters of concepts. Four themes
        made the shortlist: Constellation, Memory Jar, Food Passport, and Pinball.
      </p>

      <Card>
        <Label>How We Evaluated the Themes</Label>
        <p className="text-sm text-neutral-700 mb-6">
          Five criteria guided the decision. Each theme was assessed against all five before
          any preference was applied.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {[
            { criterion: "Uniqueness", detail: "Does the theme allow for visually distinctive output that stands out?" },
            { criterion: "Relevancy", detail: "Does it connect naturally to Yelp contributions and the value of helping others?" },
            { criterion: "Clarity", detail: "Can a user make the connection without explanation?" },
            { criterion: "Execution", detail: "Is it achievable within the timeline and asset constraints?" },
            { criterion: "Personalization", detail: "Does it support unique visual variations matched to individual user data?" },
          ].map(({ criterion, detail }) => (
            <div key={criterion} className="rounded-xl border border-neutral-200 p-4">
              <p className="text-sm font-semibold text-neutral-700 mb-1">{criterion}</p>
              <p className="text-sm text-neutral-500">{detail}</p>
            </div>
          ))}
        </div>

        <Label>Constellation vs. Memory Jar</Label>
        <p className="text-sm text-neutral-700 mb-4">
          These were the final two. Both scored well across all criteria. The decision came down
          to one strategic question: should Year on Yelp center the contributor&apos;s personal
          memories, or their impact on others?
        </p>
        <TwoCol
          left={
            <>
              <p className="text-sm font-semibold text-neutral-700 mb-2">Memory Jar</p>
              <BulletList items={[
                "Strong emotional resonance — nostalgia-driven, immediately relatable",
                "Users already describe previous YOY as a personal journal",
                "High personalization potential through photo collage",
                "Strategic weakness: centers the contributor's own memories, making it harder to communicate that contributions help other people",
              ]} />
            </>
          }
          right={
            <>
              <p className="text-sm font-semibold text-neutral-700 mb-2">Constellation <span className="text-xs font-normal text-neutral-400">(Selected)</span></p>
              <BulletList items={[
                "Built on Yelp's existing star rating association — the metaphor didn't need to be invented, just activated",
                "Navigation by stars maps directly to contributors guiding others toward good businesses",
                "Strong personalization potential: food-shaped constellations per category",
                "Strategic strength: keeps the narrative focused outward — your contributions guided someone else",
              ]} />
            </>
          }
        />

        <Label>The Core Message</Label>
        <p className="text-sm text-neutral-600 italic">
          &ldquo;Like the stars above, your contributions helped others navigate which businesses
          to turn to in 2023.&rdquo;
        </p>
      </Card>

      <SectionDivider id="divider-experience" />

      <h2 id="experience">04 — Designing the Experience</h2>

      <Card>
        <Label>The Format Shift: Scroll to Story</Label>
        <p className="text-sm text-neutral-600 mb-6">
          2023 introduced a structural change from a long-form vertical scroll to a horizontal
          card-by-card story format. This was a deliberate design decision: the card format mirrors
          how people consume stories on social platforms, creates natural moments of anticipation
          between reveals, and makes each module feel like its own beat rather than a section in a
          document. It was a meaningful engineering investment, but a one-time one — the card
          format would reduce design and engineering effort for all future YOY builds.
        </p>

        <Label>14 Modules, One System</Label>
        <p className="text-sm text-neutral-600 mb-6">
          Each module covered a different contribution type: reviews, photos, reactions,
          recognitions, beauty and home services, survey questions, compliments, plus an intro
          and closing. Each had eligibility logic shown only to users with qualifying data, its
          own visual treatment, and copy. Select modules received animation at the highest-impact
          moments in the sequence.
        </p>

        <Label>Personalization at Scale</Label>
        <p className="text-sm text-neutral-600">
          The most reviewed food category module had 14 visual variations — one for each of the
          13 top food categories plus a general fallback — each with a unique constellation
          illustration and distinct copy. Every user&apos;s most reviewed category would feel
          individually crafted. The design work was building the visual system and the logic that
          made this generatable; the craft was in the system, not the individual instances.
        </p>
      </Card>

      <SectionDivider id="divider-visual" />

      <h2 id="visual">05 — Visual Direction</h2>
      <p>
        Once the theme was signed off, the creative brief defined the visual language for the
        illustration and animation teams to work from.
      </p>

      <Card>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              label: "Tone",
              detail: "Bold, warm, celebratory. Elevated from everyday Yelp but rooted in the brand palette. The experience should feel like a special occasion, not a product screen.",
            },
            {
              label: "Visual Elements",
              detail: "Two primary motifs: landscape backgrounds and constellation icons, with star-shaped food imagery forming recognizable silhouettes. Consistent language; varied foreground per module.",
            },
            {
              label: "Animation",
              detail: "Three modules received Lottie animation treatment — intro, most popular photo, most popular review — reserved for the moments with the highest emotional stakes in the sequence.",
            },
          ].map(({ label, detail }) => (
            <div key={label} className="rounded-xl border border-neutral-200 p-5">
              <Label>{label}</Label>
              <p className="text-sm text-neutral-600 mt-2">{detail}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-neutral-500 mt-6">
          The visual system needed to hold across 14 modules without feeling repetitive. The
          solution was constraining the palette and motif tightly while giving each module its
          own foreground illustration. The underlying constellation language is consistent; the
          specific imagery varies by contribution type.
        </p>
      </Card>

      <SectionDivider id="divider-outcome" />

      <h2 id="outcome">06 — Outcome</h2>
      <ol>
        <li>
          <strong>Launched December 5, 2023</strong> on schedule, with 14 modules across iOS,
          Android, and Web.
        </li>
        <li>
          Survey respondents described the experience as reinforcing why they contribute to Yelp
          and making the brand feel fun and relevant. One respondent: <em>&ldquo;I loved what
          this did at the end of the year to help reinforce that we contribute to the site for
          public service. Sharing the impact and feeling appreciated for it goes a long way for
          brand affinity.&rdquo;</em>
        </li>
        <li>
          <strong>The card-based story format</strong> established a reusable foundation,
          reducing design and engineering effort for future builds.
        </li>
      </ol>

      <SectionDivider id="divider-reflections" />

      <h2 id="reflections">Reflections</h2>
      <ol>
        <li>
          <strong>The theme decision is a product decision.</strong> Choosing between Constellation
          and Memory Jar wasn&apos;t a creative preference — it was a strategic call about whether
          YOY should center the contributor&apos;s personal memories or their impact on others.
          Getting that framing right determined what every screen said and felt like.
        </li>
        <li>
          <strong>Designing for cross-functional output means designing the brief, not just the
          screen.</strong> The quality of the final visuals depended on how clearly the creative
          direction was communicated to illustrators and animators who weren&apos;t in the room
          for the strategy conversations. The brief was as much a design artifact as the Figma file.
        </li>
        <li>
          <strong>Personalization scales through systems, not instances.</strong> The 14 food
          category variations felt handcrafted to each user. The actual design work was building
          the visual logic that made them generatable — the craft was in the system.
        </li>
      </ol>
    </CaseStudyLayout>
  );
}
