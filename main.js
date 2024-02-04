document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('loginBtn');
    const contentContainer = document.getElementById('content');

    // Simulating a user login event
    loginBtn.addEventListener('click', function () {
        // In a real application, you'd handle the login process and retrieve data dynamically
        const fakeData = [
            { username: 'user1', content: 'Lorem ipsum dolor sit amet.' },
            { username: 'user2', content: 'Consectetur adipiscing elit.' },
            // Add more simulated data as needed
        ];

        displayContent(fakeData);
    });

    function displayContent(data) {
        contentContainer.innerHTML = ''; // Clear previous content

        data.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <strong>${post.username}</strong>: ${post.content}
            `;
            contentContainer.appendChild(postElement);
        });
    }
});
