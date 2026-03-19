import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata = {
  title: "Community Q&A — Jing Guo",
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
  { id: "context", title: "Context & Opportunity", divider: "divider-context" },
  {
    id: "evolution", title: "Product Evolution", divider: "divider-evolution",
    subsections: [
      { id: "evolution-stage1", title: "Stage 1: Vision" },
      { id: "evolution-stage2", title: "Stage 2: Pilot" },
      { id: "evolution-stage3", title: "Stage 3: Scale" },
    ],
  },
  {
    id: "initiatives", title: "Design Initiatives", divider: "divider-initiatives",
    subsections: [
      { id: "initiative-search", title: "Search to Question" },
      { id: "initiative-hub", title: "Q&A Hub" },
      { id: "initiative-tagging", title: "Business Tagging" },
      { id: "initiative-love", title: "Love a Reply" },
    ],
  },
  { id: "outcome", title: "Outcome & Impact", divider: "divider-outcome" },
  { id: "reflections", title: "Reflections", divider: "divider-reflections" },
];

export default function CommunityQA() {
  return (
    <CaseStudyLayout
      title="Community Q&A"
      subtitle="Designing and scaling a 0→1 community driven, new contribution model across multiple product surfaces."
      role="Lead Designer (Sole)"
      team="1 PM · 6 Engineers · 1 Data Scientist"
      year="2023–2026"
      tags={["0→1 Product", "Community", "Contribution Systems", "Scale"]}
      sections={SECTIONS}
    >
      <p>
        I led design end-to-end as the sole designer on this project, working with a PM, 6 engineers,
        and a data scientist. I shaped the product strategy, conducted all research, and owned every
        design decision from early concept through launch.
      </p>

      <SectionDivider id="divider-context" />

      <h2 id="context">01 — Context &amp; Opportunity</h2>
      <p>
        Yelp&apos;s contribution model had long centered on reviews, but reviews couldn&apos;t answer
        everything. People had questions that cannot be easily answered by reviews, and there was no
        easy way to ask or get answers from the community. At the same time, review volume was
        plateauing, which made finding new ways for people to contribute more urgent.
      </p>
      <p>We explored whether a community driven Q&amp;A model could:</p>
      <ul>
        <li>Open up new ways for people to contribute beyond writing reviews.</li>
        <li>Lower the barrier to participation. Asking and answering a question is quicker and easier than writing a review.</li>
        <li>Add a layer of knowledge that works alongside reviews, not in competition with them.</li>
      </ul>

      <SectionDivider id="divider-evolution" />

      <h2 id="evolution">02 — Product Evolution Strategy</h2>
      <p>
        Community Q&amp;A did not launch as a single feature. It developed in three stages —
        defining the vision, validating the user need, and then scaling the system.
      </p>

      <Card id="evolution-stage1">
        <h3 className="text-base font-semibold text-neutral-900 mb-1">Stage 1: Vision Work</h3>
        <p className="text-sm text-neutral-500 mb-6">Establish the right foundation before any design decisions were made.</p>
        <p className="text-sm text-neutral-700 mb-5">
          Before building anything, the main challenge was understanding where Q&amp;A fit within
          Yelp&apos;s existing experience. The risk was creating something that felt tacked on,
          overlapping with reviews or adding noise instead of value.
        </p>
        <Label>Key Design Questions</Label>
        <BulletList className="mb-6" items={[
          "How should Q&A fit into Yelp? How can it integrate without becoming a separate system?",
          "Who participates? Who asks questions, who answers them, and how do people move between reading and contributing?",
          "How does intent become a question? How does a broad intent, such as searching, turn into a specific question?",
        ]} />
        <Label>Design Foundation</Label>
        <p className="text-sm text-neutral-600">
          Q&amp;A as a complementary layer — extending search and reviews rather than competing with them.
        </p>
      </Card>

      <Card id="evolution-stage2">
        <h3 className="text-base font-semibold text-neutral-900 mb-1">Stage 2: Pilot / PMF Test</h3>
        <p className="text-sm text-neutral-500 mb-6">Validate whether Q&amp;A felt natural within Yelp without forcing the behavior.</p>
        <p className="text-sm text-neutral-700 mb-5">
          With a direction set, the next question was: would people actually use this? The pilot was
          designed to test whether users would ask and answer questions organically.
        </p>
        <Label>Pilot Focus</Label>
        <BulletList className="mb-6" items={[
          "Establish the interaction model — consistent structure for questions and replies, supporting both asking and answering.",
          "Cover key surfaces — identify discovery and contribution entry points within existing product flows.",
        ]} />
        <Label>Design Foundation</Label>
        <p className="text-sm text-neutral-600 mb-6">
          Prioritized consistency over customization — keeping Q&amp;A close to Yelp&apos;s existing
          interaction patterns so it felt familiar, not foreign.
        </p>
        <Label>Design Outcome</Label>
        <BulletList items={[
          "Established a clear, consistent interaction model for asking and answering",
          "Validated that the structure held up across both contribution types",
          "Created a stable foundation to build on in Stage 3",
        ]} />
      </Card>

      <Card id="evolution-stage3">
        <h3 className="text-base font-semibold text-neutral-900 mb-1">Stage 3: Scale</h3>
        <p className="text-sm text-neutral-500 mb-6">Make the system grow without breaking down.</p>
        <p className="text-sm text-neutral-700 mb-6">
          Once we confirmed genuine demand, the challenge shifted from proving the concept to ensuring
          the system could grow coherently across surfaces.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              label: "Friction Reduction",
              items: ["Converting search queries into questions", "Streamlining the reply experience", "Reducing cognitive load throughout the flow"],
            },
            {
              label: "Channel Expansion",
              items: ["Expanding Q&A to Web and Android", "Introducing email and push notifications", "Adding more entry points to improve discoverability"],
            },
            {
              label: "Ecosystem Building",
              items: ["Lightweight reactions to close the loop", "Establishing the Community Q&A Hub as a central destination"],
            },
          ].map(({ label, items }) => (
            <div key={label}>
              <Label>{label}</Label>
              <BulletList items={items} />
            </div>
          ))}
        </div>
      </Card>

      <SectionDivider id="divider-initiatives" />

      <h2 id="initiatives">03 — Selected Design Initiatives from Stage 3</h2>
      <p>
        These initiatives span multiple layers of product design — from shifting user behavior and
        integrating systems, to refining contribution quality and feedback mechanics.
      </p>

      <Card id="initiative-search">
        <Label>Growth</Label>
        <h3 className="text-base font-semibold text-neutral-900 mt-2 mb-1">Convert Search Query to Community Question</h3>
        <p className="text-sm text-neutral-500 mb-6">Many searches on Yelp were actually questions, but there was high friction for users to turn that intent into a community interaction.</p>
        <TwoCol
          left={<>
            <Label>Design Challenges</Label>
            <BulletList items={[
              "Shift the experience from transactional search to conversational asking",
              "Reduce the effort of composing a complete question",
              "Balance getting more contributions with keeping content quality high",
              "Align across Search, AI, and Ranking teams who all had a stake in this surface",
            ]} />
          </>}
          right={<>
            <Label>Strategic Design Decisions</Label>
            <BulletList items={[
              "Keep question creation lightweight and in context, so it didn't feel like a detour",
              "Use progressive prompting only when the user's intent was unclear, to avoid interrupting confident searches",
              "Make the human element visible: real answers from real people, distinct from search results or AI chat",
            ]} />
          </>}
        />
        <Label>Key Design Moves</Label>
        <BulletList className="mb-6" items={[
          "Built a mechanism that recognized when a search looked like a question and offered to convert it",
          "Designed a lightweight question creation flow to minimize the effort of asking",
          "Aligned the experience with how people think about search, so the transition felt natural",
          "Shifted the experience from passively browsing results to actively starting a conversation",
        ]} />
        <Label>Impact</Label>
        <BulletList items={[
          "Increased both the rate and quality of questions submitted",
          "Turned a passive search behavior into active community participation",
          "Created a reusable pattern for intent-to-contribution conversion that could scale across other surfaces",
        ]} />
      </Card>

      <Card id="initiative-hub">
        <Label>Systems Building</Label>
        <h3 className="text-base font-semibold text-neutral-900 mt-2 mb-1">Community Q&amp;A Hub</h3>
        <p className="text-sm text-neutral-500 mb-6">As Q&amp;A expanded, the content became scattered with no single place to browse, revisit, or engage.</p>
        <TwoCol
          left={<>
            <Label>Design Challenges</Label>
            <BulletList items={[
              "How can Q&A integrate into the existing experience without becoming a separate system?",
            ]} />
          </>}
          right={<>
            <Label>Strategic Design Decisions</Label>
            <BulletList items={[
              "Who asks questions, who answers them, and how do people move between reading and contributing?",
            ]} />
          </>}
        />
        <Label>Key Design Moves</Label>
        <BulletList className="mb-6" items={[
          "Built a dedicated hub where users could browse, revisit, and engage with all Q&A content in one place",
          "Added Q&A hub entry points across key surfaces — Home, Yelp Assistant, Business pages, and more",
          "Organized questions geo-based to surface locally relevant content",
        ]} />
        <Label>Impact</Label>
        <BulletList items={[
          "Increased Q&A visibility across the app, which drove higher engagement and answer rates",
          "Improved retention by giving users a reliable place to return to their questions and activity",
          "Laid the structural foundation for a scalable community ecosystem",
        ]} />
      </Card>

      <Card id="initiative-tagging">
        <Label>Interaction Craft</Label>
        <h3 className="text-base font-semibold text-neutral-900 mt-2 mb-1">Business Tagging &amp; Prompting</h3>
        <p className="text-sm text-neutral-500 mb-6">Questions and replies often had no clear connection to specific businesses, making content harder to navigate.</p>
        <TwoCol
          left={<>
            <Label>Design Challenges</Label>
            <BulletList items={[
              "Help users add business in their replies without feeling constrained or directed",
              "Balance AI driven suggestions with user autonomy: the system should assist, not dictate",
              "Introduce prompting in a way that works for all users, without overwhelming those who don't need it",
            ]} />
          </>}
          right={<>
            <Label>Strategic Design Decisions</Label>
            <BulletList items={[
              "Show the prompt upfront to prioritize education and drive feature adoption",
              "Trigger tagging based on signals in the user's reply: helpful when relevant, invisible when not",
              "Prioritize interaction quality over feature complexity, keeping the flow smooth and easy to follow",
            ]} />
          </>}
        />
        <Label>Key Interaction Decisions</Label>
        <BulletList className="mb-6" items={[
          "Should users be able to change location while asking? → Removed manual location editing — location is inferred automatically.",
          "What is the right interaction for business tagging? → Used inline tagging to keep the flow focused and avoid breaking the user's train of thought.",
          "When should business chips appear? → Show business chips only before the user has tagged a business — only needed as a starting point.",
        ]} />
        <Label>Impact</Label>
        <BulletList items={[
          "Improved the quality and relevance of replies by grounding them in specific businesses",
          "Strengthened the connection between Q&A content and the businesses being discussed",
          "Improved the reader experience by making it easier to navigate directly to a relevant business page",
        ]} />
      </Card>

      <Card id="initiative-love">
        <Label>Feedback Mechanism</Label>
        <h3 className="text-base font-semibold text-neutral-900 mt-2 mb-1">&ldquo;Love&rdquo; a Reply</h3>
        <p className="text-sm text-neutral-500 mb-6">A lightweight way to close the feedback loop for contributors.</p>
        <Label>Design Tradeoff: Reaction Placement</Label>
        <div className="mt-2" />
        <TwoCol
          left={<>
            <p className="text-sm font-semibold text-neutral-700 mb-2">Option A · Expandable Interaction Row</p>
            <BulletList items={[
              "Built with future growth in mind",
              "Supports future interaction expansion",
              "Feels sparse in the current state with reactions only",
            ]} />
          </>}
          right={<>
            <p className="text-sm font-semibold text-neutral-700 mb-2">Option B · Inline Placement <span className="text-xs font-normal text-neutral-400">(Final)</span></p>
            <BulletList items={[
              "Optimized for the current experience",
              "Keeps the layout compact and natural",
              "Avoids introducing empty or unused space",
            ]} />
          </>}
        />
        <Label>Impact</Label>
        <BulletList items={[
          "Made it easy for readers to show appreciation, closing the feedback loop for contributors",
          "Added a lightweight interaction that increased engagement without requiring extra effort",
          "Reinforced participation by giving contributors a signal that their answers were valued",
        ]} />
      </Card>

      <SectionDivider id="divider-outcome" />

      <h2 id="outcome">04 — Outcome &amp; Impact</h2>
      <p>
        Community Q&amp;A launched as a new content type on Yelp — and the results showed it was
        filling a real gap.
      </p>
      <ol>
        <li>
          Q&amp;A volume reached <strong>10% of Yelp&apos;s review volume</strong> by Q1 2026,
          demonstrating that the community was willing to participate in a new way beyond writing reviews.
        </li>
        <li>
          The project unlocked a new contribution behavior at scale. Asking and answering questions
          became a meaningful activity for users who had never written a review before.
        </li>
        <li>
          Several interaction patterns developed for Q&amp;A — including progressive tagging, inline
          prompting, and the question thread design — were added to Yelp&apos;s design system, giving
          future teams a reusable foundation to build on.
        </li>
      </ol>

      <SectionDivider id="divider-reflections" />

      <h2 id="reflections">Reflections</h2>
      <p>
        Building Q&amp;A from scratch and seeing it reach scale taught me a lot about what it takes
        to introduce a new behavior to an established product.
      </p>
      <ol>
        <li>
          <strong>The pilot phase was the most important investment.</strong> Shipping something small
          and focused early gave us the evidence we needed to build with confidence. It&apos;s easy to
          skip validation when you believe in the idea — but the pilot is what turned belief into a
          credible direction.
        </li>
        <li>
          <strong>Designing for an existing ecosystem requires restraint.</strong> The temptation to
          invent new patterns is real, but fitting Q&amp;A into Yelp&apos;s existing language made
          adoption faster and the experience more coherent. Novelty isn&apos;t always the right goal.
        </li>
        <li>
          <strong>Scale surfaces decisions you can&apos;t anticipate early.</strong> Many of the Stage
          3 challenges — fragmentation, cross-surface consistency, contribution quality — only became
          visible once the product was real and growing. Staying close to the product post-launch was
          as important as the initial design work.
        </li>
      </ol>
    </CaseStudyLayout>
  );
}
