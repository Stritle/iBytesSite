import React, { useEffect, useState } from 'react'

const Instagram = () => {

    const token = 'IGQVJVR2ZAJSFZAOVEh6eVI1b1dwaVYtcmszOElKaE4ySkdKUE9UQ254SWQtbG5obDZAwbDBLb3lWOGdSMUpGeU1kQ1k1WHlTcmpleFdsV0JGMUJ2U0M1RXA5UlNRT3E1YUZAsWHZA6U2NDazZA5aWtMMnZA4NgZDZD'
    const fetchUrl = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type&limit=5&access_token=' + token;

    const [dataAccess, setDataAccess] = useState({ data: [] });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {

            let response = await fetch(fetchUrl)
            response = await response.json()
            setDataAccess(response)
            setIsLoading(false);

        }
        fetchData();
    }, [fetchUrl])




    return (
        <div className="instagram-content">
            <ul>
                {isLoading ? <p>Loading...</p> :
                    dataAccess.data.map(item => (

                        <li key={item.id} >

                            <a href='https://www.instagram.com/turpiastore/'><img src={item.media_url} alt="Insta"></img></a>
                        </li>
                    ))

                }
            </ul>
        </div >
    );
}



export default Instagram