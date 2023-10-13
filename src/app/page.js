import Token from '@/components/token'
import Header from '../components/header'
import Test from '../components/test'
import Suggestions from '@/components/suggestions'

export default function Home() {
  return (
    <main>
      <Token />
      <Header />
      {/* <Test /> */}
      <Suggestions />
    </main>
  )
}
