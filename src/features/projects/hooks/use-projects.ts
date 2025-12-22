"use client"

import { useEffect, useState } from "react";
import { Project } from "../../../../payload-types";
import { getProjects } from "../queries/get-projects";
import { PaginatedDocs } from "payload";

export function useGetProjects(language: "fr" | "en", limit = 100, offset = 0) {
  const [paginatedProjects, setPaginatedProjects] = useState<PaginatedDocs<Project>>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProjects() {
      try {
        setError(null)
        setLoading(false)
        const fectchedPagination = await getProjects(language, limit, offset)
        setPaginatedProjects(fectchedPagination)
        setLoading(true)
      } catch (err) {
        setError((err as Error).message)
      }
    }

    fetchProjects()
  }, [language, limit, offset])

  return { paginatedProjects, loading, error } 
}