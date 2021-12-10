export interface IEmail {
    to: string;
    sender: string;
    message: string;
    subject: string;
    attach: Express.Multer.File;
}

