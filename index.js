// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    {title: "Come a little Bit Closer", artist: "Jay and the Americans", genre: "R&B"},
    {title: "I'll Never Fall in Love Again", artist: "Dionne Warwick", genre: "Pop"},
    {title: "The Pod Chase", artist: "Tyler Bates", genre: "R&B"}
    
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot" : "Pop",
    "Mantis" : "R&B"
    // Add preferences for Drax, Rocket, Groot, and Mantis
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    const playlistsDiv = document.getElementById('playlists')

    const playlists = Object.keys(guardians).map(guardian => {
        const favouriteGenre = guardian[guardian];
        const playlist = songs.filter(song => song.genre === favouriteGenre);
        return {
            guardian: guardian,
            playlist: playlist
        }
    })

    // To clear any content before displaying my new playlist
    playlistsDiv.innerHTML = "";

    // To display the playlist for each Guardian
    playlists.forEach(({guardian, playlist}) => {
        const guardianSection = document.createElement('div');
        guardianSection.classList.add('playlist');

        //Name of each Guardian on their playlists
        const nameOfGuardian = document.createElement('h2');
        nameOfGuardian.textContent = `${guardian}'s  Playlist`;
        guardianSection.appendChild(nameOfGuardian);

        //Each guardain playlist
        const playlist = document.createElement('ul');
        playlist.forEach(song => {
            const songTitle = document.createElement('li')
            songTitle.textContent = `${song.title}`;

            const  songArtist = document.createElement('li')



        })


})
    // Your code here
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


