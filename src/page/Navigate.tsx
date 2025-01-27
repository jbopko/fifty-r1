import {MouseEvent} from 'react';

export const Navigate = (route: string = '', event: MouseEvent<HTMLElement, Event>) => {
  const target: HTMLElement = event.target as HTMLElement
  const activeRoute = document.querySelector("#active-route")!

  let targetText = target.textContent;
  let breadcrumb = ''
  let separator = ''

  if (targetText && targetText.length > 1) {
    if (route && route.length > 1) {
      separator = ': '
    } else {
      route = ''
    }
  } else {
    targetText = ''
    if (!route) {
      route = ''
    }
  }
  breadcrumb = route + separator + targetText
  activeRoute.textContent = breadcrumb
}