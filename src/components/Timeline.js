import styled from "styled-components";

export const StyledTimeline = styled.div`
/* Estilos da barra de rolagem */
::-webkit-scrollbar {
  width: 10px; /* Largura da barra de rolagem */
}

/* Estilo do "handle" da barra de rolagem */
::-webkit-scrollbar-thumb {
  background-color: #888; /* Cor do handle da barra de rolagem */
  border-radius: 5px; /* Raio de borda do handle */
}

/* Estilo do fundo da barra de rolagem */
::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Cor do fundo da barra de rolagem */
}
  flex: 1;
  width: 100%;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;