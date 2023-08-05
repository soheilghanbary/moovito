export const getClock = (minutes: any) => {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  return { hours, minutes: remainingMinutes }
}
