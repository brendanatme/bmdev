/**
 * layout.model
 * 
 * provide access to redux-like global data store (using pullstate)
 * expose two properties:
 * 
 * - trigger
 * - select
 * 
 * usage:
 * 
 * import * as layoutModel from '...'
 * 
 * // ... in component ...
 * 
 * const navIsOpen = layoutModel.select.navIsOpen()
 * 
 * <button onClick={() => layoutModel.trigger.closeNav()}>
 *  Close Nav
 * </button>
 */
import { Store } from 'pullstate'

const store = new Store({
  navIsOpen: false,
  pageTransitionIsOpen: true,
})

export const trigger = {
  openNav: () => store.update((s) => { s.navIsOpen = true }),
  closeNav: () => store.update((s) => { s.navIsOpen = false }),
  toggleNav: () => store.update((s) => { s.navIsOpen = !s.navIsOpen }),
  startPageTransition: () => store.update((s) => { s.pageTransitionIsOpen = true }),
  endPageTransition: () => store.update((s) => { s.pageTransitionIsOpen = false }),
}

export const select = {
  navIsOpen: () => store.useState((s) => s.navIsOpen),
  pageTransitionIsOpen: () => store.useState((s) => s.pageTransitionIsOpen),
}
