export const setFilterParams = (params: any) => {
    let stringParams: string = "";
    let paramsFields = Object.keys(params);
    let firstParam = true;
  
    for(let i = 0; i < paramsFields.length; i++) {
      let paramValue = params[paramsFields[i]];
      if(!(paramValue === undefined || paramValue === "" || paramValue === null)) {
        stringParams += `${firstParam? "?" : "&"}${paramsFields[i]}=${params[paramsFields[i]]}`;
        if(firstParam === true){
          firstParam = false;
        }
      }
    }
  
    return stringParams;
  };
  