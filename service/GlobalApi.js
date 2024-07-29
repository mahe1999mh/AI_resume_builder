import axios from "axios";


const API_KEY=import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient=axios.create({
    baseURL:"https://apis-eta-smoky.vercel.app/api/"
})
// const axiosClient=axios.create({
//     baseURL:import.meta.env.VITE_API_BASE_URL+"/api/",
// })
// const axiosClient=axios.create({
//     baseURL:"https://apis-eta-smoky.vercel.app/api/"
// })

const CreateNewResume=(data)=>axiosClient.post('/user-resumes',data);

const GetUserResumes=(userEmail)=>axiosClient.get(`/user-resumes/${userEmail}`,);

const UpdateResumeDetail=(id,data)=>axiosClient.put(`/user-resumes/${id}`,data)

const GetResumeById=(id)=>axiosClient.get(`/user-resumes/getById/${id}`,)

const DeleteResumeById=(id)=>axiosClient.delete('/user-resumes/'+id)

export default{
    CreateNewResume,
    GetUserResumes,
    UpdateResumeDetail,
    GetResumeById,
    DeleteResumeById
}
