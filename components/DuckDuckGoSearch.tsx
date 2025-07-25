"use client";

import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function DuckDuckGoSearch() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const response = await fetch(`https://duckduckgo.com/ac/?q=${encodeURIComponent(query)}&type=json`);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setSuggestions(data.map((item: { phrase: string }) => item.phrase));
      } catch (error) {
        console.error("Failed to fetch suggestions:", error);
        setSuggestions([]);
      }
    };

    const handler = setTimeout(() => {
      fetchSuggestions();
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    // The main container is now relative for positioning the absolute dropdown
    <div className="relative w-full max-w-xl mx-auto mb-8" ref={containerRef}>
      <label htmlFor="duckduckgo-search" className="font-mono text-lg text-tech-red mb-2 block">
        $ search_the_web
      </label>

      <form
        action="https://duckduckgo.com/"
        method="get"
        target="_blank"
        rel="noopener noreferrer"
        className="relative"
      >
        {/*
          FIX 1: EXPANSION EFFECT
          The 'w-full' and 'md:w-2/3' classes toggle based on focus state.
          'transition-all' and 'duration-300' make the width change smooth.
        */}
        <div
          className={`flex items-center gap-2 p-2 rounded-lg border bg-black/50 mx-auto transition-all duration-300 ease-in-out
            ${isFocused ? "w-full border-tech-red ring-2 ring-tech-red/50" : "w-full md:w-2/3 border-white/20"}`}
        >
          <Search className="h-5 w-5 text-white/50 ml-2 flex-shrink-0" />
          <input
            id="duckduckgo-search"
            type="text"
            name="q"
            placeholder="Search with DuckDuckGo..."
            className="w-full bg-transparent text-white placeholder:text-white/40 focus:outline-none font-mono"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
          />
          <Button
            type="submit"
            size="sm"
            className="red-gradient hover:bg-tech-red-light text-white font-semibold red-glow font-mono flex-shrink-0"
          >
            Search
          </Button>
        </div>

        {/*
          FIX 2: DROPDOWN VISIBILITY
          'absolute' positioning with a 'z-10' ensures the dropdown appears ON TOP of other content.
        */}
        {isFocused && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#111] border border-tech-red/50 rounded-lg shadow-lg overflow-hidden z-10 animate-fade-in">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li key={index}>
                  <Link
                    href={`https://duckduckgo.com/?q=${encodeURIComponent(suggestion)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 text-white/80 hover:bg-tech-red/20 transition-colors duration-150 w-full text-left font-mono"
                    onClick={() => setIsFocused(false)}
                  >
                    <Search className="h-4 w-4 text-white/50" />
                    <span>{suggestion}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}
