import React, { useState, useEffect } from 'react';
import { API_URL } from './constants';
import axios from 'axios';


function AllMembers() {

    const [serverData, setServerData] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}/allFamily`)
            .then(async res => {
                console.log(res.data.payload)
                setServerData(res.data.payload);
            })
            .catch((e) => console.log(e))
    }, [])

    return (
        <div>
            <ul>
                {
                    serverData.length > 0 ?
                        serverData.map((character) => {
                            return (
                                <li key={character._id}>
                                    {character.Name} - {character.Relation}
                                </li>
                            )
                        })
                        :
                        <h1>loading...</h1>
                }
            </ul>
        </div>
    );
}

export default AllMembers;