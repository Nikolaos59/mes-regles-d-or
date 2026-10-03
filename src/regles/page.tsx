import type { Metadata } from "next";

import RuleCard from "@/components/RuleCard";
import { categories } from "@/data/categories";
import {
  getRulesByCategory,
  type RuleCategoryId,
} from "@/data/rules";

export const metadata: Metadata = {
  title: "Les 82 règles",
  description:
    "Découvrez les 82 règles d'or pour mieux décider, se protéger, travailler, gérer son argent, utiliser l'IA et entreprendre.",
};

export default function RulesPage() {
  return (
    <main>
      <section className="container-mro pb-20 pt-20 lg:pb-24 lg:pt-28">
        <div className="max-w-[900px]">
          <p className="eyebrow">
            La collection complète
          </p>

          <h1 className="mt-7 text-balance text-[clamp(3.2rem,7vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.065em] text-[#111827]">
            82 règles simples.
            <br />
            Des repères pour durer.
          </h1>

          <p className="mt-8 max-w-[720px] text-[19px] leading-8 text-[#6B7280]">
            Des principes courts, concrets et intemporels pour prendre de
            meilleures décisions dans cinq domaines essentiels de la vie
            personnelle et professionnelle.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-black/[0.08] bg-white px-5 py-3 text-[14px] font-medium text-[#374151] transition-colors hover:border-[#0F172A] hover:bg-[#0F172A] hover:text-white"
            >
              {category.shortName}
            </a>
          ))}
        </div>
      </section>

      {categories.map((category, categoryIndex) => {
        const categoryRules = getRulesByCategory(
          category.id as RuleCategoryId,
        );

        return (
          <section
            id={category.id}
            key={category.id}
            className={
              categoryIndex % 2 === 0
                ? "border-t border-black/[0.05] bg-[#EFEEE9]"
                : "border-t border-black/[0.05]"
            }
          >
            <div className="container-mro section-mro">
              <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
                <div>
                  <p className="font-mono text-[13px] tracking-[0.14em] text-[#C89A3D]">
                    Les règles du domaine
                  </p>

                  <h2 className="mt-5 text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[#111827]">
                    {category.name}
                  </h2>
                </div>

                <div className="lg:justify-self-end">
                  <p className="max-w-[570px] text-[17px] leading-8 text-[#6B7280]">
                    {category.description}
                  </p>

                  <p className="mt-5 text-[14px] font-semibold text-[#0F172A]">
                    {categoryRules.length} règles
                  </p>
                </div>
              </div>

              <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {categoryRules.map((rule) => (
                  <RuleCard
                    key={rule.id}
                    rule={rule}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}