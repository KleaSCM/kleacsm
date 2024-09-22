

export const countClientsByStatus = (clientsData: any[]) => {
    const counts = {
        commenced: 0,
        pending: 0,
        suspended: 0,
    };

    clientsData.forEach(client => {
        if (client.STATUS === 'COM') counts.commenced++;
        else if (client.STATUS === 'PND') counts.pending++;
        else if (client.STATUS === 'SUS') counts.suspended++;
    });

    return counts;
};

export const countJobSeekerServicingType = (clientsData: any[]) => {
    const servicingCounts = {
        basicServices: {
            commenced: 0,
            pending: 0,
            suspended: 0,
        },
        workForTheDole: {
            commenced: 0,
            pending: 0,
            suspended: 0,
        },
    };

    clientsData.forEach(client => {
        if (client.IN_WFD_ACTIVITY_FLAG === 'Y') {
            if (client.STATUS === 'COM') servicingCounts.basicServices.commenced++;
            if (client.STATUS === 'PND') servicingCounts.basicServices.pending++;
            if (client.STATUS === 'SUS') servicingCounts.basicServices.suspended++;

     
            if (client.STATUS === 'COM') servicingCounts.workForTheDole.commenced++;
            if (client.STATUS === 'PND') servicingCounts.workForTheDole.pending++;
            if (client.STATUS === 'SUS') servicingCounts.workForTheDole.suspended++;
        }
    });

    return servicingCounts;
};
