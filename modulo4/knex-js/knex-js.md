#1
#a: qunando usamos o raw é retornado um monte de informações sobre a tabela e o resultado do que queremos é o item cujo índice é 0.
#b:
const buscaAtor = async (name:string) => {
    const resultado = await connection.raw(`
        SELECT * FROM Actor
        WHERE name = "${name}" 
    `)
    return resultado[0]
}

buscaAtor("Eliel")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	}); 
    
//c
const contaPorGenero = async (gender:string) => {
    const resultado = await connection.raw(`
        SELECT COUNT(*) FROM Actor
        WHERE gender = "${gender}" 
    `)
    return resultado[0]
}

contaPorGenero("male")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});
    

//ex 2

//a
const atualizaSalario = async (id:string, salary: number) => {
    const resultado = await connection("Actor")
    .update({
        salary: salary
    })
    .where({id:id})
};

atualizaSalario("007", 5000)
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});

//b
const deletaAtor = async (id:string) => {
    const resultado = await connection("Actor")
    .delete()
    .where({id:id})
};
//c
const mediaSalario = async (gender: string) => {
    const resultado = await connection("Actor")
      .avg("salary")
      .where({gender});
  
    return resultado[0];
  };

  mediaSalario("female")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});
    