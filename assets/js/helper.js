// Holds the value of the first year to include in filter
const firstYear = 1980;
const currentYear = new Date().getFullYear()

// selected parts of the webpage
const filterGenreCls = document.querySelector('.movies .genre');
const filterDateCls = document.querySelector('.movies .year');

// Returns the current genre selection from the dropdown menu
const getSelectedGenre = () => {
    const selectedGenre = document.getElementById('genres').value;
    return selectedGenre;
};

// Dynamically adds genres to webpage
const addGenres = (genresToAdd) => {    
    for (const genre of genresToAdd) {
        const optionEl = document.createElement('option');
        optionEl.value = genre.id;
        optionEl.text = genre.name;
        filterGenreCls.appendChild(optionEl)
    }

}

// Builds an obj where keys are date range and values is an Array of
// dates in the specified range.

const buildDateRange = () => {;
    const yearRange = currentYear - firstYear;
    const yearArray = Array(yearRange).fill(0).map((_, i) => i + firstYear);
    const step = 10
    let start = 0;
    let stop = yearArray.length;

    let goOn = true;
    let yearObj = {};
    for (let end=10; goOn; end+=10) {
        if (end < stop) {
            let segment = yearArray.slice(start, end);
            start += 10;
            let key = `${segment[0]} - ${segment[step - 1]}`;
            yearObj[key] = segment;
        }
        
        else {
            let difference = yearRange - start;
            let segment = yearArray.slice(start);
            let key = `${segment[0]} - ${segment[difference - 1]}`;
            yearObj[key] = segment;
            goOn = false;
        }
    }

// Sort yearObj before returning it
return yearObj;
}

const addDatesFilter = () => {
    const yearObjs = buildDateRange();
    const yearObjsKeys = Object.keys(yearObjs);
    yearObjsKeys.reverse();

    // Add current year filter first
    let yearOption = document.createElement('option');
    yearOption.value = currentYear;
    yearOption.text = currentYear;
    filterDateCls.appendChild(yearOption)

    // Loop over the returned range
    for (const yearKey of yearObjsKeys) {
        yearOption = document.createElement('option');
        yearOption.value = yearKey;
        yearOption.text = yearKey;
        filterDateCls.appendChild(yearOption);
    }
    
}

addDatesFilter();