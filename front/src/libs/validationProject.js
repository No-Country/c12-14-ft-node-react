export default function validateProject(form, errors, setErrors) {
  const newErrors = { ...errors }
  if (!form.title) {
    newErrors.title = 'El titulo es requerido'
  } else if (form.title.length < 6) {
    newErrors.title = 'El titulo tiene que tener mas de 6 caracteres'
  } else {
    newErrors.title = ''
  }

  if (!form.category) {
    newErrors.category = 'La categoria es requerida'
  } else {
    newErrors.category = ''
  }

  if (!form.description) {
    newErrors.description = 'La descripcion es requerida'
  } else if (form.description.length < 10) {
    newErrors.description =
      'La descripcion tiene que tener mas de 10 caracteres'
  } else if (form.description.length > 800) {
    newErrors.description =
      'La descripcion tiene que tener menos de 100 caracteres'
  } else {
    newErrors.description = ''
  }

  if (form.technologies.length <= 0) {
    newErrors.technologies = 'Las tecnologias son requeridas'
  } else {
    newErrors.technologies = ''
  }

  if (form.rols.length <= 0) {
    newErrors.rols = 'Los roles son requeridas'
  } else {
    newErrors.rols = ''
  }

  if (form.links.length <= 0) {
    newErrors.links = 'Los roles son requeridas'
  } else {
    newErrors.links = ''
  }

  setErrors(newErrors)
}
