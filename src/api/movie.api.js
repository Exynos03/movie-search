import axios from "axios"


export const getMovieDetailsByTitle = async (title) => {
    try {
        const res = await axios.get(`https://www.omdbapi.com/?t=${title}&apikey=b8c1cbfe`)

        if(res.data.Response === "True") return res.data
        else {
            alert(res?.Error)
        }
    } catch (err) {
        console.log(err)
        alert("Something went wrong. Please try again.")
    }
}

export const getMovieSearchDetailsByChar = async (searchParam, pageNum) => {

    try {
        const res = await axios.get(`https://www.omdbapi.com/?s=${searchParam}&apikey=b8c1cbfe&page=${pageNum+1}`)
        if(res.data.Response === "True") return res.data
        else {
            alert(`${res?.data.Error}. Add some more characters to search`)
        }
    } catch (err) {
        console.log(err)
        alert("Something went wrong. Please try again.")
    }
}