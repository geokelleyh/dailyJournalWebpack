import API from "./data.js"
import htmlComponents from "./entriesComponent.js"

import renderJournalEntries from "./entriesDOM.js";
import renderToBeEditedEntries from "./entriesDOM.js"
import events from "./events.js"




const getAllJournalEntries = () => {
    API.getJournalEntries().then((parsedEntries) => {
        journalEntryContainer.innerHTML = ""
        renderJournalEntries(parsedEntries)
    })
}
getAllJournalEntries()
console.log(getAllJournalEntries)
const submitJournalEntry = document.querySelector("#inputButton")
const date = document.querySelector("#journalDate")
const concept = document.querySelector("#conceptsCovered")
const content = document.querySelector("#dailyEntry")
const mood = document.querySelector("#mood")
const inputArray = [date, concept, content, mood]

let localEntries = []

// calls the API object method then parses through the returned entries and renders them to the page
API.getJournalEntries().then(parsedEntries => {
    renderJournalEntries(parsedEntries)
    parsedEntries.forEach(entry => {
        localEntries.push(entry)
    })
})

const journalEntryContainer = document.querySelector(".journalContent")
const editEntryContainer = document.querySelector("#editLog")


document.querySelector("#inputButton").addEventListener("click", () => {

    API.saveJournalEntry(journalEntryObject)
        .then(API.getJournalEntries)
        .then(entries => {
            journalEntryContainer.innerHTML = ""
            entries.forEach(entry => {
                const journalHTML = journalEntryContainer + htmlToDisplay
                entriesDom.renderToDom(journalHTML)
            })
        })
        .then(() => {
            date.value = ""
            concept.value = ""
            content.value = ""
            mood.value = ""
        })
})
// events.registerSubmitListener()
// events.registerDeleteListener()
// events.registerEditListener()
// events.filterEntries()





// const radioButtons = document.getElementsByName("mood")

// radioButtons.forEach(button => {
//     button.addEventListener("click", event => {
//         const mood = event.target.value
//         // get journal entries (api.getjournalentries)
//         API.getJournalEntries().then(entries => {
//             const filteredArray = entries.filter(entry => entry.mood === mood)
//             return filteredArray
//         })
//             .then(filteredArray => {
//                 journalEntryContainer.innerHTML = ""
//                 filteredArray.forEach(entry => {
//                     const moodEntry = createJournalEntryComponent(entry)
//                     entryToDom(moodEntry)

//                 }); // clear the dom and put filtered Array on the dom
//             })
//     })
// })
console.log(API.getJournalEntries)


// delete entry

journalEntryContainer.addEventListener("click", () => {
    


    if (event.target.id.startsWith("deleteEntry--")) {





        const entryToDelete = event.target.id.split("--")[1]




        API.deleteJournalEntry(entryToDelete)
         



            .then(API.getJournalEntries)
            .then(parsedEntries =>{ 
                    renderJournalEntries(parsedEntries)
                    parsedEntries.forEach(entry => {
                        inputArray.push(entry)
                    })

            })


            
                // This forces the page to refresh and show the updated entries, minus the deleted one
                (location.reload(entries)))
           
        // edit entry

    } else if (event.target.id.startsWith("editEntry--")) {
        const entryToEdit = event.target.id.split("--")[1]
    //   const  editArea = document.querySelector("#editLog").innerHTML
 
        renderToBeEditedEntries(parsedEntries)
        API.editJournalEntry(entryToEdit)
            .then(entries => {
                editEntryContainer.innerHTML = ""
                .then(API.getJournalEntries().then(parsedEntries =>{ 
                    renderToBeEditedEntries(parsedEntries)
                    parsedEntries.forEach(entry => {
                        inputArray.push(entry)
                    })

            })


            
                // This forces the page to refresh and show the updated entries, minus the deleted one
                (location.reload(entries)))
        })}} )
        export default localEntries