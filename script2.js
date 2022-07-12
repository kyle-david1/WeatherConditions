const searchButtonEl = document.querySelector("#search-btn");

const handleSearchSubmit = (event) => {
    if (!searchInputVal) {
        console.error("Enter a City!");
        return;}
    event.preventDefault();
    

    let userSearch = searchInputVal.value.trim();
    getLatLon(userSearch);
    searchInputVal.value = ""

    };