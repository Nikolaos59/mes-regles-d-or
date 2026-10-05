import Link from "next/link";

import { categories } from "@/data/categories";
import type { Rule } from "@/lib/editorial-types";

type RuleCardProps = {
  rule: Rule;
};

export default function RuleCard({
  rule,
}: RuleCardProps) {
  const category = categories.find(
    (item) => item.id === rule.categoryId,
  );

  return (
    <Link
      href={`/regles/${rule.slug}`}
      className="group flex min-h-[330px] flex-col rounded-[28px] border border-black/[0.07] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C89A3D]/30 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8"
    >
      <div className="flex items-start justify-between gap-5">

        {category && (
          <span className="text-[13px] font-medium text-[#6B7280]">
            {category.shortName}
          </span>
        )}
      </div>

      <div className="mt-auto pt-14">
        <h2 className="text-[25px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#111827]">
          {rule.title}
        </h2>

        <p className="mt-5 text-[16px] leading-7 text-[#6B7280]">
          {rule.summary}
        </p>

        <div className="mt-7 flex items-center gap-2 text-[14px] font-semibold text-[#0F172A]">
          Lire la règle

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
