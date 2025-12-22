"use client";
import React, { useState, useEffect } from "react";
import { Search, X, ChevronDown } from "lucide-react";
import { BlogSortOptions } from "@/lib/types/blog";
import { debounce } from "@/lib/utils/blogUtils";

const FilterBar = ({ categories = [], tags = [], onFilterChange, onSearch, initialFilters = {} }) => {
  const [searchTerm, setSearchTerm] = useState(initialFilters.search || "");
  const [selectedCategory, setSelectedCategory] = useState(initialFilters.categoryId || "");
  const [selectedTags, setSelectedTags] = useState(initialFilters.tagIds || []);
  const [sortBy, setSortBy] = useState(initialFilters.sortBy || BlogSortOptions.NEWEST);
  const [openDropdown, setOpenDropdown] = useState(null);

  const debouncedSearch = debounce((value) => onSearch?.(value), 500);
  useEffect(() => { debouncedSearch(searchTerm); }, [searchTerm]);

  const toggleDropdown = (type) => setOpenDropdown(openDropdown === type ? null : type);
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    onFilterChange?.({ categoryId, tagIds: selectedTags, sortBy });
    setOpenDropdown(null);
  };
  const handleTagToggle = (tagId) => {
    const updated = selectedTags.includes(tagId) ? selectedTags.filter((id) => id !== tagId) : [...selectedTags, tagId];
    setSelectedTags(updated);
    onFilterChange?.({ categoryId: selectedCategory, tagIds: updated, sortBy });
  };
  const handleSortChange = (value) => {
    setSortBy(value);
    onFilterChange?.({ categoryId: selectedCategory, tagIds: selectedTags, sortBy: value });
    setOpenDropdown(null);
  };
  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedTags([]);
    setSortBy(BlogSortOptions.NEWEST);
    onSearch?.("");
    onFilterChange?.({ sortBy: BlogSortOptions.NEWEST });
  };
  const hasActiveFilters = selectedCategory || selectedTags.length > 0 || searchTerm;

  return (
    <div className="  mb-14 relative z-[20]">
      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        {/* Search (half width) */}
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
          <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search blog posts..."
              className="w-full pl-12 pr-12 bg-white/70 py-3 border border-gray-200 rounded-lg  focus:border-primary transition text-gray-900 shadow"
            />

          {searchTerm && (
            <button onClick={() => setSearchTerm("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        {/* Filters (half width, split into three) */}
        <div className="w-full md:w-1/2 grid grid-cols-3 gap-4">
          {/* Category */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("category")}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-white shadow-sm border border-gray-200 hover:border-primary/40 transition"
            >
              <span className="text-gray-800 font-medium truncate">
                {selectedCategory ? categories.find((c) => c.id == selectedCategory)?.name : "All Categories"}
              </span>
              <ChevronDown className={`w-5 h-5 text-primary transition ${openDropdown === "category" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "category" && (
              <div className="absolute mt-2 w-full bg-white text-black shadow-xl border border-primary/20 rounded-lg max-h-64 overflow-auto z-[200]">
                {categories.map((c) => (
                  <button key={c.id} onClick={() => handleCategoryChange(c.id)} className="w-full text-left px-4 py-3 hover:bg-primary/10 transition truncate">
                    {c.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Tags */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("tags")}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-white shadow-sm border border-gray-200 hover:border-primary/40 transition"
            >
              <span className="text-gray-800 font-medium truncate">
                {selectedTags.length > 0 ? `${selectedTags.length} Selected` : "All Tags"}
              </span>
              <ChevronDown className={`w-5 h-5 text-primary transition ${openDropdown === "tags" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "tags" && (
              <div className="absolute mt-2 w-full bg-white shadow-2xl border border-primary/20 rounded-lg max-h-72 overflow-auto z-[999] p-2">
                {tags.map((tag) => (
                  <label key={tag.id} className="flex items-center gap-3 px-4 py-2 hover:bg-primary/5 cursor-pointer truncate">
                    <input type="checkbox" checked={selectedTags.includes(tag.id)} onChange={() => handleTagToggle(tag.id)} className="h-4 w-4 text-primary border-gray-300 rounded" />
                    <span className="text-gray-900 truncate">{tag.name}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("sort")}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-white shadow-sm border border-gray-200 hover:border-primary/40 transition"
            >
              <span className="text-gray-800 font-medium truncate">
                {[
                  { value: BlogSortOptions.NEWEST, label: "Newest First" },
                  { value: BlogSortOptions.OLDEST, label: "Oldest" },
                  { value: BlogSortOptions.POPULAR, label: "Popular" },
                  { value: BlogSortOptions.TRENDING, label: "Trending" },
                ].find((opt) => opt.value === sortBy)?.label || "Newest"}
              </span>
              <ChevronDown className={`w-5 h-5 text-primary transition ${openDropdown === "sort" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "sort" && (
              <div className="absolute mt-2 w-full text-black bg-white shadow-xl border border-primary/20 rounded-xl z-[200]">
                {[
                  { value: BlogSortOptions.NEWEST, label: "Newest" },
                  { value: BlogSortOptions.OLDEST, label: "Oldest" },
                  { value: BlogSortOptions.POPULAR, label: "Popular" },
                  { value: BlogSortOptions.TRENDING, label: "Trending" },
                ].map((opt) => (
                  <button key={opt.value} onClick={() => handleSortChange(opt.value)} className="w-full text-left px-4 py-3 hover:bg-primary/10 transition truncate">
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
          <div className="flex gap-2 flex-wrap">
            {selectedCategory && (
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full flex items-center gap-2">
                {categories.find((c) => c.id == selectedCategory)?.name}
                <X className="w-4 h-4 cursor-pointer" onClick={() => handleCategoryChange("")} />
              </span>
            )}
            {selectedTags.map((t) => {
              const tag = tags.find((x) => x.id === t);
              return (
                <span key={t} className="px-3 py-1 bg-primary/10 text-primary rounded-full flex items-center gap-2">
                  #{tag?.name}
                  <X className="w-4 h-4 cursor-pointer" onClick={() => handleTagToggle(t)} />
                </span>
              );
            })}
          </div>
          <button onClick={clearAllFilters} className="px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90">
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
