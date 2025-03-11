class Restaurants {
    id: number
    title: string
    description: string
    rate: number
    image: string

    constructor(
        id: number,
        title: string,
        description: string,
        rate: number,
        image: string,
    ) {
        this.id = id
        this.title = title
        this.description = description
        this.rate = rate
        this.image = image
    }
}

export default Restaurants
