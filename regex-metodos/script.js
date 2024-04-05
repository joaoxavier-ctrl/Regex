/*const regex = /\w+/gi;

const regexp1 = new RegExp('\\w', 'gi');
*/

const regexp = /Java/g; 

const frase = 'Javascript e Java Linguagem 101';

let i = 0;
while(regexp.test(frase)){
    console.log(i++, regexp.lastIndex);
}

const tags = `
<ul>
    <li>item1</li>
    <li>item2</li>
</ul>
`;

const regexp1 = /<li/g;

const resultado = tags.replace(regexp1, '$& class="ativa"');
console.log(resultado);

const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

emails.replace(/(\w+@)[\w.]+/g, '$1gmail.com');
// empresa@gmail.com
// contato@gmail.com
// suporte@gmail.com


const regexp3 = /(\w+)(@[\w]+)/g;
const emails2 = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br`

emails2.replace(regexp, function(...args) {
  console.log(args);
  if(args[2] === '@homail') {
    return `${args[1]}@hotmail`;
  } else if(args[2] === '@ggmail') {
    return `${args[1]}@gmail`;
  } else if(args[2] === '@oulook') {
    return `${args[1]}@outlook`;
  } else {
    return 'x';
  }
});

// joao@hotmail.com.br
// marta@gmail.com.br
// bruna@outlook.com.br



