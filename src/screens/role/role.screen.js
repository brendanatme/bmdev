/**
 * role.screen
 * 
 * 'client' property is passed from /pages/roles/[id].js
 * 
 * data is contained in /src/data/clients.data.js
 */
import Screen from '@/src/base/screen'
import Carousel from '@/src/components/carousel'
import ContentFrame from '@/src/components/content-frame'
// import { roles } from '@/src/data'

const RoleScreen = ({ client }) => {
  // const router = useRouter()
  // console.log('router', router)
  // const client = clients.find((client) => client.id === router.query.id)
  // console.log('client', client)

  return (
    <Screen title={`${client.name} | Clients & Employers`}>
      <Carousel>
        {client.frames.map((frame, i) => (
          <ContentFrame {...frame} key={`frame${i}`} />
        ))}
      </Carousel>
    </Screen>
  )
}

export default RoleScreen
