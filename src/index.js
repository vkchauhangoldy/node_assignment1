const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName, fileContent)
}
myFileWriter("File.txt", "Hello")

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data = await fs.readFile(fileName, 'utf-8');
	console.log(data)
}
myFileReader("File.txt")
//console.log(process.argv);
const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName, fileContent);
	
}
myFileUpdater("File.txt", " World ");

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName);	
}
//myFileDeleter("File.txt");
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
