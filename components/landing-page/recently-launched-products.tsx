import React from "react";
import SectionHeader from "../common/section-header";
import { Calendar1Icon, RocketIcon } from "lucide-react";
import ProductCard from "../products/product-card";
import EmptyState from "../common/empty-state";

const recentlyLaunchedProducts = [];
// const recentlyLaunchedProducts = [
//   {
//     id: 1,
//     name: "ParityKit",
//     description:
//       "Maximize your global revenue with intelligent price localization. Automatically adjust pricing based on purchasing power parity to increase conversions worldwide.",

//     tags: ["Saas", "Pricing", "global"],
//     votes: 615,
//     isFeatured: true,
//   },
//   {
//     id: 2,
//     name: "Modern Full Stack Next.js Course",
//     description:
//       "Learn to build modern full stack applications with Next.js 16.",

//     tags: ["Next.js", "Full-Stack", "Course"],
//     votes: 124,
//     isFeatured: false,
//   },
// ];

export default function RecentlyLaucnchedProducts() {
  return (
    <section className="py-20">
      <div className="wrapper space-y-12">
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="Discover the latest products from our community"
        />
        {recentlyLaunchedProducts.length > 0 ? (
          <div className="grid-wrapper">
            {recentlyLaunchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            message="No products launched in the last week. Check back soon for new launches."
            icon={Calendar1Icon}
          />
        )}
      </div>
    </section>
  );
}
