export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    entry: string
    build: string
    html: string
    src: string
}

export interface BuildEnv {
    mode?: BuildMode
    port?: number
    apiUrl: string
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    port: number
    isDev: boolean
    apiUrl: string
    project: 'storybook' | 'jest' | 'frontend'
}
