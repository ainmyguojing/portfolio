import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata = {
  title: "Community Q&A — Jing Guo",
};

export default function CommunityQA() {
  return (
    <CaseStudyLayout
      title="Community Q&A"
      subtitle="Designing and scaling a 0→1 community driven, new contribution model across multiple product surfaces."
      role="Lead Designer (Sole)"
      team="1 PM · 6 Engineers · 1 Data Scientist"
      year="2023–2026"
      tags={["0→1 Product", "Community", "Contribution Systems", "Scale"]}
    >
      <p>
        I led design end-to-end as the sole designer on this project, working with a PM, 6 engineers,
        and a data scientist. I shaped the product strategy, conducted all research, and owned every
        design decision from early concept through launch.
      </p>

      <h2>01 — Context &amp; Opportunity</h2>
      <p>
        Yelp&apos;s contribution model had long centered on reviews, but reviews couldn&apos;t answer
        everything. People had questions that cannot be easily answered by reviews, and there was no
        easy way to ask or get answers from the community. At the same time, review volume was
        plateauing, which made finding new ways for people to contribute more urgent.
      </p>
      <p>We explored whether a community driven Q&amp;A model could:</p>
      <ul>
        <li>Open up new ways for people to contribute beyond writing reviews.</li>
        <li>
          Lower the barrier to participation. Asking and answering a question is quicker and easier
          than writing a review.
        </li>
        <li>
          Add a layer of knowledge that works alongside reviews, not in competition with them.
        </li>
      </ul>

      <h2>02 — Product Evolution Strategy</h2>
      <p>
        Community Q&amp;A did not launch as a single feature. It developed in three stages —
        defining the vision, validating the user need, and then scaling the system.
      </p>

      <h3>Stage 1: Vision Work</h3>
      <p>
        Before building anything, the main challenge was understanding where Q&amp;A fit within
        Yelp&apos;s existing experience. The risk was creating something that felt tacked on,
        overlapping with reviews or adding noise instead of value. This phase was about establishing
        the right foundation before any design decisions were made.
      </p>
      <p><strong>Key Design Questions</strong></p>
      <ul>
        <li>How should Q&amp;A fit into Yelp? How can it integrate without becoming a separate system?</li>
        <li>Who participates? Who asks questions, who answers them, and how do people move between reading and contributing?</li>
        <li>How does intent become a question? How does a broad intent, such as searching, turn into a specific question?</li>
      </ul>
      <p><strong>Design foundation</strong></p>
      <p>
        This phase established a shared direction for the product: Q&amp;A as a complementary layer.
        It should extend search and reviews rather than competing with them.
      </p>
      <p><strong>Which user flows to focus on?</strong></p>
      <p>
        A key goal of the vision work was to surface the gaps between what Yelp currently offered
        and what users actually needed. The asking journey illustrates this most clearly — it&apos;s
        where unmet intent is most visible. I focused on two asking flows in the vision: search and
        AI chat. The search flow represents the highest volume entry point for unanswered questions.
      </p>
      <p><strong>Asker journey: from search to ask a question</strong></p>
      <ol>
        <li>Simple search</li>
        <li>Long sentence search</li>
        <li>Prompt user to post the search as a question</li>
        <li>Show user similar Q&amp;As</li>
        <li>Notify user for new answer</li>
        <li>Lead user to business page</li>
      </ol>

      <h3>Stage 2: Pilot / PMF Test</h3>
      <p>
        With a direction set, the next question was: would people actually use this? The pilot was
        designed to test whether Q&amp;A felt natural within Yelp — whether users would ask and
        answer questions without us needing to force the behavior.
      </p>
      <p><strong>Pilot Focus</strong></p>
      <ul>
        <li>Establish the interaction model — introduced a consistent structure for questions and replies, supporting both asking and answering.</li>
        <li>Cover key surfaces — identified discovery and contribution entry points, tested Q&amp;A within existing product flows.</li>
      </ul>
      <p><strong>Design foundation</strong></p>
      <p>
        I prioritized consistency over customization — keeping Q&amp;A close to Yelp&apos;s existing
        interaction patterns so it felt familiar, not foreign. This reduced friction and made it
        easier for people to participate for the first time.
      </p>
      <p><strong>Design outcome</strong></p>
      <ul>
        <li>Established a clear, consistent interaction model for asking and answering</li>
        <li>Validated that the structure held up across both contribution types</li>
        <li>Created a stable foundation to build on in Stage 3</li>
      </ul>

      <h3>Stage 3: Scale</h3>
      <p>
        Once we confirmed that people genuinely wanted to ask and answer questions on Yelp, the
        challenge shifted. It was no longer about proving the concept — it was about making sure the
        system could grow without breaking down. I focused on scaling Q&amp;A consistently across
        surfaces while keeping the experience coherent.
      </p>
      <p><strong>Scaling Directions</strong></p>
      <ul>
        <li><strong>Friction reduction:</strong> Converting search queries into questions, streamlining the reply experience, reducing cognitive load throughout the flow.</li>
        <li><strong>Channel expansion:</strong> Expanding Q&amp;A to Web and Android, introducing email and push notifications, adding more entry points to improve discoverability.</li>
        <li><strong>Ecosystem building:</strong> Lightweight reactions to close the loop, establishing the Community Q&amp;A Hub as a central destination.</li>
      </ul>

      <h2>03 — Selected Design Initiatives from Stage 3</h2>
      <p>
        These initiatives span multiple layers of product design — from shifting user behavior and
        integrating systems, to refining contribution quality and feedback mechanics.
      </p>
      <ul>
        <li>[Growth] — Convert search query to community question</li>
        <li>[Systems building] — Community Hub</li>
        <li>[Interaction craft] — Biz tagging + Biz prompting</li>
        <li>[Feedback mechanism] — &ldquo;Love&rdquo; a reply</li>
      </ul>

      <h3>Convert Search Query to Community Question</h3>
      <p>
        <strong>The Problem:</strong> Many searches on Yelp were actually questions, but there was
        high friction for users to turn that intent into a community interaction.
      </p>
      <p><strong>Design challenges</strong></p>
      <ul>
        <li>Shift the experience from transactional search to conversational asking</li>
        <li>Reduce the effort of composing a complete question</li>
        <li>Balance getting more contributions with keeping content quality high</li>
        <li>Align across Search, AI, and Ranking teams who all had a stake in this surface</li>
      </ul>
      <p><strong>Strategic Design Decisions</strong></p>
      <ul>
        <li>Keep question creation lightweight and in context, so it didn&apos;t feel like a detour</li>
        <li>Use progressive prompting only when the user&apos;s intent was unclear, to avoid interrupting confident searches</li>
        <li>Make the human element visible: real answers from real people, distinct from search results or AI chat</li>
      </ul>
      <p><strong>Key Design Moves</strong></p>
      <ul>
        <li>Built a mechanism that recognized when a search looked like a question and offered to convert it</li>
        <li>Designed a lightweight question creation flow to minimize the effort of asking</li>
        <li>Aligned the experience with how people think about search, so the transition felt natural</li>
        <li>Shifted the experience from passively browsing results to actively starting a conversation</li>
      </ul>
      <p><strong>Impact</strong></p>
      <ul>
        <li>Increased both the rate and quality of questions submitted</li>
        <li>Turned a passive search behavior into active community participation</li>
        <li>Created a reusable pattern for intent-to-contribution conversion that could scale across other surfaces</li>
      </ul>

      <h3>Community Q&amp;A Hub</h3>
      <p>
        <strong>The Problem:</strong> As Q&amp;A expanded across the product, the content became
        scattered. There was no single place to browse, revisit, or engage with questions, making
        the experience feel fragmented and easy to miss.
      </p>
      <p><strong>Design challenges</strong></p>
      <ul>
        <li>How can Q&amp;A integrate into the existing experience without becoming a separate system?</li>
      </ul>
      <p><strong>Key Design Moves</strong></p>
      <ul>
        <li>Built a dedicated hub where users could browse, revisit, and engage with all Q&amp;A content in one place</li>
        <li>Added Q&amp;A hub entry points across key surfaces — Home, Yelp Assistant, Business pages, and more</li>
        <li>Organized questions geo-based to surface locally relevant content</li>
      </ul>
      <p><strong>Impact</strong></p>
      <ul>
        <li>Increased Q&amp;A visibility across the app, which drove higher engagement and answer rates</li>
        <li>Improved retention by giving users a reliable place to return to their questions and activity</li>
        <li>Laid the structural foundation for a scalable community ecosystem</li>
      </ul>

      <h3>Business Tagging &amp; Prompting</h3>
      <p>
        <strong>The Problem:</strong> Questions and replies often had no clear connection to specific
        businesses, which made the content harder to navigate and less useful for people trying to
        make a decision.
      </p>
      <p><strong>Design challenges</strong></p>
      <ul>
        <li>Help users add business in their replies without feeling constrained or directed</li>
        <li>Balance AI driven suggestions with user autonomy: the system should assist, not dictate</li>
        <li>Introduce prompting in a way that works for all users, without overwhelming those who don&apos;t need it</li>
      </ul>
      <p><strong>Strategic Design Decisions</strong></p>
      <ul>
        <li>Show the prompt upfront to prioritize education and drive feature adoption</li>
        <li>Trigger tagging based on signals in the user&apos;s reply: helpful when relevant, invisible when not</li>
        <li>Prioritize interaction quality over feature complexity, keeping the flow smooth and easy to follow</li>
      </ul>
      <p><strong>Key interaction decisions</strong></p>
      <p>
        To work through these interaction questions, I used lightweight prototypes to evaluate
        tradeoffs and land on clear, simple rules.
      </p>
      <ul>
        <li><strong>Should users be able to change location while asking?</strong> Removed manual location editing to keep the experience simple — location is inferred automatically.</li>
        <li><strong>What is the right interaction for business tagging?</strong> Used inline tagging to keep the flow focused and avoid breaking the user&apos;s train of thought.</li>
        <li><strong>When should business chips appear?</strong> Show business chips only before the user has tagged a business — they&apos;re only needed as a starting point, not throughout the flow.</li>
      </ul>
      <p><strong>Impact</strong></p>
      <ul>
        <li>Improved the quality and relevance of replies by grounding them in specific businesses</li>
        <li>Strengthened the connection between Q&amp;A content and the businesses being discussed</li>
        <li>Improved the reader experience by making it easier to navigate directly to a relevant business page</li>
      </ul>

      <h3>&ldquo;Love&rdquo; a Reply</h3>
      <p>
        <strong>Design Tradeoff: Reaction Placement</strong>
      </p>
      <p>
        We explored two placement models for reply-level reactions: one optimized for the current
        experience, and one designed to scale as more interaction types are introduced.
      </p>
      <p>
        <strong>Option A · Expandable Interaction Row</strong> — Built with future growth in mind,
        with space for replies and additional interaction types as the system evolves. Supports
        future interaction expansion and clear visual separation between actions, but feels sparse
        in the current state when only reactions exist.
      </p>
      <p>
        <strong>Option B · Inline Reaction Placement (Final)</strong> — Optimized for the current
        experience with minimal visual overhead. Keeps the layout compact and feels natural when
        reactions are the only interaction. Avoids introducing empty or unused space.
      </p>
      <p><strong>Impact</strong></p>
      <ul>
        <li>Made it easy for readers to show appreciation, closing the feedback loop for contributors</li>
        <li>Added a lightweight interaction that increased engagement without requiring extra effort</li>
        <li>Reinforced participation by giving contributors a signal that their answers were valued</li>
      </ul>

      <h2>04 — Outcome &amp; Impact</h2>
      <p>
        Community Q&amp;A launched as a new content type on Yelp — and the results showed it was
        filling a real gap.
      </p>
      <ul>
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
      </ul>

      <h2>Reflections</h2>
      <p>
        Building Q&amp;A from scratch and seeing it reach scale taught me a lot about what it takes
        to introduce a new behavior to an established product.
      </p>
      <ul>
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
      </ul>
    </CaseStudyLayout>
  );
}
