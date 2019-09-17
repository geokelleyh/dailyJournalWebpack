const foodKey = "1970c843d733f5911deb2a3cd0dc2c4b"
const fetchAPI = {
    getFoodSearch() {
        // returns the data as a json file
        return fetch("http://localhost:3000/entries")
            .then(entries => entries.json())
    },
    getJournalEntryById(entries) {
        return fetch(`http://localhost:3000/entries/${entries.id}`)
            .then(entries => entries.json())
    },
    saveJournalEntry(newJournalEntry) {
        // Use `fetch` with the POST method to add your entry to your API
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        })
        .then(entry => entry.json())

    },
    deleteJournalEntry(entries) {
        return fetch(`http://localhost:3000/entries/${entries.id}`, {
            method: "DELETE"
        })
            .then(entries => entries.json())
    },
    editJournalEntry(entries, updatedEntry) {
        return fetch(`http://localhost:3000/entries/${entries.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedEntry)
        })
        .then(entry => entry.json())
    }
}


export default API