
import { useState, useEffect } from 'react';
import { BASE_API_URL } from './constants';

function useRoleNames() {
    // array for all roles
    const [roleNameArray, setRoleNameArray] = useState([]);

    useEffect(() => {
        // fatch data to get all role_names
        async function fetchData() {
            if (BASE_API_URL) {
                try {
                    const response = await fetch(`${BASE_API_URL}/api/roles`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    const data = await response.json();
                    const roleNames = data.map(oneData => oneData.role_name);
                    setRoleNameArray(roleNames);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };

        fetchData();
    }, []);

    return roleNameArray;
};

export default useRoleNames;