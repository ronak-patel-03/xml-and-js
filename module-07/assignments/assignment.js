data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
    ];

const ages = data.map(({ born, died }) => died - born);

const filtered = ages.filter((age) => age > 75);

const oldest = filtered.reduce((acc, age) => {
	if (age > acc) 
		acc = age;
	return acc;
}, 0);

console.log("Added age :", ages);
console.log('Filtered age :', filtered);
console.log('oldest age :', oldest);


const age = data
	.map(({ born, died }) => died - born)
	.filter((age)=> age > 75)
	.reduce((age, tmp) => {
		if (age > tmp) {
			tmp = age;
		}
		return tmp;
	}, 0);

console.log("use chaining : ",age)