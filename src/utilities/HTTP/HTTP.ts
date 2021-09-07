import axios from "axios";

import { Pokemon } from "@/types/pokemons";
import { replaceID, replacePage } from "@/utilities/Replace";

import { PokemonsResponse, UndefinedResponse } from "./HTTP.types";

// webpack ensures that `process.env.*` are set, so
// we can safely ignore the undefined case in them.

const serverURL = process.env.SERVER_URL!;

/** @see https://github.com/axios/axios */
const http = axios.create({ baseURL: serverURL });

export const getCaughtPokemons = async (page: number): PokemonsResponse => {
    const url = replacePage(process.env.SERVER_GET_CAUGHT_POKEMONS!, page);

    return http.get(url);
};

export const getPokemonImageSrc = (id: string): string => {
    const url = replaceID(process.env.SERVER_GET_POKEMON_IMAGE!, id);

    return new URL(url, serverURL).toString();
};

export const getPokemons = async (page: number): PokemonsResponse => {
    const url = replacePage(process.env.SERVER_GET_POKEMONS!, page);

    return http.get(url);
};

export const putPokemons = async (pokemon: Pokemon): UndefinedResponse => {
    const url = replaceID(process.env.SERVER_PUT_POKEMON!, pokemon.id);

    return http.put(url, pokemon);
};