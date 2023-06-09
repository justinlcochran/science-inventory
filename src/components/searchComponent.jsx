import React, { useState } from 'react';

const SearchComponent = ({ data, onElementClick }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const filteredData = data.filter((obj) =>
        obj.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                value={searchText}
                onChange={handleSearchChange}
                placeholder="Search by name"
            />

            <ul>
                {filteredData.map((obj) => (
                    <li key={obj._id.$oid} id={obj._id.$oid} onClick={onElementClick}>
                        {obj.name} - {obj.location} - {obj.grade}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchComponent;
