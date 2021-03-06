import { AxiosResponse } from "axios";

import { Pokemon } from "@/config/Pokemons/Pokemons.types";

export type PokemonResponse = Promise<AxiosResponse<Pokemon>>;
export type PokemonsResponse = Promise<AxiosResponse<Pokemon[]>>;
export type UndefinedResponse = Promise<AxiosResponse<undefined>>;
