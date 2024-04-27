const config = {
    SERVER: process.env.NEXT_PUBLIC_SERVER
}

const env = {
    get(ENV) {
        const env = config[ENV]
        if (env) {
            return env
        }
    }
}

export default env
