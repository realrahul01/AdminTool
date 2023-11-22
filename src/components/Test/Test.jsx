import styles from './Test.module.css'


const Test=({x})=>{
    return(
        
            <div className={styles.card}>
              <div className={styles.cardItems}>
                <div className={styles.nav}>
                  <div className={styles.leftNav}>
                    <img src="../../images/clarity_clock-solid.svg" alt="error" />
                    <span>47 Minutes</span>
                  </div>
                  <div className={styles.rightNav}>
                    <div className={styles.dot1}></div>
                    <div className={styles.dot2}></div>
                    <div className={styles.dot3}></div>
                  </div>
                </div>
              <p>Java Script Test</p>
              <div className={styles.midCard}>
                <span>Valid</span>
                <label>6 Nav - 6 Nav 2023</label>
                <button>Invite</button>
              </div>
              </div>
                           
              <div className={styles.table1}>
                <table>
                  <tr>
                    <td>Invites</td>
                    <td>Attempts</td>
                    <td>Passed</td>
                  </tr>
                  <tr className={styles.tabletr}>
                    <td>20</td>
                    <td>20</td>
                    <td>10</td>
                  </tr>
                </table>
                {/* <p>hello world</p> */}
            </div>
          </div>
      
    )
}
export default Test;