import { createWrapper } from 'next-redux-wrapper'
import { configureStore } from '@brendanatme/redux-model'
import layoutModel from '@/src/models/layout.model'

const initStore = configureStore({
  [layoutModel.key]: layoutModel.reducer,
})

const wrapper = createWrapper(initStore, {
  debug: process.env.NEXT_PUBLIC_APP_ENV !== 'production',
})

export default wrapper
