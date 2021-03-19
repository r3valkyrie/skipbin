export interface SkipbinApp {
    port: number,
    hostname: string,
    exp: express.Application
}

export interface User {
    name: string,
    id: string,
}

export interface PasteFile {
    title: string,
    content: string,
}

export interface Paste {
    author: User
    date: Date
    encrypted: boolean
    title: string
    description: string
    files: [PasteFile]
}