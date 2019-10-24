import axios from 'axios'

export default axios.create({
    baseURL: 'https://bdg-mongoose.herokuapp.com'
})