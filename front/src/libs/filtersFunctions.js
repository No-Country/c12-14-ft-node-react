export const handleFilters = (e, filters, setFilters) => {
  if (e.target.name === 'categories') {
    if (e.target.checked) {
      setFilters({
        ...filters,
        categories: [...filters.categories, e.target.id],
      })
    } else {
      setFilters({
        ...filters,
        categories: filters.categories.filter(
          (category) => category !== e.target.id
        ),
      })
    }
  }
}
