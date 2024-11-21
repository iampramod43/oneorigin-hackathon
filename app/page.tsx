import { FeedSection } from "@/components/feed-section";
import { ProfileCard } from "@/components/profile-card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
      {/* Profile Section */}
      <div className="md:col-span-3">
        <ProfileCard />
      </div>

      {/* Main Feed */}
      <div className="md:col-span-6">
        <FeedSection />
      </div>

      {/* Trending & Suggestions */}
      <div className="md:col-span-3">
        <div className="rounded-lg border bg-card p-4">
          <h2 className="font-semibold">Trending Topics</h2>
          <Separator className="my-2" />
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">#ComputerScience</p>
            <p className="text-sm text-muted-foreground">#CareerAdvice</p>
            <p className="text-sm text-muted-foreground">#AlumniMeetup</p>
          </div>
        </div>
      </div>
    </div>
  );
}