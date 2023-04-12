const clientId = `2ee053700ba94b1eaec01e95c14888b9`;
const clientSecret = `010c085dd22f408b84f06c2d695f598a`;

const getToken = async () => {
const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
});

const data = await result.json();
return data.access_token;
};

const getGenres = async (token) => {
const result = await fetch(
    `https://api.spotify.com/v1/browse/categories?locale=sv_US`,
    {
    method: "GET",
    headers: { Authorization: "Bearer " + token },
    }
);

const data = await result.json();
return data.categories.items;
};

const getPlaylistByGenre = async (token, genreId) => {
const limit = 10;

const result = await fetch(
    `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
    {
    method: "GET",
    headers: { Authorization: "Bearer " + token },
    }
);
const data = await result.json();
return data.playlists.items;
};


const getTracksByPlaylist = async (token, playlist_id) => {
  const limit = 5;
  const result = await fetch(
    `https://api.spotify.com/v1/playlists/${playlist_id}/tracks?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );
  const data = await result.json();
  return data.items || [];
}; 

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);

  _data = await Promise.all(
    genres.map(async (genre) => {
      const playlists = await getPlaylistByGenre(token, genre.id);
      const playlistsList = await Promise.all(
        playlists.map(async (playlist) => {
          const tracks = await getTracksByPlaylist(token, playlist.id);
            return { ...playlist, tracks };
        })
      );
      return { ...genre, playlists: playlistsList };
    })
  );
};

const renderGenres = async (filterTerm) => {
  const token = await getToken();
  const genres = await getGenres(token);
  let source = _data;

  if (filterTerm) {
    const term = filterTerm.toLowerCase();
    source = source.filter(({ name }) => {
      return name.toLowerCase().includes(term);
    });
  }
  const list = document.getElementById(`genres`);
  const html = source.reduce((acc, { name, icons: [icon], playlists }) => {
    const playlistsList = playlists
      .map(({ name, id, images: [image], external_urls: { spotify } , tracks }) => {

        const listItems = tracks
        .map(
          ({ track: { name: trackName, artists } }) =>
            `<div class="name">
          <b class="track_name">${trackName}</b> </br>
            <div class="artist_name">${artists
              .map((artist) => artist.name)
              .join("")} </div>
        </div>`
        )
        .join("");

        return `<li class="main-list">
        <a href="${spotify}" alt="${name}" target="_blank">
            <img src="${image.url}" width="150" height="150"/>
        </a>
        <div class="play-name" > 
            <a href="${spotify}" alt="${name}" target="_blank">${name}</a>
        </div>
        ${listItems}`;
      }
      );

    if (playlists) {
      return (
        acc +
        ` <article class="genre-card">
        <img src="${icon.url}" width="250px" height="250px" alt="${name}"/>
        <div>
          <h2>${name}</h2>
                 <ol class="list">
                  ${playlistsList}
                 </ol>
              </div>
            </article>
            `
      );
    }
  }, ``);

  list.innerHTML = html;
};

loadGenres().then(renderGenres);

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.term.value;

  renderGenres(term);
};

