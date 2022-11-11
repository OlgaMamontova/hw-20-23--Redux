import { ADD_POST } from "./types";
import { randomNumber } from "../constans";
import image1 from "../assets/image1.jpg"
const startPosts = [
    {
        content: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
        authorName: 'Anakin Skywalker',
        image: image1,
        date: new Date().toLocaleString(),
        comments: randomNumber(),
        likes: randomNumber(),
        shares: randomNumber(),
    },
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        authorName: 'Han Solo',
        image: image1,
        date: new Date().toLocaleString(),
        comments: randomNumber(),
        likes: randomNumber(),
        shares: randomNumber(),
    },
]

export const posts = (state = startPosts, action) => {
    switch (action.type) {
        case ADD_POST:
            return [action.payload, ...state]
    }
    return state;
}