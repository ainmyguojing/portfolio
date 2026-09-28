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
  title: "Elite Ecosystem — Jing Guo",
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

function FullWidthImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="not-prose my-6">
      <Image src={src} alt={alt} width={1600} height={900} className="w-full rounded-xl" style={{ objectFit: "contain" }} />
      <figcaption className="text-xs text-neutral-500 text-center mt-2">{caption}</figcaption>
    </figure>
  );
}

const SECTIONS = [
  { id: "opportunity", title: "The Opportunity", divider: "divider-opportunity" },
  {
    id: "design-moves", title: "Three Design Moves", divider: "divider-design-moves",
    subsections: [
      { id: "move-value", title: "Make Elite Visible" },
      { id: "move-awareness", title: "Introduce at the Right Moment" },
      { id: "move-rejection", title: "Turn Rejection into Guidance" },
    ],
  },
  { id: "funnel", title: "One Connected Funnel", divider: "divider-funnel" },
  { id: "impact", title: "Scale & Impact", divider: "divider-impact" },
  { id: "future", title: "Longer-Term Direction", divider: "divider-future" },
  { id: "reflection", title: "Reflection", divider: "divider-reflection" },
];

export default function Elite() {
  return (
    <CaseStudyLayout
      title="The Elite Contributor Ecosystem"
      subtitle="Expanding the path from first contribution to Yelp Elite"
      role="Lead Product Designer"
      scope="Contributor growth, awareness, web experience, nomination flows, and ecosystem strategy"
      team="Contributions, Community, Content Design, Marketing, and Design Systems"
      year="2024–2026"
      tags={["Community", "Identity", "Lifecycle Design"]}
      sections={SECTIONS}
      currentHref="/work/elite"
      introContent={
        <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
          Yelp Elite is one of the company&apos;s most valuable contributor communities, but many
          potential candidates did not know it existed or understand how to join. I led design across
          key parts of the journey, introducing Elite to promising contributors, rebuilding its main
          destination, and turning nomination rejection into useful guidance.
        </p>
      }
    >
      {/* ──────────── Why the funnel matters ──────────── */}
      <h3>Why the Funnel Matters</h3>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {[
          { stat: "~7%", detail: "of contributors are Elites" },
          { stat: "17%", detail: "of recommended reviews come from Elites, plus more than half of Yelp’s photos" },
        ].map(({ stat, detail }) => (
          <div key={stat} className="rounded-xl border border-neutral-100 bg-neutral-50 p-5">
            <p className="text-lg font-semibold text-neutral-800 mb-1">{stat}</p>
            <p className="text-sm text-neutral-500">{detail}</p>
          </div>
        ))}
      </div>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {[
          { stat: "74%", detail: "of inactive weekly users had never heard of the Elite program" },
          { stat: "80%+", detail: "of nominations received an automatic rejection" },
        ].map(({ stat, detail }) => (
          <div key={stat} className="rounded-xl border border-neutral-100 bg-neutral-50 p-5">
            <p className="text-lg font-semibold text-neutral-800 mb-1">{stat}</p>
            <p className="text-sm text-neutral-500">{detail}</p>
          </div>
        ))}
      </div>

      <figure className="not-prose my-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Elite%20Ecosystem/Elite%20journey.svg" alt="Elite contributor journey" className="w-full" />
      </figure>

      {/* ══════════════ The Opportunity ══════════════ */}
      <SectionDivider id="divider-opportunity" />
      <h2 id="opportunity">The Opportunity</h2>

      <h3>A valuable program that too few contributors could reach</h3>
      <p>
        Elite members contribute far more than their population size would suggest. The program gives
        Yelp a group of trusted local voices while giving contributors recognition, community, and
        access to events.
      </p>
      <p>
        The value became compelling once people understood or experienced it, but the path into the
        program broke down at several stages.
      </p>
      <figure className="not-prose my-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Elite%20Ecosystem/Leaking%20pipeline.svg" alt="Leaking pipeline: awareness, consideration, nomination" className="w-full" />
      </figure>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-8 my-6 mx-auto" style={{ width: "90%" }}>
        {[
          { src: "/images/Elite Ecosystem/Problem_1.png", alt: "Low awareness", caption: "Low awareness: hidden discovery path" },
          { src: "/images/Elite Ecosystem/Problem_2.png", alt: "Poor consideration", caption: "Poor consideration: outdated Elite page" },
          { src: "/images/Elite Ecosystem/Problem_3.png", alt: "Frictional nomination", caption: "Frictional nomination: an unactionable dead end" },
        ].map(({ src, alt, caption }) => (
          <figure key={src} className="flex flex-col items-center">
            <Image src={src} alt={alt} width={400} height={800} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
            <figcaption className="text-xs text-neutral-500 text-center mt-2 w-full">{caption}</figcaption>
          </figure>
        ))}
      </div>
      <p>
        These were <strong>connected leaks in the same contributor journey</strong>. Improving only the nomination form
        would not help people who never discovered Elite. Increasing awareness would have limited value
        if the destination failed to inspire or guide them.
      </p>
      <p>
        I treated the work as an ecosystem and designed each intervention around the role it played in
        moving a contributor forward.
      </p>

      {/* ══════════════ Three Design Moves ══════════════ */}
      <SectionDivider id="divider-design-moves" />
      <h2 id="design-moves">Three Design Moves Across the Journey</h2>

      <Card id="move-value">
        <CardLabel>Design Move 1</CardLabel>
        <h3 className="text-base font-semibold text-neutral-800 mt-2 mb-1">Make the Value of Elite Visible</h3>
        <p className="text-sm text-neutral-800 mb-4">
          The Elite page served as the main destination for people arriving through profiles, campaigns,
          Community Manager outreach, and Yelp navigation. Its content was text heavy and repetitive.
          The experience explained the program without creating much desire to join it, and its calls to
          action required unnecessary scrolling and an extra step.
        </p>
        <p className="text-sm text-neutral-800 mb-4">
          I restructured the page around the questions a potential candidate needed answered:
        </p>
        <BulletList className="mb-4" items={[
          "What Elite is",
          "Why it matters",
          "What members experience",
          "How to become a strong candidate",
          "Where to get help",
        ]} />
        <h4 className="text-base font-semibold text-neutral-800 mt-4 mb-1">Design solutions</h4>
        <ul className="space-y-1.5 mb-6">
          <li className="flex gap-2 text-sm text-neutral-800">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
            <strong>Fresh imagery and video:</strong>&nbsp;Updated the content to make the program feel current and tangible.
          </li>
          <li className="flex gap-2 text-sm text-neutral-800">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
            <span><strong>Separated the value of membership</strong> from the steps to join</span>
          </li>
          <li className="flex gap-2 text-sm text-neutral-800">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
            <strong>Highlighted events and local Community Managers</strong>
          </li>
          <li className="flex gap-2 text-sm text-neutral-800">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
            <strong>Reduced repeated copy</strong>
          </li>
          <li className="flex gap-2 text-sm text-neutral-800">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
            <span><strong>Made the Nomination button</strong> persistent and accessible</span>
          </li>
        </ul>
        <VisualHint>Show: the original page structure, the revised narrative, mobile sticky action, and web nomination treatment.</VisualHint>
        <div className="not-prose mx-auto mb-6 w-full sm:w-[30%]">
          <Image src="/images/Elite Ecosystem/New-elite-page.gif" alt="New Elite page" width={800} height={1200} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
        </div>
        <div className="not-prose rounded-2xl border border-neutral-200 p-5 sm:p-8 mb-6 mx-auto" style={{ width: "82.5%" }}>
          <div className="flex flex-col gap-4">
          {/* Row 1: 3 equal columns, same height */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { n: 1, caption: "Hero section — open image + statement" },
              { n: 2, caption: "Elite’s value to Yelp" },
              { n: 3, caption: "Video highlighting the essence of being Elites" },
            ].map(({ n, caption }) => (
              <figure key={n} className="flex flex-col">
                <div className="overflow-hidden rounded-lg" style={{ aspectRatio: "3 / 4" }}>
                  <Image src={`/images/Elite Ecosystem/elite-page-section-${n}.png`} alt={caption} width={400} height={800} className="w-full h-full rounded-lg" style={{ objectFit: "cover", objectPosition: "top" }} />
                </div>
                <figcaption className="text-xs text-neutral-500 text-center mt-2">{caption}</figcaption>
              </figure>
            ))}
          </div>
          {/* Row 2: 3 columns — col 1 stacks Benefits + CM, col 2 Eligibility, col 3 Events */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col gap-4">
              <figure className="flex flex-col flex-1">
                <div className="overflow-hidden rounded-lg flex-1">
                  <Image src="/images/Elite Ecosystem/elite-page-section-4.png" alt="Benefits of being Elite" width={400} height={800} className="w-full h-full rounded-lg" style={{ objectFit: "cover", objectPosition: "top" }} />
                </div>
                <figcaption className="text-xs text-neutral-500 text-center mt-2">Benefits of being Elite</figcaption>
              </figure>
              <figure className="flex flex-col flex-1">
                <div className="overflow-hidden rounded-lg flex-1">
                  <Image src="/images/Elite Ecosystem/elite-page-section-7.png" alt="Support from Community Managers" width={400} height={800} className="w-full h-full rounded-lg" style={{ objectFit: "cover", objectPosition: "top" }} />
                </div>
                <figcaption className="text-xs text-neutral-500 text-center mt-2">Support from Community Managers</figcaption>
              </figure>
            </div>
            <figure className="flex flex-col">
              <div className="overflow-hidden rounded-lg flex-1">
                <Image src="/images/Elite Ecosystem/elite-page-section-5.png" alt="Eligibility & How to join" width={400} height={800} className="w-full h-full rounded-lg" style={{ objectFit: "cover", objectPosition: "top" }} />
              </div>
              <figcaption className="text-xs text-neutral-500 text-center mt-2">Eligibility & How to join</figcaption>
            </figure>
            <figure className="flex flex-col">
              <div className="overflow-hidden rounded-lg flex-1">
                <Image src="/images/Elite Ecosystem/elite-page-section-6.png" alt="Elite events and stories" width={400} height={800} className="w-full h-full rounded-lg" style={{ objectFit: "cover", objectPosition: "top" }} />
              </div>
              <figcaption className="text-xs text-neutral-500 text-center mt-2">Elite events and stories</figcaption>
            </figure>
          </div>
          </div>
        </div>
        <h4 className="text-base font-semibold text-neutral-800 mt-4 mb-1">Why it mattered</h4>
        <p className="text-sm text-neutral-800">
          The page became a clearer expression of the community and a stronger bridge
          from curiosity to nomination.
        </p>
      </Card>

      <Card id="move-awareness">
        <CardLabel>Design Move 2</CardLabel>
        <h3 className="text-base font-semibold text-neutral-800 mt-2 mb-1">Introduce Elite at a Moment of Contribution Intent</h3>
        <p className="text-sm text-neutral-800 mb-4">
          Even a better destination could not help people who had never heard of the program. Manual
          outreach was valuable but difficult to scale, and broad promotion risked reaching people
          before Elite felt relevant to them.
        </p>
        <p className="text-sm text-neutral-800 mb-4">
          I designed an awareness moment for high-potential contributors immediately after they submitted
          a review. Eligibility rules focused the experience on people who had demonstrated recent and
          sustained contribution while excluding current Elites, ineligible accounts, and people recently
          nominated.
        </p>
        <p className="text-sm text-neutral-800 mb-4">
          The message acknowledged what the person had already contributed before introducing Elite. It
          did not push them directly into nomination. Instead, it invited them to learn about the program
          on the redesigned Elite page.
        </p>
        <p className="text-sm text-neutral-800 mb-4">This created a deliberate sequence:</p>
        <ul className="space-y-1.5 mb-6">
          <li className="flex gap-2 text-sm text-neutral-800">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
            <strong>Recognize recent contribution</strong>
          </li>
          <li className="flex gap-2 text-sm text-neutral-800">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
            <strong>Introduce an aspirational next step</strong>
          </li>
          <li className="flex gap-2 text-sm text-neutral-800">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
            <strong>Provide a place to understand the community before nominating</strong>
          </li>
        </ul>
        <VisualHint>Show: post-review context, targeted Elite introduction, and transition into the Elite page.</VisualHint>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-6 mx-auto mb-6" style={{ width: "90%" }}>
          {[
            { src: "/images/Elite Ecosystem/Awareness-1.png", caption: "Post-review screen" },
            { src: "/images/Elite Ecosystem/Awareness-2.png", caption: "Targeted Elite introduction" },
            { src: "/images/Elite Ecosystem/Awareness-3.png", caption: "Transition to Elite page" },
          ].map(({ src, caption }) => (
            <figure key={src} className="flex flex-col items-center">
              <Image src={src} alt={caption} width={400} height={800} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
              <figcaption className="text-xs text-neutral-500 text-center mt-2 w-full">{caption}</figcaption>
            </figure>
          ))}
        </div>
        <h4 className="text-base font-semibold text-neutral-800 mt-4 mb-1">Why it mattered</h4>
        <p className="text-sm text-neutral-800">
          The experience expanded the top of the funnel without turning Elite into a
          generic promotion. It met promising contributors when the program was most relevant to what
          they had just done.
        </p>
      </Card>

      <Card id="move-rejection">
        <CardLabel>Design Move 3</CardLabel>
        <h3 className="text-base font-semibold text-neutral-800 mt-2 mb-1">Turn Rejection Into Actionable Guidance</h3>
        <p className="text-sm text-neutral-800 mb-6">
          More than 80% of nominations were automatically rejected through a generic system message.
          I redesigned the experience as a guided decision flow that explained the outcome and helped
          people understand what to do next.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {[
            { src: "/images/Elite Ecosystem/Nomation-1.png", caption: "Choose who to nominate" },
            { src: "/images/Elite Ecosystem/Nomation-2.png", caption: "Confirm location" },
            { src: "/images/Elite Ecosystem/Nomation-3.gif", caption: "Processing state" },
            { src: "/images/Elite Ecosystem/Nomation-4.gif", caption: "Result with guidance" },
          ].map(({ src, caption }) => (
            <figure key={src} className="flex flex-col">
              <Image src={src} alt={caption} width={800} height={600} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
              <figcaption className="text-xs text-neutral-500 text-center mt-2">{caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <div className="rounded-xl border border-neutral-200 p-5 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
            <div className="flex-1">
              <p className="text-sm font-semibold text-neutral-800 mb-2">1. Confirm the right squad</p>
              <p className="text-sm text-neutral-800">Candidates could confirm or correct their primary location before nominating. This reduced preventable mismatches caused by outdated profile information and helped route each nomination to the appropriate local squad.</p>
            </div>
            <div className="not-prose w-full sm:w-40 sm:shrink-0">
              <Image src="/images/Elite Ecosystem/nomination-location-change.png" alt="Location confirmation" width={400} height={600} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
            </div>
          </div>
          <div className="rounded-xl border border-neutral-200 p-5 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
            <div className="flex-1">
              <p className="text-sm font-semibold text-neutral-800 mb-2">2. Make the decision feel considered</p>
              <p className="text-sm text-neutral-800">A short eligibility-check state showed that Yelp was reviewing the candidate&apos;s profile and contributions. The result then named the specific reason they were not yet eligible, replacing an error-like message with a clear decision.</p>
            </div>
            <div className="not-prose w-full sm:w-40 sm:shrink-0">
              <Image src="/images/Elite Ecosystem/nomination-loading.gif" alt="Processing state" width={400} height={600} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
            </div>
          </div>
          <div className="rounded-xl border border-neutral-200 p-5 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
            <div className="flex-1">
              <p className="text-sm font-semibold text-neutral-800 mb-2">3. Turn rejection into progress</p>
              <p className="text-sm text-neutral-800">The result paired the rejection reason with practical guidance. When more recent contributions could help, the page surfaced a relevant review prompt so motivated candidates had an immediate next step.</p>
            </div>
            <div className="not-prose w-full sm:w-40 sm:shrink-0">
              <Image src="/images/Elite Ecosystem/nomination-message.png" alt="Rejection with guidance" width={400} height={600} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
            </div>
          </div>
        </div>

        <p className="text-sm text-neutral-800 mb-6">
          I also organized the rejection reasons and partnered with Marketing to keep guidance consistent
          across the app and follow-up email. <strong>Marketing owned the email experience</strong>; I connected its message
          to the product logic and language.
        </p>
        <h4 className="text-base font-semibold text-neutral-800 mt-4 mb-1">Why it mattered</h4>
        <p className="text-sm text-neutral-800">
          Rejection became part of the contributor journey rather than a dead end. The
          design protected the program&apos;s quality bar while giving motivated people a clearer way to
          improve and try again.
        </p>
      </Card>

      {/* ══════════════ One Connected Funnel ══════════════ */}
      <SectionDivider id="divider-funnel" />
      <h2 id="funnel">Designing One Connected Funnel</h2>

      <h3>Each surface prepared people for the next step</h3>
      <p>The three projects shared a common design logic:</p>
      <ul className="space-y-1.5">
        <li className="flex gap-2 text-base">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
          <span><strong>The awareness experience</strong> introduced Elite only after a person demonstrated contribution intent.</span>
        </li>
        <li className="flex gap-2 text-base">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
          <span><strong>The Elite page</strong> built understanding and aspiration before asking for a nomination.</span>
        </li>
        <li className="flex gap-2 text-base">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
          <span><strong>The nomination flow</strong> preserved motivation when someone was not yet ready.</span>
        </li>
      </ul>
      <p className="mt-4">
        Copy and interaction worked together across the journey. Awareness language reflected effort
        already made. The Elite page explained the value of the community without promising membership.
        Rejection messages named the gap while keeping progress possible.
      </p>
      <p>
        This consistency mattered because Elite combines aspiration with a selective, human-led process.
        The experience needed to become clearer without reducing membership to a guaranteed checklist.
      </p>

      <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-6 my-6 mx-auto" style={{ width: "90%" }}>
        {[
          { src: "/images/Elite Ecosystem/Awareness-2.png", alt: "Know Elite exists", caption: "Discover the Elite community" },
          { src: "/images/Elite Ecosystem/New-elite-page.gif", alt: "Understand Elite", caption: "Understand what Elite offers" },
          { src: "/images/Elite Ecosystem/Nomation-4.gif", alt: "Get guidance", caption: "Get guidance on becoming Elite" },
        ].map(({ src, alt, caption }) => (
          <figure key={src} className="flex flex-col items-center">
            <Image src={src} alt={alt} width={400} height={800} className="w-full rounded-lg" style={{ objectFit: "contain" }} />
            <figcaption className="text-xs text-neutral-500 text-center mt-2 w-full">{caption}</figcaption>
          </figure>
        ))}
      </div>

      {/* ══════════════ Scale & Impact ══════════════ */}
      <SectionDivider id="divider-impact" />
      <h2 id="impact">Scale and Expected Impact</h2>

      <h3>The work targeted high-leverage points in contributor growth</h3>
      <p>The projects addressed large opportunities within the Elite journey:</p>
      <BulletList size="base" items={[
        "The awareness experience could reach approximately 880K high-potential reviewers each year.",
        "Modeling estimated that greater awareness could produce 1K–5.8K additional Elites annually.",
        "The page redesign estimated that a 2% nomination increase could add about 175 Elites.",
        "The nomination work estimated that increasing valid nominations from 20% to 25% could add approximately 5K Elites annually.",
      ]} />
      <p className="mt-4">
        These figures represent <strong>opportunity sizing and projections, not measured product outcomes</strong>. They
        helped the team prioritize the funnel and understand how improvements in awareness and nomination
        quality could translate into more contribution.
      </p>

      {/* ══════════════ Longer-Term Direction ══════════════ */}
      <SectionDivider id="divider-future" />
      <h2 id="future">The Longer-Term Direction</h2>

      <h3>A visible progression path for aspiring contributors</h3>
      <p>
        The funnel work exposed a deeper limitation. Individual messages could introduce Elite or explain
        a rejection, but contributors still lacked a persistent way to understand where they stood and
        how their body of work was developing.
      </p>
      <p>The emerging strategy extends the journey from isolated touchpoints toward visible progression:</p>
      <ul className="space-y-1.5">
        <li className="flex gap-2 text-base">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
          <span><strong>Introduce Elite</strong> after a person&apos;s first meaningful contributions</span>
        </li>
        <li className="flex gap-2 text-base">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
          <span><strong>Show how reviews, photos, and other activity</strong> build a strong contributor profile</span>
        </li>
        <li className="flex gap-2 text-base">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
          <span><strong>Provide ongoing guidance</strong> before nomination rather than only after rejection</span>
        </li>
        <li className="flex gap-2 text-base">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
          <span><strong>Preserve human judgment</strong> while making progress easier to understand</span>
        </li>
      </ul>
      <p className="mt-4">
        This direction connects Elite to Yelp&apos;s broader contribution strategy. The goal is to help
        more casual contributors develop into recognized local voices, while keeping membership grounded
        in quality and community participation.
      </p>
      <VisualHint>Use one conceptual progression view. Clearly label shipped funnel improvements separately from the future contributor journey.</VisualHint>

      {/* ══════════════ Reflection ══════════════ */}
      <SectionDivider id="divider-reflection" />
      <h2 id="reflection">Reflection</h2>

      <h3>Ecosystem design required balancing growth with selectivity</h3>
      <p>
        <strong>The most important shift was recognizing that awareness, consideration, and rejection were not
        separate interface problems.</strong> They shaped one person&apos;s understanding of Elite and their
        willingness to keep contributing.
      </p>
      <p>
        <strong>The work also required a careful balance.</strong> We wanted to make the path clearer without turning
        Elite into a mechanical checklist or weakening the role of Community Managers. The strongest
        designs gave people useful guidance while preserving the human judgment that makes the program
        meaningful.
      </p>
      <p>
        <strong>I also learned that rejection can remain a productive moment.</strong> People who nominate themselves
        already have motivation. Clear reasons and a relevant next step can redirect that energy toward
        stronger contributions instead of allowing it to disappear.
      </p>
    </CaseStudyLayout>
  );
}
