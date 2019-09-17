
const htmlComponents = {
    newEntriesComponent: (entries) => {
        // Create your own HTML structure for a journal entry
        return `
            <section class="entries">
                <h2>${entries.date}</h2>
                <h3>${entries.concept}</h3>
                <div class="mood">Mood: ${entries.mood}</div>
                <p>${entries.content}</p>
                <aside class="buttons__aside">
                    <button class="btn delete__button" id="deleteEntry--${entries.id}">Delete</button>
                    <button class="btn edit__button" id="editEntry--${entries.id}">Edit</button>
                </aside>
            </section>
        `
    },
    makeEditComponent: (entries) => {
        return `
        <form>
            <fieldset>
                <input type="date" name="editDate" id="editDate" value="${entries.date}">
            </fieldset>
            <fieldset>
                <input type="text" name="editconcept" id="editconcept" value="${entries.concept}">
            </fieldset>
            <fieldset>
                <textarea name="editEntry" id="editMessage" cols="30" rows="10">${entries.content}</textarea>
            </fieldset>
            <fieldset>
            <label for="moodForTheDay"><strong>Mood For The Day</strong></label>
            <select name="Mood For The Day" id="mood">
              <option value="I must be the dumbest MoFo in this joint"> <strong>I must be the dumbest MoFo in this
                  joint</strong></option>
              <option value="Don't ask me anything, I am an imposter people!"><strong>Don't ask me anything, I am an
                  imposter people!</strong></option>
              <option value="I see no evidence of success...YET, but oddly enough, I have faith"><strong>I see no
                  evidence of success...YET, but oddly enough, I have faith</strong></option>
              <option value="I may, just may, make it out alive!"><strong>I may, just may, make it out alive!</strong>
              </option>
                <input type="text" name="editMood" id="editMood" value="${entries.mood}">
            </fieldset>
            <input type="submit" value="save" id="saveEntryEdit--${entries.id}">
        </form> 
    `
    },
        makeEditedentriesComponent: (entries) => {
            return `
            <h2>${entries.date}</h2>
            <h3>${entries.concept}</h3>
            <div class="mood">Mood: ${entries.mood}</div>
            <p>${entries.content}</p>
            <aside class="buttons__aside">
                <button class="btn delete__button" id="deleteEntry--${entries.id}">Delete</button>
                <button class="btn edit__button" id="editEntry--${entries.id}">Edit</button>
            </aside>
        `
        }
}


export default htmlComponents









