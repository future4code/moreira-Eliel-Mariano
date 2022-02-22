import React from "react";
import { useNavigate } from "react-router-dom";

function PostPage() {

  const navigate = useNavigate()

  const goToFeed = ()=>{
    navigate("/")
  }

  return (
    <div>
      <h1>post funcionando, filho do feed</h1>
      <h2>Nome do usuário</h2>
      <p>Texto do post</p>
      <p>curtidas e comentários</p>

      <input placeholder="Escreva seu comentário" type="text" />
      <button>comentar</button>
      <button onClick={goToFeed}>Voltar para o Feed</button>

    </div>
  );
}

export default PostPage;