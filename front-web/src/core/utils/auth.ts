export const CLIENT_ID = 'tasklist';
export const CLIENT_SECRET = 'tasklist123';

type LoginResponse = {
    access_token: string;
    token_type: string,
    expires_in: number,
    scope: string,
    userFirstName: string,
    userId:  number;

}

export const saveSessionData = (loginResponse: LoginResponse) => {
    localStorage.setItem('authData', JSON.stringify(loginResponse));
} 

export const getSessionData = () => {
    const sessionData = localStorage.getItem('authData')  ?? '{}';
    const parsedSessionData = JSON.parse(sessionData);

    return parsedSessionData as LoginResponse;
}