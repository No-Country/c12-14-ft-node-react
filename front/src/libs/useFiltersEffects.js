import { useEffect } from 'react'
import { uvaApi } from '@/api'

export const useFiltersEffects = (
  filters,
  setCategories,
  currentPage,
  setCurrentPage,
  setProjects
) => {
  useEffect(() => {
    uvaApi.get('/categories').then(({ data }) => setCategories(data))
  }, [setCategories])

  useEffect(() => {
    uvaApi
      .post(
        `/projects/filter/categories-stacks?limit=3&page=${currentPage}&getPages=1`,
        {
          categories: filters.categories,
          technologies: filters.technologies.map((tech) =>
            tech.stackName.toLowerCase()
          ),
        }
      )
      .then(({ data }) => setProjects(data))
      .catch((err) => console.log(err))
      .finally(() => setCurrentPage(1))
  }, [currentPage, filters, setCurrentPage, setProjects])
}
