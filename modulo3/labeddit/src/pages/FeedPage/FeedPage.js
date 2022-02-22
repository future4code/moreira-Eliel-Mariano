import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/Constants";
import { useProtectedPage } from "../../hooks/useProtectedPage";

function FeedPage() {

  const [post, setPost] = useState([])
  const [listen, setListen] = useState(0)
  const [page, setPage] = useState(1)

  useProtectedPage()

  const token = localStorage.getItem("token")

  useEffect(()=>{
    const headers = {headers : {
      'Content-Type': 'application/json',
      'Authorization': token
    }}
    axios.get(`${BASE_URL}/posts?size=5&page=${page}`, //?size=5&page=${}(query params da API)quantidade e numero da página.
    headers)
    .then((response)=>{
      //console.log(response.data)
      setPost(response.data)
    })
    .catch((error)=>{
      console.log(error.response.data)
      navigate("/login")
    })
  },[listen, page])  

  const navigate = useNavigate()

  const goToPost = ()=>{
    navigate("/post/id")
  }
  
  const postList = post.map(({id, username, title, body, voteSum, commentCount})=>{
    return <div key={id}>
      <h2>{username}</h2>
      <h3>{title}</h3>
      <p>{body}</p>
      <p>Número de votos: {voteSum}</p>
      <p>Número de comentários: {commentCount}</p>
      <button onClick={goToPost}>Ir para o post</button>
    </div>
  })

  const logout = (()=>{
    localStorage.clear()
    setListen(listen + 1)
  })
  //console.log(listen)
  

  return (
    <div>
      <h1>feed funcionando, lista de posts</h1>
      <input placeholder="Escreva seu post" type="text" />
      <button>Publicar</button>
      <button onClick={logout}>Sair</button>

      {postList}

      <button onClick={()=>setPage(page>1? page-1 : page)}>Página anterior</button>
      <button onClick={()=>setPage(page + 1)}>Próxima página</button>
      
    </div>
  );
}

export default FeedPage;