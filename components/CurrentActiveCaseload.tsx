import React from 'react';
import { countClientsByStatus } from '../utils/countUtils';
import styles from '../styles/Sections.module.scss';

const CurrentActiveCaseload: React.FC<{ clientsData: any[] }> = ({ clientsData }) => {
    if (!clientsData || clientsData.length === 0) {
        return <p>No data available</p>;
    }

    const { commenced, pending, suspended } = countClientsByStatus(clientsData);

    return (
        <div className={styles.caseloadSection}>
            <h2>Current Active Caseload</h2>
            <div className={styles.tableRow}>
                <div className={styles.tableCell}>Commenced</div>
                <div className={styles.tableCell}>{commenced} </div>

            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableCell}>Pending</div>
                <div className={styles.tableCell}>{pending} </div>

            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableCell}>Suspended</div>
                <div className={styles.tableCell}>{suspended} </div>

            </div>
        </div>
    );
};

export default CurrentActiveCaseload;
