import React from 'react';
import styles from '../styles/DropdownList.module.scss';

interface DropdownListProps {
  items: Array<{ jobSeekerId: string; firstName: string; familyName: string }>;
  show: boolean;
  onClick: () => void;
  label: string;
}

const DropdownList: React.FC<DropdownListProps> = ({ items, show, onClick, label }) => {
  return (
    <div className={styles.dropdownWrapper}>
      {/* Clickable label to toggle the dropdown */}
      <div className={styles.label} onClick={onClick} style={{ cursor: 'pointer', color: 'blue' }}>
        {label}
      </div>

      {/* Only show the dropdown when `show` is true */}
      {show && (
        <div className={styles.dropdown}>
          {items.length > 0 ? (
            <ul>
              {items.map((client, index) => (
                <li key={index}>
                  {client.jobSeekerId} - {client.firstName} {client.familyName}
                </li>
              ))}
            </ul>
          ) : (
            <p>No clients</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownList;

