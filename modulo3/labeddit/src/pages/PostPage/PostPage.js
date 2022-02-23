import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/Constants";
import { useForm } from "../../hooks/useForm";
import { useProtectedPage } from "../../hooks/useProtectedPage";

function PostPage() {

  const [postDetail, setPostDetail] = useState()
  const { form, onChange, cleanFields } = useForm({body:""})
  const [voteComent, setVoteComent] = useState(0)
  const [loading, setLoading] = useState(false)
  
  const params = useParams()
  //console.log(params)

  useProtectedPage()

  const token = localStorage.getItem("token")

  useEffect(()=>{

    setLoading(true)

    const headers = {headers : {
      'Authorization': token
    }}
    axios.get(`${BASE_URL}/posts/${params.id}/comments`,
    headers)
    .then((response)=>{
      //console.log(response.data)
      setPostDetail(response.data)
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error.response.data)
      setLoading(false)
    })
  },[voteComent]) //response.data.length() postDetail.length() ?????


  const submitForm = ((event)=>{
    event.preventDefault()
    console.log("Formulário enviado:", form)
    cleanFields()
    onSubmitComent()
  })


  const onSubmitComent = (()=>{
    const body = form
    const headers = {headers : {
      'Content-Type': 'application/json',
      'Authorization': token
    }}
    axios.post(`${BASE_URL}/posts/${params.id}/comments`,
    body, headers)
    .then((response)=>{
      console.log(response.data)      
    })
    .catch((error)=>{
      console.log(error.response)
    })
  })


  const body = {"direction": voteComent}//porque o primeiro clique acusa erro na requisição???
  //console.log(body)

  const createComentVote = ((id)=>{
    const headers = {headers : {
      'Content-Type': 'application/json',
      'Authorization': token
    }}
    axios.post(`${BASE_URL}/comments/${id}/votes`,
    body, headers)
    .then((response)=>{
      console.log(response.data)      
    })
    .catch((error)=>{
      console.log(error.response)
    })
  })

  const onClickPositive = ((id)=>{
    setVoteComent(1)
    createComentVote(id)
  })
 
  const onClickNegative = ((id)=>{
    setVoteComent(-1)
    createComentVote(id)
  })


  const deleteComentVote = ((id)=>{
    const headers = {headers : {
      'Authorization': token
    }}
    axios.delete(`${BASE_URL}/comments/${id}/votes`,
    headers)
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error.response)
    })
  })
  


  const navigate = useNavigate()

  const goToFeed = ()=>{
    navigate("/")
  }


  const postDetailList = postDetail && postDetail.map(({id, username, body, voteSum, userVote})=>{
    return <div key={id}>
      <p><strong>{username}: </strong>{body}</p>
      <p>Número de votos: {voteSum}</p>
      <p>Seu voto: {userVote}</p>
      <button onClick={()=>onClickPositive(id)}>Voto positivo</button>
      <button onClick={()=>onClickNegative(id)}>Voto negativo</button>
      <button onClick={()=>deleteComentVote(id)}>Excluir meu voto</button>
    </div>
  })
  

  return (
    <div>
      <h1>post funcionando, filho do feed</h1>

      {loading && <h3>Carregando...</h3>}

      <button onClick={goToFeed}>Voltar para o Feed</button>

      <form onSubmit={submitForm} >
        <input name={"body"} value={form.body} onChange={onChange}
          required placeholder="Escreva seu comentário" type="text" />
        <button type={"submit"} >Comentar</button>
      </form>
     
      {postDetailList}

    </div>
  );
}

export default PostPage;