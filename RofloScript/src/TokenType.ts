export default class CompilerTokenType {
    name: string;
    regex: string;


    constructor(name: string, regex: string) {
        this.name = name;
        this.regex = regex;
    }
}

export const compilerTokenTypeList = {
    'NUMBER': new CompilerTokenType('NUMBER', '[0-9]*'),
    'VARIABLE': new CompilerTokenType('VARIABLE', '[а-я]*'),
    'SEMICOLON': new CompilerTokenType('SEMICOLON', ';'),
    'SPACE': new CompilerTokenType('SPACE', '[ \\n\\t\\r]'),
    'ASSIGN': new CompilerTokenType('ASSIGN', 'РАВНО'),
    'LOG': new CompilerTokenType('LOG', 'КОНСОЛЬ'),
    'PLUS': new CompilerTokenType('PLUS', 'ПЛЮС'),
    'MINUS': new CompilerTokenType('MINUS', 'МИНУС'),
    'LPAR': new CompilerTokenType('LPAR', '\\('),
    'RPAR': new CompilerTokenType('RPAR', '\\)'),
}
