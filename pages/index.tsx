

import React, { useState } from 'react';
import FileUploader from '../components/FileUploader';
import CurrentActiveCaseload from '../components/CurrentActiveCaseload';
import JobSeekerServicingType from '../components/JobSeekerServicingType';

const IndexPage = () => {
    const [clientsData, setClientsData] = useState<any[]>([]);

    const handleDataParsed = (data: any[]) => {
        setClientsData(data);
    };

    return (
        <div>
            <FileUploader onDataParsed={handleDataParsed} />
            <CurrentActiveCaseload clientsData={clientsData} />
            <JobSeekerServicingType clientsData={clientsData} />
        </div>
    );
};

export default IndexPage;
