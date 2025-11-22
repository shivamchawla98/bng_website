"use client";

import React, { useState, useEffect } from "react";
import { Search, X, Filter, ChevronDown } from "lucide-react";
import { BlogSortOptions } from "@/lib/types/blog";
import { debounce } from "@/lib/utils/blogUtils";

/**
 * FilterBar Component - Search, filter, and sort for blog listing
 */
const FilterBar = ({
  categories = [],
  tags = [],
  onFilterChange,
  onSearch,
  initialFilters = {},
}) => {
  const [searchTerm, setSearchTerm] = useState(initialFilters.search || "");
  const [selectedCategory, setSelectedCategory] = useState(initialFilters.categoryId || "");
  const [selectedTags, setSelectedTags] = useState(initialFilters.tagIds || []);
  const [sortBy, setSortBy] = useState(initialFilters.sortBy || BlogSortOptions.NEWEST);
  const [showTagDropdown, setShowTagDropdown] = useState(false);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Debounced search handler
  const debouncedSearch = debounce((value) => {
    if (onSearch) {
      onSearch(value);
    }
  }, 500);

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (onFilterChange) {
      onFilterChange({
        categoryId: categoryId || undefined,
        tagIds: selectedTags,
        sortBy,
      });
    }
  };

  const handleTagToggle = (tagId) => {
    const newTags = selectedTags.includes(tagId)
      ? selectedTags.filter((id) => id !== tagId)
      : [...selectedTags, tagId];
    
    setSelectedTags(newTags);
    if (onFilterChange) {
      onFilterChange({
        categoryId: selectedCategory || undefined,
        tagIds: newTags,
        sortBy,
      });
    }
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
    if (onFilterChange) {
      onFilterChange({
        categoryId: selectedCategory || undefined,
        tagIds: selectedTags,
        sortBy: newSortBy,
      });
    }
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedTags([]);
    setSortBy(BlogSortOptions.NEWEST);
    if (onSearch) onSearch("");
    if (onFilterChange) {
      onFilterChange({
        sortBy: BlogSortOptions.NEWEST,
      });
    }
  };

  const hasActiveFilters = selectedCategory || selectedTags.length > 0 || searchTerm;

  return (
    <div className="bg-gradient-to-br from-white via-white to-primary/5 rounded-2xl shadow-xl border border-primary/20 p-6 md:p-8 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary/60 w-5 h-5" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search blog posts..."
          className="w-full pl-12 pr-12 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-gray-900 placeholder-gray-400 shadow-sm hover:border-primary/30"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Mobile Filter Toggle */}
      <button
        onClick={() => setShowFiltersMobile(!showFiltersMobile)}
        className="md:hidden w-full flex items-center justify-between px-5 py-3 bg-primary/10 hover:bg-primary/20 rounded-xl mb-6 transition-colors border border-primary/20"
      >
        <span className="flex items-center gap-2 text-primary font-semibold">
          <Filter className="w-5 h-5" />
          Filters {hasActiveFilters && `(${selectedTags.length + (selectedCategory ? 1 : 0)})`}
        </span>
        <ChevronDown className={`w-5 h-5 text-primary transition-transform ${showFiltersMobile ? 'rotate-180' : ''}`} />
      </button>

      {/* Filters Container */}
      <div className={`${showFiltersMobile ? 'block' : 'hidden'} md:block`}>
        <div className="flex flex-col md:flex-row gap-5">
          {/* Category Filter */}
          <div className="flex-1">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-gray-900 shadow-sm hover:border-primary/30 cursor-pointer"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Tag Filter */}
          <div className="flex-1 relative">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              Tags {selectedTags.length > 0 && <span className="text-primary">({selectedTags.length})</span>}
            </label>
            <button
              onClick={() => setShowTagDropdown(!showTagDropdown)}
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary text-left flex items-center justify-between transition-all shadow-sm hover:border-primary/30"
            >
              <span className="text-gray-900 font-medium">
                {selectedTags.length === 0 ? 'Select tags...' : `${selectedTags.length} selected`}
              </span>
              <ChevronDown className={`w-5 h-5 text-primary transition-transform ${showTagDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showTagDropdown && (
              <div className="absolute z-20 w-full mt-2 bg-white border-2 border-primary/20 rounded-xl shadow-2xl max-h-64 overflow-y-auto">
                {tags.map((tag) => (
                  <label
                    key={tag.id}
                    className="flex items-center px-4 py-3 hover:bg-primary/5 cursor-pointer transition-colors border-b border-gray-100 last:border-0"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTags.includes(tag.id)}
                      onChange={() => handleTagToggle(tag.id)}
                      className="mr-3 h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <span className="text-gray-900 font-medium">{tag.name}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Sort By */}
          <div className="flex-1">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-gray-900 shadow-sm hover:border-primary/30 cursor-pointer"
            >
              <option value={BlogSortOptions.NEWEST}>Newest First</option>
              <option value={BlogSortOptions.OLDEST}>Oldest First</option>
              <option value={BlogSortOptions.POPULAR}>Most Popular</option>
              <option value={BlogSortOptions.TRENDING}>Trending</option>
            </select>
          </div>
        </div>

        {/* Active Filters & Clear Button */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-primary/10">
            <div className="flex flex-wrap gap-2">
              {selectedCategory && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {categories.find(c => c.id === parseInt(selectedCategory))?.name}
                  <button
                    onClick={() => handleCategoryChange("")}
                    className="hover:text-primary/70"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedTags.map((tagId) => {
                const tag = tags.find(t => t.id === tagId);
                return tag ? (
                  <span key={tagId} className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    #{tag.name}
                    <button
                      onClick={() => handleTagToggle(tagId)}
                      className="hover:text-primary/70"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ) : null;
              })}
            </div>
            <button
              onClick={clearAllFilters}
              className="px-4 py-2 text-sm text-primary hover:text-white font-semibold bg-primary/10 hover:bg-primary rounded-lg transition-all"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
