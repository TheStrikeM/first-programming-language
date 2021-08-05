import CompilerTokenType from "./TokenType";

export class CompilerToken {
    type: CompilerTokenType;
    text: string;
    pos: number;


    constructor(type: CompilerTokenType, text: string, pos: number) {
        this.type = type;
        this.text = text;
        this.pos = pos;
    }
}
