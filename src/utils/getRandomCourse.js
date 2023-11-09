import courses from "../data/data"

const getRandomCourse = take => {
    let shuffled = courses.slice(0)
    for (let i = courses.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled.slice(0, take)
}

export default getRandomCourse
