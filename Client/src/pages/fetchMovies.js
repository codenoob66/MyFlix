

async function getMovies() {
    const response = await fetch("https://localhost:5000")
    const data = await response.json()

    console.log(data)
}
