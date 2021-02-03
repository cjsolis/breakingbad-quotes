import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ContenedorFrase = styled.div`
  padding: 3rem;
  boder-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;

  @media (min-width: 992px) {
    margin-top: 10rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;
    padding-right: 4rem;

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }

    &::after {
      content: close-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      right: -1rem;
      top: -2rem;
    }
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

const Frase = ({ quote, author }) => {
  return (
    <ContenedorFrase>
      <h1>{quote}</h1>
      <p>- {author}</p>
    </ContenedorFrase>
  );
};

Frase.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Frase;
