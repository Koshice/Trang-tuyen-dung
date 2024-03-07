import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import Card from './Card';
import NotFound from './NotFound'; // Import NotFound component
import { useAppSelector } from '../redux/hooks';
import { ICollection } from '../types'; // Import ICollection interface

const Collections: React.FC = () => {
    const { collections: allCollections, loading, searchQuery } = useAppSelector(state => state.collections);
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredCollections, setFilteredCollections] = useState<ICollection[]>([]);

    useEffect(() => {
        const filtered = allCollections.filter(collection =>
            collection.nameJob && collection.nameJob.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCollections(filtered);
        setCurrentPage(1); // Reset page to 1 when searchQuery changes
    }, [searchQuery, allCollections]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const pageSize = 9;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredCollections.length);
    const currentItems = filteredCollections.slice(startIndex, endIndex);

    const itemsPerRow = 3;
    const table: ICollection[][] = [];

    for (let i = 0; i < Math.ceil(currentItems.length / itemsPerRow); i++) {
        const rowItems = currentItems.slice(i * itemsPerRow, (i + 1) * itemsPerRow);
        table.push(rowItems);
    }

    return (
        <>
            {loading && <h2>Loading...</h2>}
            <div>
                {filteredCollections.length === 0 ? (
                    <NotFound />
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {table.map((row, rowIndex) => (
                            <div key={rowIndex} style={{ display: 'flex' }}>
                                {row.map((collection, colIndex) => (
                                    <div key={colIndex} style={{ margin: '10px' }}>
                                        <Card collection={collection} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
                {filteredCollections.length > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Pagination
                            current={currentPage}
                            onChange={handlePageChange}
                            total={filteredCollections.length}
                            pageSize={pageSize}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default Collections;
