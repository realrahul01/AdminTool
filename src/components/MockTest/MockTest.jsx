/* eslint-disable no-unused-vars */
import Test from '../Test/Test';
import styles from './Mocktest.module.css'
import { useState } from "react";

const MockTest=()=>{
    const [list,setList] = useState(['rahul1','rahul2','rahul3','rahul4','rahul5','rahul6','rahul7',1,2,3,4])
    const item = list.map((x,index)=>{
        return(
            <div key={index}>
                <Test x={x}/>
            </div>
        )
    })


    return(
        <div className={styles.adminMock}>
            <div className={styles.leftMockTest}>
                    <h5>Dashboad</h5>
                <div className={styles.leftBar}>
                    <input type="text" placeholder='All'/>
                    <p>Javascript</p>
                    <p>Communicaton</p>
                    <p>Full Stack</p>
                    <p>Full Stack</p>
                    <p>Full Stack</p>
                    <p>Full Stack</p>
                    <p>Full Stack</p>
                </div>
                <a href="#">+Segment</a>
            </div>
            <div className={styles.rightMockTest}>
                <div className={styles.navbar}>
                    <div className={styles.leftNavbar}>
                        Filter By :-
                        <div className={styles.nav}>
                            Date
                            <img src="../.././images/icon-park_down.svg" alt="error" />
                        </div>
                        <div className={styles.nav}>
                            Segment
                            <img src="../.././images/icon-park_down.svg" alt="error" />
                        </div>
                        <div className={styles.nav}>
                            A-z sort
                            <img src="../.././images/icon-park_down.svg" alt="error" />    
                        </div>
                    </div>
                    <div className={styles.rightNavbar}>
                        <input type='text' placeholder='Search'/>
                        <button><img src="../../images/octicon_search-16.svg" alt="error" /></button>
                    </div>
                </div>
                <div className={styles.create}>
                    <h5>Created</h5>
                    <hr />
                </div>
                <div className={styles.mockItem}>
                    {item}
                </div>
            </div>
        </div>
    )
}
export default MockTest;