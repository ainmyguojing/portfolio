import CaseStudyLayout from "@/components/CaseStudyLayout";
import Image from "next/image";

const SHOW_VISUAL_HINTS = false;

function VisualHint({ children }: { children: React.ReactNode }) {
  if (!SHOW_VISUAL_HINTS) return null;
  return (
    <p className="text-xs italic my-4 py-2 px-3 rounded-lg" style={{ color: "#FF258E", background: "rgba(255,37,142,0.08)", border: "1px dashed rgba(255,37,142,0.3)" }}>
      📷 {children}
    </p>
  );
}

export const metadata = {
  title: "Year on Yelp — Jing Guo",
};

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

function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "#FF258E" }}>
      {children}
    </p>
  );
}

function BulletList({ items, className, size = "sm" }: { items: string[]; className?: string; size?: "sm" | "base" }) {
  const textClass = size === "base" ? "text-base" : "text-sm text-neutral-800";
  const dotMt = size === "base" ? "mt-2" : "mt-1.5";
  return (
    <ul className={`space-y-1.5 ${className ?? ""}`}>
      {items.map((item) => (
        <li key={item} className={`flex gap-2 ${textClass}`}>
          <span className={`${dotMt} w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0`} />
          {item}
        </li>
      ))}
    </ul>
  );
}

const SECTIONS = [
  { id: "opportunity", title: "The Opportunity", divider: "divider-opportunity" },
  { id: "role", title: "My Role", divider: "divider-role" },
  {
    id: "design-moves", title: "Three Design Moves", divider: "divider-design-moves",
    subsections: [
      { id: "move-story", title: "Recap → Story" },
      { id: "move-theme", title: "One Creative Logic" },
      { id: "move-personalization", title: "Scalable Personalization" },
    ],
  },
  { id: "sharing", title: "Sharing & Next Contribution", divider: "divider-sharing" },
  { id: "outcome", title: "Outcome", divider: "divider-outcome" },
  { id: "reflection", title: "Reflection", divider: "divider-reflection" },
];

