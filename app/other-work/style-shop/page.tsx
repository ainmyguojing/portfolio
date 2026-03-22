import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata = { title: "Style Shop — Jing Guo" };

export default function StyleShop() {
  return (
    <CaseStudyLayout
      title="Style Shop"
      subtitle="UX redesign for a home decor eCommerce platform — enabling budget-conscious customers to browse curated looks, customize items, and track costs in one flow."
      role="UX/UI Designer"
      team="Academic Project"
      year="2021"
      tags={["eCommerce", "Web", "UX Research"]}
      currentHref="/other-work/style-shop"
    >
      <h2>Background</h2>
      <p>
        House2Home, a home decorative eCommerce platform, had low purchase rates among young,
        budget-limited customers who felt overwhelmed by complex style compositions and extensive
        item lists.
      </p>

      <h2>Customer Needs</h2>
      <ul>
        <li>Budget as primary decision factor</li>
        <li>Ability to isolate essential items within styled looks</li>
        <li>Preview item combinations before purchasing</li>
        <li>Track cumulative costs during customization</li>
      </ul>

      <h2>Business Objectives</h2>
      <ul>
        <li>Actively guide users from inspiration through purchase completion</li>
        <li>Enable customization — adding, deleting, replacing items within looks</li>
        <li>Boost conversion rates among budget-conscious segments</li>
      </ul>

      <h2>Design Process</h2>
      <p>
        Competitive analysis of Room Planner, Home Styler, Joss &amp; Main, Crate &amp; Barrel, and
        Living Spaces informed the approach. Rather than broad exploration, Crazy 8s exercises focused
        on three pivotal moments: item editing freedom, essential-item decision-making, and multi-item
        visualization.
      </p>
      <p>
        Two storyboard sets resonated strongest in validation. Visual design principles: <strong>calm,
        neutral, clean</strong> — balancing comfortable home-furnishing associations with contemporary
        sophistication.
      </p>

      <h2>Five Key Flows Prototyped</h2>
      <ul>
        <li><strong>Flow A</strong> — Room type selection</li>
        <li><strong>Flow B</strong> — Style look browsing</li>
        <li><strong>Flow C</strong> — Item deletion mechanics</li>
        <li><strong>Flow D</strong> — Item replacement mechanics</li>
        <li><strong>Flow E</strong> — Shopping cart and checkout</li>
      </ul>

      <h2>Usability Testing Insights</h2>
      <ul>
        <li>Gallery filtering by style and budget preference is beneficial</li>
        <li>Display item count and total price within gallery previews</li>
        <li>Visualize price changes through deletion animations</li>
        <li>Streamline replacing items without exiting the current interaction</li>
      </ul>

      <h2>Reflections</h2>
      <p>
        Platform type determines the potential strength and limits of design approaches. Web-based
        access constrained us to traditional techniques rather than immersive VR — a constraint that
        shaped every interaction pattern. Product improvement follows phasing; this iteration
        prioritized minimum-viable-item purchasing over item-addition features.
      </p>
    </CaseStudyLayout>
  );
}
