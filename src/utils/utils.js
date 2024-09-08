// utils.js

// Format Date
export function formatDate(dateString) {
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString('en-GB');
}

// Another utility function (example)
