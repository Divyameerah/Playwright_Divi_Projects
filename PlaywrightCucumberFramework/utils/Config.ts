import dotenv from 'dotenv';
dotenv.config({
path:'.env.qa'
});
export const Config={
baseURL:process.env.BASE_URL,
username:process.env.USERNAME,
password:process.env.PASSWORD
}
