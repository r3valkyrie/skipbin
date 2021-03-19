export interface Wrapper {
    port: number,
    hostname: string,
    exp: express.Application,
    title: string
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
    author: User | undefined
    date: number
    expire: number
    encrypted: boolean
    title: string
    description: string
    files: [PasteFile]
}