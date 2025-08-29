function initFormations() {
    db.formations.forEach((formation) => {
      const formationBoard = document.createElement("div");
      formationBoard.classList.add("board");
      document.body.appendChild(formationBoard);

      formationBoard.innerHTML = `
        <div id="${formation.name}" class="formDiv">
          <h1 id="formTittle">${formation.name}</h1>
          <img id="formImage" src=${formation.img} alt="">
        </div>
      `;
    });
  }

  function removeinitFormations() {
    const formationBoard = document.querySelectorAll(".board");
    formationBoard.forEach((frm) => {
      frm.remove();
    });
  }