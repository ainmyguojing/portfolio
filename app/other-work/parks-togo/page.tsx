import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata = { title: "Parks Togo — Jing Guo" };

export default function ParksTogo() {
  return (
    <CaseStudyLayout
      title="Parks Togo"
      subtitle="A mobile app helping users find suitable parks and navigate amenities based on their planned activities."
      role="UX/UI Designer"
      team="Academic Project"
      year="2021"
      tags={["Mobile", "Consumer", "Maps", "UX Research"]}
      currentHref="/other-work/parks-togo"
    >
      <h2>Background</h2>
      <p>
        Parks became significantly more popular during COVID-19 as people sought outdoor activities.
        But existing solutions suffered from inefficient keyword search, inadequate information display
        in list/map views, and missing geographic details within parks.
      </p>

      <h2>Problem Statement</h2>
      <p>
        Users have difficulties finding ideal parks based on their emerging needs, and orienting
        themselves within parks based on their planned activities.
      </p>

      <h2>Research</h2>
      <p>
        User research, persona development, and synthesis identified a broken connection between user
        needs and available access. The core gap: users knew what they wanted to do, but couldn&apos;t
        reliably find a park that matched, and once there, had no good way to navigate.
      </p>
      <p><strong>How Might We questions:</strong></p>
      <ul>
        <li>Help users find suitable parks efficiently?</li>
        <li>Enable easy orientation based on features?</li>
        <li>Provide park amenities layout information?</li>
      </ul>

      <h2>Design Process</h2>
      <p>
        Four storyboard scenarios were explored and validated with users, narrowing focus to two core
        needs: park searching and parking location finding. Main epics and red-route MVP workflows
        were defined, then tested with guerrilla testing.
      </p>
      <p>
        Testing revealed: activity selection was redundant, map-image-activity interactions were
        unclear, and parking buttons were too prominent. These were addressed in the hi-fi iteration.
      </p>

      <h2>Final Design</h2>
      <p>
        Five-point product tone: <strong>energetic, alive, sharp, clear, simple</strong>.
      </p>
      <ul>
        <li>Personalized homepage based on user activity preferences</li>
        <li>Activity-prioritized search results</li>
        <li>Map/list view switching for browsing flexibility</li>
        <li>Interactive amenities display with synchronized pins and images</li>
        <li>Parking destination options with real-time status</li>
      </ul>

      <h2>Reflections</h2>
      <ul>
        <li>Simplicity is harder than it looks — every feature added complexity that had to be justified.</li>
        <li>User testing is more reliable than designer judgment, especially for navigation patterns.</li>
        <li>Focus on core target user flows rather than trying to accommodate all approaches simultaneously.</li>
      </ul>
    </CaseStudyLayout>
  );
}
