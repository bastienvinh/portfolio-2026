"use client"

import { cn } from "@/lib/utils";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({ page, totalPages, onPageChange, className }: PaginationProps) {
  if (totalPages <= 1) return null

  const handlePrev = () => {
    if (page > 1) onPageChange(page - 1)
  }
  const handleNext = () => {
    if (page < totalPages) onPageChange(page + 1)
  }

  console.log(page)
  return (
    <nav className={cn("flex items-center justify-center gap-2 mt-8", className)} aria-label="Pagination">
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className="px-3 py-1 rounded border disabled:opacity-50"
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          className={cn(
            "px-3 py-1 rounded border cursor-pointer",
            {
              "bg-primary text-white": page === i + 1,
              "bg-secondary": page !== i + 1,
            }
          )}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className="px-3 py-1 rounded border disabled:opacity-50"
      >
        Next
      </button>
    </nav>
  );
}
