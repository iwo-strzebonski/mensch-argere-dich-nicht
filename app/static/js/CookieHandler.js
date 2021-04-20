/**
 * Cookie Handler
 */
export class CookieHandler {
    /** 
     * Returns SID (Session ID)
     * @return {String} SID received from the "session" cookie in String format
     */
    static getSID() {
        return document.cookie.substr(document.cookie.indexOf('=') + 1)
    }
}