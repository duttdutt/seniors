// 1
async function loadJson(url) {
    let response = await fetch(url)

    if (response.status == 200) {
        return await response.json()
    }

    throw new Error(response.status)
}

loadJson('https://javascript.info/no-such-user.json').catch(alert)

// 2
class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`)
        this.name = 'HttpError'
        this.response = response
    }
}

async function loadJson(url) {
    let response = await fetch(url)
    if (response.status == 200) {
        return response.json()
    } else {
        throw new HttpError(response)
    }
}

async function demoGithubUser() {
    let user
    while (true) {
        let name = prompt('Enter a name?', 'iliakan')

        try {
            user = await loadJson(`https://api.github.com/users/${name}`)
            break
        } catch (err) {
            if (err instanceof HttpError) {
                console.log('ERROR!!!!')
            } else {
                throw err
            }
        }
    }

    return user
}

demoGithubUser()
