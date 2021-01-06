Here's a sample hierarchy for the components in the todos list:

* App (a more specific name would be FilterableTodosList, but since this is the main application let's just call it App)
    * SearchBar, where the user can search the todos list by substring
    * TodosList, a table displaying the todos items
        * TodoRow, an individual row made to display each todo item, including a delete button
            * DeleteButton, to delete the todo when clicked

