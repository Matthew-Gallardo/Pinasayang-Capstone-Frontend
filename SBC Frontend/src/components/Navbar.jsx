import React from "react";
import styled from "styled-components";
import { Badge, InputBase } from "@mui/material";
import { AccountCircleOutlined, Search, ShoppingCartOutlined } from "@mui/icons-material";



const Container = styled.div`
  height: 60px;

`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;



const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled(InputBase)`
  border: none;
  width: 100%;
 
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;

`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
 
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
        <Logo>Music App</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
            
          </MenuItem>
          <MenuItem> <AccountCircleOutlined/> </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
