import { uvaApi } from '@/api/index'
import axios from 'axios'

const fetchData = async (id) => {
  const response = await uvaApi.get(`/users/${id}`)
  const data = await response.data.user
  return data
}

const getUser = async (id) => {
  const user = await fetchData(id)
  const adminProjectsData = user.adminProjects.map((project) =>
    uvaApi.get(`/projects/${project}`)
  )

  const collaboratorProjectsData = user.collaboratorProjects.map((project) =>
    uvaApi.get(`/projects/${project}`)
  )

  const adminProjects = await axios.all(adminProjectsData)
  const collaboratorProjects = await axios.all(collaboratorProjectsData)

  const adminProjectsData2 = adminProjects.map(
    (project) => project.data.project
  )

  const collaboratorProjectsData2 = collaboratorProjects.map(
    (project) => project.data.project
  )

  return {
    ...user,
    adminProjects: adminProjectsData2,
    collaboratorProjects: collaboratorProjectsData2,
  }
}

export default getUser
