export const closeSummary = (event: MouseEvent) => {
  const mySelf = document.getElementById('cart-summary')!
  mySelf.classList.toggle('hidden')

  if (event) {
    event.stopPropagation()
  }
}