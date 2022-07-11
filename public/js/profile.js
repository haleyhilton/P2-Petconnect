const test = async () => {
    const response = await fetch('/api/users/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }); 
};

test();