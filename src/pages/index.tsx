import type { NextPage } from 'next'
import { useDevices } from '../common/queries/useDevices'

const Home: NextPage = () => {
  const { data, isLoading, isError } = useDevices()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error encountered. Please try again.</div>
  }

  return <div>{JSON.stringify(data)}</div>
}

export default Home
