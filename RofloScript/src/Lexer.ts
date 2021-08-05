import {CompilerToken} from "./Token";
import {compilerTokenTypeList} from "./TokenType";

export default class Lexer {
    code: string;
    pos: number = 0;
    tokenList: CompilerToken[] = [];


    constructor(code: string) {
        this.code = code;
    }

    lexAnalysis(): CompilerToken[] {
        while (this.nextToken()) {
        }
        this.tokenList =  this.tokenList.filter(token => token.type.name !== compilerTokenTypeList.SPACE.name);
        return this.tokenList
    }

    private nextToken(): boolean {
        if (this.pos >= this.code.length) return false

        const compilerTokenTypesValues = Object.values(compilerTokenTypeList)
        for (let i = 0; i < compilerTokenTypesValues.length; i++) {
            const tokenType = compilerTokenTypesValues[i]
            const regex = new RegExp('^' + tokenType.regex)
            const result = this.code.substr(this.pos).match(regex)

            if (result && result[0]) {
                const token = new CompilerToken(tokenType, result[0], this.pos)
                this.pos += result[0].length
                this.tokenList.push(token)
                return true
            }
        }
        throw new Error(`На позиции ${this.pos} произошла ошибка, научись кодить, емае`)
    }
}
