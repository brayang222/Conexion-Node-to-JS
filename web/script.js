const formElement = document.getElementById("saveTransaction");

formElement.addEventListener("submit", (e) =>{
  e.preventDefault();
  let transactionDescription = document.getElementById("transactionDescription").value;
  let transactionPrice = document.getElementById("transactionPrice").value;
  let transaction = { transactionDescription: transactionDescription, transactionPrice: transactionPrice};
  let transactionJSON = JSON.stringify(transaction);
  console.log(transactionJSON);

  fetch('http://localhost:3000/transactions', {
    method: 'Post',
    body:transactionJSON
  })
  .then(x => console.log('error'))
})

// cuando la aplicacion se carga devuelve todos los logs
fetch('http://localhost:3000/transactions')
.then(x => x.json())
.then(console.log);