import { useRouter } from "next/dist/client/router"
import styles from './user.module.scss';
import data from '../../data/user';
import Image from 'next/image';

export default function User() {
  const { query } = useRouter();
  
  return (
    <div className={styles.user}>
      <h1>The User with id: {query.id} </h1>
      {data.map(link =>
        <Image src={link} width={500} height={300} layout="intrinsic" />
      )}
    </div>

  )
}