"use client"

import { Pagination } from "@/components/ui/pagination"
import { redirect } from "next/navigation"

type BlogPaginationProps = {
  currentPage: number
  totalPages: number
  language: "fr" | "en"
}

export function BlogPagination({ currentPage, totalPages, language }: BlogPaginationProps) {

  // Handler for page change (server component: use URL navigation)
  function handlePageChange(page: number) {
    // Use search params to update the page
    const url = `/${language}/blog?page=${page}`;
    redirect(url);
  }

  return (
    <Pagination
      page={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  )
}