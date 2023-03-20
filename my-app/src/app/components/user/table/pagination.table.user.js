import Pagination from 'react-bootstrap/Pagination';
import React, {useState, useEffect} from 'react'

function PaginationTableUser(props) {
  
    const [skip, setSkip] = useState(5);

    let handlePage = (e) => {
        // setStatus(e.target.value);
    }
    console.log(props.pageNumber);
    return (
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            {props.pageNumber.map(pageNumber => { 
                    <Pagination.Item value={pageNumber} onClick={e => handlePage(e)} key={pageNumber}>{pageNumber}</Pagination.Item>
            })}
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    );
}

export default PaginationTableUser;