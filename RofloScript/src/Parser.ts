import {CompilerToken} from "./Token";

export default class Parser {
    tokens: CompilerToken[]
    pos: number = 0
    scope: any = {}


    constructor(tokens: CompilerToken[]) {
        this.tokens = tokens;
    }

    match() {

    }

    required() {

    }
}
