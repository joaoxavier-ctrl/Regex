// Procura: a
var padraoRegexp = /a/;

var texto = 'JavaScript';
var novoTexto = texto.replace(padraoRegexp, 'B');
// JBvaScript

// Procura: J seguido de a, v e a
var regexp = /Java/;

'JavaScript'.replace(regexp, 'Type');
// TypeScript

// Procura: Todo a
var regexp = /a/g;

'JavaScript'.replace(regexp, 'i');
// JiviScript

// Procura: Todo PE, Pe, pE e pe
var regexp = /Pe/gi;

'Perdeu perdido'.replace(regexp, 'Ba');
// Bardeu Bardido

// Procura: Todo a, A, i, I
var regexp = /[ai]/gi;

'JavaScript'.replace(regexp, 'u');
// JuvuScrupt

// Procura: - ou .
var regexp = /[-.]/g;

'111.222-333-44'.replace(regexp, '');
// 11122233344

// Procura: B, seguido de r, a
// seguido de s ou z, seguido de i, l
var regexp = /Bra[sz]il/g;

'Brasil é com z: Brazil'.replace(regexp, 'Prazer');
// Prazer é com z: Prazer

// Busca por itens de a à z
var regexp = /[a-z]/g;

'JavaScript é a linguagem.'.replace(regexp, '0');
// J000S00000 é 0 000000000.

// Busca por itens de a à z e A à Z
var regexp = /[a-zA-Z]/g;

'JavaScript é a linguagem.'.replace(regexp, '1');
// 1111111111 é 1 111111111.

// Busca por números de 0 à 9
var regexpNumero = /[0-9]/g;

'123.333.333-33'.replace(regexpNumero, 'X');
// XXX.XXX.XXX-XX

// Procura: tudo que não estiver entre a e z
var regexp = /[^a-z]/g;

'Brasil é com z: Brazil'.replace(regexp, ' ');
// rasil   com z   razil 

var regexpDigito = /\B\d+\B/gi;

'11_22 33-44 55é66 77e88'.replace(regexpDigito, 'X');
// 1X_X2 33-44 55é66 7XeX8

// Procura: sequência de alfanuméricos
// no início da linha.
var regexp = /^\w+/g;

`andre@origamid.com
contato@origamid.com`.replace(regexp, 'X');
// X@origamid.com
// contato@origamid.com

// Procura: sequência de alfanuméricos
// no final da linha.
var regexp = /\w+$/g;

`andre@origamid.com
contato@origamid.com`.replace(regexp, 'X');
// andre@origamid.com
// contato@origamid.X

// Procura: sequência de alfanuméricos
// no final da linha.
var regexp = /\w+$/gm;

`andre@origamid.com
contato@origamid.com`.replace(regexp, 'X');
// andre@origamid.X
// contato@origamid.X

// Procura: sequência de alfanuméricos
// no início da linha.
var regexp = /^\w+/gm;

`andre@origamid.com
contato@origamid.com`.replace(regexp, 'X');
// X@origamid.com
// X@origamid.com

var regexp = /\n/g;

`andre@origamid.com\ncontato@origamid.com`.replace(regexp, '---');
// andre@origamid.com---contato@origamid.com

`andre@origamid.com
contato@origamid.com`.replace(regexp, 'X');
// andre@origamid.com---contato@origamid.com

// Procura: @ ou ©
var regexp = /\u0040|\u00A9/g;

'andre@origamid.com ©'.replace(regexp, '---');
// andre---origamid.com ---

