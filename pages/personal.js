import Head from 'next/head'
import styles from '../styles/Personal.module.css'

export default function Personal() {
 
  return (
    <div className={styles.bodyPersonal}>
      <Head>
        <title>Personal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport"  content="width=device-width, initial-scale=1.0" />       
      </Head>  
   
         <ul className={styles.ulListContainer}>   
           <li>Personal Services</li>   
            <li>Budgeting</li>
            <li>Debt Collectors</li>
            <li>Filing</li>
            <li>Letter writing</li>
            <li>Organisation</li>
            <li>Hard copy and electronic</li>
            <li>Household</li>
            <li>Paperwork Mangement</li>              
         </ul>         
</div>
  )
}