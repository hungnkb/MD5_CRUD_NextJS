"use client"
import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'react-bootstrap/Image'
import Pagination from './pagination.table.user';

function TableUser() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(10);
    const [page, setPage] = useState(1);
    const [pageNumber, setPageNumber] = useState([1, 2]);

    useEffect(() => {
        try {
            let getUserData = async () => {
                let dataUser = await axios('https://api.github.com/users?per_page=' + count)
                if (dataUser.data) {
                    console.log(dataUser.data);
                    setData(dataUser.data);
                }
                let pages = count % 5
                if (pages === 0) {
                    setPage(pages)
                } else {
                    setPage(Math.pow(pages))
                }
                let newPageNumber = [];
                for (let i = 0; i < page; i++) {
                    newPageNumber.push(i + 1);
                }
                setPageNumber(newPageNumber)
            }
            getUserData();
        } catch (error) {
            console.log(error);
        }
    }, [count])

    const handleCount = (e) => {
        setPageNumber([])
        setCount(e.target.value);
    }


    return (
        <>
            <select onChange={e => handleCount(e)}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            <Pagination pageNumber={pageNumber}/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Github</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (

                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><Image style={{ width: '100px' }} roundedCircle src={user.avatar_url} /></td>
                            <td>{user.login}</td>
                            <td>{user.url}</td>
                        </tr>

                    ))}
                </tbody>
            </Table>
        </>

    );
}

export default TableUser;
