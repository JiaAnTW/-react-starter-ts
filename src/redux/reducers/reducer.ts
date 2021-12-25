interface IndexStore {
    data: Array<unknown>;
}

const initState = {
    data: [],
};

export default function reducer(state: IndexStore = initState): IndexStore {
    return state;
}
