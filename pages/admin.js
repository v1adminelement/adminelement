import Head from 'next/head'
import styles from '../styles/Admin.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Admin() {
    return (
      <div className={styles.bodyAdmin}>           
            <Image             
                src="https://images.unsplash.com/photo-1506784693919-ef06d93c28d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"               
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt="logo"                   
                priority={true}             
            />  
        <Head>
          <title>Admin</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <section className={styles.listWrapper}>      
          <h1 className={styles.listTitle}>Admin Services</h1> 

          <ol className={styles.list}> 
            <li className={styles.listItem}>
              <Link href="/" className={styles.listLink}>
                <a>
                <h2 className={styles.listLink__header}>
                  <span>Data Entry</span>
                </h2>
                <p className={styles.listLink__description}>
                   Info and documents - invoices, credit notes etc 
                   entered into a record keeping system, offline and online.
                </p>
                </a>
              </Link>             
            </li>

            <li className={styles.listItem}>
              <Link href="/" className={styles.listLink}>
              <a>
                <h2 className={styles.listLink__header}>
                  <span>Proofreading</span>
                </h2>
                <p className={styles.listLink__description}>
                  Reformatting, correcting or editing of documents such as 
                  letters, presentations etc.    
                </p>
              </a>
              </Link>             
            </li>

            <li className={styles.listItem}>
              <Link href="/" className={styles.listLink}>
              <a>
                <h2 className={styles.listLink__header}>
                  <span>Audio Typing / Dictation</span>
                </h2>
                <p className={styles.listLink__description}>
                 Transcribing audio - speeches, dictations, interviews etc
                 into text.

                </p>
              </a>
              </Link>             
            </li>

            <li className={styles.listItem}>
              <Link href="/" className={styles.listLink}>
              <a>
                <h2 className={styles.listLink__header}>
                  <span>Document Development</span>
                </h2>
                <p className={styles.listLink__description}>
                   Templates - spreadsheet creation :- starter forms, 
                   stock take, application forms etc. Letter templates.  
                </p>
              </a>
              </Link>             
            </li>
            
            <li className={styles.listItem}>
              <Link href="/" className={styles.listLink}>
              <a>
                <h2 className={styles.listLink__header}>
                  <span>Starter Form/ Form Creation</span>
                </h2>
                <p className={styles.listLink__description}>
                   Updating ...     
                </p>
              </a>
              </Link>             
            </li>

            <li className={styles.listItem}>
              <Link href="/" className={styles.listLink}>
              <a>
                <h2 className={styles.listLink__header}>
                  <span>Business Start Up Tasks</span>
                </h2>
                <p className={styles.listLink__description}>
                   Updating ...     
                </p>
              </a>
              </Link>             
            </li>

            <li className={styles.listItem}>
              <Link href="/" className={styles.listLink}>
              <a>
                <h2 className={styles.listLink__header}>
                  <span>Office Set Up</span>
                </h2>
                <p className={styles.listLink__description}>
                   Updating ...     
                </p>
              </a>
              </Link>             
            </li>

            <li className={styles.listItem}>
              <Link href="/" className={styles.listLink}>
              <a>
                <h2 className={styles.listLink__header}>
                  <span>Research</span>
                </h2>
                <p className={styles.listLink__description}>
                   Updating ...     
                </p>
              </a>
              </Link>             
            </li>
          </ol>
        </section>          
      </div>
    )
  }