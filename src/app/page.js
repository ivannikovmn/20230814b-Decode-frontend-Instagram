// import styles from './page.module.css'
import Test from '../components/test'
import UserLogin from '../components/auth/user'

export default function Home() {
  return (
    <main>
      <UserLogin/>
      <Test />
    </main>
  )
}
