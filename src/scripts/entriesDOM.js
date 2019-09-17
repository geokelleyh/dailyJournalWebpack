import htmlComponents from "./entriesComponent.js"
const journalEntryContainer = document.querySelector(".journalContent")

const renderJournalEntries= (entries) => {
    journalEntryContainer.innerHTML =  ""
    entries.forEach(entry => {
        const htmlToDisplay = htmlComponents.newEntriesComponent(entry)
        journalEntryContainer.innerHTML += htmlToDisplay
    })

}

const renderToBeEditedEntries= (entries) => {
    journalEntryContainer.innerHTML =  ""
    entries.forEach(entry => {
        const htmlToDisplay = htmlComponents.makeEditComponent(entry)
        journalEntryContainer.innerHTML += htmlToDisplay
    })

}

export default renderJournalEntries
// export  renderToBeEditedEntries