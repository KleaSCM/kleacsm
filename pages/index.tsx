// import Site from '../components/Site';
// import Klea from '../components/Klea';
// import Sylvanas from '../components/Sylvanas';
// import styles from '../styles/Datasets.module.scss';

// const Datasets = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.tableContainer}>
//         <Site />
//         <Klea />
//         <Sylvanas />
//       </div>
//     </div>
//   );
// };

// export default Datasets;


///////////////////////////////////////////////


import React from 'react';
import SiteTable from '../components/SiteTable';

const HomePage = () => {
  return (
    <div>
      <h1>SUB216 Data</h1>
      <SiteTable />
    </div>
  );
};

export default HomePage;
