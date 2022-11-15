# First Step: Design of the APP

First of all I thought about how to structure the application, from a graphic and design point of view.

- Graphic: where to place the components in the view
- Design: identify the role of each component

# Second Step: Project Structure

Subsequently I created the folders and placed the empty components that I gradually built.
The APP is based on the atomic model in order to reuse them in the future.
They are placed within the "components" folder.

- Atoms: it contains basic components with their styles such as Headline, Input, Button and Pagination
- Molecules: it contains the merge of the atoms with specific styles such as Searchbar (Input + Button) and TableWithPagination (Table + Pagination)
- Organisms: it contains the Header component which is made up of a "Title" and "Searchbar"
- Pages: it contains the pages. We have only one component "Page" where every logic is managed

# Style

I created stylized components, based on native HTML components, through the "styled-components" library

# Utils

This folder contains helper functions such as "toCamelCase"

# Services

This folder contains the endpoint definitions to call such as "getResults"

# Logics

- Page.js: Contains the main logic of the APP.

  - Query Management: I used "useSearchParams" hook for the management of the call. It allows us to call an API and save the result into a state. It also returns some values such as "isLoading" (the call is in progress or not), "error" (if the call fails). I also used an "useEffect" hook to align the input value with the queryParams value after a go back action.
  - Pagination: This component also manages the pagination memorizing the current state of the page

- TableWithPagination.js: It is responsible for the actual pagination and builds the table with the downloaded values

- The other components doesn't own a particular logic because everything is managed outside of them in order to make them custom and reusable.
