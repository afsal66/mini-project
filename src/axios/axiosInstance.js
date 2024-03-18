import axios  from 'axios';

const userinstance =axios.create({
    baseURL:"http://localhost:8000/"
})

const admininstance=axios.create({
    baseURL:"http://localhost:8000/admin",
})

export {userinstance,admininstance}