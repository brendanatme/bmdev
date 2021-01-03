import RoleScreen from '@/src/screens/role'
import { clients } from '@/src/data'

export default RoleScreen

export async function getStaticProps(context) {
  return {
    props: {
      client: clients.find(({ id }) => id === context.params.id)
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: clients.map(({ id }) => ({ params: { id } })),
    fallback: false,
  }
}
