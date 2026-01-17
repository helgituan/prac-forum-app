import SectionHeader from "@/components/common/section-header";
import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title="Featured Today"
            icon={StarIcon}
            description="Top picks from our community this week"
          />
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/explore" className="flex items-center gap-2">
              View all
              <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
