// Simulate async API call
async function fetchUserData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Jane Doe',
                email: 'jane@example.com'
            });
        }, 1000);
    });
}
