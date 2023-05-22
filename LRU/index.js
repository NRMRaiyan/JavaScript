const user1 = {
    data: {
        username: "user 1",
        password: "password1",
    },

    next: user2,
}

const user2 ={
    data: {
        username: "user 2",
        password: "password2",
    },

    next: user3,
}

const user3 ={
    data: {
        username: "user 3",
        password: "password3",
    },

    next: null,
}

const LRU = {
    maxCapacity: 3,
    oldest: user3,
}