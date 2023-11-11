import axios from "axios";

const BASE_URL = "http://84.241.11.4:6060/api";

const request = axios.create({
  baseURL: BASE_URL,
});

export const getNewPrograms = () =>
  request.get("/Programs/GetNews", { crossdomain: true }, );

  export const getLastProgramsService = (ProgramType) =>
request.get("/Programs/GetLast", {
  params: {
    ProgramType
  },
}, { crossdomain: true },);



export const register = (data) =>
  request.post("/Account/Register", data, 
   { crossdomain: true });


export const getListCityService = (provinceId) =>
  request.get(`/CitiesList/${provinceId}`);

  export const getProgramsServiceById = (id) =>
  request.get(`/Programs/${id}`);
 

  export const getProgramsGetLastByProgramType = (ProgramType) =>
  request.get(`/Programs/GetLast/${ProgramType}`);

export const setBranchFilesService = (data) =>
  request.post("/BranchFiles/Create", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const deleteBranchService = (id) =>
  request.delete(`/BranchEstablishRequests/${id}`);

export const VerifiedToExcelBillListBranchesService = (date) => {
  return `http://193.151.128.238/api/v1/ExportExcellBill/VerifiedToExcel?endDate=${date}`;
};

export const getPersonnelListAllParamService = (data) =>
  request.get("/PersonnelList/GetAll", {
    params: data,
  });

export const NewPersonnelService = (data) =>
  request.post("/PersonnelList/Create", data);

export const getAllBranchListSearchFieldService = (searchField) =>
  request.get("/BranchesList/getSearchField", {
    params: {
      searchField,
    },
  });

export const primaryRegistrationService = (userId, data) =>
  request.put(`/Login/Update`, data, {
    params: {
      userId,
    },
  });

export const DownloadFileEptImage = (id) => {
  return `http://193.151.128.238/api/v1/BranchFiles/DownloadFile?id=${id}`;
};

//login

export const createCheckOtpAndSetPassService = (data) =>
  request.put("/Login/checkOtpandSetPass", data);

export default request;
