const lista = ["Um", "Dois", "Tres"];

export function getLista(){
    return lista;
}

export function limparLista(){
    lista.splice(0, 3);
}