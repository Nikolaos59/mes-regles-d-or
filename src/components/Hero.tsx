import Link from "next/link";

export default function Hero() {
  return (
    <section className="container-mro pt-5 sm:pt-7">
      <div className="relative isolate min-h-[720px] overflow-hidden rounded-[28px] bg-[#0F172A] sm:rounded-[32px] lg:min-h-[750px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07101F]/95 via-[#0F172A]/70 to-[#0F172A]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/55 via-transparent to-white/5" />

        <div className="absolute inset-y-0 right-0 hidden w-[45%] lg:block">
          <div className="absolute bottom-[120px] right-[16%] flex w-[220px] flex-col items-center">
            <div className="h-[24px] w-[70px] rotate-[2deg] rounded-[50%] bg-[#29303A]/90 shadow-xl" />
            <div className="-mt-1 h-[31px] w-[92px] -rotate-[4deg] rounded-[50%] bg-[#343B44]/95 shadow-xl" />
            <div className="-mt-1 h-[38px] w-[116px] rotate-[3deg] rounded-[50%] bg-[#3B4249]/95 shadow-xl" />
            <div className="-mt-1 h-[45px] w-[142px] -rotate-[2deg] rounded-[50%] bg-[#454B50]/95 shadow-xl" />
            <div className="-mt-1 h-[54px] w-[174px] rotate-[1deg] rounded-[50%] bg-[#4C5156]/95 shadow-2xl" />
          </div>
        </div>

        <div className="relative z-10 flex min-h-[720px] items-end px-7 py-10 sm:px-10 sm:py-12 lg:min-h-[750px] lg:items-center lg:px-16 xl:px-20">
          <div className="max-w-[820px]">
            <p className="mb-8 flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#E3C486]">
              <span className="h-px w-8 bg-[#C89A3D]" />
              La bibliothèque des principes essentiels
            </p>

            <h1 className="heading-display text-balance max-w-[860px] text-white">
              75 règles simples pour mieux décider.
            </h1>

            <p className="mt-9 max-w-[710px] text-balance text-[19px] leading-8 text-white/75 sm:text-[20px]">
              Des principes clairs et intemporels pour mieux gérer son argent,
              travailler, utiliser le numérique, se protéger et entreprendre.
            </p>

            <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/regles"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#C89A3D] px-8 text-[15px] font-semibold text-[#0F172A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D5AB57] hover:shadow-xl"
              >
                Découvrir les 75 règles
                <ArrowRight />
              </Link>

              <Link
                href="#domaines"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/[0.07] px-8 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/[0.12]"
              >
                Explorer les domaines
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-7 gap-y-2 text-[14px] font-medium text-white/50">
              <span>5 domaines</span>
              <span className="text-[#C89A3D]">•</span>
              <span>75 principes</span>
              <span className="text-[#C89A3D]">•</span>
              <span>Des guides concrets</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 12H19M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}