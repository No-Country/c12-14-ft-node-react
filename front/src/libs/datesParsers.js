const months = [
  'ENE',
  'FEB',
  'MAR',
  'ABR',
  'MAY',
  'JUN',
  'JUL',
  'AGO',
  'SEP',
  'OCT',
  'NOV',
  'DIC',
]

export const iso8601ToDate = (isoString) => {
  const date = new Date(isoString)
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  const formattedDate = `${day}-${month}-${year}`

  return formattedDate
}

export const timestampToDate = (timestamp) => {
  const date = new Date(timestamp * 1000)
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  const formattedDate = `${day}-${month}-${year}`

  return formattedDate
}

export const convertMillisToReadable = (ms) => {
  const seconds = Math.floor(ms / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)

  if (weeks >= 4) {
    const months = Math.floor(weeks / 4)
    return `${months} Mes(es)`
  } else if (days >= 7) {
    return `${weeks} Semana(s)`
  } else if (hours >= 24) {
    return `${days} Día(s)`
  } else if (minutes >= 60) {
    return `${hours} Hora(s)`
  } else if (seconds >= 60) {
    return `${minutes} Minuto(s)`
  } else {
    return `${seconds} Segundo(s)`
  }
}
