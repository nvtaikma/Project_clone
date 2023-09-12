var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
const wrapList = document.getElementById('wrap_list');
const url = "https://637e44439c2635df8f9e520d.mockapi.io/api/v1/get-list/entries";


btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


const handleUpdateEntry = async (item) => {
  console.log(item);
}

const handleDeteleEntry = async (item) => {
  const data = await axios.delete(`${url}/${item.id}`);
  if (data.status === 200) {
    fetchdata();
  }

}

// get api
const fetchdata = async () => {

  wrapList.innerHTML = ""
  const {data} = await axios.get(url);
  // console.log(data);
  // const string_data = data.map(item => {

  // return `
  //   <div class="card" onclick="handleUpdateEntry(item)">
  //   <img src="https://thenounproject.com/api/private/icons/5179632/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjfzkbBDChzL5GBcwNdCIm4Pl2KLMCxe-rukFzLT27l4B1CY9ymJBdEsuZcYGZc7-iC5EALqMb1L3RspjP5u1iV7UuSg%3D%3D" alt="" class="dots">
  //   <img src=${item.image} alt="Avatar" style="width:100%">
  //   <div class="container">
  //       <h4><b>${item.Description}</b></h4> 
  //       <p>${item.Category}</p> 
  //   </div>
  //   </div>
  //   `
  // });
  
  data.forEach((item) => {
    const b = document.createElement('b');
    b.innerHTML = item.Description;

    const h4 = document.createElement('h4');
    h4.appendChild(b);

    const p = document.createElement('p');
    p.innerHTML = item.Category;

    const container = document.createElement('div');
    container.setAttribute('class', "container");
    container.appendChild(h4);
    container.appendChild(p);

    const deleteItem = document.createElement('img')
    deleteItem.setAttribute("src","https://www.flaticon.com/svg/vstatic/svg/3917/3917764.svg?token=exp=1669554244~hmac=969c6db0ebf52b83e04f157ad46538b2")
    deleteItem.setAttribute("alt", "");
    deleteItem.setAttribute("class", "dots");
    deleteItem.setAttribute("style", "cursor: pointer")
    deleteItem.onclick = () => handleDeteleEntry(item);


    const AvatarItem = document.createElement('img')
    AvatarItem.setAttribute("src", item.image);
    AvatarItem.setAttribute("alt", "");
    AvatarItem.setAttribute("style", "width: 100%");

    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card");
    cardContainer.appendChild(AvatarItem);
    cardContainer.appendChild(deleteItem);
    cardContainer.appendChild(container);
    cardContainer.onclick = () => handleUpdateEntry(item);

    wrapList.appendChild(cardContainer);

    



  });
  // string_data.join('');
  // wrapList.innerHTML = string_data;
}
fetchdata();


// funtion check
var checkValidation = function(){
  var valid = true;

  valid = kiemTraRong("API") & kiemTraRong("Cors")& kiemTraRong("Category")& kiemTraRong("img")& kiemTraRong("description")& kiemTraRong("link");
  if(!valid){
      return false;
  }
  // return true;

  
}
// kiểm tra rỗng
var kiemTraRong = function (idValue) {

  var inputText = document.getElementById(idValue);

  if (inputText.value.trim() === '') {
    alert(`${inputText.name} khong duoc bo trong`)

      return false;
  } else {

      return true;
  }

}

// post data

const handleCreateEntry = async () => {
  const data = await axios.post(url){
      API: "send request",
      Description: "send request",
      HTTPS: true,
      Cors: "asdf",
      Link: "dfd",
      Category: "asdf",
      image: "https://cataas.com/cat?t=sq&time=16692743002638",
      Auth: ""
  }
}

// document.getElementById("myModal").addEventListener()
