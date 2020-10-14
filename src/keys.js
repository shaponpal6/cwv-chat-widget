const host = global.location.href;
var baseurl= host.replace(new RegExp("(.*/)[^/]+$"),"$1");
var githubApi = "https://raw.githubusercontent.com/shaponpal6/single-page-portfolio-app-using-webpack/master/";


export const keys = {
    apiUrl: githubApi,
    apiUrl2: process.env.API_URL
}