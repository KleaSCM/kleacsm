

import React from 'react';
import { countJobSeekerServicingType } from '../utils/countUtils';
import styles from '../styles/Sections.module.scss';

const JobSeekerServicingType: React.FC<{ clientsData: any[] }> = ({ clientsData }) => {
    if (!clientsData || clientsData.length === 0) {
        return <p>No data available</p>;
    }

    const servicingCounts = countJobSeekerServicingType(clientsData);

    return (
        <div className={styles.caseloadSection}>
            <h2 style={{ backgroundColor: 'green', color: 'black', fontWeight: 'bold' }}>
                Job Seeker Servicing Type
            </h2>
            <div className={styles.tableRow}>
                <div className={styles.tableCell} style={{ fontWeight: 'bold' }}>Basic Services</div>
                <div className={styles.tableCell}> - </div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableCell}>Commenced</div>
                <div className={styles.tableCell}>{servicingCounts.basicServices.commenced} </div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableCell}>Pending</div>
                <div className={styles.tableCell}>{servicingCounts.basicServices.pending} </div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableCell}>Suspended</div>
                <div className={styles.tableCell}>{servicingCounts.basicServices.suspended} </div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableCell} style={{ fontWeight: 'bold' }}>Work for the Dole</div>
                <div className={styles.tableCell}> - </div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableCell}>Commenced</div>
                <div className={styles.tableCell}>{servicingCounts.workForTheDole.commenced} </div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableCell}>Pending</div>
                <div className={styles.tableCell}>{servicingCounts.workForTheDole.pending} </div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableCell}>Suspended</div>
                <div className={styles.tableCell}>{servicingCounts.workForTheDole.suspended} </div>
            </div>
        </div>
    );
};

export default JobSeekerServicingType;

