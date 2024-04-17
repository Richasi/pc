// Import necessary modules
const axios = require('axios');

// Function to fetch data from the API
const fetchData = async (postId) => {
    try {
        // Make API call using axios
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);

        // Extract and display data
        const { data } = response;
        console.log('API Response:', data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};

// Extract post ID from command line arguments
const postId = process.argv[2];

// Check if post ID is provided
if (!postId) {
    console.error('Please provide a post ID.');
} else {
    // Call the fetchData function with the provided post ID
    fetchData(postId);
}
