export default function () {
  const ageInMilliseconds = +new Date() - +new Date('2004-06-01')
  return useState('global', () => ({
    years: Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365) // convert to years
  }))
}
