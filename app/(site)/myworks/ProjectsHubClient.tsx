"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, Sparkles, Code2, Database, Layers, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { ProjectMeta, ProjectCategory } from "@/lib/projects";

interface ProjectsHubClientProps {
  initialProjects: ProjectMeta[];
}

export function ProjectsHubClient({ initialProjects }: ProjectsHubClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read initial category from URL if present (?category=coding / data / featured)
  const initialCategoryFromUrl = (searchParams.get("category") as ProjectCategory) || "all";
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    ["all", "featured", "coding", "data"].includes(initialCategoryFromUrl)
      ? initialCategoryFromUrl
      : "all"
  );
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectsTopRef = useRef<HTMLDivElement>(null);

  // Sync category state if URL param changes
  useEffect(() => {
    const urlCategory = searchParams.get("category") as ProjectCategory;
    if (urlCategory && ["all", "featured", "coding", "data"].includes(urlCategory)) {
      setActiveCategory(urlCategory);
      setCurrentPage(1);
    }
  }, [searchParams]);

  // Reset to page 1 whenever search query or tag changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTag]);

  // Handle category tab change & update URL query without page reload
  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    setSelectedTag(null); // Reset tag filter on category switch
    setCurrentPage(1);
    if (category === "all") {
      router.replace("/myworks", { scroll: false });
    } else {
      router.replace(`/myworks?category=${category}`, { scroll: false });
    }
  };

  // Compute category counts
  const counts = useMemo(() => {
    return {
      all: initialProjects.length,
      featured: initialProjects.filter((p) => p.category === "featured" || p.featured).length,
      coding: initialProjects.filter((p) => p.category === "coding").length,
      data: initialProjects.filter((p) => p.category === "data").length,
    };
  }, [initialProjects]);

  // Filtered list based on activeCategory + selectedTag + searchQuery
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      // Category filter
      if (activeCategory === "featured" && project.category !== "featured" && !project.featured) {
        return false;
      }
      if (activeCategory === "coding" && project.category !== "coding") {
        return false;
      }
      if (activeCategory === "data" && project.category !== "data") {
        return false;
      }

      // Tag filter
      if (selectedTag && !project.tags?.some((t) => t.toLowerCase() === selectedTag.toLowerCase())) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = project.title.toLowerCase().includes(q);
        const inDesc = project.description.toLowerCase().includes(q);
        const inTags = project.tags?.some((t) => t.toLowerCase().includes(q));
        const inLabel = project.label?.toLowerCase().includes(q);
        if (!inTitle && !inDesc && !inTags && !inLabel) {
          return false;
        }
      }

      return true;
    });
  }, [initialProjects, activeCategory, selectedTag, searchQuery]);

  // Pagination: 5 rows of 3 columns = 15 projects per page
  const ITEMS_PER_PAGE = 15;
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const validCurrentPage = Math.min(Math.max(currentPage, 1), Math.max(totalPages, 1));
  const startIndex = (validCurrentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = useMemo(() => {
    return filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProjects, startIndex]);

  const categories = [
    { id: "all" as ProjectCategory, label: "All Projects", count: counts.all, icon: Layers },
    { id: "featured" as ProjectCategory, label: "My Own Product", count: counts.featured, icon: Sparkles },
    { id: "coding" as ProjectCategory, label: "Software Engineering", count: counts.coding, icon: Code2 },
    { id: "data" as ProjectCategory, label: "Data Science & AI", count: counts.data, icon: Database },
  ];

  return (
    <div ref={projectsTopRef} className="space-y-8">
      {/* ── FILTER & CONTROLS TOOLBAR ─────────────────────── */}
      <div className="space-y-4">
        {/* Category Tab Pills (Compact) */}
        <div className="flex flex-wrap items-center gap-1.5 border-b border-[var(--border)] pb-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider transition-all rounded-xs cursor-pointer ${
                  isActive
                    ? "bg-[var(--foreground)] text-[var(--background)] shadow-xs font-semibold"
                    : "border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--foreground)] bg-[var(--background)]"
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{cat.label}</span>
                <span
                  className={`ml-0.5 text-[9px] font-mono px-1 py-0.2 rounded-full ${
                    isActive
                      ? "bg-[var(--background)] text-[var(--foreground)]"
                      : "bg-[var(--muted)] text-[var(--muted-foreground)]"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input & Tech Tag Pills */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Compact Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]" />
            <input
              type="text"
              placeholder="Search projects, stack, tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-7 py-1.5 text-xs border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none focus:border-[var(--foreground)] transition-colors rounded-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Active Filter Status & Reset */}
          <div className="flex items-center gap-3 text-xs text-[var(--muted-foreground)]">
            <span className="font-mono text-[10px] uppercase tracking-wider">
              {filteredProjects.length > ITEMS_PER_PAGE
                ? `Showing ${startIndex + 1}–${Math.min(startIndex + ITEMS_PER_PAGE, filteredProjects.length)} of ${filteredProjects.length} Projects`
                : `${filteredProjects.length} of ${initialProjects.length} Projects`}
            </span>
            {selectedTag && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] border border-[var(--border)] text-[var(--foreground)] bg-[var(--muted)]/50 rounded-xs">
                <span>Tag: {selectedTag}</span>
                <button
                  onClick={() => setSelectedTag(null)}
                  className="hover:text-[var(--foreground)] cursor-pointer"
                  title="Remove tag filter"
                >
                  <X className="w-2.5 h-2.5" />
                </button>
              </span>
            )}
            {(selectedTag || searchQuery || activeCategory !== "all") && (
              <button
                onClick={() => {
                  setSelectedTag(null);
                  setSearchQuery("");
                  handleCategoryChange("all");
                }}
                className="underline underline-offset-2 hover:text-[var(--foreground)] transition-colors text-[10px] font-medium cursor-pointer"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── COMPACT PROJECT SHOWCASE GRID (3 COLUMNS) ─────── */}
      {filteredProjects.length === 0 ? (
        <div className="p-12 text-center border border-dashed border-[var(--border)] space-y-3">
          <p className="text-sm text-[var(--muted-foreground)]">
            No projects found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSelectedTag(null);
              setSearchQuery("");
              setActiveCategory("all");
              setCurrentPage(1);
            }}
            className="px-3 py-1.5 text-xs font-bold uppercase tracking-widest bg-[var(--foreground)] text-[var(--background)] rounded-xs"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {paginatedProjects.map((project) => {
            const hasImage = Boolean(project.image);
            const isFeatured = project.category === "featured" || project.featured;

            return (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between border border-[var(--border)] p-4 bg-[var(--card)] hover:border-[var(--foreground)] transition-all duration-300"
              >
                <div>
                  {/* Category & Year Header (Compact) */}
                  <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[var(--border)]">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          project.category === "data"
                            ? "bg-purple-600"
                            : project.category === "coding"
                            ? "bg-blue-600"
                            : "bg-emerald-600"
                        }`}
                      />
                      <span className="text-[9px] font-bold tracking-[0.16em] uppercase text-[var(--muted-foreground)]">
                        {project.label || (project.category === "data" ? "DATA & AI" : project.category === "coding" ? "SOFTWARE" : "MY PRODUCT")}
                      </span>
                    </div>

                    {project.year && (
                      <span className="text-[9px] font-mono tracking-wider text-[var(--muted-foreground)] opacity-70">
                        {project.year}
                      </span>
                    )}
                  </div>

                  {/* Compact Image Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[var(--muted)] border border-[var(--border)] group-hover:border-[var(--foreground)] transition-colors duration-300 mb-3.5">
                    {hasImage ? (
                      <Image
                        src={project.image!}
                        alt={project.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center space-y-1.5 bg-[var(--muted)]/20">
                        {project.category === "data" ? (
                          <Database className="w-5 h-5 text-[var(--muted-foreground)] opacity-40 group-hover:opacity-75 transition-opacity" />
                        ) : project.category === "coding" ? (
                          <Code2 className="w-5 h-5 text-[var(--muted-foreground)] opacity-40 group-hover:opacity-75 transition-opacity" />
                        ) : (
                          <Sparkles className="w-5 h-5 text-[var(--muted-foreground)] opacity-40 group-hover:opacity-75 transition-opacity" />
                        )}
                        <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--muted-foreground)] line-clamp-1">
                          {project.title}
                        </span>
                      </div>
                    )}

                    {/* Compact Product Badge */}
                    {isFeatured && (
                      <div className="absolute top-2 right-2 bg-[var(--foreground)] text-[var(--background)] text-[8px] font-bold tracking-widest uppercase px-1.5 py-0.5 shadow-xs">
                        MY PRODUCT
                      </div>
                    )}
                  </div>

                  {/* Title & Description (Compact & Clean) */}
                  <div className="space-y-1.5">
                    <h3 className="text-sm md:text-base font-medium text-[var(--foreground)] group-hover:text-[var(--foreground)] transition-colors tracking-tight line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[var(--muted-foreground)] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Footer: Compact Tags & Action Links */}
                <div className="pt-3 mt-3 border-t border-[var(--border)] space-y-3">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags?.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTag(tag);
                        }}
                        className="text-[9px] font-medium tracking-wide border border-[var(--border)] text-[var(--muted-foreground)] px-1.5 py-0.2 bg-[var(--background)] hover:border-[var(--foreground)] hover:text-[var(--foreground)] transition-colors cursor-pointer rounded-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {(project.tags?.length || 0) > 4 && (
                      <span className="text-[9px] text-[var(--muted-foreground)] opacity-60 self-center">
                        +{(project.tags?.length || 0) - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Link Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.links && project.links.length > 0 ? (
                        project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-[var(--foreground)] text-[var(--primary-foreground)] hover:opacity-80 transition-opacity rounded-xs"
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        ))
                      ) : (
                        <span className="text-[10px] text-[var(--muted-foreground)] italic font-mono">
                          Internal System
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--border)] group-hover:bg-[var(--foreground)] transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      )}

      {/* ── PAGINATION CONTROLS (5 ROWS / 15 ITEMS PER PAGE) ── */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--border)]">
          <div className="text-xs text-[var(--muted-foreground)] font-mono tracking-wider">
            Showing {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, filteredProjects.length)} of {filteredProjects.length} Projects (Page {validCurrentPage} of {totalPages})
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => {
                const nextP = Math.max(validCurrentPage - 1, 1);
                setCurrentPage(nextP);
                projectsTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              disabled={validCurrentPage === 1}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium uppercase tracking-wider border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] disabled:opacity-30 disabled:cursor-not-allowed hover:not-disabled:border-[var(--foreground)] transition-colors rounded-xs cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
              const isActive = pageNum === validCurrentPage;
              return (
                <button
                  key={pageNum}
                  onClick={() => {
                    setCurrentPage(pageNum);
                    projectsTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={`min-w-8 h-8 px-2.5 text-xs font-mono font-medium border transition-colors rounded-xs cursor-pointer ${
                    isActive
                      ? "bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)] font-bold shadow-xs"
                      : "border-[var(--border)] bg-[var(--background)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--foreground)]"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => {
                const nextP = Math.min(validCurrentPage + 1, totalPages);
                setCurrentPage(nextP);
                projectsTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              disabled={validCurrentPage === totalPages}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium uppercase tracking-wider border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] disabled:opacity-30 disabled:cursor-not-allowed hover:not-disabled:border-[var(--foreground)] transition-colors rounded-xs cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
