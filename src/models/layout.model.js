import { ReduxModel } from '@brendanatme/redux-model'

const layoutModel = new ReduxModel('layout', {
  initialItem: {
    navIsOpen: false,
    pageTransitionIsOpen: true,
  },
  reducers: {
    CLOSE_NAV: (state) => ({ ...state, item: { ...state.item, navIsOpen: false } }),
    OPEN_NAV: (state) => ({ ...state, item: { ...state.item, navIsOpen: true } }),
    TOGGLE_NAV: (state) => ({ ...state, item: { ...state.item, navIsOpen: !state.item.navIsOpen } }),
    START_TRANSITION: (state) => ({ ...state, item: { ...state.item, pageTransitionIsOpen: true } }),
    END_TRANSITION: (state) => ({ ...state, item: { ...state.item, pageTransitionIsOpen: false } }),
  },
})

layoutModel.addAction('CloseNav', () => ({ type: layoutModel.ActionTypes.CLOSE_NAV }))
layoutModel.addAction('OpenNav', () => ({ type: layoutModel.ActionTypes.OPEN_NAV }))
layoutModel.addAction('ToggleNav', () => ({ type: layoutModel.ActionTypes.TOGGLE_NAV }))
layoutModel.addAction('StartPageTransition', () => ({ type: layoutModel.ActionTypes.START_TRANSITION }))
layoutModel.addAction('EndPageTransition', () => ({ type: layoutModel.ActionTypes.END_TRANSITION }))

export default layoutModel
