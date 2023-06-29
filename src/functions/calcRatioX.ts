export const calcRatioX = (e: MouseEvent, windowWidth: number) => {
  return (e.clientX / windowWidth) * 100
}
