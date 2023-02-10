const Url = require("../database/module/URI")

exports.createUrlQueary = async (req) => {
    const { userid, originalurl } = req.body;
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
        const allurl = await Url.find()
        let newshorty = makeid(5)
        allurl.map((el) => {
            if(newshorty == el.shorturl){
                newshorty = makeid(5)
                shalgah()
            }
        });
        const shalgah = () => {
            allurl.map((el) => {
                if(newshorty == el.shorturl){
                    newshorty = makeid(5)
                }
            });
        }
        
    await new Url({ userid: userid, originalurl: originalurl, shorturl: newshorty }).save();
    return newshorty
}
exports.getidUrlQueary = async (req) => {
    const { id } = req.params;
    const get = await Url.find()
    let heh
    get.map((el) => {
        if(el.shorturl == id){
            heh = el.originalurl
        }
    })
    return heh
    
}
exports.historyUrlQueary = async (req) => {
    const { userid } = req.params;
    const get = await Url.find()
    let heh = []
    get.map((el) => {
        if(el.userid == userid){
            heh.push(el)
        }
    })
    return heh
    
}