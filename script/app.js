
const loadData = async (value = 'apple') => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${value}`);
  const data = await res.json();
  const phones = data.data;
  showInDisplay(phones);
  // console.log(data);
}

const showInDisplay = phones => {
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.innerHTML = '';
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

}

const searchbarclick = () => {
  const serchvalue = document.getElementById('sechbar').value;
  loadData(serchvalue)
  console.log(serchvalue);
}


loadData();

