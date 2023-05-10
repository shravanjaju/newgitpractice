import { Fragment } from 'react'
import styles from './Scrollbar.module.css'

export default function ScrollBar(){

    return(
<fragment>
        
        <div className={styles.wrapper}>
        <h3>Know Your Mentors</h3>
        <p>Work with a mentor (senior data scientists from top companies) </p>
        <div className={styles.scroller}> 
           
        {
            Array.from(Array(10)).map(ele => (
                <div className={styles.card}></div>
            ))
        }
    </div>
    </div>
    </fragment>

        // <div className={styles.heading}>
        //     <h3>Know Your Mentors</h3>
        //     <p>Work with a mentor (senior data scientists from top companies)</p>
        //     <div>
        //         <div className={styles.scroll}>
        //             <div className={styles.allmentors}>
        //                 <div className='mentor1'>
        //                     <div className={styles.image1}></div>
        //                     <p>Pritesh Kumar</p>
        //                     <p>CTO @ Delloite</p>
        //                     <p>9 Yrs Exp.</p>
        //                 </div>

        //                 <div className='mentor2'>
        //                 <p>Akash Kumar</p>
        //                     <p>CEO @ Delloite</p>
        //                     <p>10 Yrs Exp.</p>
        //                 </div>

        //                 <div className='mentor3'>
        //                 <p>Shivam Sir</p>
        //                     <p>CFO @ Delloite</p>
        //                    <p>8 Yrs Exp.</p>
        //                 </div>

        //                 <div className='mentor4'>
        //                 <p>Pritesh Kumar</p>
        //                     <p>CTO @ Delloite</p>
        //                     <p>9 Yrs Exp.</p>
        //                 </div>
        //                 <div className='mentor5'>
        //                 <p>Pritesh Kumar</p>
        //                     <p>CTO @ Delloite</p>
        //                     <p>9 Yrs Exp.</p>
        //                 </div>
        //                 <div className='mentor6'>
        //                 <p>Pritesh Kumar</p>
        //                     <p>CTO @ Delloite</p>
        //                     <p>9 Yrs Exp.</p>
        //                 </div>
        //                 <div className='mentor7'>
        //                 <p>Pritesh Kumar</p>
        //                     <p>CTO @ Delloite</p>
        //                     <p>9 Yrs Exp.</p>
        //                 </div>
        //                 <div className='mentor8'>
        //                 <p>Pritesh Kumar</p>
        //                     <p>CTO @ Delloite</p>
        //                     <p>9 Yrs Exp.</p>
        //                 </div>
        //                 <div className='mentor9'>
        //                     <p>Pritesh Kumar</p>
        //                     <p>CTO @ Delloite</p>
        //                     <p>9 Yrs Exp.</p>
        //                 </div>

        //             </div>

        //         </div>
        //     </div>


        // </div>
    )



}