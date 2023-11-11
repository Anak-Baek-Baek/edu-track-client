import courses from "../data/data"

const getRandomCourse = take => {
    const shuffleArray = arr => arr.sort(() => Math.random() - 0.5)
    return shuffleArray(courses).slice(0, take)
}

export default getRandomCourse
