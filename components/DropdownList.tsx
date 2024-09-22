// import React from 'react';
// import styles from '../styles/Sections.module.scss';



// interface Client {
//   jobSeekerId: string;
//   firstName: string;
//   familyName: string;
// }

// interface DropdownListProps {
//   items: Client[];
//   show: boolean;
//   onClick: () => void;
//   label: string;
// }

// const DropdownList: React.FC<DropdownListProps> = ({ items, show, onClick, label }) => {
//   return (
//     <div className={styles.dropdownWrapper}>
//       <div className={styles.label} onClick={onClick} style={{ cursor: 'pointer', color: 'blue' }}>
//         {label}
//       </div>
//       {show && (
//         <div className={styles.dropdown}>
//           {items.length > 0 ? (
//             <ul>
//               {items.map((client) => (
//                 <li key={client.jobSeekerId}>
//                   {client.jobSeekerId} - {client.firstName} {client.familyName}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No clients</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownList;

