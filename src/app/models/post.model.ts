export class Post {
    creaDate: number;
    loveIts: number;

    constructor(public title: string, public content: string) {
        this.loveIts = 0;
        this.creaDate = Date.now();
    }
}
