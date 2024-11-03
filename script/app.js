console.log('connected');

const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    showInDisplay(phones);
    // console.log(data);
}

const showInDisplay = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phones.forEach(value => {
        console.log(value)

        const phonediv = document.createElement('div');
        phonediv.className = 'card bg-base-100 w-auto shadow-xl bg-red grid';
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
      <button class="btn btn-primary w-full">Buy Now</button>
    </div>
  </div>
                  
        `


        phoneContainer.appendChild(phonediv);

    });

}


loadData();