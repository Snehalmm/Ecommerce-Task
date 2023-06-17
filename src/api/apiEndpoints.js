const baseURL = 'https://elredtest.s3.amazonaws.com/reactAssignment';

const paths = {
  categories: baseURL + '/getCategories.json',
  subcategories: baseURL + '/getSubCategory_',
  products: baseURL + '/getProduct_',
//   legalcases: baseURL + '/legalcases',
//   newsList: baseURL + "/web/news/landingpage"
};

const getAPiEndpoint = (apiName, query = '') => {
  let apiPath = paths[apiName];
  return apiPath + query;
};

const getEndpoint = (apiName, pathVars) => {
  const apiPath = paths[apiName];
  const joinParams = pathVars.map((item) => {
    return `${item.pathName}=${item.pathValue}`;
  });

  return `${apiPath}?${joinParams.join('&')}`;
};



const getCommonEndpoint = (apiName, symbol) => {
  return getEndpoint(apiName, [{ pathName: 'symbol', pathValue: symbol }]);
};

const geMarketEndpoint = (apiName, detailed, pageNo, pageSize, jsonArray) => {
  return getEndpoint(apiName, [
    { pathName: 'detailed', pathValue: detailed },
    { pathName: 'pageNo', pathValue: pageNo },
    { pathName: 'pageSize', pathValue: pageSize },
    { pathName: 'jsonArray', pathValue: jsonArray },
  ]);
};

export {
  geMarketEndpoint, getAPiEndpoint,  getCommonEndpoint, getEndpoint, 
};

