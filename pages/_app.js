// @todo do we need
import 'core-js/features/function/name'
import 'core-js/features/object/keys'

import MainLayout from '@/src/layouts/main.layout'
import IconSvg from '@/src/svgs/icons.svg'
import '@/src/styles/all.css'

function CustomApp({ Component, pageProps }) {
  return <MainLayout><IconSvg /><Component {...pageProps} /></MainLayout>
}

export default CustomApp
