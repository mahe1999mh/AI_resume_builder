import { createSlice } from '@reduxjs/toolkit';

// Define the initial state based on your schema
const initialState = {
  resumeId: '',
  title: '',
  userEmail: '',
  userName: '',
  summary:"",
  personal: {
    firstName: '',
    lastName: '',
    jobTitle: '',
    address: '',
    phone: '',
    email: '',
    themeColor: '#000000',
    summary: '',
    isExperience: false,
    github: '',
    linkedin: '',
  },
  projects: [],
  experience: [],
  education: [],
  skills: [],
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setResumeId(state, action) {
      state.resumeId = action.payload;
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
    setUserEmail(state, action) {
      state.userEmail = action.payload;
    },
    setUserName(state, action) {
      state.userName = action.payload;
    },
    setSummaryData(state,action){
        state.summary = action.payload;
    },
    // Personal Detail reducers
    updatePersonalDetail(state, action) {
      state.personal = { ...state.personal, ...action.payload };
    },
    // Projects reducers
    addProject(state, action) {
      state.projects.push(action.payload);
    },
    removeProject(state, action) {
      state.projects = state.projects.filter(project => project.id !== action.payload);
    },
    // Experience reducers
    addExperience(state, action) {
      state.experience.push(action.payload);
    },
    removeExperience(state, action) {
      state.experience = state.experience.filter(exp => exp.id !== action.payload);
    },
    // Education reducers
    addEducation(state, action) {
      state.education.push(action.payload);
    },
    removeEducation(state, action) {
      state.education = state.education.filter(edu => edu.id !== action.payload);
    },
    // Skills reducers
    addSkill(state, action) {
      state.skills.push(action.payload);
    },
    removeSkill(state, action) {
      state.skills = state.skills.filter(skill => skill.id !== action.payload);
    },
  },
});

// Export actions
export const {
  setResumeId,
  setTitle,
  setUserEmail,
  setUserName,
  setSummaryData,
  updatePersonalDetail,
  addProject,
  removeProject,
  addExperience,
  removeExperience,
  addEducation,
  removeEducation,
  addSkill,
  removeSkill,
} = resumeSlice.actions;

// Export the reducer
export default resumeSlice.reducer;
