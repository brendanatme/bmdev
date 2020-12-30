import dynamic from 'next/dynamic'

const KeyHandler = dynamic(() => import('react-keyboard-event-handler'), {
  ssr: false,
})

export default KeyHandler
