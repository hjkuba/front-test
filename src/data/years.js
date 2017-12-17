const date = new Date();
const year = date.getFullYear();
const years = [];
for(let i = 0; i < 10; i++) {
    years.push(year + i);
}
export default years;