import styles from './index.css'
import Link from 'umi/link'
import router from 'umi/router'

export default function() {
  const users = [
    {
      id: 1,
      name: 'Tom'
    },
    {
      id: 2,
      name: 'Jerry'
    }
  ]
  return (
    <div className={styles.normal}>
      <h1>Users index</h1>
      {users.map(u => (
        <li key={u.id} onClick={() => router.push(`users/${u.id}`)}>
          {u.name}
        </li>
      ))}
    </div>
  )
}
