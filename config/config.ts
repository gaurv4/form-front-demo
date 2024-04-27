const config = {
    SERVER: process.env.NEXT_PUBLIC_SERVER
}

const env = {
    get(ENV:any) {
        const env = config[ENV]
        if (env) {
            return env
        }
    }
}

export default env
