// import styles from '../styles/table.module.scss';

// const Klea = () => {
//   return (
//     <div className={styles.table}>
//       <div className={styles.tableHeader}>Klea</div>
      
//       <div className={styles.row}>
//         <div className={styles.headingGreen}>Current Active Caseload</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>Commenced</div>
//         <div className={styles.cell}>13</div>
//         <div className={styles.cell}>17%</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>Pending</div>
//         <div className={styles.cell}>23</div>
//         <div className={styles.cell}>37%</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>Suspended</div>
//         <div className={styles.cell}>234</div>
//         <div className={styles.cell}>0.3%</div>
//       </div>

//       <div className={styles.row}>
//         <div className={styles.headingGreen}>Job Seeker Servicing Type</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>Basic Services</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>Commenced</div>
//         <div className={styles.cell}>13</div>
//         <div className={styles.cell}>17%</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>Pending</div>
//         <div className={styles.cell}>23</div>
//         <div className={styles.cell}>37%</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>Suspended</div>
//         <div className={styles.cell}>234</div>
//         <div className={styles.cell}>0.3%</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>Work for the Dole</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>Commenced</div>
//         <div className={styles.cell}>13</div>
//         <div className={styles.cell}>17%</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>Pending</div>
//         <div className={styles.cell}>23</div>
//         <div className={styles.cell}>37%</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>Suspended</div>
//         <div className={styles.cell}>234</div>
//         <div className={styles.cell}>0.3%</div>
//       </div>

//       <div className={styles.row}>
//         <div className={styles.headingGreen}>Activity Placement</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>Total Commenced Job Seekers in a CDP WfD Activity</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>WfD Job Seeker in an Activity</div>
//         <div className={styles.cell}>555</div>
//         <div className={styles.cell}>73%</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>Basic Services Job Seeker in an Activity</div>
//         <div className={styles.cell}>429</div>
//         <div className={styles.cell}>97%</div>
//       </div>

//       <div className={styles.row}>
//         <div className={styles.headingGreen}>Activity Diary</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>Hours Required</div>
//         <div className={styles.cell}>4772</div>
//         <div className={styles.cell}>-</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>Hours Completed</div>
//         <div className={styles.cell}>706</div>
//         <div className={styles.cell}>15%</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>DNAV - Credited Hours</div>
//         <div className={styles.cell}>260</div>
//         <div className={styles.cell}>5%</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>DNAD Hours</div>
//         <div className={styles.cell}>20</div>
//         <div className={styles.cell}>0%</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>DNAI Hours with NSNP PR Raised</div>
//         <div className={styles.cell}>190</div>
//         <div className={styles.cell}>4%</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>No Result Entered - Hours</div>
//         <div className={styles.cell}>3486</div>
//         <div className={styles.cell}>73%</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>0 Hours in Job Plan</div>
//         <div className={styles.cell}>40</div>
//         <div className={styles.cell}>1%</div>
//       </div>

//       <div className={styles.row}>
//         <div className={styles.headingYellow}>ACTIONS REQUIRED</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>WORK FOR THE DOLE</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>JSKA IN WFD BUT NO WE12 CODE</div>
//         <div className={styles.cell}>35</div>
//         <div className={styles.cell}>3</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>JKSA NOT IN WFD BUT HAS WE12 CODE</div>
//         <div className={styles.cell}>11</div>
//         <div className={styles.cell}>5</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>JSKA NOT IN WFD AND HAS NO WE12 CODE</div>
//         <div className={styles.cell}>19</div>
//         <div className={styles.cell}>0</div>
//       </div>

//       <div className={styles.row}>
//         <div className={styles.headingGreen}>JOB PLANS</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>WE12 CODE EXPIRING IN NEXT 3 MONTHS</div>
//         <div className={styles.cell}>46</div>
//         <div className={styles.cell}>-17</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>JOB PLAN NOT MEETING MUTUAL OBLIGATION</div>
//         <div className={styles.cell}>20</div>
//         <div className={styles.cell}>0</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>AI12 OR JS09 CODE REQUIRED</div>
//         <div className={styles.cell}>8</div>
//         <div className={styles.cell}>5</div>
//       </div>

//       <div className={styles.row}>
//         <div className={styles.headingGreen}>GENERAL</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>NO FUTURE APPT (NO NAR) - PENDING JSKA</div>
//         <div className={styles.cell}>9</div>
//         <div className={styles.cell}>2</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>NO FUTURE APPT (NO NAR) - COMMENCED JSKA</div>
//         <div className={styles.cell}>16</div>
//         <div className={styles.cell}>9</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>JSCI UPDATED > 6 MTHS AGO</div>
//         <div className={styles.cell}>165</div>
//         <div className={styles.cell}>7</div>
//       </div>

//       <div className={styles.row}>
//         <div className={styles.headingGreen}>RESULT ENTRY</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>DNAI RESULT (NO PR) | WFD REQUIRED JSKA</div>
//         <div className={styles.cell}>2</div>
//         <div className={styles.cell}>-183</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>INCORRECT HOURS SCHEDULED</div>
//         <div className={styles.cell}>41</div>
//         <div className={styles.cell}>6</div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.cell}>NO RESULT ENTERED (HOURS)</div>
//         <div className={styles.cell}>3486</div>
//         <div className={styles.cell}>-3428</div>
//       </div>
//     </div>
//   );
// };

// export default Klea;
