const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const fs = require('fs');
const con = require('../config/connect');
const md5 = require('md5');

// Pilih atau Buat Tabel Services
const SELECT = 'SELECT * FROM tema';
const CREATE = 'CREATE TABLE tema ( id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, header LONGTEXT, footer LONGTEXT, logo LONGTEXT, gradient VARCHAR(150), headerText VARCHAR(255), footerText VARCHAR(255), userid VARCHAR(255))';

function SelectOrCreateTable() {

    con.query(SELECT, function (err, result, fields) {
        if (err) {
            con.query(CREATE, function (err, result) {
                if (err) throw err;
            });
        }
    })
}

SelectOrCreateTable();

//JWT Token Extractor
function extractToken(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        return req.query.token;
    }
    return null;
}


// CREATE THEME
router.post('/create', async (req, res, next) => {
    // console.log("GET BODY REQUEST UPLOAD :", req.body);
    const Token = extractToken(req);
    var decoded = jwt.decode(Token, { complete: true });
    const { footer, header, headerText, footerText, logo } = req.body;

    if (!Token) {
        res.status(404).send({ message: "Authorization token is required" })
    } else {
        const userid = decoded.payload.userid;
        con.query(`SELECT userid FROM tema WHERE userid = '${userid}'`,
            function (err, result) {
                if (err) throw err;
                if (result.length !== 0) {
                    updateTema();
                } else {
                    buatTema();
                }
            }
        )

        function buatTema() {
            con.query(`INSERT INTO tema (header, footer, logo, headerText, footerText, userid) VALUES ('${header}', '${footer}', '${logo}', '${headerText}', '${footerText}', '${userid}')`,
                function (error, result) {
                    if (error) throw error;
                    res.status(200).send({
                        message: 'Buat Tema Berhasil!',
                        result,
                        code: 200
                    })
                }
            )
        }

        function updateTema() {
            con.query(`UPDATE tema SET header = '${header}', footer = '${footer}', logo = '${logo}', headerText = '${headerText}', footerText = '${footerText}' WHERE userid = '${userid}'`,
                (error, result) => {
                    if (error) throw error;
                    res.status(200).send({
                        message: 'Update Tema Berhasil!',
                        result,
                        code: 200
                    })
                }
            )
        }
    }

})

router.post('/data', async (req, res, next) => {
    const Token = extractToken(req);
    const decoded = jwt.decode(Token, { complete: true });

    if (!Token) {
        res.status(203).send({
            message: 'Authorization is required!',
            code: 203,
        })
    } else {
        const userid = decoded.payload.userid;
        con.query(`SELECT header, footer, logo, headerText, footerText FROM tema WHERE userid = '${userid}'`,
            function (error, result) {
                if (error) throw error;
                if (result.length !== 0) {
                    res.status(200).send({
                        message: 'Data ditampilkan!',
                        result: result[0],
                        code: 200
                    })
                } else {
                    res.status(404).send({
                        message: 'Tidak ditemukan data!',
                        code: 404,
                    })
                }
            }
        )
    }
})

module.exports = router;
