import React from 'react';
import data from './MellinumBusinessParkData.json';

const Table = ({ title, count, companies }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-10 overflow-x-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                <h2 className="text-lg md:text-xl font-semibold text-blue-600">{title}</h2>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {count} Companies
                </span>
            </div>

            <table className="min-w-full text-sm text-left">
                <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs uppercase">
                        {[
                            'Sr No', 'Company', 'Size', 'Tech', 'Location', 'Contact',
                            'Sat', 'Industry', 'Hiring', 'Web', 'LinkedIn'
                        ].map((h) => (
                            <th key={h} className="px-3 py-2 whitespace-nowrap">{h}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {companies.map((c) => (
                        <tr key={c.srNo} className="border-b hover:bg-blue-50 transition">
                            <td className="px-3 py-2">{c.srNo}</td>

                            <td className="px-3 py-2 font-semibold text-blue-600">
                                {c.companyName}
                            </td>

                            <td className="px-3 py-2">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${c.companySize.includes('Large') || c.companySize.includes('MNC')
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'bg-indigo-100 text-indigo-700'
                                    }`}>
                                    {c.companySize}
                                </span>
                            </td>

                            <td className="px-3 py-2 whitespace-nowrap">{c.technologies}</td>
                            <td className="px-3 py-2">{c.exactLocation}</td>
                            <td className="px-3 py-2">{c.contactDetails}</td>
                            <td className="px-3 py-2">{c.saturdayWorking}</td>
                            <td className="px-3 py-2">{c.industryType}</td>

                            <td className="px-3 py-2">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${c.hiringStatus === 'Active Hiring'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-gray-200 text-gray-600'
                                    }`}>
                                    {c.hiringStatus}
                                </span>
                            </td>

                            <td className="px-3 py-2 text-center">
                                {c.website ? (
                                    <a href={c.website} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                                        Visit
                                    </a>
                                ) : (
                                    <span className="text-gray-400">NA</span>
                                )}
                            </td>

                            <td className="px-3 py-2 text-center">
                                {c.linkedin ? (
                                    <a href={c.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                                        Open
                                    </a>
                                ) : (
                                    <span className="text-gray-400">NA</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const MellinumBusinessPark = () => {
    const { header, tables } = data;

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-10 px-4 text-center">
                <h1 className="text-2xl md:text-4xl font-bold mb-2">
                    {header.mainTitle}
                </h1>
                <p className="text-sm md:text-lg opacity-90">
                    {header.subtitle}
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-6">
                <Table {...tables.table1} />
                <Table {...tables.table2} />
                <Table {...tables.table3} />
            </div>
        </div>
    );
};

export default MellinumBusinessPark;
