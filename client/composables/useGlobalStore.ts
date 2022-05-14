const ageInMilliseconds = +new Date() - +new Date('2004-06-01')

const date = new Date()
const month = date.getMonth() + 1
const now = Math.ceil(month / 3)
const next = now + 1 >= 4 ? 1 : now + 1

export default function () {
  return useState('global', () => ({
    years: Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365), // convert to years
    yearQuarter: { now, next }
  }))
}
