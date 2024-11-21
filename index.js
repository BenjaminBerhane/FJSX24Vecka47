// let characters = [];

fetch("https://swapi.dev/api/people")
  .then((res) => res.json())
  .then((data) => {
    const characterList = document.querySelector("ul");
    // console.log("characterList: ", characterList);

    data.results.map((characterObj) => {
      const listItem = document.createElement("li");

      const btns = document.querySelectorAll("button");

      listItem.innerText = characterObj.name;

      listItem.characterData = characterObj;

      characterList.appendChild(listItem);

      listItem.addEventListener("click", (e) => {
        console.log("e.target.characterData: ", e.target.characterData);
        const {
          name,
          height,
          mass,
          hair_color,
          skin_color,
          eye_color,
          birth_year,
          gender,
          species,
          starships,
          vehicles,
          homeworld,
        } = e.target.characterData;

        const characterData = e.target.characterData;

        const keys = Object.keys(characterData);

        const detailsInfoBox =
          document.getElementsByClassName("detailsInfoBox");

        detailsInfoBox[0].innerHTML = `
          <h3>${name}</h3>
          <p>Height: ${height} cm<br></p>
          <p>Mass: ${mass} kg<br></p>
          <p>Hair color: ${hair_color}<br></p>
          <p>Skin color: ${skin_color}<br></p>
          <p>Eye color: ${eye_color}<br></p>
          <p>Birth year: ${birth_year}<br></p>
          <p>Gender: ${gender}</p>
        `;

        btns[0].addEventListener("click", (e) => {
          fetch(homeworld)
            .then((response) => response.json())
            .then((data) => {
              console.log("datan: ", data);
              const detailsBoxSecond =
                document.getElementsByClassName("detailsBoxSecond");

              detailsBoxSecond[0].innerHTML = `
        <h3>${data.name}</h3>
        <p>Rotation period: ${data.rotation_period} cm</p>
        <p>Orbital period: ${data.orbital_period} days</p>
        <p>Diameter: ${data.diameter}km</p>
        <p>Climate: ${data.climate}</p>
        <p>Gravity: ${data.gravity}</p>
        <p>Terrain: ${data.terrain}</p>
      `;
            })
            .catch((error) => {
              console.error("Ett error inträffade: ", error);
            });
        });

        btns[1].addEventListener("click", (e) => {
          // Check if species array is not empty
          if (species.length > 0) {
            // Fetch the first species URL (or loop through all if needed)
            fetch(species[0])
              .then((response) => response.json())
              .then((data) => {
                console.log("Species data: ", data);
                const detailsBoxSecond =
                  document.getElementsByClassName("detailsBoxSecond");

                detailsBoxSecond[0].innerHTML = `
                  <h3>${data.name}</h3>
                  <p>Classification: ${data.classification}</p>
                  <p>Designation: ${data.designation}</p>
                  <p>Average Lifespan: ${data.average_lifespan} years</p>
                  <p>Language: ${data.language}</p>
                `;
              })
              .catch((error) => {
                console.error("Ett error inträffade: ", error);
              });
          } else {
            console.error("No species data available for this character.");
          }
        });

        btns[2].addEventListener("click", (e) => {});
        btns[3].addEventListener("click", (e) => {});
      });
    });
  })
  .catch((err) => {
    console.error("Ett error uppstod: ", err);
  });
