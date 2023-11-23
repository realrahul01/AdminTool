import styles from './Test.module.css'
import {useState} from 'react'


// eslint-disable-next-line react/prop-types
const Test=({title,time,start,end,Invite,Attempts,Passed,handleClickOpen})=>{
const [isClick,setIsClick] = useState(false)

const clickHandler=()=>{
  console.log('click')
  setIsClick((previous )=>{
   return !previous
  })
}
 

    return(
        
            <div className={styles.card}>
              <div className={styles.cardItems}>
                <div className={styles.nav}>
                  <div className={styles.leftNav}>
                    <img src="../../images/clarity_clock-solid.svg" alt="error" />
                    <span> {time} </span>
                  </div>
                  <div className={styles.rightNav} onClick={clickHandler}>
                    <div className={styles.dot1}></div>
                    <div className={styles.dot2}></div>
                    <div className={styles.dot3}>
                      {isClick &&(
                        <div className={styles.ImgOpt}>
                          <div className={styles.cardOpt}>
                            <div>
                                <img src="../../images/tabler_edit.svg" alt="error" />
                                <label>Edit</label>
                            </div>
                            <div>
                                <img src="../../images/ic_outline-delete.svg" alt="error" />
                                <label>Delete</label>
                            </div>
                            <div>
                                <img src="../../images/file-icons_microsoft-excel.svg" alt="error" />
                                <label>Download</label>
                            </div>
                            <div>
                                <img src="../../images/system-uicons_duplicate.svg" alt="error" />
                                <label>Duplicate</label>
                            </div>
                            <div>
                                <img src="../../images/carbon_information.svg" alt="error" />
                                <label>Details</label>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                    
                </div>
              <p>{title}</p>
              <div className={styles.midCard}>
                <span>Valid</span>
                <label>{start}-{end}</label>
                <button onClick={handleClickOpen}>Invite</button>
              </div>
                           
              <div className={styles.parent}>
                <div>
                   <div>Invites</div> 
                   <div className={styles.dynamicData}>{Invite}</div> 
                </div>
                <div className={styles.Attempt}>
                   <div>Attempts</div> 
                   <div className={styles.dynamicData}>{Attempts}</div> 
                </div>
                <div className={styles.Passed}>
                   <div>Passed</div> 
                   <div className={styles.dynamicData}>{Passed}</div> 
                </div>

              </div>

              </div>
          </div>
      
    )
}
export default Test;