import { Negociacoes } from "../models/negociacoes.js";

export interface Comparavel<T> {
    ehIgual(objeto: T): boolean;
}