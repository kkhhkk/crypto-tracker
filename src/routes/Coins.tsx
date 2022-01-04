import { useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Search = styled.div`
  background-color: "transparent";
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: 10px;
  input {
    padding: 5px;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.textColor};
    border-radius: 2px;
  }
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: "transparent";
  color: ${(props) => props.theme.textColor};
  border: 1px solid white;
  font-size: 15px;
  border-radius: 20px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
      padding: 25px;
    }
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 40px;
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 10px;
  margin-right: 10px;
`;

interface ICoins {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const { isLoading, data } = useQuery<ICoins[]>("allCoins", fetchCoins);

  const [searchList, setSearchList] = useState<string>("");
  console.log(searchList);
  return (
    <Container>
      <Helmet>
        <title>Crpyto</title>
      </Helmet>
      <Header>
        <Title>Crpyto</Title>
      </Header>
      <Search>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearchList(e.target.value);
          }}
        />
      </Search>
      {isLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        <CoinsList>
          {data
            ?.slice(0, 200)
            .filter((val) => {
              if (searchList === "") {
                return val;
              } else {
                return (
                  val.name.toLowerCase().includes(searchList.toLowerCase()) ||
                  val.symbol.toLowerCase().includes(searchList.toLowerCase())
                );
              }
            })
            .map((coin) => (
              <Coin key={coin.id}>
                <Link
                  to={{
                    pathname: `/${coin.id}`,
                    state: { name: coin.name },
                  }}
                >
                  {coin.rank} :{" "}
                  <Img
                    src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  />
                  {coin.name} ( {coin.symbol} ) &rarr;
                </Link>
              </Coin>
            ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;
