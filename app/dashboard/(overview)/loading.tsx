"use client"; // Fix Warning: Each child in a list should have a unique "key" prop.
// (https://github.com/vercel/next.js/discussions/68430#discussioncomment-10366260)

import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
  return <DashboardSkeleton />;
}
