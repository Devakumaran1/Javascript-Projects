// document.addEventListener('DOMContentLoaded', () => {
//     const dataDisplay = document.querySelector('#data-display');
//     const formData = JSON.parse(localStorage.getItem('formData'));

//     if (formData) {
//         dataDisplay.innerHTML = `
//             <p><strong>Username:</strong> ${formData.username}</p>
//             <p><strong>Email:</strong> ${formData.email}</p>
//             <p><strong>Password:</strong> ${formData.password}</p>
//             <p><strong>Confirm Password:</strong> ${formData.cpassword}</p>
//         `;
//     } else {
//         dataDisplay.innerHTML = '<p>No data found.</p>';
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    const dataDisplay = document.querySelector('#data-display');
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.length > 0) {
        users.forEach(user => {
            const userInfo = document.createElement('div');
            userInfo.innerHTML = `
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Password:</strong> ${user.password}</p>
                <p><strong>Confirm Password:</strong> ${user.cpassword}</p><hr>
                
            `;
            dataDisplay.appendChild(userInfo);
        });
    } else {
        dataDisplay.innerHTML = '<p>No data found.</p>';
    }
});
