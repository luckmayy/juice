class User
{
    //private
    #username
    #token
    constructor(username,token)
    {
        this.#username = username;
        this.#token = token;
    };

    getUserName() {
        return this.#username;
    };

    getToken()
    {
        return this.#token;
    };


}