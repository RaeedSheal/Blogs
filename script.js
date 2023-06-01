// Like Icon
const like = document.getElementById("like");
like.onclick = () => {
    let arr = like.classList[1].split("-");
    if (!arr.includes("fill")) {
        like.classList.remove("bi-hand-thumbs-up");
        like.classList.add("bi-hand-thumbs-up-fill");
    } else {
        like.classList.remove("bi-hand-thumbs-up-fill");
        like.classList.add("bi-hand-thumbs-up");
    }
};

//Comments
const username = document.getElementById("name");
const commentDes = document.getElementById("commentDes");
document.getElementById("commentBtn").onclick = () => {
    // comment Div Create
    const carddiv = document.createElement("div");
    carddiv.classList.add("card");
    carddiv.classList.add("mb-3");
    //comment body Create
    const cardbody = document.createElement("div");
    cardbody.classList.add("card-body");
    carddiv.append(cardbody);
    // comment title
    const h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.textContent = username.value;
    // comment  description
    const p = document.createElement("p");
    p.classList.add("card-text");
    p.textContent = commentDes.value;
    cardbody.append(h5);
    cardbody.append(p);
    // delete btn
    const deletebtn = document.createElement("Button");
    deletebtn.classList.add("btn");
    deletebtn.classList.add("btn-outline-danger");
    deletebtn.id = "deletebtn";
    deletebtn.textContent = "Delete";
    // DELETE IT
    deletebtn.onclick = () => {
        deletebtn.parentElement.parentElement.remove();
    };
    cardbody.append(deletebtn);

    document.getElementById("commentDiv").append(carddiv);
};
