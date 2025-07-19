import React, { useEffect, useState } from 'react';
import DashContent from './DashContent';

function DashboardWrapper() {
    const [reaches, setReaches] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [hirings, setHirings] = useState([]);

    useEffect(() => {
        // Fetch Hirings
        fetch('https://democonnection.netlify.app/.netlify/functions/hireMe')
            .then(res => res.json())
            .then(data => setHirings(data))
            .catch(err => console.error('Error fetching Hirings:', err));

        // Fetch Contacts
        fetch('https://democonnection.netlify.app/.netlify/functions/contactUs')
            .then(res => res.json())
            .then(data => setContacts(data))
            .catch(err => console.error('Error fetching Contacts:', err));

        // If you have Reaches API, add here; else simulate:
        setReaches([]); // example hardcoded
    }, []);

    return (
        <DashContent
            reachesCount={reaches.length}
            contactsCount={contacts.length}
            hiringsCount={hirings.length}
        />
    );
}

export default DashboardWrapper;
