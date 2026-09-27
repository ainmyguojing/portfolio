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
  title: "Community Q&A — Jing Guo",
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

function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "#FF258E" }}>
      {children}
    </p>
  );
}

function BulletList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-1.5 ${className ?? ""}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm text-neutral-800">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function FullWidthImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="not-prose my-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full rounded-xl" />
      <figcaption className="text-xs text-neutral-500 text-center mt-2">{caption}</figcaption>
    </figure>
  );
}

function ImageRow({ images, scale = "90%", matchHeight = false }: { images: { src: string; alt: string; caption: string }[]; scale?: string; matchHeight?: boolean }) {
  const cols = images.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3";
  if (matchHeight) {
    return (
      <div className={`not-prose grid grid-cols-1 ${cols} gap-6 my-6 mx-auto`} style={{ width: scale }}>
        {images.map(({ src, alt, caption }) => (
          <figure key={src} className="flex flex-col items-center">
            <div className="w-full flex-1 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={alt} className="rounded-lg object-contain w-full h-full" />
            </div>
            <figcaption className="text-xs text-neutral-500 text-center mt-2 w-full">{caption}</figcaption>
          </figure>
        ))}
      </div>
    );
  }
  return (
    <div className={`not-prose grid grid-cols-1 ${cols} gap-6 my-6 mx-auto`} style={{ width: scale }}>
      {images.map(({ src, alt, caption }) => (
        <figure key={src} className="flex flex-col items-center">
          <Image src={src} alt={alt} width={400} height={800} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
          <figcaption className="text-xs text-neutral-500 text-center mt-2 w-full">{caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function PhoneImagePair({ images }: { images: { src: string; alt: string; caption: string }[] }) {
  return (
    <div className="not-prose flex justify-center gap-4 my-6" style={{ height: "50vh" }}>
      {images.map(({ src, alt, caption }) => (
        <div key={src} className="flex flex-col items-center" style={{ width: "calc(50vh * (360 / 780) * 1.2)" }}>
          <Image src={src} alt={alt} width={400} height={800} className="rounded-xl object-contain" style={{ height: "calc(100% - 2.5em)", width: "auto" }} />
          <p className="text-xs text-neutral-500 mt-2 text-center">{caption}</p>
        </div>
      ))}
    </div>
  );
}

const SECTIONS = [
  { id: "opportunity", title: "The Opportunity", divider: "divider-opportunity" },
  {
    id: "evolution", title: "Product Evolution", divider: "divider-evolution",
    subsections: [
      { id: "stage-ask", title: "Would people ask?" },
      { id: "stage-answer", title: "Would people answer?" },
      { id: "stage-sustain", title: "Could it sustain?" },
    ],
  },
  {
    id: "design-moves", title: "Three Design Moves", divider: "divider-design-moves",
    subsections: [
      { id: "move-search", title: "Surface Intent" },
      { id: "move-answers", title: "Neighborhood Hub" },
      { id: "move-feedback", title: "Easy Participation" },
    ],
  },
  { id: "ecosystem", title: "Designing the Ecosystem", divider: "divider-ecosystem" },
  { id: "outcome", title: "Outcome", divider: "divider-outcome" },
  { id: "reflection", title: "Reflection", divider: "divider-reflection" },
];

export default function CommunityQA() {
  return (
    <CaseStudyLayout
      title="Community Q&A"
      subtitle="Building a new way for Yelp's community to share local knowledge"
      role="Lead Product Designer"
      scope="Product vision, experience strategy, full UX, and design system"
      team="Contribution, Growth, Core X, Trust & Safety"
      year="2024–2026"
      tags={["Community Products", "Growth", "Conversational UX", "Strategy & Scale"]}
      sections={SECTIONS}
      currentHref="/work/community-qa"
      introContent={
        <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
          I led the design of Community Q&amp;A from early vision through validation, launch, and growth.
          The product expanded contribution beyond reviews and developed into a strategic source of fresh
          local content for search, SEO, and Yelp&apos;s AI experiences.
        </p>
      }
    >
      {/* ──────────── Hero media ──────────── */}
      <VisualHint>Hero visual: One strong product image with the five results as large, simple typography.</VisualHint>
      <div className="not-prose flex gap-1 items-start justify-center my-8" style={{ height: 320, "--media-h": "320px" } as React.CSSProperties}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Community%20Q%26A/Comp%201_2.gif"
          alt="Community Q&A interaction"
          style={{
            height: "100%",
            width: "auto",
            flexShrink: 0,
            clipPath: "inset(0.5% 2.5% 0.5% 2.5% round calc(var(--media-h) * 0.08))",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Community%20Q%26A/CQA_desktop.png"
          alt="Community Q&A desktop view"
          className="rounded-xl object-contain"
          style={{ height: "100%", width: "auto" }}
        />
      </div>

      {/* ──────────── Impact ──────────── */}
      <h3>Impact at a Glance</h3>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {[
          { stat: "~30K", detail: "questions each month" },
          { stat: "40K+", detail: "answers each month" },
          { stat: "~7K", detail: "new contributors activated monthly" },
        ].map(({ stat, detail }) => (
          <div key={stat} className="rounded-xl border border-neutral-100 bg-neutral-50 p-5">
            <p className="text-lg font-semibold text-neutral-800 mb-1">{stat}</p>
            <p className="text-sm text-neutral-500">{detail}</p>
          </div>
        ))}
      </div>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {[
          { stat: "8M+", detail: "monthly impressions" },
          { stat: "~2×", detail: "the one-year retention of review contribution" },
        ].map(({ stat, detail }) => (
          <div key={stat} className="rounded-xl border border-neutral-100 bg-neutral-50 p-5">
            <p className="text-lg font-semibold text-neutral-800 mb-1">{stat}</p>
            <p className="text-sm text-neutral-500">{detail}</p>
          </div>
        ))}
      </div>

      {/* ══════════════ The Opportunity ══════════════ */}
      <SectionDivider id="divider-opportunity" />
      <h2 id="opportunity">The Opportunity</h2>

      <h3>Reviews could not answer every local question</h3>
      <p>
        People often came to Yelp with needs that reviews could not resolve: a recommendation for
        a specific situation, help comparing options, or advice that depended on local experience.
        Search queries already revealed this unmet intent, but users had no direct way to ask the community.
      </p>
      <p>
        Yelp also needed new contribution formats that required less effort than writing a review
        and could keep local content current.
      </p>
      <p>
        The opportunity was to turn unanswered intent into a community exchange without making Q&amp;A
        feel detached from the rest of Yelp.
      </p>

      <h3>Turning an idea into a shared vision</h3>
      <p>
        My group PM first introduced the Community Q&amp;A initiative in conversation. I translated
        that early idea into a vision deck showing how Q&amp;A could live within Yelp&apos;s existing
        ecosystem, support several teams, and grow sustainably rather than becoming an isolated feature.
      </p>
      <p>
        I socialized the vision with partner teams and worked with my PM to move it into an MVP.
        From that point forward, I was the sole designer and owned the complete experience across
        asking, answering, reading, feedback, discovery, and platform expansion.
      </p>
      <p>
        Product and data partners led milestone strategy and success metrics. I helped identify
        experience gaps and product opportunities, then worked with the team to generate ideas for
        each stage. I stayed with the product after launch as the design challenge shifted from
        proving demand to improving quality, distribution, and retention.
      </p>

      <VisualHint>Vision deck excerpt or ecosystem diagram showing how Q&amp;A fits within Yelp&apos;s existing product ecosystem.</VisualHint>
      <FullWidthImage src="/images/Community%20Q%26A/vision-diagram.png" alt="Ecosystem integration diagram" caption="Diagram of how Community Q&A could be integrated into the Yelp ecosystem" />

      {/* ══════════════ Product Evolution ══════════════ */}
      <SectionDivider id="divider-evolution" />
      <h2 id="evolution">The Product Evolution</h2>

      <h3>We earned the right to scale</h3>
      <p>
        Instead of launching a complete Q&amp;A platform at once, the team tested the exchange in stages.
        I translated each stage into the product experience and used the results to identify the next
        design opportunities.
      </p>

      <VisualHint>Show these three stages as one horizontal story using three real product screens.</VisualHint>
      <figure className="not-prose my-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Community%20Q%26A/stage%20diagram.svg" alt="Three stages of product evolution" className="w-full" />
        <figcaption className="text-xs text-neutral-500 text-center mt-2">Three stages of product evolution</figcaption>
      </figure>

      <Card id="stage-ask">
        <CardLabel>Stage 1</CardLabel>
        <h3 className="text-base font-semibold text-neutral-800 mt-2 mb-1">Would people ask?</h3>
        <p className="text-sm text-neutral-600 mb-4">
          We placed example questions and answers within search results, where unmet intent already appeared.
          The first test produced a question-asking rate above the team&apos;s assumption and made asking
          the second most common interaction with the module after scrolling.
        </p>
        <p className="text-sm font-medium text-neutral-800">
          What I learned: Asking felt natural when it continued the user&apos;s search rather than starting a separate journey.
        </p>
        <PhoneImagePair images={[
          { src: "/images/Community Q&A/pmf-asking-mock_1.png", alt: "Carousel of Q&A pairs", caption: "Carousel of Q&A pairs relevant to the search (v1)" },
          { src: "/images/Community Q&A/pmf-asking-mock_2.png", alt: "Standalone question unit on SERP", caption: "Standalone question unit on SERP (v1)" },
        ]} />
      </Card>

      <Card id="stage-answer">
        <CardLabel>Stage 2</CardLabel>
        <h3 className="text-base font-semibold text-neutral-800 mt-2 mb-1">Would people answer?</h3>
        <p className="text-sm text-neutral-600 mb-4">
          We surfaced relevant questions on Home and after review submission. In an early test,
          about 500 people contributed roughly 1,000 answers in 20 days. More than half of the questions
          received an answer, and spam remained minimal.
        </p>
        <p className="text-sm font-medium text-neutral-800">
          What I learned: Relevance and timing mattered more than introducing a large standalone destination.
        </p>
        <PhoneImagePair images={[
          { src: "/images/Community Q&A/pmf-answering-mock_1.png", alt: "Q&A carousel on Home", caption: "Q&A carousel on Home, prompt users to scroll and answer" },
          { src: "/images/Community Q&A/pmf-answering-mock_2.png", alt: "Questions on post review screen", caption: "Questions on post review screen, relevant to the review the user just wrote" },
        ]} />
      </Card>

      <Card id="stage-sustain">
        <CardLabel>Stage 3</CardLabel>
        <h3 className="text-base font-semibold text-neutral-800 mt-2 mb-1">Could the exchange sustain itself?</h3>
        <p className="text-sm text-neutral-600 mb-4">
          After validating both sides, we launched live asking and answering, expanded to more platforms
          and channels, and added discovery, feedback, and recognition. Community Q&amp;A became a
          connected ecosystem rather than a single feature.
        </p>
        <FullWidthImage src="/images/Community%20Q%26A/diagram_sustainable_system.png" alt="MVP flow diagram" caption="MVP asking and answering flow with notification and moderation system" />
      </Card>

      {/* ══════════════ Three Design Moves ══════════════ */}
      <SectionDivider id="divider-design-moves" />
      <h2 id="design-moves">Three Design Moves That Shaped the Ecosystem</h2>

      <h3>A new community behavior had to work across Yelp</h3>
      <p>
        Community Q&amp;A introduced Yelp&apos;s first user-to-user conversational experience.
        The challenge extended beyond designing the asking and answering flows. We needed to meet
        people with the right invitation across Yelp, bring those paths into a shared neighborhood
        destination, and make participation feel intuitive within the existing design system.
      </p>
      <p>
        I designed the complete experience across distributed entry points, the neighborhood hub,
        and the core contribution interactions. I also worked with partner teams to earn placement
        on high-value surfaces such as Home and search results, where Q&amp;A had to demonstrate
        enough value to justify limited space.
      </p>

      <Card id="move-search">
        <CardLabel>Design Move 1</CardLabel>
        <h3 className="text-base font-semibold text-neutral-800 mt-2 mb-1">Match Each Surface to the User&apos;s Intent</h3>
        <p className="text-sm text-neutral-600 mb-4">
          People arrived on Yelp with different levels of intent. Someone refining a search was ready
          to ask a specific question. A contributor visiting the Me Tab was more likely to answer.
          Someone browsing Home might prefer to read an interesting local discussion.
        </p>
        <p className="text-sm text-neutral-600 mb-6">
          I designed Q&amp;A units around those differences instead of repeating the same module
          everywhere. Search turns unresolved intent into a question. The Me Tab makes relevant
          questions easy to answer. Home highlights popular discussions that invite people to read
          before asking them to contribute.
        </p>
        <p className="text-sm font-medium text-neutral-800 mb-6">
          Why it mattered: Each surface gave Q&amp;A a role that matched the reason people were already
          there. This helped the product reach askers, answerers, and readers without requiring them to
          seek out a new feature first.
        </p>
        <ImageRow images={[
          { src: "/images/Community Q&A/User_intent_SERP.png", alt: "SERP asking surface", caption: "Search - asking surface: Turn unresolved search intent into a question" },
          { src: "/images/Community Q&A/User_intent_MeTab.png", alt: "Me Tab answering surface", caption: "Me Tab - answering surface: Make relevant questions easy to answer" },
          { src: "/images/Community Q&A/User_intent_home.png", alt: "Home reading surface", caption: "Home - reading surface: Highlight popular discussions for readers" },
        ]} />
      </Card>

      <Card id="move-answers">
        <CardLabel>Design Move 2</CardLabel>
        <h3 className="text-base font-semibold text-neutral-800 mt-2 mb-1">Bring the Exchange Together in a Neighborhood Hub</h3>
        <p className="text-sm text-neutral-600 mb-4">
          Distributed entry points helped people discover Q&amp;A, but the experience also needed a
          clear home. Without one, questions and answers could feel like isolated modules scattered
          across Yelp.
        </p>
        <p className="text-sm text-neutral-600 mb-6">
          I designed a dedicated neighborhood-level hub where people could ask questions, answer
          neighbors, browse discussions, and read curated local content. Entry points across Yelp led
          back to this shared destination, giving the exchange continuity and making the breadth of
          community activity visible.
        </p>
        <p className="text-sm font-medium text-neutral-800 mb-6">
          Why it mattered: The hub turned separate contribution moments into a neighborhood resource.
          It gave readers a reason to explore, contributors a place to return, and the product a
          foundation that could grow beyond individual placements.
        </p>
        <ImageRow images={[
          { src: "/images/Community Q&A/city_hub_1.png", alt: "City hub social interactions", caption: "Support community interactions such as search, sort, reactions, and follows" },
          { src: "/images/Community Q&A/city_hub_3.png", alt: "Curated content themes", caption: "Highlight curated local content across different themes" },
          { src: "/images/Community Q&A/city_hub_2.png", alt: "Light-weight participation", caption: "Encourage lightweight community participation" },
        ]} />
      </Card>

      <Card id="move-feedback">
        <CardLabel>Design Move 3</CardLabel>
        <h3 className="text-base font-semibold text-neutral-800 mt-2 mb-1">Make Participation Easy and Useful</h3>
        <p className="text-sm text-neutral-600 mb-4">
          The ecosystem depended on asking and answering interactions that felt natural inside
          Yelp&apos;s established product language.
        </p>
        <p className="text-sm text-neutral-600 mb-4">
          For asking, I designed a flow that recognizes question-like searches and helps people turn
          them into complete questions without starting over. For answering, I introduced assisted
          business suggestions and inline tagging so contributors could add useful context and connect
          recommendations to Yelp business pages.
        </p>
        <p className="text-sm text-neutral-600 mb-6">
          I later added lightweight reactions and notifications so contributors could see when their
          answers helped someone. These feedback mechanisms supported return participation without
          adding the complexity of a full social conversation model.
        </p>
        <p className="text-sm font-medium text-neutral-800 mb-6">
          Why it mattered: The interaction patterns reduced the effort required to contribute, made
          answers more actionable, and gave contributors a reason to return.
        </p>
        <ImageRow images={[
          { src: "/images/Community Q&A/Bold serp design.gif", alt: "Search to question via LLM", caption: "Asking: Turn a search into a ready-to-post question with AI assistance" },
          { src: "/images/Community Q&A/Comp 2.gif", alt: "Business suggestion and inline tagging", caption: "Answering: Suggest and tag businesses within the answering flow" },
          { src: "/images/Community Q&A/Reaction.png", alt: "Light-weight reactions", caption: "Reactions: Let readers respond while encouraging contributors to return" },
        ]} />
      </Card>

      {/* ══════════════ Ecosystem ══════════════ */}
      <SectionDivider id="divider-ecosystem" />
      <h2 id="ecosystem">Designing the Ecosystem</h2>

      <p>
        Community Q&amp;A now connects search, Home, contribution surfaces, profiles, notifications,
        business pages, and Yelp Assistant. I established reusable patterns that helped these experiences
        work as one system while giving partner teams a consistent foundation for expansion.
      </p>

      <figure className="not-prose my-6 mx-auto" style={{ width: "60%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Community%20Q%26A/System%20diagram.png" alt="Community Q&A ecosystem diagram" className="w-full rounded-xl" />
        <figcaption className="text-xs text-neutral-500 text-center mt-2">Community Q&amp;A ecosystem across Yelp surfaces</figcaption>
      </figure>

      {/* ══════════════ Outcome ══════════════ */}
      <SectionDivider id="divider-outcome" />
      <h2 id="outcome">Outcome</h2>

      <h3>A new contribution channel with durable participation</h3>
      <p>Community Q&amp;A grew into a meaningful part of Yelp&apos;s contribution strategy:</p>
      <BulletList items={[
        "Approximately 30K questions and more than 40K answers per month",
        "Nearly 7K new contributors activated monthly",
        "More than 8M monthly impressions from approximately 3M users",
        "Approximately 40% one-year contributor retention, compared with 20% for reviews",
        "Less than 1% of sampled questions and about 1% of sampled answers classified as junk or nonsense",
      ]} />
      <p className="mt-6">
        The work demonstrates how I lead ambiguous design opportunities: make an early idea tangible,
        show how it fits the broader ecosystem, build alignment across teams, and evolve the experience
        as the product reaches scale.
      </p>

      {/* ══════════════ Reflection ══════════════ */}
      <SectionDivider id="divider-reflection" />
      <h2 id="reflection">Reflection</h2>
      <p>
        The smallest pilots made the largest strategic decisions possible. Testing asking and answering
        separately gave the team confidence to invest while showing where Q&amp;A belonged within
        Yelp&apos;s existing behavior.
      </p>
      <p>
        The hardest design problem was integration. Q&amp;A needed prominent placement on Home and
        search results, but every surface had competing priorities and established patterns. Making
        the value visible and designing within Yelp&apos;s existing language helped the feature earn
        space without feeling attached from the outside.
      </p>
      <p>
        Scale then changed the problem again. After launch, success depended less on adding entry
        points and more on answer relevance, content quality, feedback, and contributor retention.
        Staying close to the product helped the design mature from a set of flows into an ecosystem.
      </p>
    </CaseStudyLayout>
  );
}
