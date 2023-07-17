export const validateLogin = (form, errors, setErrors, mode) => {
  const newErrors = { ...errors }

  if (!form.mailOrUserName && mode !== 'password') {
    newErrors.mailOrUserName = 'El mail o nombre de usuario es requerido'
  } else if (form.mailOrUserName.includes('@')) {
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i.test(
        form.mailOrUserName
      )
    ) {
      newErrors.mailOrUserName = 'El mail es invalido'
    } else {
      newErrors.mailOrUserName = ''
    }
  } else {
    newErrors.mailOrUserName = ''
  }

  if (!form.password && mode !== 'mailOrUserName') {
    newErrors.password = 'La contraseña es requerida'
  } else if (form.password.length < 6 && mode !== 'mailOrUserName') {
    newErrors.password = 'La contraseña tiene que tener mas de 6 caracteres'
  } else {
    newErrors.password = ''
  }

  setErrors(newErrors)
}
