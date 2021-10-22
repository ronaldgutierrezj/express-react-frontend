const express = require('express');
const app = express()

app.get('/test1',(req, res)=>{
    res.send(`
    <html>
        <body>
        <h1>Garbage Pail Kids</h1>
        <img src="https://upload.wikimedia.org/wikipedia/en/4/43/GPK_8a_adambomb.jpg">
        <br>
        <br>
        <p>Garbage Pail Kids is a series of sticker trading cards produced by the Topps Company, originally released in 1985 and designed to parody the Cabbage Patch Kids dolls, which were popular at the time.<br>
        <br>

        Each sticker card features a Garbage Pail Kid character having some comical abnormality, deformity, and/or suffering a terrible painful fate/death with a humorous word play character name such as Adam Bomb or Blasted Billy. Two versions of each card were produced, with variations featuring the same artwork but a different character name, denoted by an "a" or "b" letter after the card number. The sticker fronts are die-cut so that just the character with its nameplate and the GPK logo can be peeled from the backing. Many of the card backs feature puzzle pieces that form giant murals, while other flip-side subjects vary greatly among the various series, from humorous licenses and awards to comic strips and, in more recent releases, humorous Facebook profiles.
        <br>
        <br>
        15 original series (OS) of regular trading cards were released in the United States, with various sets released in other countries.(Except North Korea, China, and Iran)Two large-format card editions were also released, as well as a set of fold-out posters. All-New Series (ANS) sets were introduced in 2003, Flashback re-releases began in 2010 and a Brand-New Series (BNS) was announced for 2012[2] with Brand New Series 2, Chrome S1, and BNS3 following in 2013. A new format was released in 2014 using the year to designate the edition, followed by the release name of Series 1, which had an Olympics-style format. In 2016, the format was changed again to themed sets that spoofed different pop culture topics.
        </p>
        </body>
    </html>`)
})

app.listen(3000, ()=>{
    console.log("Im listening")
})