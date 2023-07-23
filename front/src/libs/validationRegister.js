export const validateRegister = (form, errors, setErrors) => {
  const newErrors = { ...errors }

  if (!form.mail) {
    newErrors.mail = 'El mail es requerido'
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i.test(
      form.mail
    )
  ) {
    newErrors.mail = 'El mail es invalido'
  } else {
    newErrors.mail = ''
  }

  if (!form.userName) {
    newErrors.userName = 'El nombre de usuario es requerido'
  } else {
    newErrors.userName = ''
  }

  if (!form.phone) {
    newErrors.phone = 'El telefono es requerido'
  } else if (form.phone.length < 10) {
    newErrors.phone = 'El telefono tiene que tener mas de 9 caracteres'
  } else {
    newErrors.phone = ''
  }

  if (!form.password) {
    newErrors.password = 'La contraseña es requerida'
  } else if (form.password.length < 6) {
    newErrors.password = 'La contraseña tiene que tener mas de 6 caracteres'
  } else {
    newErrors.password = ''
  }

  if (!form.confirmPassword) {
    newErrors.confirmPassword = 'La confirmacion de contraseña es requerida'
  } else if (form.password !== form.confirmPassword) {
    newErrors.confirmPassword = 'Las contraseñas no coinciden'
  } else {
    newErrors.confirmPassword = ''
  }

  setErrors(newErrors)
}
