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

        const getPlaylistByTracks = async (token, playlistId) => {
            const limit = 3;
            const result = await fetch(
            `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`,
            {
                method: "GET",
                headers: {
                Authorization: "Bearer " + token,
                },
            }
            );
        
            const data = await result.json();
            return data.items;
        };
    const loadGenres = async () => {
    const token = await getToken();
    const genres = await getGenres(token);
    const list = document.getElementById(`genres`);
    await Promise.all(
        genres.map(async ({ id, name, icons: [icon] }) => {
          const playlists = await getPlaylistByGenre(token, id);
          const playlistsList = await Promise.all(
            playlists.map(
              async ({ name, id, images: [image], external_urls: { spotify } }) => {
                const items = await getPlaylistByTracks(token, id);
                const listItems = items
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
    
                return `
                <li class="main-list">
                        <a href="${spotify}" alt="${name}" target="_blank">
                            <img src="${image.url}" width="150" height="150"/>
                        </a>
                        <div class="play-name" > 
                            <a href="${spotify}" alt="${name}" target="_blank">${name}</a>
                        </div>
                  ${listItems}
                </li>`;
              }
            )
          );
    
    
          if (playlists) {
            const html = `
            <article class="genre-card">
            <img src="${icon.url}" width="250px" height="250px" alt="${name}"/>
            <div>
              <h2>${name}</h2>
                     <ol class="list">
                      ${playlistsList.join("")}
                     </ol>
                  </div>
                </article>`;
    
            list.insertAdjacentHTML("beforeend", html);
          }
        })
      );
    };
    

    loadGenres();
