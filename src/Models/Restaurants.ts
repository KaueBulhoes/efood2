class Restaurants {
    id: number
    title: string
    description: string
    rate: number
    image: string
    type: string
    isFeatured?: boolean

    constructor(
        id: number,
        title: string,
        description: string,
        rate: number,
        image: string,
        type: string,
    ) {
        this.id = id
        this.title = title
        this.description = description
        this.rate = rate
        this.image = image
        this.type = type
    }
}

export default Restaurants
