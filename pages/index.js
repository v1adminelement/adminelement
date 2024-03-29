import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Admin Element</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

         <div className={styles.homeContainer}>
         <div className={styles.gradientOverlay}></div>
            <Image
                className={styles.landingImage}           
                src="https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt="logo"   
                priority={true}             
            />  
    
            <h1 className={`${styles['']} ${styles['home__h1']}`}>ADMIN ELEMENT</h1>          
            <h1 className={`${styles['textCenter']} ${styles['home__h1b']}`}>ADMIN & BOOKKEEPING SERVICES FOR BUSINESS & PERSONAL</h1> 
               <p className={`${styles['textCenter']} ${styles['home__p']}`}>
                  LETS GET YOUR ADMIN & BOOKKEEPING IN SHAPE
               </p>           
       </div>   

    <div className={styles.gridContainer}>
    <Link href="/admin">
      <div className={styles.container}>
         <div className={styles.gradientOverlay}></div>
            <Image
                className={styles.landingImage}     
                src="https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlsbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"            
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt="logo"
            />    
            <h1 className={styles.landingText}>ADMIN</h1>            
        </div>
      </Link>
 
      <Link href="/bookkeeping">
      <div className={styles.container}>
        <div className={styles.gradientOverlay}></div>
            <Image
                className={styles.landingImage}
                src="https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FsY3VsYXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"             
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt="logo"
            />    
            <h1 className={styles.landingText}>BOOKKEEPING</h1>    
        </div>  
        </Link>    

        <Link href="/business">
        <div className={styles.container}>
        <div className={styles.gradientOverlay}></div>
            <Image
                className={styles.landingImage}
                src="https://images.unsplash.com/photo-1522968941782-e27ac665baa3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG9mZmljZSUyMHBsYW50c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"              
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt="logo"
            />    
            <h1 className={styles.landingText}>BUSINESS</h1>    
        </div>  
        </Link>

      <Link href="/personal">
      <div className={styles.container}>
         <div className={styles.gradientOverlay}></div>
            <Image
                className={styles.landingImage}   
                src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"     
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt="logo"
            />    
            <h1 className={styles.landingText}>PERSONAL</h1>    
       </div>   
       </Link>
                  
     </div>
  
     <div className={`${styles['homeContainer']} ${styles['mt1']}`}>
         <div className={styles.gradientOverlay}></div>
            <Image
                className={styles.landingImage}     
                src="https://images.unsplash.com/photo-1599689444589-133726281155?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2h5JTIwd2FpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt="logo"                
            />            
            <h1 className={`${styles['textCenter']} ${styles['home__h1']}`}>WHY WAIT ?</h1>          
            <h1 className={`${styles['textCenter']} ${styles['home__h1b']}`}>Sole Trader, Limited, Start Up Etc</h1>           
            <p className={`${styles['textCenter']} ${styles['home__p']}`}>LETS GET STARTED</p>                      
    </div>

    <div className={styles.secTwo}>
       <p>One off, small or large job. Short or
           long term project.<br/>
           Make contact to discuss the
           package that is right for you.<br/>
           Package options below.
        </p>
    </div>

    {/* <div className={styles.secTwo}>
       <p>One off, small or large job. Short or
           long term project.<br/>
           Make contact to discuss the
           package that is right for you.<br/>
           Package options below.
        </p>
    </div> */}

     {/* <div className={styles.secBTwo}>            
       <p className={styles.p}>Welcome to Admin Element<br/>
          <a className={styles.a}>Make contact to discuss the
              package that is right for you.<br/>
          </a>           
       </p>         
    </div>     */}

    <div className={styles.gridContainer}>
        <div className={styles.container}>
         <div className={styles.gradientOverlay}></div>
            <Image
                className={styles.landingImage}               
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwcGxhbnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt="logo"
            />    
            <h3 className={styles.landingText2}>Ad hoc<br/> Project</h3>
            <h3 className={styles.landingText2}>One off job</h3>   
            <h3 className={styles.landingText2}>£40 per hour</h3>     
       </div>

      <div className={styles.container}>
        <div className={styles.gradientOverlay}></div>
            <Image
                className={styles.landingImage}
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG9mZmljZSUyMHBsYW50c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"              
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt="logo"
            />    
            <h3 className={styles.landingText2}>Small<br/>Project</h3>    
            <h3 className={styles.landingText2}>Approx 15 hrs</h3>   
            <h3 className={styles.landingText2}>£40 per hour</h3> 
        </div>      

      <div className={styles.container}>
         <div className={styles.gradientOverlay}></div>
            <Image
                className={styles.landingImage}                
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwcGxhbnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"               
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt="logo"
            />    
            <h3 className={styles.landingText2}>Medium<br/>Project</h3>
            <h3 className={styles.landingText2}>Approx 25 hrs</h3>   
            <h3 className={styles.landingText2}>£40 per hour</h3>     
       </div>      

       <div className={styles.container}>
         <div className={styles.gradientOverlay}></div>
            <Image
                className={styles.landingImage}                
                src="https://images.unsplash.com/photo-1522968941782-e27ac665baa3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG9mZmljZSUyMHBsYW50c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"               
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt="logo"
            />    
            <h3 className={styles.landingText2}>Large<br/> Project</h3> 
            <h3 className={styles.landingText2}>Approx 35 hrs</h3>   
            <h3 className={styles.landingText2}>£40 per hour</h3> 
       </div>          
    </div>      

    <div className={`${styles['homeContainer']} ${styles['mt1']}`}>
         <div className={styles.gradientOverlay}></div>
            <Image
                className={styles.landingImage}          
                src="https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt="logo"                
            /> 
              <h1 className={`${styles['textCenter']} ${styles['home__h1']}`}>ADMIN ELEMENT</h1>                     
              <h1 className={`${styles['textCenter']} ${styles['home__h1b']}`}>GET YOUR ADMIN <br/>&<br/> BOOKEEPING IN SHAPE</h1> 
              <p className={`${styles['textCenter']} ${styles['home__p']}`}>
                LETS GET STARTED
              </p>            
    </div>        

    <footer className={`${styles['footer__container']} ${styles['']}`}>
		
			<div className={styles.footercol}>
				<ul className={styles.footercol__ul__list}>
		  		<li>Admin Element</li>
			  	<li><span className='material-icons'>phone</span> 0203 718 0730</li>
					<li><span className='material-icons'>phone</span> 07930 342 485</li>
        	<li><span className='material-icons'>markunread</span>adminelement@gmail.com</li>
				</ul>
			</div>		
    
		<div className={`${styles['']} ${styles['textCenter']} ${styles['footer__copyright']}`}>
			<p>&copy; 2022 Admin Element</p>
		</div>

	</footer>

</div>
  )
}
