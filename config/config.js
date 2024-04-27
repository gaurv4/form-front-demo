const config = {
    SERVER: process.env.SERVER
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
