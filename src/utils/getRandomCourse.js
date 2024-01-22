const getRandomCourse = (courses, take) => {
    if (!courses) return []
    const shuffleArray = arr => arr?.sort(() => Math.random() - 0.5)
    return shuffleArray(courses).slice(0, take)
}

export default getRandomCourse
