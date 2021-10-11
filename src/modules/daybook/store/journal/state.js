
export default  () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odio, molestias veritatis, perspiciatis voluptas quidem non vel perferendis fuga cumque iusto quibusdam sunt, quos nesciunt at quam nostrum accusantium quas',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Inventore odio, molestias veritatis, perspiciatis voluptas quidem non vel perferendis fuga cumque iusto quibusdam sunt, quos nesciunt at quam nostrum accusantium quas',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'molestias veritatis, perspiciatis voluptas quidem non vel perferendis fuga cumque iusto quibusdam sunt, quos nesciunt at quam nostrum accusantium quas',
            picture: null,
        },
    ]
})