export default function YearOnYelp() {
  return (
    <CaseStudyLayout
      title="Year on Yelp"
      subtitle="Turning contributor data into a personal story of impact"
      role="Lead Product Designer"
      scope="Experience strategy, creative direction, interaction design, personalization system, and cross-functional delivery"
      team="Product, Engineering, Product Marketing, Content Design, Illustration, Animation, and Social"
      year="2023"
      tags={["Personalization", "Retention", "Identity"]}
      sections={SECTIONS}
      currentHref="/work/year-on-yelp"
      introContent={
        <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
          I led product design and creative direction for Yelp&apos;s 2023 annual contributor recap.
          I transformed a long scrolling summary into a personalized story system, established the
          constellation theme, and coordinated illustration, animation, content, product, and engineering
          across 14 conditional modules.
        </p>
      }
    >
      {/* ──────────── Project at a glance ──────────── */}
      <h3>Project at a Glance</h3>
      <div className="not-prose flex gap-6 my-6 items-start">
        <div className="flex flex-col gap-4 flex-1">
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "14", detail: "personalized modules across reviews, photos, reactions, Recognition, and other contributions" },
              { stat: "14", detail: "visual variations for the most-reviewed food category" },
            ].map(({ stat, detail }) => (
              <div key={detail} className="rounded-xl border border-neutral-100 bg-neutral-50 p-5">
                <p className="text-lg font-semibold text-neutral-800 mb-1">{stat}</p>
                <p className="text-sm text-neutral-500">{detail}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "3", detail: "platforms: iOS, Android, and web" },
              { stat: "23K+", detail: "shares to social during the 2023 campaign" },
            ].map(({ stat, detail }) => (
              <div key={detail} className="rounded-xl border border-neutral-100 bg-neutral-50 p-5">
                <p className="text-lg font-semibold text-neutral-800 mb-1">{stat}</p>
                <p className="text-sm text-neutral-500">{detail}</p>
              </div>
            ))}
          </div>
        </div>
        <video
          src="/images/Year%20on%20Yelp/complete-experience.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-xl"
          style={{ height: "55vh", width: "auto", flexShrink: 0 }}
        />
      </div>

      {/* ══════════════ The Opportunity ══════════════ */}
      <SectionDivider id="divider-opportunity" />
      <h2 id="opportunity">The Opportunity</h2>

      <h3>Contributors wanted to see what their effort added up to</h3>
      <p>
        Year on Yelp gave contributors an annual view of the people and businesses they helped through
        reviews, photos, and other activity. Research with previous recipients showed that people valued
        personalized data, their most popular content, and the ability to revisit the year like a journal.
      </p>
      <p>
        One participant explained why appreciation mattered:
      </p>
      <blockquote className="border-l-2 pl-4 my-4 italic" style={{ borderColor: "var(--accent)", color: "rgba(255,255,255,0.7)" }}>
        &ldquo;I loved what this did at the end of the year to help reinforce that we contribute to the
        site for public service. Sharing the impact and feeling appreciated goes a long way for brand
        affinity.&rdquo;
      </blockquote>
      <div className="not-prose flex gap-6 my-6 items-center">
        <div className="flex-1">
          <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
            The existing product worked, but the long scrolling page made individual moments blend together.
            Earlier iterations also reused much of the same visual structure, which limited the sense of
            anticipation expected from an annual recap.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            The 2023 opportunity was to make each achievement feel distinct while building a format that
            Yelp could reuse and extend in future years.
          </p>
        </div>
        <figure className="flex flex-col items-center shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/Year%20on%20Yelp/Year%20on%20Yelp%202022.gif" alt="2022 long scroll format" className="rounded-xl" style={{ height: "45vh", width: "auto" }} />
          <figcaption className="text-xs text-neutral-500 mt-2 text-center">2022: Long scroll format</figcaption>
        </figure>
      </div>

      <h3>The strategic choice</h3>
      <p>
        The team considered maintaining the existing experience, expanding the audience to
        non-contributors, or investing in a new contributor experience. With limited resources and
        other contribution projects competing for capacity, we focused on current contributors and made
        a one-time investment in a scalable story format.
      </p>
      <p>The product goals were to:</p>
      <BulletList size="base" items={[
        "Celebrate the impact contributors had on other people and local businesses",
        "Create a memorable annual brand moment",
        "Encourage sharing without losing the path back to contribution",
        "Make future modules and yearly refreshes easier to add",
      ]} />

      <VisualHint>Show the original long-scroll experience beside the new story format.</VisualHint>

      {/* ══════════════ My Role ══════════════ */}
      <SectionDivider id="divider-role" />
      <h2 id="role">My Role</h2>

      <h3>Product design became creative direction</h3>
      <p>
        The project needed a shared idea before illustration, animation, and copy could move in the
        same direction. I helped create that clarity across a team of more than ten partners.
      </p>

      <h3>My responsibilities</h3>
      <BulletList size="base" items={[
        "Frame the experience: Translate product goals and user insights into a story structure for the annual recap.",
        "Lead theme development: Facilitate workshops, define evaluation criteria, and guide the team toward one creative direction.",
        "Design the system: Establish the story interaction, module framework, qualification logic, and sharing experience.",
        "Coordinate production: Create the creative brief and work with illustrators, animators, content designers, engineers, and marketing partners through delivery.",
      ]} />
      <p className="mt-4">
        I remained responsible for the coherence of the whole experience while specialists developed
        the final illustrations, animation, copy, and campaign assets.
      </p>

      {/* ══════════════ Three Design Moves ══════════════ */}
      <SectionDivider id="divider-design-moves" />
      <h2 id="design-moves">Three Design Moves</h2>

      <Card id="move-story">
        <CardLabel>Design Move 1</CardLabel>
        <h3 className="text-base font-semibold text-neutral-800 mt-2 mb-1">Turn a Recap Into a Story</h3>
        <p className="text-sm text-neutral-800 mb-4">
          The previous vertical experience presented the year&apos;s data as one continuous page. The
          2023 redesign used a horizontal, card-by-card story inspired by familiar social formats.
        </p>
        <h4 className="text-base font-semibold text-neutral-800 mt-4 mb-1">Design decisions</h4>
        <BulletList className="mb-6" items={[
          "One moment per card: Give each achievement enough space to feel meaningful.",
          "Simple story controls: Let people move forward, return to a previous card, or pause an animation using familiar tap gestures.",
          "A deliberate emotional arc: Begin with overall impact, reveal personalized highlights, and end by returning to the people and businesses the contributor helped.",
          "A clear ending: Stop autoplay on the closing celebration before offering an optional next-review screen.",
        ]} />

        <div className="not-prose grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
          {[
            { src: "/images/Year on Yelp/open gif.gif", alt: "Opening", caption: "Opening screen" },
            { src: "/images/Year on Yelp/middle gif.gif", alt: "Personalized highlight", caption: "Personalized highlight" },
            { src: "/images/Year on Yelp/close gif.gif", alt: "Closing celebration", caption: "Closing celebration" },
            { src: "/images/Year on Yelp/last screen.png", alt: "Next review", caption: "Next review screen" },
          ].map(({ src, alt, caption }) => (
            <figure key={src} className="flex flex-col">
              <Image src={src} alt={alt} width={400} height={700} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
              <figcaption className="text-xs text-neutral-500 text-center mt-2">{caption}</figcaption>
            </figure>
          ))}
        </div>

        <h4 className="text-base font-semibold text-neutral-800 mt-4 mb-1">Why it mattered</h4>
        <p className="text-sm text-neutral-800">
          The format created anticipation between moments and established a flexible container that
          future teams could refresh without rebuilding the entire experience.
        </p>
      </Card>

      <Card id="move-theme">
        <CardLabel>Design Move 2</CardLabel>
        <h3 className="text-base font-semibold text-neutral-800 mt-2 mb-1">Give Fourteen Modules One Creative Logic</h3>
        <p className="text-sm text-neutral-800 mb-4">
          The experience could include reviews, photos, reactions, Recognition, service categories,
          compliments, and survey answers. Most people qualified for only a subset, so the system
          needed to feel complete across many combinations.
        </p>
        <p className="text-sm text-neutral-800 mb-4">
          I led a cross-functional theme process using five criteria: uniqueness, relevance to Yelp,
          clarity, execution effort, and personalization potential. Four concepts emerged, with
          Constellation and Memory Jar as the strongest finalists.
        </p>

        <div className="not-prose grid grid-cols-2 gap-4 mb-6">
          <figure className="flex flex-col gap-2">
            <Image src="/images/Year on Yelp/Contellation-theme.png" alt="Constellation theme" width={800} height={600} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
            <figcaption className="text-xs text-neutral-500 text-center">Constellation — chosen direction</figcaption>
          </figure>
          <figure className="flex flex-col gap-2">
            <Image src="/images/Year on Yelp/Memory-jar-theme.png" alt="Memory Jar theme" width={800} height={600} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
            <figcaption className="text-xs text-neutral-500 text-center">Memory Jar — finalist</figcaption>
          </figure>
        </div>

        <p className="text-sm text-neutral-800 mb-4">
          We chose <strong>Constellation</strong> because it connected directly to Yelp&apos;s star
          identity and the role contributors play in guiding other people&apos;s decisions.
        </p>
        <p className="text-sm text-neutral-800 mb-6 italic">
          &ldquo;Like the stars above, your contributions helped others navigate which businesses to
          turn to in 2023.&rdquo;
        </p>

        <h4 className="text-base font-semibold text-neutral-800 mt-4 mb-1">Creative system</h4>
        <BulletList className="mb-6" items={[
          "Shared visual world: Landscapes, stars, and constellation icons tied the modules together.",
          "Personalized foregrounds: Reviews, photos, categories, and counts made each card specific to the contributor.",
          "Selective animation: Reserve motion for the opening, closing, and other emotionally important moments.",
          "Flexible templates: Support different content thresholds without making low-activity experiences feel broken.",
        ]} />

        <div className="not-prose grid grid-cols-3 sm:grid-cols-7 gap-3 mb-3">
          {[
            { n: 1, caption: "Opening screen" },
            { n: 2, caption: "Reactions" },
            { n: 3, caption: "Photos shared" },
            { n: 4, caption: "Recognitions earned" },
            { n: 5, caption: "Service category" },
            { n: 6, caption: "Most reviewed category" },
            { n: 7, caption: "Beauty category" },
          ].map(({ n, caption }) => (
            <figure key={n} className="flex flex-col gap-2">
              <Image src={`/images/Year on Yelp/screen-${n}.png`} alt={caption} width={400} height={700} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
              <figcaption className="text-xs text-neutral-500 text-center">{caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="not-prose grid grid-cols-3 sm:grid-cols-7 gap-3 mb-6">
          {[
            { n: 8, caption: "Top photographed" },
            { n: 9, caption: "Most viewed review" },
            { n: 10, caption: "Most viewed photo" },
            { n: 11, caption: "Questions answered" },
            { n: 12, caption: "Compliments" },
            { n: 13, caption: "Closing screen" },
            { n: 14, caption: "Next review" },
          ].map(({ n, caption }) => (
            <figure key={n} className="flex flex-col gap-2">
              <Image src={`/images/Year on Yelp/screen-${n}.png`} alt={caption} width={400} height={700} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
              <figcaption className="text-xs text-neutral-500 text-center">{caption}</figcaption>
            </figure>
          ))}
        </div>

        <h4 className="text-base font-semibold text-neutral-800 mt-4 mb-1">Why it mattered</h4>
        <p className="text-sm text-neutral-800">
          The theme gave illustration, animation, and copy a shared purpose while allowing each module
          to remain visually distinct.
        </p>
      </Card>

      <Card id="move-personalization">
        <CardLabel>Design Move 3</CardLabel>
        <h3 className="text-base font-semibold text-neutral-800 mt-2 mb-1">Make Personalization Scalable</h3>
        <p className="text-sm text-neutral-800 mb-4">
          Not every contributor had the same activity. Some wrote reviews, others shared photos, and
          many qualified for only a few modules. The design had to generate a personal narrative without
          requiring a custom composition for every person.
        </p>

        <h4 className="text-base font-semibold text-neutral-800 mt-4 mb-1">System decisions</h4>
        <BulletList className="mb-6" items={[
          "Conditional modules: Show a card only when the contributor had enough meaningful data.",
          "A complete minimum experience: Guarantee an introduction, at least one personalized highlight, a closing summary, and the optional contribution screen.",
          "Reusable content patterns: Define consistent rules for counts, business names, photos, categories, and edge cases.",
          "Category-specific variation: Create 14 illustrated versions of the most-reviewed food category while preserving one layout and interaction model.",
        ]} />

        <figure className="not-prose mx-auto mb-6 w-full sm:w-[30%]">
          <Image src="/images/Year on Yelp/category-14-general.png" alt="Generic category screen" width={600} height={800} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
          <figcaption className="text-xs text-neutral-500 text-center mt-2">Generic screen — fork &amp; knife visual</figcaption>
        </figure>

        <div className="not-prose grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4">
          {[
            { n: 1, name: "american", caption: "American" },
            { n: 2, name: "breakfast", caption: "Breakfast & Brunch" },
            { n: 3, name: "sandwich", caption: "Sandwich" },
            { n: 4, name: "seafood", caption: "Seafood" },
            { n: 5, name: "burger", caption: "Burger" },
            { n: 6, name: "pizza", caption: "Pizza" },
          ].map(({ n, name, caption }) => (
            <figure key={n} className="flex flex-col gap-2">
              <Image src={`/images/Year on Yelp/category-${n}-${name}.png`} alt={caption} width={400} height={600} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
              <figcaption className="text-xs text-neutral-500 text-center">{caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="not-prose grid grid-cols-3 sm:grid-cols-7 gap-3 mb-6">
          {[
            { n: 7, name: "cocktail", caption: "Cocktail Bar" },
            { n: 8, name: "italian", caption: "Italian" },
            { n: 9, name: "coffee", caption: "Coffee & Tea" },
            { n: 10, name: "mexican", caption: "Mexican" },
            { n: 11, name: "japanses", caption: "Japanese" },
            { n: 12, name: "salad", caption: "Salad" },
            { n: 13, name: "dessert", caption: "Dessert" },
          ].map(({ n, name, caption }) => (
            <figure key={n} className="flex flex-col gap-2">
              <Image src={`/images/Year on Yelp/category-${n}-${name}.png`} alt={caption} width={400} height={600} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
              <figcaption className="text-xs text-neutral-500 text-center">{caption}</figcaption>
            </figure>
          ))}
        </div>

        <VisualHint>Show: a simple qualification diagram, three different user paths, and a selection of category variations.</VisualHint>

        <h4 className="text-base font-semibold text-neutral-800 mt-4 mb-1">Why it mattered</h4>
        <p className="text-sm text-neutral-800">
          The system made millions of possible content combinations feel intentional while keeping design
          and engineering work manageable.
        </p>
      </Card>

      {/* ══════════════ Sharing ══════════════ */}
      <SectionDivider id="divider-sharing" />
      <h2 id="sharing">Sharing and the Next Contribution</h2>

      <h3>Celebration needed paths outward and forward</h3>
      <p>
        Sharing served as the primary campaign action in 2023. People could share a static version of
        an individual card or copy a link to the complete experience. The system generated shareable
        assets that retained the Year on Yelp identity outside the product.
      </p>
      <p>
        Contribution remained a secondary action. After the final celebration, people could choose to
        continue to a bonus screen with relevant businesses to review. Separating this screen from the
        recap protected the emotional ending while still providing a useful next step.
      </p>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-6 my-6 mx-auto" style={{ width: "90%" }}>
        {[
          { src: "/images/Year on Yelp/share 1.png", alt: "Share preview", caption: "" },
          { src: "/images/Year on Yelp/share 2.png", alt: "Sharing path", caption: "" },
          { src: "/images/Year on Yelp/Share 3.png", alt: "Shared content", caption: "" },
        ].map(({ src, alt, caption }) => (
          <figure key={src} className="flex flex-col items-center">
            <Image src={src} alt={alt} width={400} height={800} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
            {caption && <figcaption className="text-xs text-neutral-500 text-center mt-2 w-full">{caption}</figcaption>}
          </figure>
        ))}
      </div>

      <h3>Why it mattered</h3>
      <p>
        The experience could express contributor identity socially while giving motivated people a
        natural way to continue participating.
      </p>

      {/* ══════════════ Outcome ══════════════ */}
      <SectionDivider id="divider-outcome" />
      <h2 id="outcome">Outcome</h2>

      <h3>A stronger sharing experience with lessons for discovery</h3>
      <p>
        Year on Yelp launched on December 5, 2023, across iOS, Android, and web. The card-based system
        became the foundation for the following year&apos;s experience.
      </p>
      <p>
        The 2023 campaign produced more than <strong>23K shares to social</strong>, approximately{" "}
        <strong>5.8K more than the prior year</strong>. Social click-throughs increased{" "}
        <strong>143% year over year</strong>, and social sessions increased <strong>310%</strong>.
      </p>
      <p>
        The product results also exposed a tradeoff. Prioritizing share increased the share rate, while
        the review rate declined slightly. The percentage of eligible contributors who viewed their recap
        remained roughly flat, and click-through rates from major entry points decreased.
      </p>
      <p>
        The team concluded that the thematic campaign copy made the content less explicit than the
        previous year&apos;s promise to reveal a person&apos;s top review and photo. In 2024, the team
        kept the story system and constellation identity but used more direct entry-point messaging.
      </p>

      <h3>What the results showed</h3>
      <BulletList size="base" items={[
        "The story format and sharing model created a reusable product foundation.",
        "Personalization could support a large modular experience without custom design for every user.",
        "A strong theme improved coherence inside the experience, but discovery messaging still needed to explain the value directly.",
      ]} />

      {/* ══════════════ Reflection ══════════════ */}
      <SectionDivider id="divider-reflection" />
      <h2 id="reflection">Reflection</h2>

      <h3>What I learned</h3>
      <BulletList size="base" items={[
        "Creative direction is a product-design responsibility. A clear theme and brief helped specialists make hundreds of detailed decisions without fragmenting the experience.",
        "A system creates personalization at scale. Qualification rules, reusable templates, and visual variation mattered more than crafting one ideal path.",
        "The experience and its invitation have different jobs. The product could use metaphor and emotion, while entry-point copy needed to state clearly what people would receive.",
        "Annual campaigns must plan for repetition. A reusable foundation lowers production cost, but content and messaging still need enough freshness to give repeat recipients a reason to return.",
      ]} />
    </CaseStudyLayout>
  );
}
