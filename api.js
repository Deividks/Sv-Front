class ApiConection{

    url = "https://lista-de-compra-l76a.onrender.com/produtos"

    async listar(){
    const response =  await fetch(this.url)
    
    const dados = await response.json()
    console.log(dados)
    
    return dados
    }
    
    async cadastra(produto) {
    const response =  await fetch(this.url, {
        method: "POST",
        body: JSON.stringify(produto),
        headers: {"Content-Type": "application/json"}
    });
    
    }

    async deletar(id) {
    const response =  await fetch(this.url + "/" +id, {
        method: "DELETE"
    });
        
    }
    
}


export default ApiConection;
//export default ApiConection()