import SectionHeader from "@/components/common/section-header";
import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "@/components/products/product-card";

const featuredProducts = [
  {
    id: 1,
    name: "ParityKit",
    description: "A toolkit for creating parity products",
    tags: ["Saas", "Pricing", "Global"],
    votes: 615,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Modern Full Stack Next.js Course",
    description: "Learn to build modern fullstack application with Next.js",
    tags: ["Next.js", "Tailwind CSS", "Full Stack"],
    votes: 124,
    isFeatured: true,
  },
  {
    id: 3,
    name: "Developer to Leader",
    description: "A course on Engineering Leadership",
    tags: ["Course, Leadership"],
    votes: 503,
    isFeatured: true,
  },
  {
    id: 4,
    name: "ProofyBubble",
    description: "Social proof notifications that convert visitors",
    tags: ["Marketing", "SaaS", "Conversion"],
    votes: 531,
    isFeatured: true,
  },
];

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
        <div className="grid-wrapper">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
