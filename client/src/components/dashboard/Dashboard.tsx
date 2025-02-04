import CreateHeros from '../heros/createHeros/CreateHeros'
import styles from './Dashboard.module.scss'
export const Dashboard = () => {
  return (
    <div>
        <h1 className={styles.title}>Dashboard</h1>
        <CreateHeros></CreateHeros>
    </div>
  )
}
