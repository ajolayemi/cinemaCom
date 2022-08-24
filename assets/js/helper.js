const filterGenreCls = document.querySelector('.movies .genre');

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