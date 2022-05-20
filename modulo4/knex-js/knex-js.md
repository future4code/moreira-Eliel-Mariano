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


    //ex 3
//a

app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id

      const resultado = await connection.raw(`
        SELECT * FROM Actor
        WHERE id = ${id}
    `)
  
      res.status(200).send(resultado[0])

    } catch (error:any) {
      res.status(500).send({message:error.message})
    }
})

//b
app.get("/actor", async (req: Request, res: Response) => {
    try {
      const gender = req.query.gender

      const resultado = await connection.raw(`
        SELECT COUNT(*) FROM Actor
        WHERE gender = "${gender}"
    `)
        res.status(200).send(resultado[0])

    } catch (error:any) {
      res.status(500).send({message:error.message})
    }
})

//EX 4
//a
app.put("/actor",async (req:Request, res:Response) => {
    try {
        const id = req.body.id
        const salary = req.body.salary

        await connection.raw(`
            UPDATE Actor SET salary = ${salary}
            WHERE id = "${id}"        
        `)
        res.status(200).send({message:"Salary updated."})
        
    } catch (error:any) {
        res.status(500).send({message:error.message})
    }
    
})

//B
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id

      await connection.raw(`
        DELETE FROM Actor
        WHERE id = ${id}
    `)
  
      res.status(200).send({message:"Actor deleted!"})

    } catch (error:any) {
      res.status(500).send({message:error.message})
    }
})
    