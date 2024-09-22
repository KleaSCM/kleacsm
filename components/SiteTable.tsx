import React, { useState } from 'react';
import FileUploader from './FileUploader';
import DropdownList from './DropdownList';
import styles from '../styles/table.module.scss';

const SiteTable = () => {
  const [siteData, setSiteData] = useState({
    commenced: null,
    pending: null,
    suspended: null,
  });

  const [suspendedClients, setSuspendedClients] = useState<any[]>([]);
  const [showSuspendedClients, setShowSuspendedClients] = useState(false);

  const handleDataParsed = (data: any) => {
    const headers = data[0];

    // Find indices for the relevant columns
    const statusColumnIndex = headers.findIndex((column: string) => column === 'STATUS');
    const idColumnIndex = headers.findIndex((column: string) => column === 'JOB_SEEKER_ID');
    const firstNameColumnIndex = headers.findIndex((column: string) => column === 'FIRST_GIVEN_NAME');
    const familyNameColumnIndex = headers.findIndex((column: string) => column === 'FAMILY_NAME');

    if (statusColumnIndex === -1) {
      console.error('STATUS column not found');
      return;
    }

    // Count occurrences of 'COM', 'PND', and 'SUS' in the STATUS column
    const commencedCount = data.filter((row: any) => row[statusColumnIndex] === 'COM').length;
    const pendingCount = data.filter((row: any) => row[statusColumnIndex] === 'PND').length;

    const suspendedClientsData = data.filter((row: any) => row[statusColumnIndex] === 'SUS');
    const suspendedCount = suspendedClientsData.length;

    // Extract the relevant information for suspended clients
    const suspendedList = suspendedClientsData.map((row: any) => ({
      jobSeekerId: row[idColumnIndex],
      firstName: row[firstNameColumnIndex],
      familyName: row[familyNameColumnIndex],
    }));

    setSiteData({
      commenced: commencedCount,
      pending: pendingCount,
      suspended: suspendedCount,
    });

    setSuspendedClients(suspendedList);
  };

  const handleSuspendedClick = () => {
    // Toggle the dropdown for suspended clients
    setShowSuspendedClients(!showSuspendedClients);
  };

  return (
    <div className={styles.tableContainer}>
      <FileUploader onDataParsed={handleDataParsed} />

      <div className={styles.table}>
        <div className={styles.tableHeader}>Site</div>

        {/* Commenced Row */}
        <div className={styles.row}>
          <div className={styles.cell}>Commenced</div>
          <div className={styles.cell}>{siteData.commenced ?? '-'}</div>
        </div>

        {/* Pending Row */}
        <div className={styles.row}>
          <div className={styles.cell}>Pending</div>
          <div className={styles.cell}>{siteData.pending ?? '-'}</div>
        </div>

        {/* Suspended Row with Dropdown */}
        <div className={styles.row}>
          <div className={styles.cell}>Suspended</div>
          <div className={styles.cell}>
            {/* Use DropdownList and handle click to toggle */}
            <DropdownList
              items={suspendedClients}
              show={showSuspendedClients}
              onClick={handleSuspendedClick}
              label={siteData.suspended !== null ? `Suspended (${siteData.suspended})` : '-'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteTable;
