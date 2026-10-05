import Link from "next/link";

import type {
  Category,
  CategoryIcon,
} from "@/data/categories";

type CategoryCardProps = {
  category: Category;
  ruleCount: number;
};

export default function CategoryCard({
  category,
  ruleCount,
}: CategoryCardProps) {
  return (
    <Link
      href={category.href}
      className="group relative flex min-h-[350px] flex-col overflow-hidden rounded-[28px] border border-black/[0.07] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#C89A3D]/30 hover:shadow-[0_24px_70px_rgba(15,23,42,0.09)] sm:p-8"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F1E9] text-[#0F172A] transition-colors duration-300 group-hover:bg-[#0F172A] group-hover:text-[#C89A3D]">
          <CategoryIconRenderer icon={category.icon} />
        </span>
      </div>

      <div className="mt-auto pt-16">
        <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#C89A3D]">
          {ruleCount} règles
        </p>

        <h3 className="max-w-[280px] text-[27px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#111827]">
          {category.name}
        </h3>

        <p className="mt-4 text-[15px] leading-7 text-[#6B7280]">
          {category.description}
        </p>

        <div className="mt-7 flex items-center gap-2 text-[14px] font-semibold text-[#0F172A]">
          <span>Explorer</span>

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>

      <div className="absolute -bottom-28 -right-28 h-56 w-56 rounded-full bg-[#C89A3D]/[0.04] transition-transform duration-700 group-hover:scale-150" />
    </Link>
  );
}

function CategoryIconRenderer({
  icon,
}: {
  icon: CategoryIcon;
}) {
  const commonProps = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (icon) {
    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M12 3L19 6V11C19 15.7 16.2 19.4 12 21C7.8 19.4 5 15.7 5 11V6L12 3Z" />
          <path d="M9.5 12L11.2 13.7L15 9.8" />
        </svg>
      );

    case "spark":
      return (
        <svg {...commonProps}>
          <path d="M12 2L13.4 7.6C13.8 9.1 14.9 10.2 16.4 10.6L22 12L16.4 13.4C14.9 13.8 13.8 14.9 13.4 16.4L12 22L10.6 16.4C10.2 14.9 9.1 13.8 7.6 13.4L2 12L7.6 10.6C9.1 10.2 10.2 9.1 10.6 7.6L12 2Z" />
        </svg>
      );

    case "briefcase":
      return (
        <svg {...commonProps}>
          <rect
            x="3"
            y="7"
            width="18"
            height="13"
            rx="2"
          />
          <path d="M8 7V5.5C8 4.7 8.7 4 9.5 4H14.5C15.3 4 16 4.7 16 5.5V7" />
          <path d="M3 12H21" />
          <path d="M10 12V14H14V12" />
        </svg>
      );

    case "wallet":
      return (
        <svg {...commonProps}>
          <path d="M4 6.5C4 5.1 5.1 4 6.5 4H18V8H6.5C5.1 8 4 6.9 4 5.5" />
          <path d="M4 6V18C4 19.1 4.9 20 6 20H20V8H6" />
          <path d="M16 13H20" />
        </svg>
      );

    case "rocket":
      return (
        <svg {...commonProps}>
          <path d="M14 5C16.7 2.3 20.5 3 21 3C21 3.5 21.7 7.3 19 10L13 16L8 11L14 5Z" />
          <path d="M14 5L19 10" />
          <path d="M8 11L5 12L3 16L8 15" />
          <path d="M13 16L12 19L8 21L9 16" />
          <circle
            cx="16"
            cy="7"
            r="1.5"
          />
        </svg>
      );
  }
}
