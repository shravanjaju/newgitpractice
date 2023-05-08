import styles from './Topbar.module.css'
import {BiMenu} from "react-icons/bi";


export default function TopBar(){
    
  return(
    <topbar className={styles.header}>
      <navOptions className={styles.navoptions}>
        <div className={styles.tagline}>
         <p>
          <img src='https://shorturl.at/AJLZ2' alt='logo' height={60}/></p>
        </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li> Videos</li>
        <li>Contact</li>
        <li> Login</li>
        </ul>
        </navOptions>
        <BiMenu className={styles.menu}
        onClick={()=>alert("Hello")}  
        />
        <div className={styles.pageContent}>
          <div><h1>Artificial Intelligence</h1>
          <p>Emerging technologies are novel technologies whose development or practical applications are still largely unrealized. They include nanotechnology, biotechnology, robotics, 3D printing, blockchains, and artificial intelligence.</p>
          <button className={styles.button1}>See More</button>
          </div>
          <img src='https://rb.gy/zfmyl' alt='techimg'/>
          </div>
        </topbar>

      )
    
    
    
    }