const test = async () => {
    const sessy = await fetch('/api/users/sess', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    

    /* const response = await fetch(`/api/users/${user_id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });  */
};

test();