import { Player, DetailedPokemon } from './interfaces';
import { MongoClient } from "mongodb";
import "dotenv/config";
import { cwd, exit } from "process";


let localPlayers: Player[] = [];
let genOne: DetailedPokemon[] = [];
//const uri:string = "mongodb+srv://Yazan:Yazanmax1@cluster0.oaon2vd.mongodb.net/WebOntwikkeling?retryWrites=true&w=majority"

const mongodbUsername = process.env.Mongodb_USERNAME;
const mongodbPassword = process.env.Mongodb_PASSWORD;
const mongodbDatabase = process.env.Mongodb_DATABASE;
const uri:string = `mongodb+srv://${mongodbUsername}:${mongodbPassword}@${mongodbDatabase}.oaon2vd.mongodb.net/WebOntwikkeling?retryWrites=true&w=majority`;

if (!mongodbUsername || !mongodbPassword || !mongodbDatabase) {
    console.log("iets ontbreekt")
    exit(1)
} 



let client = new MongoClient(uri);

export function getClient() {
    return client;
}

export function setClient(newClient: MongoClient) {
    client = newClient;
}

export function getPlayers(): Player[] {
    return localPlayers;
}

export function setPlayers(players: Player[]) {
    localPlayers = players;
}

export function getPokemon(): DetailedPokemon[] {
    return genOne;
}

export function setPokemon(pokemon: DetailedPokemon[]) {
    genOne = pokemon.sort((a, b) => a.id - b.id);
}

// export { client };