import CaseStudyLayout from "@/components/CaseStudyLayout";
import Image from "next/image";

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
  { id: "visual", title: "Visual Direction", divider: "divider-visual" },
  { id: "experience", title: "Designing the Experience", divider: "divider-experience" },
  { id: "outcome", title: "Outcome", divider: "divider-outcome" },
  { id: "reflections", title: "Reflections", divider: "divider-reflections" },
];

export default function YearOnYelp() {
  return (
    <CaseStudyLayout
      title="Year on Yelp"
      subtitle="An annual personalized recap celebrating contributors' impact. Beyond designing, I set the creative direction, facilitated theme selection, and coordinated illustrators, animators, and copywriters, delivering a cohesive experience across 14 modules."
      role="Lead Designer & Design PM"
      team="1 PM · 1 PMM · 1 Animator · 1 Illustrator · 1 Copywriter · Engineers"
      year="2023"
      tags={["Campaign Design", "Cross-functional", "Visual Systems", "Contributor Retention"]}
      sections={SECTIONS}
      currentHref="/work/year-on-yelp"
    >
      <p>
        This project required proactive design leadership. With no clear initial brief, I defined
        the creative vision that shaped every asset: visual, copy, and animation.
      </p>

      <SectionDivider id="divider-what" />

      <h2 id="what">01 — What Year on Yelp Is</h2>
      <p>
        A yearly, personalized story delivered to Yelp contributors: card-by-card highlights of
        their impact: how many people their reviews helped, categories covered, top photos, reactions,
        and recognitions. It blends data visualization, celebration, and motivation to keep
        contributing.
      </p>

      <SectionDivider id="divider-role" />

      <h2 id="role">02 — My Role: Design as Creative Direction</h2>
      <p>
        I didn&apos;t just execute; I wrote the brief. This meant running workshops with product,
        design, content, and engineering to brainstorm themes, setting evaluation criteria, and
        coordinating creative deliverables across six months. My primary job was to create clarity
        and direction for a cross-disciplinary team of 10+ people.
      </p>

      <SectionDivider id="divider-theme" />

      <h2 id="theme">03 — Finding the Theme</h2>
      <p>
        The theme is foundational: it gives every visual and line of copy a unifying purpose.
        Without it, the 14 modules would feel disconnected; with it, they form a single, memorable
        story.
      </p>
      <p>
        We brainstormed keywords like <strong>connection</strong>, <strong>journey</strong>, and <strong>playfulness</strong>, which led to four theme
        options: Constellation, Memory Jar, Food Passport, and Pinball.
      </p>

      <Card>
        <Label>Theme Criteria</Label>
        <BulletList className="mb-6" items={[
          "Uniqueness",
          "Relevancy",
          "Clarity",
          "Execution feasibility",
          "Personalization",
        ]} />

        <Label>Constellation vs. Memory Jar</Label>
        <p className="text-sm text-neutral-600 mb-4">
          Both finalists were strong. Memory Jar resonated emotionally and supported
          photo-collages, but focused more on personal nostalgia. Constellation drew on
          Yelp&apos;s brand and the idea of guiding others, keeping the focus on impact and easily
          mapping to personalized visuals. We chose Constellation for its outward,
          contribution-centered narrative.
        </p>

        <div className="not-prose grid grid-cols-2 gap-4 mb-6">
          <figure className="flex flex-col gap-2">
            <Image src="/images/Year on Yelp/Contellation-theme.png" alt="Concept visuals - Constellation" width={800} height={600} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
            <figcaption className="text-xs text-neutral-400 text-center">Concept viusals - Contellation</figcaption>
          </figure>
          <figure className="flex flex-col gap-2">
            <Image src="/images/Year on Yelp/Memory-jar-theme.png" alt="Concept visuals - Memory Jar" width={800} height={600} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
            <figcaption className="text-xs text-neutral-400 text-center">Concept viusals - Memory Jar</figcaption>
          </figure>
        </div>

        <Label>The Core Message</Label>
        <p className="text-sm text-neutral-600 italic">
          &ldquo;Like the stars above, your contributions helped others navigate which businesses
          to turn to in 2023.&rdquo;
        </p>
      </Card>

      <SectionDivider id="divider-visual" />

      <h2 id="visual">04 — Visual Direction</h2>
      <p>
        Once the theme was finalized, I provided a detailed creative brief to guide illustration
        and animation.
      </p>

      <Card>
        <Label>Tone</Label>
        <p className="text-sm text-neutral-600 mb-6">
          Bold, warm, and celebratory; standing out from everyday Yelp but grounded in the brand.
        </p>

        <Label>Visuals</Label>
        <p className="text-sm text-neutral-600 mb-6">
          Landscape backgrounds and constellation icons, with food shapes as star clusters; unique
          foregrounds per module.
        </p>

        <div className="not-prose mx-auto mb-6" style={{ width: "35%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/Year on Yelp/visual-elements.png" alt="Visual elements" className="w-full rounded-lg" />
        </div>

        <Label>Animation</Label>
        <p className="text-sm text-neutral-600 mb-6">
          Three modules (intro, top photo, top review) received Lottie treatment for peak emotional
          impact. Visual coherence was achieved via tight color and motif constraints, while
          module-specific details kept things fresh.
        </p>

        <div className="not-prose grid grid-cols-3 gap-4">
          <figure className="flex flex-col gap-2">
            <Image src="/images/Year on Yelp/opening-screen-animation.gif" alt="Opening screen animation" width={400} height={700} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
            <figcaption className="text-xs text-neutral-400 text-center">Opening screen</figcaption>
          </figure>
          <figure className="flex flex-col gap-2">
            <Image src="/images/Year on Yelp/most-reviewed-category-animation.gif" alt="Most reviewed category animation" width={400} height={700} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
            <figcaption className="text-xs text-neutral-400 text-center">Most reviewed category</figcaption>
          </figure>
          <figure className="flex flex-col gap-2">
            <Image src="/images/Year on Yelp/closing-screen-animation.gif" alt="Closing screen animation" width={400} height={700} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
            <figcaption className="text-xs text-neutral-400 text-center">Closing screen</figcaption>
          </figure>
        </div>
      </Card>

      <SectionDivider id="divider-experience" />

      <h2 id="experience">05 — Designing the Experience</h2>

      <div className="not-prose mx-auto my-6" style={{ width: "35%" }}>
        <video src="/images/Year on Yelp/complete-experience.mov" autoPlay loop muted playsInline className="w-full rounded-lg" />
      </div>

      <Card>
        <Label>Format Shift: Scroll to Story</Label>
        <p className="text-sm text-neutral-600 mb-6">
          2023 replaced long vertical scrolls with a horizontal, card-by-card format, evoking
          social stories and creating anticipation. This structure makes each moment feel distinct,
          and lays a reusable foundation for future recaps.
        </p>

        <Label>14 Modules, One System</Label>
        <p className="text-sm text-neutral-600 mb-6">
          Each module (reviews, photos, reactions, recognitions, etc.) had its own logic and
          visuals, shown only to users with qualifying activity. Animation was reserved for the
          most emotionally resonant beats.
        </p>

        <div className="not-prose grid grid-cols-7 gap-3 mb-3">
          {[
            { n: 1, caption: "Opening screen" },
            { n: 2, caption: "Reactions" },
            { n: 3, caption: "Photos shared" },
            { n: 4, caption: "Recognitions earned" },
            { n: 5, caption: "Service category reviewed" },
            { n: 6, caption: "Most reviewed category" },
            { n: 7, caption: "Beauty category reviewed" },
          ].map(({ n, caption }) => (
            <figure key={n} className="flex flex-col gap-2">
              <Image src={`/images/Year on Yelp/screen-${n}.png`} alt={caption} width={400} height={700} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
              <figcaption className="text-xs text-neutral-400 text-center">{caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="not-prose grid grid-cols-7 gap-3 mb-6">
          {[
            { n: 8, caption: "Top 3 photographed categories" },
            { n: 9, caption: "Most viewed review" },
            { n: 10, caption: "Most viewed photo" },
            { n: 11, caption: "Questions answered" },
            { n: 12, caption: "Compliments given and received" },
            { n: 13, caption: "Closing screen" },
            { n: 14, caption: "Next review screen" },
          ].map(({ n, caption }) => (
            <figure key={n} className="flex flex-col gap-2">
              <Image src={`/images/Year on Yelp/screen-${n}.png`} alt={caption} width={400} height={700} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
              <figcaption className="text-xs text-neutral-400 text-center">{caption}</figcaption>
            </figure>
          ))}
        </div>

        <Label>Personalization at Scale</Label>
        <p className="text-sm text-neutral-600 mb-6">
          The most reviewed food category had 14 illustrated variations. Rather than custom
          crafting for each user, design work focused on building a highly flexible system, so
          each user&apos;s recap felt individualized and special.
        </p>

        <figure className="not-prose mx-auto mb-6" style={{ width: "30%" }}>
          <Image src="/images/Year on Yelp/category-14-general.png" alt="Generic screen - fork & knife visual" width={600} height={800} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
          <figcaption className="text-xs text-neutral-400 text-center mt-2">Generic screen - fork &amp; knife visual</figcaption>
        </figure>

        <div className="not-prose grid grid-cols-6 gap-3 mb-4">
          {[
            { n: 1, name: "american", caption: "American food" },
            { n: 2, name: "breakfast", caption: "Breakfast & Brunch" },
            { n: 3, name: "sandwich", caption: "Sandwich" },
            { n: 4, name: "seafood", caption: "Seafood" },
            { n: 5, name: "burger", caption: "Burger" },
            { n: 6, name: "pizza", caption: "Pizza" },
          ].map(({ n, name, caption }) => (
            <figure key={n} className="flex flex-col gap-2">
              <Image src={`/images/Year on Yelp/category-${n}-${name}.png`} alt={caption} width={400} height={600} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
              <figcaption className="text-xs text-neutral-400 text-center">{caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="not-prose grid grid-cols-7 gap-3">
          {[
            { n: 7, name: "cocktail", caption: "Cocktail Bar" },
            { n: 8, name: "italian", caption: "Italian food" },
            { n: 9, name: "coffee", caption: "Coffee & Tea" },
            { n: 10, name: "mexican", caption: "Mexican food" },
            { n: 11, name: "japanses", caption: "Japanese food" },
            { n: 12, name: "salad", caption: "Salad" },
            { n: 13, name: "dessert", caption: "Dessert" },
          ].map(({ n, name, caption }) => (
            <figure key={n} className="flex flex-col gap-2">
              <Image src={`/images/Year on Yelp/category-${n}-${name}.png`} alt={caption} width={400} height={600} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
              <figcaption className="text-xs text-neutral-400 text-center">{caption}</figcaption>
            </figure>
          ))}
        </div>
      </Card>

      <SectionDivider id="divider-outcome" />

      <h2 id="outcome">06 — Outcome</h2>
      <ol>
        <li>
          <strong>Launched December 5, 2023</strong>, on schedule across iOS, Android, and Web.
        </li>
        <li>
          User surveys highlighted how the experience reinforced their motivation to contribute
          and improved brand affinity. One user said, <em>&ldquo;I loved what this did at the
          end of the year… Feeling appreciated goes a long way for brand affinity.&rdquo;</em>
        </li>
        <li>
          <strong>The card-based story format</strong> created a foundation for easier future
          builds.
        </li>
      </ol>

      <SectionDivider id="divider-reflections" />

      <h2 id="reflections">Reflections</h2>
      <ol>
        <li>
          <strong>The theme choice was strategic</strong>, shaping every screen&apos;s message and
          emotional impact.
        </li>
        <li>
          <strong>Leading cross-functional output meant designing the brief as thoughtfully as the
          visuals</strong>; clarity here determined quality downstream.
        </li>
        <li>
          <strong>Personalization at scale is achieved by building the system</strong>, not
          crafting every instance by hand.
        </li>
      </ol>
    </CaseStudyLayout>
  );
}
