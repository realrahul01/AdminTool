/* eslint-disable no-unused-vars */
// import Modals from "../Modals/Modals";
import Modals from "../Modals/Modals";
import Test from "../Test/Test";
import styles from "./Mocktest.module.css";
import { useState } from "react";

const MockTest = () => {

  const[close,setClose] = useState(false)


  const handleClickClose = ()=> {
    console.log(close)
    setClose(false)
  }
  const handleClickOpen = ()=> {
    console.log(close)
    setClose(true)
  }


    const data = [
        {
          id: 1,
          time: "25 minutes",
          title: "Javascript",
          start: "6 Nov",
          end: "6 Nov 2023",
          Invite: "12",
          Attempts: "15",
          Passed: "5",
        },
        {
          id: 2,
          time: "25 minutes",
          title: "FullStack",
          start: "6 Nov",
          end: "6 Nov 2023",
          Invite: "12",
          Attempts: "15",
          Passed: "6",
        },
        {
          id: 3,
          time: "25 minutes",
          title: "Javascript",
          start: "6 Nov",
          end: "6 Nov 2023",
          Invite: "12",
          Attempts: "15",
          Passed: "7",
        },
      ];

const [isActive, setIsActive] = useState(null);
const [list, setList] = useState(data);
const [btn,setBtn] = useState(['btn1','btn2','btn3','btn4','btn4','btn5'])


  const item = list.map((x, index) => {
    return (
      <div key={index}>
        <Test
          time={x.time}
          title={x.title}
          start={x.start}
          end={x.end}
          Invite={x.Invite}
          Attempts={x.Attempts}
          Passed={x.Passed}
          handleClickOpen={handleClickOpen}
        />
      </div>
    );
  });


//   button array
  const clickHandler = (index) => {
    setIsActive(index)
  };

  return (
    <div className={styles.adminMock}>
      {close && <Modals handleClickClose={handleClickClose}/>}  
      <div className={styles.leftMockTest}>
        <h5>Dashboad</h5>
        <div className={styles.leftBar}>
          {btn.map((button,index)=>{
            return(
                <button
                key={index}
                onClick={()=>clickHandler(index)}
                className={index === isActive? styles.val:''}
                >
                    {button}
                </button>
            )
          })}
        </div>
        <a href="#">+Segment</a>
      </div>
      <div className={styles.rightMockTest}>
        <div className={styles.navbar}>
          <div>
          </div>
          <div className={styles.leftNavbar}>
            Filter By :-
            <div className={styles.nav}>
              
              {/* <img src="../.././images/icon-park_down.svg" alt="error" /> */}
              <select className={styles.dropdown}>
                <option value="">Date</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
            <div className={styles.nav}>
              
              {/* <img src="../.././images/icon-park_down.svg" alt="error" /> */}
              <select className={styles.dropdown}>
                <option value="">Segment</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
            <div className={styles.nav}>
              
              {/* <img src="../.././images/icon-park_down.svg" alt="error" /> */}
              <select className={styles.dropdown}>
                <option value="">A-z sort</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
          </div>
          <div className={styles.rightNavbar}>
            <input type="text" placeholder="Search" />
            <button>
              <img src="../../images/octicon_search-16.svg" alt="error" />
            </button>
          </div>
        </div>
        
        <div className={styles.create}>
          <h5>Created</h5>
          <hr />
        </div>
        <div className={styles.mockItem}>{item}</div>
      </div>
    </div>
  );
};
export default MockTest;
