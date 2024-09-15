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
];

const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Rock",
    "Rocket": "R&B",
    "Groot": "Pop",
    "Mantis": "R&B"
};

function generatePlaylist(guardians, songs) {
    const playlistsDiv = document.getElementById('playlists');  // Grab the div from the HTML to insert content

    const playlists = Object.keys(guardians).map(guardian => {
        const preferredGenre = guardians[guardian];
        const playlist = songs.filter(song => song.genre === preferredGenre);
        return {
            guardian: guardian,
            playlist: playlist
        };
    });

    // Clear existing content before displaying new playlists
    playlistsDiv.innerHTML = "";

    // Create and display each playlist in the HTML
    playlists.forEach(({ guardian, playlist }) => {
        const guardianSection = document.createElement('div');
        guardianSection.classList.add('playlist');

        const heading = document.createElement('h2');
        heading.textContent = `${guardian}'s Playlist:`;
        guardianSection.appendChild(heading);


        const ul = document.createElement('ul');
        playlist.forEach(song => {
            const p = document.createElement('li');
            p.classList.add('song-title')
            p.textContent = `${song.title}`;

            const li = document.createElement('li')
            li.textContent = `by  ${song.artist}`
           
           
            ul.appendChild(p);
            ul.appendChild(li);
        });

        guardianSection.appendChild(ul);
        playlistsDiv.appendChild(guardianSection);
    });
}

// Call the function to generate and display playlists
generatePlaylist(guardians, songs);
