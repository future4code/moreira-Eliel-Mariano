import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/Constants";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useForm } from "../../hooks/useForm";


function FeedPage() {

  const [post, setPost] = useState([])
  const [listen, setListen] = useState(0)
  const [page, setPage] = useState(1)
  const { form, onChange, cleanFields } = useForm({title:"", body:""})
  const [votePost, setVotePost] = useState(0)
  const [loading, setLoading] = useState(false)

  useProtectedPage()

  const token = localStorage.getItem("token")

  useEffect(()=>{    
    setLoading(true)
    const headers = {headers : {
      'Content-Type': 'application/json',
      'Authorization': token
    }}
    axios.get(`${BASE_URL}/posts?size=5&page=${page}`, //?size=5&page=${}(query params da API)quantidade e numero da página.
    headers)
    .then((response)=>{
      //console.log(response.data)
      setPost(response.data)
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error.response.data)
      setLoading(false)
    })
  },[listen, page])


  const submitForm = ((event)=>{
    event.preventDefault()
    console.log("Formulário enviado:", form)
    cleanFields()
    onSubmitPost()
  })


  const onSubmitPost = (()=>{
    const body = form
    const headers = {headers : {
      'Content-Type': 'application/json',
      'Authorization': token
    }}
    axios.post(`${BASE_URL}/posts`,
    body, headers)
    .then((response)=>{
      console.log(response.data)      
    })
    .catch((error)=>{
      console.log(error.response.data)
    })
  })

  
  const body = {"direction": votePost} //por que o primeiro clique acusa erro na requisição???
  console.log(body)                     //parece estar com um clique de atraso...
  
  const createPostVote = ((id)=>{    
    const headers = {headers : {
      'Content-Type': 'application/json',
      'Authorization': token
    }}
    axios.post(`${BASE_URL}/posts/${id}/votes`,
    body, headers)
    .then((response)=>{
      console.log(response.data)
      setListen(listen + 1)
    })
    .catch((error)=>{
      console.log(error.response)
    })
  })  
    
  const onClickPositive = ((id)=>{
    setVotePost(1)
    createPostVote(id)
  })
 
  const onClickNegative = ((id)=>{
    setVotePost(-1)
    createPostVote(id)
  })

  const deletePostVote = ((id)=>{
    const headers = {headers : {
      'Authorization': token
    }}
    axios.delete(`${BASE_URL}/posts/${id}/votes`,
    headers)
    .then((response)=>{
      console.log(response)
      setVotePost(0)
      setListen(listen + 1)
    })
    .catch((error)=>{
      console.log(error.response)
    })
  })
  
  const navigate = useNavigate()

  const goToPost = (id)=>{
    navigate(`/post/${id}`)
  }

  const postList = post.map(({id, username, title, body, voteSum, commentCount})=>{
    return <div key={id}>
      <h2>{username}</h2>
      <h3>{title}</h3>
      <p>{body}</p>
      <p>Número de votos: {voteSum}</p>
      <p>Número de comentários: {commentCount}</p>
      <button onClick={()=>goToPost(id)}>Ir para o post</button>
      <button onClick={()=>onClickPositive(id)}>Voto positivo</button>
      <button onClick={()=>onClickNegative(id)}>Voto negativo</button>
      <button onClick={()=>deletePostVote(id)}>Excluir meu voto</button>
    </div>
  })

  const logout = (()=>{
    localStorage.clear()
    setListen(listen + 1)
  })
  

  return (
    <div>
      <h1>feed funcionando, lista de posts</h1>

      {loading && <h3>Carregando...</h3>}

      <form onSubmit={submitForm}>
        <input name={"title"} value={form.title} onChange={onChange} 
          required placeholder="Título do seu post" type="text" />
        <input name={"body"} value={form.body} onChange={onChange} 
          required placeholder="Escreva seu post" type="text" />
        <button type={"submit"} >Publicar</button>
      </form>

      <button onClick={logout}>Sair</button>

      {postList}

      <button onClick={()=>setPage(page>1? page-1 : page)}>Página anterior</button>
      <strong> {page} </strong>
      <button onClick={()=>setPage(page + 1)}>Próxima página</button>      
    </div>
  );
}

export default FeedPage;