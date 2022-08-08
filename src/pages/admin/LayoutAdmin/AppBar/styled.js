import styled from "styled-components";
import { FcSearch } from "react-icons/fc";
import { Link } from 'react-router-dom'



export const Div = styled.nav`
    height: 80px;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    -webkit-box-shadow: 0px 2px 13px 0px rgb(0 0 0 / 21%);
    box-shadow: 0px 2px 13px 0px rgb(0 0 0 / 21%);
    z-index: 999;
    position: sticky
`

export const ImageLogo = styled.img`
    max-width: 150px;
    min-width: 40px;
    height: 100%;
`

export const InputSerch = styled.div`
    height: 100%;
    max-width: 520px;
    width: 100%;
    min-width: 150px;
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border-radius: 30px;
    border: 1px solid #d0d6e7;

    input {
        width: 100%;
        height: 100%;
        border: none;
        font-size: 22px;
        &:focus {
            outline: none;
        }
        &::placeholder {
            font-size: 22px;
        }
        @media (max-width: 500px ) {
            font-size: 16Spx;
            &::placeholder {
            font-size: 16px;
        }
            
        }
    }
`

export const IconDelete = styled.p`
    font-size: 20px;
    cursor: pointer;
    width: 25px;
    font-weight: 500;
    text-align: center;
    @media (min-width: 500px ) {
        font-size: 30px;
        width: 60px;
    }
`


export const IconSearch = styled(FcSearch)`
    font-size: 20px;
    cursor: pointer;
    width: 30px;
    margin-right: 10px;
    border-left: 1px solid black;
    padding-left: 2px;
    @media (min-width: 500px ) {
        font-size: 30px;
        width: 60px;
    }
`




///////////////////////////////////////////////////


export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 960px){
        display: block;
        
        font-size : 1.8rem;
        cursor: pointer;
    }
`


export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align:center;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top : 80px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity:1;
        transition: all 1s ease;
        background: #101522;
        z-index: 999;
    }
`


export const NavItem = styled.li`
    font-size: 22px;
    font-weight: 700;

    &:hover{
        border-bottom: 2px solid #4b59f7;
    }
    @media screen and (max-width: 960px){
        height: 80px;
        width:100%;
        &:hover {
            border: none;
        }
    }
`

export const NavLinks = styled(Link)`
    display: flex;
    align-items: center;
    color: #101522;;
    padding: .5rem 1rem;
    border-bottom: none;
    text-decoration: none;
    @media screen and (max-width: 960px){
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
        color: #fff;
        &hover{
            color : #4b59f7;
            transition: all 0.3s ease;
        }
    }
`