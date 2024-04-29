export const AddToLocalStorage = (item: string[]) => {
    let storage = GetLocalStorage();
    storage.push(item);

    localStorage.setItem("StrikeShowdownLS", JSON.stringify(storage))
}

export const GetLocalStorage = () => {
    let storage = localStorage.getItem("StrikeShowdownLS");
    if (storage === null){
        return [];
    }
    return JSON.parse(storage);
}

export const EditLocalStorageUsername = (username: string) => {
    let storage = GetLocalStorage();
    storage[0][1] = username;

    localStorage.setItem("StrikeShowdownLS", JSON.stringify(storage));
}