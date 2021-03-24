let store = {
    _state: {
        users: [
            {
                id: 0,
                name: `Dennis Han`,
                avatar: "assets/images/avatars/avatar-2.jpg",
                isOnline: true,
            },
            {
                id: 1,
                name: `Alex Dolgove`,
                avatar: "assets/images/avatars/avatar-7.jpg",
                isOnline: false,
            },
            {
                id: 2,
                name: `Marcin Kowalski`,
                avatar: "assets/images/avatars/avatar-4.jpg",
                isOnline: false,
            },
            {
                id: 3,
                name: `John White`,
                avatar: "assets/images/avatars/avatar-3.jpg",
                isOnline: true,
            }
        ],
        friends: [
            {
                id: 1,
                name: `Alex Dolgove`,
                avatar: "assets/images/avatars/avatar-7.jpg",
                isOnline: false,
            },
            {
                id: 2,
                name: `Marcin Kowalski`,
                avatar: "assets/images/avatars/avatar-4.jpg",
                isOnline: false,
            },
            {
                id: 3,
                name: `John White`,
                avatar: "assets/images/avatars/avatar-3.jpg",
                isOnline: true,
            }

        ],
        chats: [
            {
                id: 0,
                texts: [
                    {
                        id: 0,
                        text: "How likely are you to recommend our company to your friends and family?",
                        isMe: true,
                    },
                    {
                        id: 3,
                        text: "Ok, Understood! 😉",
                        isMe: false,
                    },
                    {
                        id: 0,
                        text: "Hey there, we’re just writing to let you know 👍",
                        isMe: true,
                    },
                    {
                        id: 0,
                        text: "I just wanted to let you know You’ll receive notifications for all issues, pull requests!.",
                        isMe: true,
                    }

                ]
            },
            {
                id: 1,
                texts: [
                    {
                        id: 0,
                        text: "How likely are you to recommend our company to your friends and family?",
                        isMe: true,
                    },
                    {
                        id: 1,
                        text: "Ok, Understood! 😉",
                        isMe: false,
                    },
                    {
                        id: 1,
                        text: "Hey there, we’re just writing to let you know 👍",
                        isMe: false,
                    },
                    {
                        id: 0,
                        text: "I just wanted to let you know You’ll receive notifications for all issues, pull requests!.",
                        isMe: true,
                    }

                ]

            },
            {
                id: 2,
                texts: [
                    {
                        id: 0,
                        text: "How likely are you to recommend our company to your friends and family?",
                        isMe: true,
                    },
                    {
                        id: 2,
                        text: "Ok, Understood! 😉",
                        isMe: false,
                    },
                    {
                        id: 2,
                        text: "Hey there, we’re just writing to let you know 👍",
                        isMe: false,
                    },
                    {
                        id: 0,
                        text: "I just wanted to let you know You’ll receive notifications for all issues, pull requests!.",
                        isMe: true,
                    }

                ]

            },
            {
                id: 3,
                texts: [
                    {
                        id: 0,
                        text: "How likely are you to recommend our company to your friends and family?",
                        isMe: true,
                    },
                    {
                        id: 3,
                        text: "Ok, Understood! 😉",
                        isMe: false,
                    },
                    {
                        id: 3,
                        text: "Hey there, we’re just writing to let you know 👍",
                        isMe: false,
                    },
                    {
                        id: 0,
                        text: "I just wanted to let you know You’ll receive notifications for all issues, pull requests!.",
                        isMe: true,
                    }

                ]

            },

        ],
        posts: [
            {
                id: 1, message: `Hello! How are you?`, likesCount: 11,
            },
            {
                id: 2, message: `Hello. My first post`, likesCount: 5
            },
            {
                id: 3, message: `Hello. My second post`, likesCount: 100
            }
        ],
        sidebar: {
            navigations: [
                {
                    title: `Profile`,
                    icon: `assets/images/icons/home.png`,
                    url: `/`,
                },
                {
                    title: `Message`,
                    icon: `assets/images/icons/chat.png`,
                    url: `/dialogs/0`,
                },
                {
                    title: `News`,
                    icon: `assets/images/icons/flag.png`,
                    url: `/news`,
                },
                {
                    title: `Music`,
                    icon: `assets/images/icons/video.png`,
                    url: `/music`,
                },
                {
                    title: `Settings`,
                    icon: `assets/images/icons/group.png`,
                    url: `/settings`,
                },
            ],
        },
        updatePost: '',
    },
    getState() {
        return this._state
    },
    _renderedEntireTree() {
        console.log('State change')
    },
    addPost() {
        const message = {
            id: this._state.posts.length + 1,
            message: this._state.updatePost,
            likeCount: 0
        }
        this._state.posts.push(message)
        this._state.updatePost=''
        this._renderedEntireTree(this._state)
    },

    updateNewPostText(newText) {
       this._state.updatePost= newText;
        this._renderedEntireTree(this._state)
    },

    subscribe(observer) {
        this._renderedEntireTree = observer
    }
}


export default store
window.store = store
