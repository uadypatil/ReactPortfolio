import React, { useEffect, useState } from 'react';

function ContectContent() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://democonnection.netlify.app/.netlify/functions/contactUs')
            .then(res => res.json())
            .then(data => {
                console.log(data);       // log the API data
                setUsers(data);          // set the data in state
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <div className="mx-3">
                <div className="table-responsive px-3 bg-white">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact No</th>
                                <th colSpan={2}>Message</th>
                                <th>Date Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((u, index) => (
                                <tr key={u.id} data-aos="fade-up">
                                    <td>{index + 1}</td>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.contactNumber}</td>
                                    <td colSpan={2}>{u.message}</td>
                                    <td>{u.createdAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ContectContent;
