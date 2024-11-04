let showbtn;
const loadData = async (value = '13', ishandleAll) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${value}`);
  const data = await res.json();
  const phones = data.data;
  showInDisplay(phones, ishandleAll);
  // console.log(data);
}

const showInDisplay = (phones, ishandleAll) => {
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.innerHTML = '';

  const showmoreContainer = document.getElementById('show-more-container');

  if (phones.length > 12 && !ishandleAll) {
    showmoreContainer.classList.remove('hidden')
  } else {
    showmoreContainer.classList.add('hidden')
  }

  if (!ishandleAll) {
    phones = phones.slice(0, 12); // show only 12 phones at a time
  }




  phones.forEach(value => {
    console.log(value)

    const phonediv = document.createElement('div');
    phonediv.className = 'card bg-base-100 m-2 flex-1 shadow-xl';
    phonediv.innerHTML = `
        <figure>
    <img
      src="${value.image}"
      alt="network error" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${value.brand}</h2>
    <p>${value.phone_name}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary ">Buy Now</button>
    </div>
  </div>
                `;

    phoneContainer.appendChild(phonediv);

  });
  progresstogle(false);

}

const searchbarclick = (ishandleAll) => {
  progresstogle(true);
  const serchvalue = document.getElementById('sechbar').value;
  loadData(serchvalue, ishandleAll)
  console.log(serchvalue);
}


const progresstogle = (isProgress) => {
  const progressbar = document.getElementById('progres-bar');
  if (isProgress) {
    progressbar.classList.remove('hidden');
    console.log(isProgress);
  } else {
    progressbar.classList.add('hidden');
    console.log(isProgress);
  }

}

const showalldata = () => {
  searchbarclick(true)
}



loadData();

