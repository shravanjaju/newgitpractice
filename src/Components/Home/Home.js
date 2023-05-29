import styles from './Home.module.css'

export default function Home(){
    return(
        <div>
    <div className={styles.headingBox}>
        <div className={styles.heading}> 
            <h3>Company Assignment</h3> </div>
    </div>
    <div className={styles.adminPanel}><span>Online Exam</span></div>

    <div className={styles.adminPanel}><img src={pic2} alt='' /><span>Admin Panel</span></div>

    <div className={styles.adminPanel}><span>Student Login</span></div>

    </div>   
)}
