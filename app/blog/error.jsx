"use client";
export default function errorWrapper({error}){
    return <h1>Ooops error! {error.message}</h1>
}