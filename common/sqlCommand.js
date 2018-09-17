// user_status 单一的user_status表SQL-Command
let user_status = {
    insertOne: 'INSET INTO user_status (username,password,qrcode) VALUES(?,?,?)'
}
module.exports = {
    user_status: user_status
}