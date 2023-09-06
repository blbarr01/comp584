const {createReadStream} = require('fs')

async function readFromFile(filename) {
  const stream = createReadStream(filename, { encoding: 'utf8' });
  let data = '';

  for await (const chunk of stream) {
    data += chunk;
  }

  return data;
}


async function printStream(){
    const data = await readFromFile('test.txt')
    console.log(data);
}


printStream()