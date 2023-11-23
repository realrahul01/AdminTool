import styles from './Test.module.css'



// eslint-disable-next-line react/prop-types
const Test=({title,time,start,end,Invite,Attempts,Passed})=>{
    return(
        
            <div className={styles.card}>
              <div className={styles.cardItems}>
                <div className={styles.nav}>
                  <div className={styles.leftNav}>
                    <img src="../../images/clarity_clock-solid.svg" alt="error" />
                    <span> {time}</span>
                  </div>
                  <div className={styles.rightNav}>
                    <div className={styles.dot1}></div>
                    <div className={styles.dot2}></div>
                    <div className={styles.dot3}></div>
                  </div>
                </div>
              <p>{title}</p>
              <div className={styles.midCard}>
                <span>Valid</span>
                <label>{start}-{end}</label>
                <button>Invite</button>
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