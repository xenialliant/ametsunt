/**
 * Fetches entries with an optional limit.
 *
 * @param {Object} params - The parameters for fetching entries.
 * @param {number} [params.limit] - The maximum number of entries to fetch.
 * @returns {Array} The fetched entries.
 */
function fetchEntries(params = {}) {
    const { limit } = params;
    
    // Example: Fetching entries logic (this is just a placeholder)
    let entries = getAllEntries();  // Assume this function fetches all available entries

    if (limit !== undefined) {
        entries = entries.slice(0, limit);
    }

    return entries;
}

// Example helper function (for demonstration purposes)
function getAllEntries() {
    // Placeholder for actual data fetching logic
    return [
        { id: 1, name: 'Entry 1' },
        { id: 2, name: 'Entry 2' },
        // Add more entries as needed
    ];
}

// Example usage
const params = { limit: 5 };
const entries = fetchEntries(params);
console.log(entries);
