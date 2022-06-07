import styled from "styled-components";
import { useRouter } from "next/router";
const Container = styled.form`
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 15px 1.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #f3f3f4;
  color: var(--text-dark);
  transition: 0.3s ease;
  &::placeholder {
    color: var(--primary);
    font-size: 18px;
  }
  &:focus, &:hover{
    
    border-color: var(--primary);
  }
  }
`;
const Search = () => {
  const router = useRouter();
  const SearchData = (e) => {
    const data = e.target.value;
    router.push(`/search/${data}`);
    
  };

  return (
    <Container onSubmit={(e) => e.preventDefault()}>
      <Input
        onKeyPress={e => e.key === "Enter" ? SearchData(e) : null}
        type={"text"}
        placeholder="search movies and series"
      />
    </Container>
  );
};

export default Search;
