const AddTask = () => {
    return (
        <>
        <h3 className="ui heading center">Add new Task</h3>
        <div className="ui form">
            <form>
                <div class="field">
                    <label>User Input</label>
                    <input type="text" spellCheck="false" name="title"/>
                </div>


                

                    <div class="field">
                        <label>Description</label>
                        <textarea rows="2" name="description"></textarea>
                    </div>
                
                <br></br>
                <button className="ui primary button">
                    Save
                </button>
            </form>
        </div>
        </>
    );
}

export default AddTask;