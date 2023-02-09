let url = "dados/dataset.xml";

fetch(url)
.then((response) => response.text())
.then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
.then((data) => {
    const cards = document.getElementById("cards");
    const xmlData = data.getElementsByTagName("contribuinte");
    for(let i = 0; i < xmlData.length; i++) {
        const cpf = xmlData[i].getElementsByTagName("cpf")[0].innerHTML;
        const rg = xmlData[i].getElementsByTagName("rg")[0].innerHTML;
        const nome = xmlData[i].getElementsByTagName("nome")[0].innerHTML;
        const data_nasc =
        xmlData[i].getElementsByTagName("data_nasc")[0].innerHTML;
        const logradouro =
        xmlData[i].getElementsByTagName("logradouro")[0].innerHTML;
        const numero = xmlData[i].getElementsByTagName("numero")[0].innerHTML;
        const cep = xmlData[i].getElementsByTagName("cep")[0].innerHTML;
        const cidade = xmlData[i].getElementsByTagName("cidade")[0].innerHTML;
        const estado = xmlData[i].getElementsByTagName("estado")[0].innerHTML;
        const celular = xmlData[i].getElementsByTagName("celular")[0].innerHTML;
        const email = xmlData[i].getElementsByTagName("email")[0].innerHTML;
        const renda = xmlData[i].getElementsByTagName("renda")[0].innerHTML;
        const foto = xmlData[i].getElementsByTagName("foto")[0].innerHTML;
        const banco = xmlData[i].getElementsByTagName("banco")[0].innerHTML;
        const ag = xmlData[i].getElementsByTagName("ag")[0].innerHTML;
        const cc = xmlData[i].getElementsByTagName("cc")[0].innerHTML;

        cards.innerHTML += `
          <div class="card" style="width: 18rem; border: solid 1px black; padding: 1rem; margin: 1rem;">
            <img src="${foto}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${nome}</h5>
              <p class="card-text">CPF: ${cpf}</p>
              <p class="card-text">RG: ${rg}</p>
              <p class="card-text">Data de Nascimento: ${data_nasc}</p>
              <p class="card-text">Endereço: ${logradouro} ${numero}, ${cidade} - ${estado}</p>
              <p class="card-text">CEP: ${cep}</p>
              <p class="card-text">Celular: ${celular}</p>
              <p class="card-text">Email: ${email}</p>
              <p class="card-text">Renda: ${renda}</p>
              <p class="card-text">Banco: ${banco}</p>
              <p class="card-text">Agência: ${ag}</p>
              <p class="card-text">Conta Corrente: ${cc}</p>
            </div>
          </div>
        `;  
    }
})