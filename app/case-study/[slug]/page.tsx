import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/content";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects
    .filter((p) => p.caseStudy === "available")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = getProjectBySlug(slug);
  if (!result) return {};
  const { data } = result;
  return {
    title: `${data.title ?? data.company} — Adrián Luna Díaz`,
    description: data.problem?.slice(0, 160) ?? data.description.slice(0, 160),
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = getProjectBySlug(slug);

  if (!result || result.data.caseStudy !== "available") notFound();

  const { data: study } = result;

  return (
    <main
      className="min-h-screen bg-white"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* Top bar */}
      <div className="w-full border-b border-[#f1f1f1] px-8 py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[14px] text-[#6b7280] hover:text-black transition-colors"
        >
          ← Back to portfolio
        </Link>
      </div>

      {/* Content */}
      <div className="flex justify-center px-8 py-[80px]">
        <div className="w-full max-w-[760px] flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4">
            {/* Tags */}
            {study.tags && study.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-black rounded-[52px] px-3 py-1 text-[12px] text-black tracking-[0.12px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1
              className="text-[48px] text-black tracking-[0.48px] leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {study.title ?? study.company}
            </h1>

            {/* Meta row */}
            <div className="flex gap-6 text-[14px] text-[#6b7280] tracking-[0.14px]">
              <span>{study.role}</span>
              <span>·</span>
              <span>{study.company}</span>
              <span>·</span>
              <span>{study.period}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[2px] bg-[#f6f6f6]" />

          {/* Pull quote (optional) */}
          {study.pullQuote && (
            <>
              <blockquote className="border-l-4 border-black pl-6">
                <p className="text-[20px] text-black leading-relaxed tracking-[0.2px]">
                  &ldquo;{study.pullQuote}&rdquo;
                </p>
              </blockquote>
              <div className="h-[2px] bg-[#f6f6f6]" />
            </>
          )}

          {/* Problem */}
          {study.problem && (
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-[12px] text-[#9ca3af] tracking-[1.4px] uppercase">
                Problem
              </h2>
              <p className="text-[18px] text-black leading-relaxed tracking-[0.18px]">
                {study.problem}
              </p>
            </div>
          )}

          {/* Divider */}
          {study.approach && study.approach.length > 0 && (
            <div className="h-[2px] bg-[#f6f6f6]" />
          )}

          {/* Approach */}
          {study.approach && study.approach.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-[12px] text-[#9ca3af] tracking-[1.4px] uppercase">
                Approach
              </h2>
              <ul className="flex flex-col gap-3">
                {study.approach.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-[#9ca3af] text-[14px] mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[18px] text-black leading-relaxed tracking-[0.18px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Divider */}
          {study.impact && study.impact.length > 0 && (
            <div className="h-[2px] bg-[#f6f6f6]" />
          )}

          {/* Impact */}
          {study.impact && study.impact.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-[12px] text-[#9ca3af] tracking-[1.4px] uppercase">
                Impact
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {study.impact.map((row) => (
                  <div
                    key={row.metric}
                    className="bg-[#f6f6f6] rounded-[12px] p-6 flex flex-col gap-1"
                  >
                    <span className="text-[28px] font-semibold text-black tracking-[0.28px]">
                      {row.result}
                    </span>
                    <span className="text-[14px] text-[#6b7280] tracking-[0.14px]">
                      {row.metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Divider */}
          {study.tools && study.tools.length > 0 && (
            <div className="h-[2px] bg-[#f6f6f6]" />
          )}

          {/* Tools */}
          {study.tools && study.tools.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-[12px] text-[#9ca3af] tracking-[1.4px] uppercase">
                Tools
              </h2>
              <div className="flex flex-wrap gap-2">
                {study.tools.map((tool) => (
                  <span
                    key={tool}
                    className="border border-black rounded-[52px] px-3 py-1 text-[12px] text-black tracking-[0.12px]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
